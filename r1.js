module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  //extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  //plugins: ['import'],
  rules: {
    // disable unnecessary recommended rules
    'no-console': 2,
  }
}
