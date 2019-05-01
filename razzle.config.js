'use strict';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  plugins: ['typescript'],
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig;
    if (dev && target === 'web') {
      config.plugins.unshift(new BundleAnalyzerPlugin())
    }
    if (target === 'web') {
      config.entry.vendor = [
        require.resolve('razzle/polyfills'),
        require.resolve('react'),
        require.resolve('react-dom'),
      ];
    }

    return config;
  },
};
