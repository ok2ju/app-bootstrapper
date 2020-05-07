#!/usr/bin/env node

const path = require('path')

const dir = process.cwd()
const configPath = path.resolve(dir, 'bootstrapper.config.js')
const config = require(configPath)

// TODO: check if bootstrapper.config.js exist and only if it exist doing override job

console.log('bootstrapper:cwd', dir)
console.log('bootstrapper:config', config)

// Example of default bootstrapper config
// This is just demo
const defaultConfig = {
    webpack: {
        rules: [{
            test: /.jsx?$/,
            use: 'babel-loader'
        }],
        plugins: []
    }
}

const options = {}

const resultConfig = config.webpack(defaultConfig.webpack, options)
console.log('bootstrapper:result config:', resultConfig)