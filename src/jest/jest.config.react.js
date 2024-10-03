const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
};
