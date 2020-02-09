const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    // .jsもreactをwebpackするために必要
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
  },
  // devtool: 'source-map',
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
              importLoaders: 1,
              // sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
