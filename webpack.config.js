var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSASS = new ExtractTextPlugin('styles.css');

var config = {
  // devtool : 'eval-source-map',

  entry: {
    bundle: ['./app/index.js', './style/main.scss'],
    scene: ['./app/scene/scene.js'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/generated'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    root: [ path.join(__dirname, 'app/') ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /\.scss$/,
        exclude:  /node_modules/,
        loader: extractSASS.extract('style-loader', 'css!sass'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, "style")]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      minimize: true,
    }),
    extractSASS,
  ]
};

module.exports = config;
