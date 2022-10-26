<template>
  <div>
    <div>我是子应用1的仪表盘</div>
    <p>这是主应用传过来的参数input:</p>
    <p>{{ input }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      input:(state)=>state.input
    }),
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
</style>