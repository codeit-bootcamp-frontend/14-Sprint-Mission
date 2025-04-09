/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rokaf: ['ROKAF Sans', 'sans-serif'],
        pretendard: ['Pretendard'],
      },
      colors: {
        gray: {
          900: 'var(--gray-900)',
          800: 'var(--gray-800)',
          700: 'var(--gray-700)',
          600: 'var(--gray-600)',
          500: 'var(--gray-500)',
          400: 'var(--gray-400)',
          300: 'var(--gray-300)',
          200: 'var(--gray-200)',
          100: 'var(--gray-100)',
          50: 'var(--gray-50)',
        },
        blue: {
          DEFAULT: 'var(--blue)',
          100: 'var(--blue-100)',
          bg: 'var(--blue-bg)',
          50: 'var(--blue-50)',
        },
      },
    },
  },
  plugins: [],
};
