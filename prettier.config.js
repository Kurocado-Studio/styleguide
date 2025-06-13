import prettierPluginPackagejson from 'prettier-plugin-packagejson';
import { options } from 'prettier-plugin-tailwindcss';

export default {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^~/(.*)$',
    '^@/(.*)$',
    '^app/(.*)$',
    '^src/(.*)$',
    '^[../]',
    '^./',
  ],
  importOrderParserPlugins: ['jsx', 'typescript', 'decorators-legacy'],
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
  plugins: [prettierPluginPackagejson, prettierPluginPackagejson, options],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
