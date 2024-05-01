module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true, // Agrega esto para soportar las variables globales de Jest
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended' // Añade esto para aplicar las mejores prácticas de Jest
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.2' },
  },
  plugins: [
    'react-refresh',
    'jest' // Asegúrate de incluir 'jest' aquí
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

