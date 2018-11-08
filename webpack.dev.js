const merge  = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge( common, {

    mode    : 'development',

    devtool : 'inline-source-map',

    watchOptions : {
        ignored : /node_modules/,
        poll    : true
    },

  	devServer : {
        historyApiFallback : true,
    	host    : '127.0.0.1',
        port    : 8080,
        open    : true,
        inline  : true,
        overlay : true,
       	stats   : {
            colors       : true,
            chunks       : false,
            assets       : true,
            chunkModules : true
        }
  	}
});
