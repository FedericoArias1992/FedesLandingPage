const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([withImages], {
  webpack: (config) => {
    // Customize the webpack configuration if needed
    return config;
  },
});
