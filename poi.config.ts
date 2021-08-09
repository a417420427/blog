import * as path from 'path'
import { Config } from 'poi'
import { ProvidePlugin } from 'webpack'
import { GenerateMenuTreePlugin } from './tools/generateMenu'
const config: Config = {
  entry: 'src/index.tsx',
  publicFolder: path.resolve(__dirname),
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        babel: true,
      },
    },
  ],
  devServer: {},
  chainWebpack(config) {
    config.plugin('ProvidePlugin').use(ProvidePlugin, [
      {
        React: 'react',
        ReactDOM: 'react-dom',
      },
    ])
    config.plugin('GenerateMenuTreePlugin').use(GenerateMenuTreePlugin)
  },
}

export default config
