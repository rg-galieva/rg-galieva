const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./common.js');

const PUBLIC_PATH = '/';

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    output: {
      filename: '[name].build.js',
      path: resolve(__dirname, './../../dist'),
      publicPath: PUBLIC_PATH,
    },

    plugins: [
      new CleanWebpackPlugin(['dist', 'build'], {
        root: process.cwd(),
        verbose: true,
        dry: false,
      }),
      new CopyWebpackPlugin([
        {
          from: resolve(__dirname, './../deploy_files/'),
          to: './',
        },
      ]),
    ],
  });
};
