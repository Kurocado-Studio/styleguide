module.exports = {
  extends: ['./src/eslint/eslint.node'],
  overrides: [
    {
      files: ['src/**'],
      rules: {
        'sort-keys': 'error',
      },
    },
  ],
};
