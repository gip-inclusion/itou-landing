module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never',
      },
    ],
  },
};
