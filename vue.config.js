const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/rick-and-morty/' : '/',
  outputDir: 'dist',
  filenameHashing: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'rick-and-morty';
        return args;
      });
  }
}