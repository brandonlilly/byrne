var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSASS = new ExtractTextPlugin('styles.css');

var config = {
  devtool : 'eval-source-map',

  entry: [
    './app/index.js',
    './style/main.scss',
  ],
  output: {
    filename: 'bundle.js',
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
        test: /\.js$/, loader: 'babel', exclude: /node_modules/,
        query: { presets: ['es2015', 'stage-0'] }
      },
      {
        test: /\.scss$/,
        exclude:  /node_modules/,
        loader: extractSASS.extract('style-loader', 'css!sass'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.join(__dirname, "style")]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' }
    }),
    extractSASS
  ]
};

module.exports = config;
