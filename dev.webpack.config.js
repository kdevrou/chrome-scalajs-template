var webpack = require('webpack');

module.exports = require('./scalajs.webpack.config');
module.exports.mode = "production";
module.exports.output.libraryTarget = "window";
