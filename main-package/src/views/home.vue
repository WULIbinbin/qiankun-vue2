<template>
  <div class="main-body">
    <NavBar />
    <div class="main-content">
      <keep-alive>
        <router-view class="main-view"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar,
  },
};
</script>
<style lang="scss" scoped>
.main {
  &-body {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  &-content {
    height: 100vh;
    flex: 1;
    position: relative;
  }
  &-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
  }
}
</style>