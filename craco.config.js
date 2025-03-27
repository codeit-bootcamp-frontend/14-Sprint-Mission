// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@/api": path.resolve(__dirname, "src/api"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/data": path.resolve(__dirname, "src/data"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/layouts": path.resolve(__dirname, "src/layouts"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/schema": path.resolve(__dirname, "src/schema"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
