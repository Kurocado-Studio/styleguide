const baseAppConfig = require('./semantic-release.app');

module.exports = {
  ...baseAppConfig,
  plugins: [...baseAppConfig.plugins, '@semantic-release/npm'],
};
