/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
export const possibleErrorsConfig = {
  rules: {
    /**
     * Disallow the use of console.
     *
     * @see  https://eslint.org/docs/rules/no-console
     */
    'no-console': 'error',
    /**
     * Disallow expressions where the operation doesn't affect the value.
     *
     * @see  https://eslint.org/docs/rules/no-console
     */
    'no-constant-binary-expression': 'error',
    /**
     * Disallow returning values from Promise executor functions.
     *
     * @see  https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',
    /**
     * Disallow template literal placeholder syntax in regular strings, as
     * these are likely errors.
     *
     * @see  https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',
    /**
     *  Disallow loops with a body that allows only one iteration.
     *
     * @see  https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',
  },
};
