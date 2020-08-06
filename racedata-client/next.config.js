const withPcss = require('next-pcss');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  withPcss,
]);