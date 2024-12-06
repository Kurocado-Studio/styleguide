/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const es6Config = {
  rules: {
    /**
     * Disallow useless computed property keys.
     *
     * @see  https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'warn',
    /**
     * Disallow renaming import, export, and destructured assignments to the
     * same name.
     *
     * @see  https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': 'warn',
    /**
     * Require `let` or `const` instead of `var`.
     *
     * @see  https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',
    /**
     * Require object literal shorthand syntax.
     *
     * @see  https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': 'warn',
    /**
     * Require default to `const` instead of `let`.
     *
     * @see  https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'warn',
    /**
     * Disallow parseInt() in favor of binary, octal, and hexadecimal literals.
     *
     * @see  https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'error',
    /**
     * Require using rest parameters instead of `arguments`.
     *
     * @see  https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',
    /**
     * Require using spread syntax instead of `.apply()`.
     *
     * @see  https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'error',
    /**
     * Require using template literals instead of string concatenation.
     *
     * @see  https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'warn',
    /**
     * Require a `Symbol` description.
     *
     * @see  https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'error',
  },
};
