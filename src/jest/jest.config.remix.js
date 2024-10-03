const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  roots: ['<rootDir>/app'],
  testEnvironment: 'jsdom',
};
