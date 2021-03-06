module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'valid-jsdoc': 'off',
  },
  plugins: ['html', 'jquery', 'prettier'],
};
