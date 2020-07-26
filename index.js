module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
};
