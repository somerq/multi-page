const path = require('path')
const glob = require('glob')
// const UploadPlugin = require('./public/upload-plugin')

function getEntry (globPath) {
    const entries = {}
    glob.sync(globPath).forEach(function (entry) {
        console.log('entry', entry)
        const tmp = entry.split('/').splice(-3)
        entries[tmp[1]] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'main.js',
            template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.html',
            filename: tmp[1].html
        }
    })
    return entries
}

const pages = getEntry('./src/pages/**?/*.html')

module.exports = {
    pages,
    devServer: {
        index: '/',
        open: process.platform === 'darwin',
        host: '',
        port: 9527,
        https: false,
        hotOnly: false,
        proxy: {}, // 设置代理
        before: app => {}
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                options.limit = 100
                return options
            })
        Object.keys(pages).forEach(entryName => {
            config.plugins.delete(`prefetch-${entryName}`)
        })
        if (process.env.NODE_ENV === 'production') {
            config.plugin('extract-css').tap(() => [{
                path: path.join(__dirname, './dist'),
                filename: 'css/[name].[contenthash:8].css'
            }])
        }
    },
    configureWebpack: config => {
        // if (process.env.NODE_ENV === 'production') {
        //     config.output = {
        //         path: path.join(__dirname, './dist'),
        //         filename: 'js/[name].[contenthash:8].js'
        //     }
        // }
        // config.plugins = [
        //     new UploadPlugin({
        //         name: 'hahaha'
        //     })
        // ]
    }
}
