module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'eslint-config-airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    }
  },

  globals: {
    React: 'readonly',
    JSX: 'readonly',
    window: 'readonly',
  },

  plugins: ['import', '@typescript-eslint', 'react'],
  root: true,

  rules: {
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
}
