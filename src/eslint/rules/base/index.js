const bestPracticeRules = require('./best-practice');
const es6Rules = require('./es6');
const importRules = require('./import');
const possibleErrorsRules = require('./possible-errors');
const stylisticRules = require('./stylistic');
const unicornRules = require('./unicorn');
const variablesRules = require('./variables');

module.exports = {
  rules: {
    ...es6Rules.rules,
    ...importRules.rules,
    ...possibleErrorsRules.rules,
    ...stylisticRules.rules,
    ...unicornRules.rules,
    ...variablesRules.rules,
    ...bestPracticeRules.rules,
    /**
     * Require any TSDoc comments conform to the TSDoc specification.
     *
     * @see  https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
     */
    'tsdoc/syntax': 'error',
  },
};
