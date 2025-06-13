export const TS_EXTENSIONS_PREFIX = '{ts,tsx}';
export const TEST_TAGS = ['test', 'spec'];
export const ECMA_YEAR = 2021;

export const TS_FILES = [`**/*.${TS_EXTENSIONS_PREFIX}`];
export const TS_TEST_FILES = TEST_TAGS.map(
  (t) => `**/*.${t}.${TS_EXTENSIONS_PREFIX}`,
);
