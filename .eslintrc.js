module.exports = {
  extends: [
    'plugin:storybook/recommended',
    '@1kinlabs/eslint-config',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', '!.storybook/*'],
}
