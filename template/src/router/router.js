import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../views/dashboard";

Vue.use(Router);
/**
 * 示例路由
 * @type {Array}
 */
const constantRouterMap = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "about" */ "../views/home/index.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "../views/about/index.vue"),
      },
    ],
  },
];

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: constantRouterMap,
});
