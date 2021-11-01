/* eslint-disable max-len */
module.exports = {
  // https://github.com/qcolate/web-configs/blob/master/packages/eslint-config/react.js
  // extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  extends: ['@qcolate/eslint-config'],
  //
  // TODO disabled 'next/core-web-vitals'
  //      Plugin "import" was conflicted between ".eslintrc.js
  //      » eslint-config-airbnb
  //      » eslint-config-next/core-web-vitals
  // extends: ['next/core-web-vitals', '@qcolate/eslint-config'],
  //
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
    'max-len': [
      2,
      {
        code: 80, // (default 80)
        ignoreComments: true,
        ignoreTrailingComments: true,
      },
    ],
    'spaced-comment': 0,
    //
    //
    // Next.js
    '@next/next/no-img-element': 0,
  },
};
