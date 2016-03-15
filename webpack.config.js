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

module.exports = {
  entry: "./bootstrap-samples/ButtonActive.js",
  output: {
    path: __dirname + '/public/javascripts/bootstrap-samples',
    publicPath: "/public/javascripts/bootstrap-samples",
    filename: "react-bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};