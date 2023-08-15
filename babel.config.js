module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: [
          { '@assets': './src/assets' },
          { '@configs': './src/configs' },
          { '@bootstrap': './src/bootstrap' },
        ],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.js',
          '.android.js',
          'json',
          '.png',
          '.svg',
          '.jpeg',
          '.jpg',
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
};
