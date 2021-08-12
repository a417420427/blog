const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')
const webpack = require('webpack')
module.exports = merge(config, {
  mode: 'production',
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
})
