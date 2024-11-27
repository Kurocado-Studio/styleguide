/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
// These share identical configuration options, so we want to keep them in sync.
const noUnusedVarsConfig = require('../variables').rules['no-unused-vars'];

module.exports = {
  rules: {
    /**
     * Require default parameters to be last.
     *
     * @see  https://typescript-eslint.io/rules/default-param-last/
     */
    '@typescript-eslint/default-param-last': 'error',
    /**
     * Disallow creation of functions within loops.
     *
     * @see  https://typescript-eslint.io/rules/no-loop-func/
     */
    '@typescript-eslint/no-loop-func': 'error',
    /**
     * Disallow variable declarations from shadowing variables declared in the
     * outer scope.
     *
     * @see  https://typescript-eslint.io/rules/no-shadow/
     */
    '@typescript-eslint/no-shadow': 'error',
    /**
     * Disallow unused variables.
     *
     * @see  https://typescript-eslint.io/rules/no-unused-vars/
     */
    '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,
    /**
     * Disallow unnecessary constructors.
     *
     * @see  https://typescript-eslint.io/rules/no-useless-constructor/
     */
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
