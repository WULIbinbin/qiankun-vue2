<template>
  <div class="sub-container">
    我是子应用2
    <hr />
    <div id="sub-app2" class="sub-app"></div>
  </div>
</template>
<script>
import appList from "../microApp";
import { loadMicroApp, initGlobalState } from "qiankun";
export default {
  data() {
    return {
      subApp: null,
      actions: null,
    };
  },
  // loadMicroApp用法
  mounted() {
    console.log("mounted...");
    this.subApp = loadMicroApp({
      ...appList["sub-app2"],
      props: {
        data: "66666",
      },
    }).mountPromise.then((res) => {
      console.log(res);
      this.actions = initGlobalState({});
      console.log(this.actions);
    });
    console.log("subApp", this.subApp);
  },
  destroyed() {
    console.log("destroy...");
    this.subApp.unmount();
  },
};
</script>
<style lang="scss" scoped>
</style>