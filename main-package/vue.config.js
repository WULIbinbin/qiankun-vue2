module.exports = {
  publicPath: "/",
  css: {
    requireModuleExtension: true,
    loaderOptions: {},
  },
  // 兼容ie9，sockjs相关代码es6转es5
  transpileDependecies: ["sockjs-client", "sockjs"],
};
