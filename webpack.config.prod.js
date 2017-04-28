var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var CompressionPlugin = require('compression-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // new CompressionPlugin({   //<-- Add this
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    new CopyWebpackPlugin([
         {from: 'app/static/css', to: 'css'},
         {from: 'app/static/images', to: 'images'},
         {from: 'app/index.html'},
    ]),
    HTMLWebpackPluginConfig
  ]
};
