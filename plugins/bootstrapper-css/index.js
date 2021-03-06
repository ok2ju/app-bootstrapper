module.exports = (bootstrapperConfig) => {
    return Object.assign({}, bootstrapperConfig, {
        webpack: (config, options) => {
            // Modify webpack config here
            console.log('webpack config from CSS plugin:', JSON.stringify(config))
            config.plugins.push({ label: 'Im CSS Plugin' })

            // Necessary in every plugin to add ability to compose plugins
            if (typeof bootstrapperConfig.webpack === 'function') {
                return bootstrapperConfig.webpack(config, options)
            }

            return config
        }
    })
}