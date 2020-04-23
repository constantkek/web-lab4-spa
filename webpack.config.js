const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js', //?
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}