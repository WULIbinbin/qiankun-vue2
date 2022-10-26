import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/sub-dashboard-2",
    component: () => import("../views/home.vue"),
    children: [
      {
        path: "/sub-dashboard-2",
        component: () => import("../views/dashboard.vue"),
      },
      { path: "/sub-other-2", component: () => import("../views/other.vue") },
    ],
  },
];


export default new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "/sub-app2/" : "/",
  mode: "history",
  routes,
});