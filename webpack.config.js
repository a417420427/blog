const prodConfig = require('./scripts/webpack.prod.config')
const devConfig = require('./scripts/webpack.dev.config')

const isDev = process.env.NODE_ENV === 'development'

module.exports = isDev ? devConfig : prodConfig
