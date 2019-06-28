module.exports = {
  publicPath: "./",
  /**
   * 输出目录
   */
  // outputDir: "esc-console",
  configureWebpack: {
    /**
     * 是否开启资源地图
     */
    // devtool: "source-map",
    resolve: {
      alias: {
        "vue$": "vue/dist/vue.esm.js",
      },
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    // loaderOptions: {
    //   sass: {
    //     data: `@import "src/styles/mixin.scss";@import "src/styles/variables.scss"`, // 全局引入
    //   },
    // },
  },
  /**
   * 是否启用接口代理
   */
  /*devServer: {
    historyApiFallback: {
      rewrites: [
        {from: /^\/form/, to: "/formDesign.html"},
      ],
    },
    port: "8080",
    proxy: {
      "/getPath": {
        target: "http://192.168.2.181:9999",
        ws: true,
        changeOrigin: true,
      },
    },
  },*/
};
