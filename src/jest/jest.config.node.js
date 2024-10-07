const baseConfig = require('./jest.config.base.js');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
};
