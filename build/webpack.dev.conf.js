let {
    resolve
} = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let url = require('url');
let Merge = require('webpack-merge');
let BaseWebpackConfig = require('./webpack.base.conf');
let path = require('path');
let config = require('../config');
let utils = require('./utils');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(BaseWebpackConfig.entry).forEach(function (name) {
    BaseWebpackConfig.entry[name] = ['./build/dev-client'].concat(BaseWebpackConfig.entry[name])
});


module.exports = Merge(BaseWebpackConfig,{
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: utils.styleLoaders({
            sourceMap:  config.common.cssSourceMap,
            extract: false
        })
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("css/[name].css?[hash]"),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin(
            {
                inject: true,
                filename: 'index.html',
                template: './src/index.html',
                chunksSortMode: 'dependency',
                // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                hash : true,
                chunks:['manifest', 'vendor', 'main']
            }
        )

    ],

});
