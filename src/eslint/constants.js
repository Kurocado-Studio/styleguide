/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
const SPEC_PREFIX = 'spec';
const TEST_PREFIX = 'test';

export const sharedEslintConfig = {
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
