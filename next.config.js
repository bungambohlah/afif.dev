module.exports = {
  webpack: (config, {
    isServer
  }) => {
    // Fixes npm packages that depend on 'fs' module
    if (!isServer) {
      config.node = {
        fs: "empty", // when i put this line i get the 'net' error
        net: "empty" // then i put the 'net' line
      };
    }

    return config;
  },
  images: {
    loader: "imgix",
    path: "https://afifjusuf.id/",
  }
}