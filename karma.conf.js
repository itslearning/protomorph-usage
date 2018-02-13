/**
 * Requires and exports the base config from protomorph.
 * Override configuration as you would any simple js object.
 */

const baseConfig = require('@itslearning/protomorph/karma.conf.base');
const overrides = {};

const overridenConfig = Object.assign({}, baseConfig, overrides);

module.exports = function (config) {
    config.set(overridenConfig);
};
