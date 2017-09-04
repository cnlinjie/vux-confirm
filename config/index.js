// see http://vuejs-templates.github.io/webpack for documentation.
let path = require('path')

const indexConfig = {
    common: {
        cssSourceMap: true,
    },
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/assets/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8010,
        autoOpenBrowser: false,
        assetsSubDirectory: '/assets/',
        assetsPublicPath: '/',
        proxyHost: 'http://192.168.31.70:8080',
        proxyApis: ['/ueditor', '/files', '/upload', '/admin/*', '/org/*',  '/wx/*'],

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}

let proxyTable = {}
indexConfig.dev.proxyApis.forEach(value => {

    proxyTable[value] = {
        target: indexConfig.dev.proxyHost,
        changeOrigin: true
    }

    for (let i = 0; i < 20; i++) {
        value += '/*'
        proxyTable[value] = {
            target: indexConfig.dev.proxyHost,
            changeOrigin: true
        }
    }

})

// proxyTable['/admin/*'] =  {
//     target: indexConfig.dev.proxyHost,
//     changeOrigin: true,
//     '^/admin/*':'/admin/*'
// };

indexConfig.dev.proxyTable = proxyTable

module.exports = indexConfig