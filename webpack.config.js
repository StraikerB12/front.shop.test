
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const vue = require('./webpack/vue');
const sourceMap = require('./webpack/sourceMap');
const filesDev = require('./webpack/filesDev');
const filesProd = require('./webpack/filesProd');
const babel = require('./webpack/babel');
const favicon = require('./webpack/favicon');
const devConf = require('./webpack/webpack.dev.conf');
const prodConf = require('./webpack/webpack.prod.conf');

const commonConfig = function common(env, argv) {
  return merge([
    {
      entry: ['./src/main.js'],
      resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.vue', '.json', '.css', '.html'],
        alias: {
          '~': path.resolve(__dirname, 'src'),
          scss: path.resolve(__dirname, 'src/assets/scss'),
          img: path.resolve(__dirname, 'src/assets/img'),
        },
      },
      node: {
        fs: 'empty'
      },
      plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src') + '/index.html',
          filename: 'index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.devHost': JSON.stringify(argv.devHost),
          'process.env.mode': JSON.stringify(argv.mode),
        }),
      ],
    },
    babel(),
    vue(),
  ]);
};

module.exports = (env, argv) => {
  if (!argv) {
    argv = {
      mode: 'development',
      devHost: '',
    };
  }
  if (argv.mode === 'production') {
    return merge([commonConfig(env, argv), prodConf(), extractCSS(), favicon(), filesProd()]);
  }
  if (argv.mode === 'development') {
    return merge([
      commonConfig(env, argv),
      devConf(),
      devserver(),
      sass(),
      css(),
      sourceMap(),
      filesDev(),
    ]);
  }
};

