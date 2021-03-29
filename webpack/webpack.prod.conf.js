const path = require('path');
const publicPath = 'shop';
const TerserPlugin = require('terser-webpack-plugin');
//${publicPath}/
module.exports = () => ({
  output: {
    path: path.resolve(__dirname, `../${publicPath}`),
    filename: 'js/[name].[hash].js',
    publicPath: `/`,
  },
  optimization: {
    namedModules: true,
    concatenateModules: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
        sourceMap: false,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
});
