module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
  },
};
