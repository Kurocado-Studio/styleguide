module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    require.resolve('./rules/react'),
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
