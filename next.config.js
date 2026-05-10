module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://alexcortinovis.tech')],
  },
  output: 'export',
  // Optimizations for production builds
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};