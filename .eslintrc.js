module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "keyword-spacing": 2,
    "space-before-function-paren": [2, "never"],
    "eqeqeq": 2,
    "space-infix-ops": 2,
    "comma-spacing": 2,
    "brace-style": 2,
    "no-multiple-empty-lines": 2,
    "camelcase": 2,
    "func-call-spacing": 2,
    "key-spacing": 2,
    "semi": 2,
    "no-floating-decimal": 2,
    "no-multi-spaces": 2,
    "object-property-newline": 2,
    "padded-blocks": [2, "never"],
    "space-before-blocks": 2,
    "space-in-parens": 2,
    "spaced-comment": 2,
    "quotes": [2, "single"],
    "id-length": [2, { "exceptions": ["i", "j", "x"] }],
    "indent": [2, 2],
    "no-array-constructor": 2
  }
};
