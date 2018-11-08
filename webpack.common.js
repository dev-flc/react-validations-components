const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {

    entry : {
        example :  [ "babel-polyfill" , path.resolve( __dirname, 'example/index.js' ) ]
    },

    output : {
        path          : path.resolve( __dirname, 'public' ),
        filename      : 'js/[name].js',
        chunkFilename : 'js/[id].[chunkhash].js',
    },

  	module: {
    	rules : [
            {
                test : /\.(sa|sc|c)ss$/,
                use  : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.(js|jsx)$/,
                include : [ path.resolve(__dirname, "example") ],
                exclude : [ path.resolve(__dirname, "node_modules") ],
                use  : {
                    loader  : 'babel-loader'
                }
            }
        ]
    },
    plugins : [

        new CleanWebpackPlugin( [ 'public' ] ),

        new MiniCssExtractPlugin({
            filename      : '[name].css',
            chunkFilename : '[id].css'
        }),

        new HtmlWebpackPlugin({
            title    : 'webpack',
            filename : 'index.html',
            template : 'example/index.ejs'
        })
    ]
};
