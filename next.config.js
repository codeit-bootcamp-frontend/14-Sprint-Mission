/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ App Router 활성화 (Next 13 이상)
  },
  images: {
    domains: [
      "cdn.wccftech.com",
      "example.com",
      "image.hanatour.com",
      "cdn.choicenews.co.kr",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "bootcamp-project-api.s3.ap-northeast-2.amazonaws.com",
      "cdn.pixabay.com",
      "i.pinimg.com",
      "upload.wikimedia.org",
      "image.hanatour.com",
      "encrypted-tbn0.gstatic.com",
      "health.chosun.com",
      "via.placeholder.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
