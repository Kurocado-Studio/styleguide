const { TYPESCRIPT_FILES } = require('./constants');

module.exports = {
  extends: ['plugin:jest/recommended', require.resolve('./rules/jest')],
  overrides: [
    {
      files: TYPESCRIPT_FILES,
    },
  ],
};
