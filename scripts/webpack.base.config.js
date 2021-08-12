const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { plugins } = require('./babel.config')

const isDev = process.env.NODE_ENV === 'development'
const SOURCE_PATH = isDev ? '/source' : ''
/**
 *  @type {Webpack.Configuration}
 */

const config = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].[id].js',
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.scss'],
    mainFiles: ['index'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|ico|bmp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins,
            },
          },
          {
            loader: 'astroturf/loader',
            options: { extension: '.module.scss' },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/](react|react-.*)[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new Webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html'),
      filename: isDev ? '../index.html' : 'index.html',
    }),
    new Webpack.DefinePlugin({
      SOURCE_PATH: JSON.stringify(SOURCE_PATH),
    }),
  ],
}

module.exports = config
