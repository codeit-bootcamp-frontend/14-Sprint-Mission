module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1200px',             // 데스크탑: 1200px 이상
        tablet: { max: '1199px' },     // 태블릿: 768px ~ 1199px
        mobile: { max: '767px' },      // 모바일: 0 ~ 767px
      },
      colors: {
        primary: '#3692ff',
        primary_200: '#1967d6',
        primary_300: '#1251aa',

        secondary: '#374151',
        secondary_200: '#e5e7eb',
        secondary_500: '#6B7280',

        'cool-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        'error-red': {
          50: '#f74747',
        },
      },
    },
  },
  plugins: [],
};
