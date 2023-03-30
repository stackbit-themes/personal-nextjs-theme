const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    webpack: (config) => {
        config.watchOptions.ignored.push('**/content/pages/**');
        return config;
    }
};

module.exports = nextConfig;
