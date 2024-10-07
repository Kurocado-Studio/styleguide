const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    'app/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@app/(.*)$': '<rootDir>/app/$1',
  },
  roots: ['<rootDir>/app'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
};
