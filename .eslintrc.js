module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react-native'],
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 2,
    'comma-dangle': 2,
    'max-len': 'off',
    'no-console': 'off',
  },
  globals: {
    fetch: false,
  },
};
