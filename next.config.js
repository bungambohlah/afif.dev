module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://afifjusuf.id/',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};
