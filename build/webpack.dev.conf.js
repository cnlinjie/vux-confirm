let {
    resolve
} = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let url = require('url');
let Merge = require('webpack-merge');
let publicPath = '/assets/';
let BaseWebpackConfig = require('./webpack.base.conf');
let path = require('path');
let config = require('../config');
let utils = require('./utils');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(BaseWebpackConfig.entry).forEach(function (name) {
    BaseWebpackConfig.entry[name] = ['./build/dev-client'].concat(BaseWebpackConfig.entry[name])
})


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
        new FriendlyErrorsPlugin()
    ],

    // 这段目前没用到
    devServer: {
        host: '0.0.0.0',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
         disableHostCheck: true,
        historyApiFallback: {
            index: url.parse(config.dev.assetsPublicPath).pathname ,
            rewrites: [ ]
        }
    }
});

let pages = utils.getEntry(['./src/module/*.html','./src/module/*/*.html']);

console.log("------------------------------");
console.log(pages);
console.log("------------------------------");

for (let pathname in pages) {
    // 配置生成的html文件，定义路径等
    let filename = pathname.split('/')[pathname.split('/').length - 1];
    let conf = {
        inject: true,              // js插入位置
        filename:  filename + '.html', // 这里控制访问的名称
        template: pages[pathname],   // 模板路径
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    };
    if (pathname in module.exports.entry) {
        conf.chunks = ['manifest', 'vendor', pathname];
        conf.hash = true;
    }
    module.exports.devServer.historyApiFallback.rewrites.push(
        { from: new RegExp( filename + '$'), to: '/'+filename+'.html' }
    );
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
