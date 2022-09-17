// const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
