module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
        ],
      }
    ],
    '@babel/plugin-transform-export-namespace-from',
  ],
  presets: ['module:@react-native/babel-preset'],
};
