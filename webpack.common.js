const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

        new HtmlWebpackPlugin({
            title    : 'webpack',
            filename : 'index.html',
            template : 'example/index.ejs'
        })
    ]
};
