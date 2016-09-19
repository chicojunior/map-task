const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactStaticPlugin = require('react-static-webpack-plugin');

const config = {

  entry: {
    app: './index.js',
  },

  output: {
    path: require('path').join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ReactStaticPlugin({
      routes:   './routes.js',
      template: './components/Layout/Layout.js',
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.optimize.AggressiveMergingPlugin(),
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

module.exports = config;
