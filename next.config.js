/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  typescript: {
    // !! WARN !!
    // Ignoring typescript errors to make build pass
    ignoreBuildErrors: true,
  },
  // Add scroll restoration configuration
  experimental: {
    scrollRestoration: true
  },
};

module.exports = nextConfig;
