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
};
