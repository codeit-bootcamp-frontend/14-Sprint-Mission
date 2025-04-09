import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
    ],
  },
  build: {
    assetsInlineLimit: 0 // <--- 모든 에셋 인라이닝 비활성화
  }
})
