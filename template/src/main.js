import Vue from "vue";
import App from "./App.vue";
import paraLibPackage from "para-lib";
import axios from "./config/axios.config";
import router from "./router/router";
import i18n from "./locale/locale";
import store from "./store/store";
import API from "./config/api.config";
import "./utils/global";
// import "./router/promission"; // 开启动态路由
import "para-lib/lib/para-lib.css";
/* 全局引入皮肤样式 */
import "./styles/skin/dark-green.scss";
import "./styles/skin/succinct.scss";
/* 全局过滤器 */
import filters from "@/utils/filter";
/*
* @params paraui UI库
* @params intercept 全局拦截器
* @params ca 动画库
* @ripple ripple 水波纹库
* */
Vue.use(paraLibPackage, {
  paraui: true,
  intercept: true,
  ca: true,
  ripple: true,
  form: false,
});
console.log(paraLibPackage);

/* 临时注入$myHost $myPath */
localStorage.setItem("myHost", paraLibPackage.$myHost);
localStorage.setItem("myPath", paraLibPackage.$myPath);

Vue.config.productionTip = false;

/* 绑定全局API */
Vue.prototype.API = API;

/* 全局dom函数库封装 */
Vue.prototype.$http = axios;

/* 存储调试path环境 */
// window.para_default_service_project = "idm";

/* 存储项目path到window */
window.$project = "console";

/* 挂载$PARA到原型链上 */

// Vue.prototype.$PARA = paraLibPackage.$PARA;

function init() {
  /* 绑定过滤器 */
  Object.keys(filters).map(keys => Vue.filter(keys, filters[keys]));
  new Vue({
    store,
    router,
    i18n,
    render: h => h(App),
  }).$mount("#app");
}

/* 调试窗口 */
if (process.env.NODE_ENV === "development") {
  /**
   * @params [] or "",调试地址
   * paraLibPackage.debug([API.debug1,API.debug2], init);
   */
  // paraLibPackage.debug([], init);
  init();
} else {
  paraLibPackage.$getPath().then(() => init());
}
