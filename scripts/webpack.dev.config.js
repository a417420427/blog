const { resolve } = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')

module.exports = merge([
  config,
  {
    mode: 'development',
    devServer: {
      contentBase: resolve(__dirname, '../'),
      port: '8088',
      compress: true,
      hot: true,
    },
  },
])
