/**
 * Requires and exports the base config from protomorph.
 * Override configuration as you would any simple js object.
 */
const baseConfig = require('@plumpnation/protomorph/webpack.config');

// const overrides = {
//     entry: {
//         'index': './src/index.js',
//         'viewName': [
//             './src/some/thing/else.js',
//             './src/some/thing/else.scss',
//          ]
//     }
// };

// You can override the default webpack config here
const config = Object.assign({}, baseConfig/*, overrides*/);

module.exports = config;
