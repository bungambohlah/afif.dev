module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
};
