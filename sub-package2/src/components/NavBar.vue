<template>
  <div class="nav-bar">
    <router-link class="nav-bar-item" v-for="(item,index) in navs" :key="index" :to="item.path">
      {{item.name}}
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        {
          path: "/sub-dashboard-2",
          name: "首页",
        },
        {
          path: "/sub-other-2",
          name: "其他",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-bar{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:200px;
  height: 100vh;
  border-right:1px solid #e2e2e2;
  &-item{
    padding:12px 40px;
    width: 100%;
    text-align: left;
  }
}
</style>