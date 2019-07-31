module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    scmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  plugins: ['import'],
  extends: ['./rules/base.yml']
};
