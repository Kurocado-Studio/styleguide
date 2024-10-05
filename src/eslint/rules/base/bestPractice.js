module.exports = {
  rules: {
    /**
     * Require return statements in array methods callbacks.
     *
     * @see https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': ['error', { allowImplicit: true }],
    /**
     * Treat `var` statements as if they were block scoped.
     *
     * @see  https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',
    /**
     * Require curly braces for multiline blocks.
     *
     * @see  https://eslint.org/docs/rules/curly
     */
    curly: ['warn', 'multi-line'],
    /**
     * Require default clauses in switch statements to be last (if used).
     *
     * @see  https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',
    /**
     * Require triple equals (`===` and `!==`).
     *
     * @see  https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: 'error',
    /**
     * Require grouped accessor pairs in object literals and classes.
     *
     * @see  https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': 'error',
    /**
     * Disallow use of `alert()`.
     *
     * @see  https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',
    /**
     * Disallow use of `caller`/`callee`.
     *
     * @see  https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',
    /**
     * Disallow returning value in constructor.
     *
     * @see  https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',
    /**
     * Disallow using an `else` if the `if` block contains a return.
     *
     * @see  https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'warn',
    /**
     * Disallow `eval()`.
     *
     * @see  https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',
    /**
     * Disallow extending native objects.
     *
     * @see  https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',
    /**
     * Disallow unnecessary function binding.
     *
     * @see  https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',
    /**
     * Disallow unnecessary labels.
     *
     * @see  https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',
    /**
     * Disallow floating decimals.
     *
     * @see  https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',
    /**
     * Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`.
     *
     * 🔧 Partially @see  https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'error',
    /**
     * Disallow use of `eval()`-like methods.
     *
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',
    /**
     * Disallow usage of `__iterator__` property.
     *
     * @see  https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',
    /**
     * Disallow use of labels for anything other than loops and switches.
     *
     * @see  https://eslint.org/docs/rules/no-labels
     */
    'no-labels': ['error'],
    /**
     * Disallow unnecessary nested blocks.
     *
     * @see  https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',
    /**
     * Disallow `new` for side effects.
     *
     * @see  https://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',
    /**
     * Disallow function constructors.
     *
     * @see  https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',
    /**
     * Disallow primitive wrapper instances, such as `new String('foo')`.
     *
     * @see  https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',
    /**
     * Disallow use of octal escape sequences in string literals.
     *
     * @see  https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',
    /**
     * Disallow reassignment of function parameters.
     *
     * @see  https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'error',
    /**
     * Disallow usage of the deprecated `__proto__` property.
     *
     * @see  https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',
    /**
     * Disallow assignment in `return` statement.
     *
     * @see  https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',
    /**
     * Disallow use of `javascript:` urls.
     *
     * @see  https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',
    /**
     * Disallow comparisons where both sides are exactly the same.
     *
     * @see  https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',
    /**
     * Disallow use of comma operator.
     *
     * @see  https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',
    /**
     * Disallow unnecessary `.call()` and `.apply()`.
     *
     * @see  https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'error',
    /**
     * Disallow unnecessary concatenation of strings.
     *
     * @see  https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',
    /**
     * Disallow redundant return statements.
     *
     * @see  https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'warn',
    /**
     * Require using named capture groups in regular expressions.
     *
     * @see  https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'error',
    /**
     * Require using Error objects as Promise rejection reasons.
     *
     * @see  https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    /**
     * Disallow use of the RegExp constructor in favor of regular expression
     * literals.
     *
     * @see  https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'error',
    /**
     * Disallow "Yoda conditions", ensuring the comparison.
     *
     * @see  https://eslint.org/docs/rules/yoda
     */
    yoda: 'warn',
  },
};
