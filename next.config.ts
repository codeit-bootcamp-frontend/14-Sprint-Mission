import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "example.com",
      "www.kjcnews.co.kr",
    ],
  },
};

export default nextConfig;
