/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mikki-mase.com',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
