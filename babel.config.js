module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // keep this as a last
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
