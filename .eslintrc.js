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
    es6: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  rules: {
    'max-len': ['error', 80],
    'no-console': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    //
    //
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    //
    // for styles['abc']
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/naming-convention': 0,
  },
};
