import paralib from "para-lib";
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";

NProgress.configure({showSpinner: false});

const axios = paralib.http.axios;
// 请求超时时限 我设置3秒
// axios.defaults.timeout = 3000;

// 请求次数
axios.defaults.retry = 0;

// 请求的间隙
axios.defaults.retryDelay = 1000;
axios.interceptors.request.use(config => {
  NProgress.start();
  /* 可以进行token校验 */
  /* if (token) {
    config.headers.authorization = token;
    return config;
  } */
  // config.headers.ContentType = "application/json;charset=UTF-8"
  return config;
}, error => {
  NProgress.done();
  return Promise.reject(error);
});

/* 添加响应拦截器 */
axios.interceptors.response.use((response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    // 请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
    if (error.code === "ECONNABORTED" && error.message.indexOf("timeout") !== -1) {
      const config = error.config;
      config.__retryCount = config.__retryCount || 0;

      if (config.__retryCount >= config.retry) {
        NProgress.done();
        return Promise.reject(error);
      }
      config.__retryCount += 1;
      const backoff = new Promise(((resolve) => {
        setTimeout(() => {
          resolve();
        }, config.retryDelay || 1);
      }));
      NProgress.done();
      return backoff.then(() => axios(config));
    }
    NProgress.done();
    return Promise.reject(error);
  });
export default axios;
