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
          { '@utils': './src/utils' },
          { '@components-cards': './src/components/cards' },
          { '@components-containers': './src/components/containers' },
          { '@components-generics': './src/components/generics' },
          { '@components-derivatives': './src/components/derivatives' },
          { '@components-modals': './src/components/modals' },
          { '@hook': './src/hooks' },
          { '@stores': './src/stores' },
          { '@middleware': './src/middlewares' },
          { '@modules': './src/modules' },
          { '@routes': './src/routes' },
          { '@navigation': './src/navigation' },
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
