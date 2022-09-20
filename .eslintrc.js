module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // extends: [
  //   'plugin:react/recommended',
  //   'standard',
  //   'eslint:recommended'
  // ],
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
    'react/prop-types': 'off'
  }
}

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     'plugin:react/recommended',
//     'standard',
//     'eslint:recommended'
//   ],
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module'
//   },
//   plugins: [
//     'react'
//   ],
//   rules: {
//     'func-style': 'off',
//     'indent': ['off', 'always'],
//     'quotes': [0, 'single']
//   }
// }
