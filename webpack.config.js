const baseConfig = require('@plumpnation/protomorph/webpack.config.js');

// You can override the default webpack config here
const config = Object.assign({}, baseConfig, {
    entry: {
        'index': './src/index.js'
    }
});

module.exports = config;
