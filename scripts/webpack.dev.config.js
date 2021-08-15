const { resolve } = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')
config.devtool = ''
module.exports = merge([
  config,
  {
    // ^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
      contentBase: resolve(__dirname, '../'),
      port: '8088',
      compress: true,
      hot: true,
    },
  },
])
