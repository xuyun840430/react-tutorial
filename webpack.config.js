/**
 * Created by Information on 2016/2/2.
 */
/**
 * Output for Redux
 * @type {{entry: string, output: {path: string, publicPath: string, filename: string}, module: {loaders: *[]}}}
 */

// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   devtool: 'eval',
//   entry: [
//     'webpack-dev-server/client?http://localhost:3000',
//     'webpack/hot/only-dev-server',
//     './redux-samples/index'
//     // './react-router-samples/basics.js'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   resolve: {
//     alias: {
//       'redux-devtools': path.join(__dirname, '..', '..', 'src'),
//       'react': path.join(__dirname, 'node_modules', 'react')
//     }
//   },
//   resolveLoader: {
//     'fallback': path.join(__dirname, 'node_modules')
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['react-hot', 'babel'],
//       exclude: /node_modules/,
//       include: path.join(__dirname, 'src')
//     }, {
//       test: /\.js$/,
//       loaders: ['react-hot', 'babel'],
//       include: path.join(__dirname, '..', '..', 'src')
//     }]
//   }
// };

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './react-router-samples/basics'
    // './redux-samples/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
