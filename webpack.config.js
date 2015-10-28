var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appPath           = path.join(__dirname, 'app');
var distPath          = path.join(__dirname, 'dist');

module.exports = {

  // The base directory for resolving `entry` (must be absolute path)
  context: appPath,

  entry: {
    index: 'index.jsx'
  },

  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },

  plugins: [
    // Render an index.html for the app
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'app/index.html'
    })
  ],

  // Enable loading modules relatively to root (without the ../../ prefix)
  resolve: {
    root: [appPath]
  },

  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css', 'autoprefixer'] },
      { test: /\.(ttf|eot|svg|otf|png|woff|woff2)$/, loader: 'file' },
    ]
  },

  // Settings for webpack-dev-server
  // `--hot` and `--progress` must be set using CLI
  devServer: {
    contentBase: './app',
    colors: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true
  },

  devtool: '#inline-source-map'
};
