module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 0,
  },
};
