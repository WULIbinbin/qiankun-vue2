const { name } = require("./package.json");

const port = 8801;

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? `//localhost:${port}` : "/",
  outputDir: `dist`,
  devServer: {
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
