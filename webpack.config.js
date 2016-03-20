/**
 * Created by Information on 2016/2/2.
 */
//module.exports = {
//  entry: "./webpack_bundle/reactview.js",
//  output: {
//    path: __dirname + '/public/javascripts/',
//    publicPath: "/public/javascripts/",
//    filename: "bundle.js"
//  },
//  module: {
//    loaders: [
//      { test: /\.css$/, loader: "style!css" }
//    ]
//  }
//};

//module.exports = {
//  entry: [
//    './webpack_bundle/entry.js',
//    './webpack_bundle/Hello.js'
//  ],
//  output: {
//    path: __dirname + '/public/javascripts/',
//    publicPath: "/public/javascripts/",
//    filename: "bundle.js"
//  },
//  module: {
//    loaders: [
//      { test: /\.jsx?$/, loaders: ['jsx?harmony']}
//    ]
//  }
//};


/**
 * Output for Redux
 * @type {{entry: string, output: {path: string, publicPath: string, filename: string}, module: {loaders: *[]}}}
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './redux-samples/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/javascripts/'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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

//var path = require('path')
//var webpack = require('webpack')
//
//module.exports = {
//  devtool: 'cheap-module-eval-source-map',
//  entry: [
//    'webpack-hot-middleware/client',
//    './redux-samples/index.js'
//  ],
//  output: {
//    path: path.join(__dirname, 'dist'),
//    filename: 'bundle.js',
//    publicPath: '/static/'
//  },
//  plugins: [
//    new webpack.optimize.OccurenceOrderPlugin(),
//    new webpack.HotModuleReplacementPlugin()
//  ],
//  module: {
//    loaders: [
//      {
//        test: /\.js$/,
//        loaders: [ 'babel' ],
//        exclude: /node_modules/,
//        include: __dirname
//      }
//    ]
//  }
//}