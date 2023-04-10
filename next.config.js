/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.watchOptions.ignored.push('**/content/**');
        return config;
    }
};

module.exports = nextConfig;
