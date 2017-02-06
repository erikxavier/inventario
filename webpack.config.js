// import Webpack plugins
// var cleanPlugin = require('clean-webpack-plugin');
// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');

// define Webpack configuration object to be exported
var config = {
    context: __dirname + '/js',
    entry: './app.js',
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'        
    },
    resolve: {
        alias: {
          'npm': __dirname + '/node_modules'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;