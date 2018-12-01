const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PreloadWebpackPlugin(),
    ],
  },
}