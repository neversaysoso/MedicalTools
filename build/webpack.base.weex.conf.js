/**
 * Created by sangfeng on 2017/12/5.
 */
var webpack = require('webpack');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  devtool: '#source-map',
  context: __dirname,
  entry: {
    'weex-bundle': '../src/platforms/weex/weex.entry.js?entry=true'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  stats: {
    colors: true,
    modules: false,
    reasons: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      }
    }, {
      test: /\.vue(\?[^?]+)?$/,
      use:{
        loader: 'weex-loader',
        options: {
          cacheDirectory: true,
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules'
    ]
  }
}


module.exports = config;
