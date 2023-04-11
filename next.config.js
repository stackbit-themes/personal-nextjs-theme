/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    webpack: (config) => {
        config.watchOptions.ignored.push('**/content/**');
        return config;
    }
};

module.exports = nextConfig;
