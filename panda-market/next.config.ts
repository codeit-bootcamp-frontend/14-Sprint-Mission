import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // Allow all hostnames
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all hostnames
      },
    ],
  },
};

export default nextConfig;
