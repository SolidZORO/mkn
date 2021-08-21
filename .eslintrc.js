/* eslint-disable max-len */
module.exports = {
  // https://github.com/qcolate/eslint-config-qcolate/blob/master/.eslintrc.js
  // extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  extends: ['qcolate'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  //
  // 0 (off) / 1 (warn) / 2 (error)
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
  },
};
