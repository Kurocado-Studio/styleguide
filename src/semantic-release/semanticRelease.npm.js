const baseAppConfig = require('./semanticRelease.app');

module.exports = {
  ...baseAppConfig,
  plugins: [...baseAppConfig.plugins, '@semantic-release/npm'],
};
