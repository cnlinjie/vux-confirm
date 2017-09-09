let path = require('path')
let webpack = require('webpack');
let url = require('url');
let utils = require('./utils');
let config = require('../config');
let glob = require('glob');
let vuxLoader = require('vux-loader')
let isProd = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


let webpackBaseConf = {
    entry: { 'main': [ 'babel-polyfill', './src/main.js' ] },
    output: {
        // 输出的JS文件位置
        path: config.build.assetsRoot + (isProd ? config.build.assetsPublicPath : '' ),
        filename: 'js/[name].js?[hash]',
        chunkFilename: 'js/[name].js?[hash]',
        publicPath: isProd ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: utils.cssLoaders({
                            sourceMap: isProd ? config.build.productionSourceMap : config.dev.cssSourceMap,
                            extract: isProd
                        }),
                        postcss: [
                            require('postcss-cssnext')(),
                            require('autoprefixer')({
                                browsers: ['iOS >= 7', 'Android >= 4.1']
                            })]
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: [resolve('src')],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        root: resolve('src'),
                        attrs: ['img:src', 'link:href']
                    }
                }]
            },
            {
                test: /favicon\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[hash:7].[ext]?',
                        limit: 10000
                    }
                }]
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'font/[name].[hash:7].[ext]',
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ],
    resolve: {
        extensions: ['.js', '.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.min.js',
            '@': resolve('src'),
            'src': resolve('src'),
            '@admin': resolve('src/module/admin'),
            'assets': resolve('src/assets')
        }
    }
}
// module.exports = webpackBaseConf;
module.exports = vuxLoader.merge(webpackBaseConf, {
  plugins: ['vux-ui','progress-bar', 'duplicate-style']
})

