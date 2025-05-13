import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 추가적인 설정들
  webpack(config, { isServer }) {
    // 예시로 웹팩 설정
    if (!isServer) {
      config.resolve.fallback = { fs: false } // 예시 설정
    }
    return config
  },
}

export default nextConfig
