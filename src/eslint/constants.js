const SPEC_PREFIX = 'spec';
const TEST_PREFIX = 'test';

module.exports = {
  ECMA_VERSION: 2021,
  JAVASCRIPT_FILES: ['*.js?(x)', '*.mjs'],
  JAVASCRIPT_TEST_FILES: [
    `*.${TEST_PREFIX}.js?(x)`,
    `*.${SPEC_PREFIX}.js?(x)`,
    `*.${TEST_PREFIX}.mjs?(x)`,
    `*.${SPEC_PREFIX}.mjs?(x)`,
  ],
  TYPESCRIPT_FILES: ['*.ts?(x)'],
  TYPESCRIPT_TEST_FILES: [`*.${TEST_PREFIX}.ts?(x)`, `*.${SPEC_PREFIX}.ts?(x)`],
};
