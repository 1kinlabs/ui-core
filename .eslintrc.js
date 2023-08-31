module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,

  rules: {
    'semi': ['error', 'never'],
  }
}
