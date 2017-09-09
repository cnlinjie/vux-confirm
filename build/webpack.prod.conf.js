let {
    resolve
} = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let url = require('url');
let Merge = require('webpack-merge');
let BaseWebpackConfig = require('./webpack.base.conf');
let CleanWebpackPlugin = require('clean-webpack-plugin');//webpack插件，用于清除目录文件
let path = require('path');
let config = require('../config');
let utils = require('./utils');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
let rootDirname = path.join(__dirname, '../');

console.log(' prod .. ');
module.exports = Merge(BaseWebpackConfig, {

    devtool: config.build.productionSourceMap ? '#source-map' : false,

    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },

    plugins: [
        // JS 压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            },
            sourceMap: config.build.productionSourceMap,
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),

        // 优化
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 提取公告css
        new ExtractTextPlugin("css/[name].css?[hash]"),
        // 优化css
        new OptimizeCSSPlugin()
    ]
});

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    BaseWebpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    BaseWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

let pages = utils.getEntry(['./src/module/*.html','./src/module/**/*.html']);

for (let pathname in pages) {
    // 配置生成的html文件，定义路径等
    let filename = pathname.split('/')[pathname.split('/').length - 1];
    let conf = {
        inject: true,              // js插入位置
        filename: '../' + filename + '.html',
        template: pages[pathname],   // 模板路径
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    };
    if (pathname in module.exports.entry) {
        conf.chunks = ['manifest', 'vendor', pathname];
        conf.hash = true;
    }
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
