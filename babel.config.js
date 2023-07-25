module.exports = {
  presets: ['@babel/preset-env', 'module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
  ],
};
