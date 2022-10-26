<template>
  <div class="sub-container">
    我是子应用1
    <hr />
    <p>主应用给子应用传参</p>
    <input type="text" @input="mainInput" placeholder="输入"/>
    <hr />
    <!-- 这里用ref挂载子应用，绑了id就不用 -->
    <div id="sub-app1" class="sub-app" :ref="subApp1"></div>
  </div>
</template>
<script>
import appList from "../microApp";
import { loadMicroApp, initGlobalState } from "qiankun";
export default {
  data() {
    return {
      subApp1: null,
      subApp2: null,
      actions1: null,
      subInput1: "",
    };
  },
  methods:{
    mainInput(e){
      this.actions1.setGlobalState({ input: e.target.value });
    }
  },
  // loadMicroApp用法
  mounted() {
    console.log("mounted...");
    this.subApp1 = loadMicroApp({
      ...appList["sub-app1"],
      props: {
        data: "2333",
      },
    }).mountPromise.then((res) => {
      console.log(res);
      this.actions1 = initGlobalState({ input: "" });
      console.log(this.actions);
    });
  },
  destroyed() {
    console.log("destroy...");
    this.subApp1.unmount();
    this.subApp2.unmount();
  },
};
</script>
<style lang="scss" scoped>
</style>