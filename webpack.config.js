const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
}
