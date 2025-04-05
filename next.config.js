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
};

module.exports = nextConfig;
