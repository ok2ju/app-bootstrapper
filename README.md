# app-bootstrapper

**NOTE**: This is raw example and it's mostly don't work. For now it's just a PoC

## Usage
1. Create a new project;
2. Add `app-bootstrapper` as `devDependency`;
```sh
yarn add app-bootstrapper --dev
```
3. Add `app-bootstrapper` to `scripts` section in your `package.json` file:
```json
{
    "scripts": {
        "start": "bootstrapper"
    }
}
```

You can use default `app-bootstrapper` configuration or if you want to modify it - create `bootstrapper.config.js` in the root of your project directory (near `package.json`).

```javascript
module.exports = {
    webpack: (config, options) => {
        config.rules.push({ test: /.tsx?$/, use: 'ts-loader' })
        config.plugins.push({ label: 'Test Plugin' })
        return config
    }
}
```

Example of usage with plugins:
```javascript
const withCSS = require('app-bootstrapper/plugins/bootstrapper-css')
const withTypeScript = require('app-bootstrapper/plugins/bootstrapper-typescript')

// module.exports = withCSS({})
module.exports = withTypeScript(withCSS({
    webpack: (config, options) => {
        // Override default config here
        return config
    }
}))
```