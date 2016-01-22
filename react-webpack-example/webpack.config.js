var path = require('path');
var webpack = require('webpack');

var nodeModules = path.resolve(__dirname,'node_modules')

module.exports = {
  // 入口文件
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8020',
    path.resolve(__dirname,'app/app.js'),
  ],
  // 打包后的文件
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // '新版本babel的变化' 
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?minetype=image/png'
      }
    ]
  }
}