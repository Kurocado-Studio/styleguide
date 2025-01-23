/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { importConfig } from './import.js';

export const typescriptEslintConfig = {
  rules: {
    ...importConfig.rules,
    /**
     * Require consistent usage of type exports.
     *
     * @see  https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    /**
     * Require consistent usage of type imports.
     *
     * @see  https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    /**
     * Require explicit return types on functions and class methods.
     *
     * @see  https://typescript-eslint.io/rules/explicit-function-return-type/
     */
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    /**
     * Require using function property types in method signatures.
     *
     * These have enhanced typechecking, whereas method signatures do not.
     *
     * @see  https://typescript-eslint.io/rules/method-signature-style/
     */
    '@typescript-eslint/method-signature-style': 'warn',
    /**
     * Require consistent naming conventions.
     *
     * Improves IntelliSense suggestions and avoids name collisions.
     *
     * @see  https://typescript-eslint.io/rules/naming-convention/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Anything type-like should be written in PascalCase.
      {
        custom: {
          match: false,
          regex: '^T[A-Z]|^(Type|Props|State|Interface)$',
        },
        format: ['PascalCase'],
        selector: ['typeLike', 'typeAlias'],
      },
      {
        format: ['UPPER_CASE'],
        selector: 'enumMember',
      },
    ],
    /**
     * Disallow members of unions and intersections that do nothing or override type information.
     *
     * @see  https://typescript-eslint.io/rules/no-redundant-type-constituents/
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    /**
     * Disallow unnecessary namespace qualifiers.
     *
     * @see  https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    /**
     * Require using `RegExp.exec()` over `String.match()` for consistency.
     *
     * @see  https://typescript-eslint.io/rules/prefer-regexp-exec/
     */
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    /**
     * Require Array#sort calls to provide a compare function.
     *
     * @see  https://typescript-eslint.io/rules/require-array-sort-compare/
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],
    /**
     * Require exhaustive checks when using union types in switch statements.
     *
     * This ensures cases are considered when items are later added to a union.
     *
     * @see  https://typescript-eslint.io/rules/switch-exhaustiveness-check/
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
};
