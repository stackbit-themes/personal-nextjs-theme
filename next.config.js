const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
    webpack: (config) => {
        config.watchOptions.ignored.push('**/content/**');
        return config;
    }
};

/** @type {import('next').NextConfig} */
/*const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = nextConfig*/
