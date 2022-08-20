module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://afif.dev',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};
