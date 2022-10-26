import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
// import { registerMicroApps, start } from "qiankun";
// import { appList } from "./microApp";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// registerMicroApps(appList);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    // setTimeout(()=>{
    //   start({
    //     prefetch:'all'
    //   });
    // },200)
  },
}).$mount("#app");
