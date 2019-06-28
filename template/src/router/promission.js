import router from "./router";
import paralib from "para-lib";
import API from "../config/api.config";
import Dashboard from "@/views/index/dashboard";
import Error404 from "@/views/error";
import store from "../store/store";
import Main from "@/components/Layout/main/Main"; // 内容区域
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";

const layoutImport = require("./_import_func");

let getRouter; // 用来获取后台拿到的路由

// function routerGo(to, next) {
//   router.addRoutes(getRouter); // 动态添加路由
//   store.dispatch("generateRoutes", {getRouter}).then(res => {
//     if (res) {
//       NProgress.done();
//       next({...to, replace: true});
//     }
//   });
// }

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   if (!getRouter) { // 不加这个判断，路由会陷入死循环
//     paralib.$paraGET(API.MENU).then(e => {
//       const mapData = paralib.$formatTree(e.data.result, {
//         format: (data) => {
//           let component;
//           if (data.url) {
//             component = data.url.split(".")[0].toLowerCase();
//             component = layoutImport(component);
//             if (!component) component = Error404;
//           }
//
//           data.title = data.name;
//           let pObj;
//           if (data.isParent) {
//             pObj = {
//               "path": (data.isParent ? "/" : "") + data.key,
//               "component": Main,
//               "name": data.name,
//               "meta": data,
//             };
//           } else {
//             pObj = {
//               "path": (data.isParent ? "/" : "") + data.key,
//               "component": component,
//               "name": data.name,
//               "meta": data,
//             };
//           }
//           return pObj;
//         },
//       });
//       mapData.data.unshift({
//         "path": "/",
//         "component": Dashboard,
//         "name": "",
//         "meta": {
//           "name": "menu.dash",
//         },
//       });
//       mapData.data.forEach(res => (res.children && res.children.length > 0 ? res.children.map(value => value.component = Main) : ""));
//       getRouter = mapData.data;
//       routerGo(to, next);// 执行路由跳转方法
//     });
//   } else {
//     NProgress.done();
//     next();
//   }
// });
//
// router.onError((e) => {
//   console.log("路由出错了:", e);
// });
