const pathResolve = require('path').resolve;
const url = require('url');
const publicPath = '/shop/';

module.exports = () => ({
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    port: 8020,
    open: true,
    historyApiFallback: {
      index: url.parse(publicPath).pathname,
    },
    contentBase: pathResolve('./src/assets'),
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});
