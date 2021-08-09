import * as path from 'path'
import { Config } from 'poi'
import { ProvidePlugin } from 'webpack'

const config: Config = {
  entry: 'src/index.tsx',
  //publicFolder: path.resolve(__dirname),
  output: {
    html: {
      filename: path.resolve(__dirname, 'index.html'),
    },
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
  },
}

export default config
