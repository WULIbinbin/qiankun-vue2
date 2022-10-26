import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("../views/home.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("../views/dashboard.vue"),
        children: [],
      },
      {
        path: "/sub-app1",
        component: () => import("../views/sub-app1.vue"),
        children: [
          {
            path: "/sub-app1/sub-dashboard-1",
          },
          {
            path: "/sub-app1/sub-other-1",
          },
        ],
      },
      {
        path: "/sub-app2",
        component: () => import("../views/sub-app2.vue"),
        children: [
          {
            path: "/sub-app2/sub-dashboard-2",
          },
          {
            path: "/sub-app2/sub-other-2",
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
