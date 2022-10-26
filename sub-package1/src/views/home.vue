<template>
  <div class="main-body">
    <NavBar />
    <router-view class="main-content" :key="$route.path"></router-view>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
export default {
  name:'home',
  components:{
    NavBar
  }
}
</script>
<style lang="scss" scoped>
.main{
  &-body{
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  &-main{
    height: 100%;
  }
}
</style>