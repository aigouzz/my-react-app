module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-extra-boolean-cast': 'off',
    'indent': 'off',
    'semi': 'off',
    'prefer-const': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'multiline-ternary': 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0
  }
};