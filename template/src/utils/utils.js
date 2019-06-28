import {isNaN}    from "lodash";
import {$paraGET} from "para-lib";
/* 是否时间格式 Date/String */
export const $isDate = (date) => {
  if(date instanceof Date) return true;
  if(typeof date !== "string") return false;
  if(new Date(date).toString() === "Invalid Date") return false;
  return true;
};
/* 格式化时间格式 */
export const $dateFormat = (fmt, date) => {
  if(!date) return "";
  if(typeof date === "string") date = new Date(date);
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    "S": date.getMilliseconds() // 毫秒
  };
  if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (const k in o) if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
/* 时间格式化 value格式化的时间 date是否格式化时间 默认false */
export const $crtTimeFtt = (value, time) => {
  if(value === null || value === undefined) {
    if(time) return ["", ""];
    return "";
  }
  if(typeof value === "string" && !isNaN(Number(value))) value = Number(value);
  const crtTime = new Date(value);
  if(time) return $dateFormat("yyyy-MM-dd|hh:mm:ss", crtTime).split("|");// 直接调用公共JS里面的时间类处理的办法
  return $dateFormat("yyyy-MM-dd", crtTime);
};
/* 获取platform */
export const $getPlatform = (_this, callback, key) => {
  const obj = {
    "propagationActions": {
      type: "PROPAGATION_ACTIONS",
      status: true
    },
    "mappingItemTransformers": {
      type: "ITEM_TRANSFORMER",
      status: true
    },
    "logicActions": {
      type: "LOGIC_ACTIONS",
      status: true
    },
    "pullActions": {
      type: "PULL_ACTIONS",
      status: true
    },
    "pushActions": {
      type: "PUSH_ACTIONS",
      status: true
    },
    "jobDelegate": {
      type: "TASKJOB_DELEGATE",
      status: true
    }
  };
  if (obj[key] && obj[key].status) {
    _this.$paraGET(`${_this.API.IMPLEMENTATIONS}/${obj[key].type}`,
      (data) => {
        const arr = [];
        /* eslint-disable */
        for (const i in data) {
          arr.push(data[i].key);
        }
        callback(arr);
      },
      () => {
        callback(null);
      });
    return;
  }
};
/* 前端页面代码版本号 */
/* type ACCOUNT/PASSWORD/PULL/PUSH */
export const $paraPolicies = (callback, type) => {
  $paraGET(
    "/rest/policies/" + type,
    (data) => {
      callback(data);
    },
    () => {
      callback(null);
    }
  );
};
/* 获取策略 */
export const $paraPoliciesAll = (callback) => {
  const data = {};
  $paraPolicies((ACCOUNT) => {
    data.ACCOUNT = ACCOUNT;
    $paraPolicies((PASSWORD) => {
      data.PASSWORD = PASSWORD;
      $paraPolicies((PULL) => {
        data.PULL = PULL;
        callback(data);
      }, "PULL");
    }, "PASSWORD");
  }, "ACCOUNT");
};
export default {
  $isDate,
  $dateFormat,
  $crtTimeFtt,
  $getPlatform,
  $paraPolicies,
  $paraPoliciesAll
};
