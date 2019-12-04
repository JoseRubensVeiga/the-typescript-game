const path = require('path');

module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts' ],
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'js'),
  },
};