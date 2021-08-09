import * as path from 'path'
import { Config } from 'poi'
import { ProvidePlugin, DefinePlugin } from 'webpack'
const SOURCE_PATH = '/dist'
const config: Config = {
  entry: 'src/index.tsx',
  publicFolder: 'source',
  output: {
    publicUrl: SOURCE_PATH,
    dir: path.resolve(__dirname, 'dist'),
    clean: false,
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

export default config
