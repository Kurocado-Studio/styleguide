/**
 * Some of the defaults can be overridden by an EditorConfig file. We define those here to ensure that doesn't happen.
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^~/(.*)$',
    '^@/(.*)$',
    '^@app/(.*)$',
    '^@src/(.*)$',
    '^[../]',
    '^./',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: ['*.ts'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.js'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.jsx'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.md'],
      options: {
        parser: 'markdown',
        printWidth: 100,
        proseWrap: 'always',
      },
    },
  ],
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
