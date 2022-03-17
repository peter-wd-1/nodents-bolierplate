module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
    es6: true,
  },
  plugins: ['prettier', 'markdown'],
  extends: [
    'airbnb',
    'prettier',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'semi': 'off',
    'node/no-unsupported-features/es-syntax':'off',
    'node/no-extraneous-import':'off'
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [{
    files: ['**/*.test.ts'],
    env: { jest: true },
    plugins: ['jest'],
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error"
    }
  }],
}
