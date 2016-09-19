const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactStaticPlugin = require('react-static-webpack-plugin');

const PORT = process.env.PORT || 3000;
const HOST = '//localhost:' + PORT + '/';

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: [
      'webpack-hot-middleware/client?path=' + HOST + '__webpack_hmr',
      './index.js',
    ],
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: HOST,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: require('path').join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        exclude: /(www)/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        }),
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|www)/,
        loader: ExtractTextPlugin.extract(
          'style', 'css!stylus'
        ),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=10000&mimetype=application/font-woff'],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file'],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },

};
