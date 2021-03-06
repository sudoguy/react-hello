var HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  favicon: 'app/static/images/favicon.ico',
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
  new CopyWebpackPlugin([
       {from: 'app/static/css', to: 'css'},
       {from: 'app/static/images', to: 'images'},
       {from: 'app/index.html'},
  ]),
  HTMLWebpackPluginConfig
  ]
};
