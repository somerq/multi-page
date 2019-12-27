class UploadPlugin {
    constructor (options) {
        this.options = options
    }
    apply (compiler) {
        console.log('options', this.options)
        console.log('compiler', compiler)
        compiler.hooks.compilation.tap('UploadPlugin', (compilation) => {
            console.log('compilation', compilation)
        })
    }
}
module.exports = UploadPlugin
