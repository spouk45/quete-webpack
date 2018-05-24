const path = require('path');
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: './js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },


    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            }]
    }



}