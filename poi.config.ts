import * as path from 'path'
import { Config } from 'poi'
import { ProvidePlugin, DefinePlugin } from 'webpack'
const isDev = process.env.NODE_ENV === 'development'
const SOURCE_PATH = !isDev ? '/dist' : ''

const config: Config = {
  entry: 'src/index.tsx',

  output: {
    dir: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        babel: true,
      },
    },
  ],

  chainWebpack(config) {
    config.plugin('ProvidePlugin').use(ProvidePlugin, [
      {
        React: 'react',
        ReactDOM: 'react-dom',
      },
    ])
    //  SOURCE_PATH: JSON.stringify(SOURCE_PATH)
    config.plugin('DefinePlugin').use(DefinePlugin, [
      {
        SOURCE_PATH: JSON.stringify(SOURCE_PATH),
      },
    ])
  },
}

if (isDev) {
  //config.output!.publicUrl = '/dist'
  config.publicFolder = 'source'
} else {
  config.output!.publicUrl = SOURCE_PATH
  config.publicFolder = 'source'
  config.output!.html = {
    filename: path.resolve(__dirname, 'index.html'),
  }
}
export default config
