const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
};
