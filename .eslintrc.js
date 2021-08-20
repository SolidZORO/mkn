/* eslint-disable max-len */
module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  //
  // 0 (off) / 1 (warn) / 2 (error)
  rules: {
    'max-len': [2, 80],
    'no-console': 0,
    'import/prefer-default-export': 0,
    // 'import/no-mutable-exports': 1, // for mobx displayName by `babel-plugin-add-react-displayname`
    'import/extensions': 0,
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    //
    //
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    //
    //
    '@typescript-eslint/dot-notation': 0, // for e.g. styles['style-name']
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/lines-between-class-members': 0,
  },
};
