const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = {}
const prdConfig = {}

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[hash:8]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // webpack4`s devtool: 'source-map'
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: 'errors-only', // slience terminal log
  },
  plugins: [
    // auto generage index.html base on template file and import xxx-bundle.js
    new HtmlWebpackPlugin({
      title: 'React base on Typescript',
      template: 'index.html',
      hash: true,
    }),
  ],
  optimization: {
    splitChunks: {
      minChunks: 1,
      name: true,
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}