module.exports = {
  rules: {
    /**
     * Require camel case names.
     *
     * @see  https://eslint.org/docs/rules/camelcase
     */
    camelcase: [
      'error',
      { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
    ],
    /**
     * Require function expressions to have a name.
     *
     * @see  https://eslint.org/docs/rules/func-names
     */
    'func-names': ['error', 'as-needed'],
    /**
     * Require a capital letter for constructors.
     *
     * @see  https://eslint.org/docs/rules/new-cap
     */
    'new-cap': ['error', { capIsNew: false }],
    /**
     * Disallow the omission of parentheses when invoking a constructor with
     * no arguments.
     *
     * @see  https://eslint.org/docs/rules/new-parens
     */
    'new-parens': 'warn',
    /**
     * Disallow use of the Array constructor.
     *
     * @see  https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',
    /**
     * Disallow use of bitwise operators.
     *
     * @see  https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',
    /**
     * Disallow if as the only statement in an else block.
     *
     * @see  https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'warn',
    /**
     * Disallow use of chained assignment expressions.
     *
     * @see  https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': ['error'],
    /**
     * Disallow nested ternary expressions.
     *
     * @see  https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',
    /**
     * Disallow ternary operators when simpler alternatives exist.
     *
     * @see  https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',
    /**
     * Require use of an object spread over Object.assign.
     *
     * @see  https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': 'warn',
  },
};
