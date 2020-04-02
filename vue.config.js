const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  }
};
