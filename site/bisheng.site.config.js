const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: [
    './components',
    './docs',
    'CHANGELOG.md', // TODO: fix it in bisheng
  ],
  theme: './site/desktop',
  htmlTemplate: path.join(__dirname, './desktop/static/template.html'),
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    return config;
  },
});
