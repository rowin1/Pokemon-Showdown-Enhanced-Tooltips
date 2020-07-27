const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    chrome: './src/index.js',
    firefox: './src/index.js',
  },
  output: {
    filename: '[name]/js/showPokemonTooltip.js',
  },
  mode: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        // Chrome
        { from: 'src/chrome', to: 'chrome' },
        { from: 'src/icons', to: 'chrome/icons' },
        { from: 'src/css', to: 'chrome/css' },

        // Firefox
        { from: 'src/firefox', to: 'firefox' },
        { from: 'src/icons', to: 'firefox/icons' },
        { from: 'src/css', to: 'firefox/css' },
      ],
    }),
  ],
};
