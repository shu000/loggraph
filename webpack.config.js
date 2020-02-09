const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js?[hash]',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    // .jsもreactをwebpackするために必要
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          // <style>タグに書き出す
          'style-loader',
          {
            // @importを解決する
            loader: 'css-loader',
            options: {
              // url()を使わない
              url: false,
              // css-loaderの前に読むloaderの数
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                // Autoprefixerを有効
                autoprefixer({
                  grid: true,
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
