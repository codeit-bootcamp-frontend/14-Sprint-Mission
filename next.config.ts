import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false }
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://panda-market-api.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig
