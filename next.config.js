/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    webpack: (config) => {
        config.watchOptions.ignored.push('**/content/pages/**');
        return config;
    }
};

module.exports = nextConfig;
