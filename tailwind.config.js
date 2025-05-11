module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "soft-xl": "0 6px 6px rgba(0, 0, 0, 0.05)", // shadow-soft-xl
      },
      minWidth: {
        base: "325px", // min-w-base
      },
      maxWidth: {
        container: "1200px", // max-w-container
      },
      screens: {
        desktop: "1200px", // 데스크탑: 1200px 이상
        tablet: { max: "1199px" }, // 태블릿: 768px ~ 1199px
        mobile: { max: "767px" }, // 모바일: 0 ~ 767px
      },
      colors: {
        primary: {
          100: "#3692ff",
          200: "#1967d6",
          300: "#1251aa",
        },

        secondary: {
          10: "#FCFCFC",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        error_red: {
          50: "#f74747",
        },
      },
    },
  },
  plugins: [],
};
