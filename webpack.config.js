const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
  ],

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  devServer: {
    port: 8080,
    open: true,
    stats: 'errors-only',
  },
};
