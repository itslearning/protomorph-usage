/**
 * Requires and exports the base config from protomorph.
 * Override configuration as you would any simple js object.
 */
const baseConfig = require('@plumpnation/protomorph/webpack.config');

// You can override the default webpack config here
// const config = Object.assign({}, baseConfig, {
//     entry: {
//         'index': './src/index.js',
//         'viewName': [
//             './src/some/thing/else.js',
//             './src/some/thing/else.scss',
//          ]
//     }
// });

module.exports = baseConfig;
