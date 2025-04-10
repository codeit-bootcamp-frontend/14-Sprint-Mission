import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Tailwind가 클래스를 감지할 수 있도록 설정
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // ✅ Tailwind에서 기본 `sans` 폰트를 Pretendard로 변경
      },
      screens: {
        mobile: "300px",
        tablet: "768px",
        pc: "1200px",
        "max-mobile": { max: "767px" },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".label-primary": {
          display: "block",
          color: "#1F2937",
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "16px",
        },
        ".flex-center": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        ".input-primary": {
          width: "100%",
          height: "56px",
          borderRadius: "12px",
          backgroundColor: "#F3F4F6",
          paddingLeft: "24px",
          marginBottom: "24px",
        },
        ".btn-primary": {
          width: "100%",
          height: "56px",
          padding: "12px 294px",
          backgroundColor: "#3692FF",
          borderRadius: "40px",
          color: "#F3F4F6",
          fontSize: "20px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
        },
        ".social-login": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "74px",
          backgroundColor: "#E6F2FF",
          borderRadius: "8px",
          marginBottom: "24px",
        },
        ".header-primary": {
          display: "flex",
          top: "0px",
          left: "0px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          zIndex: 1000,
        },
        "@media (min-width: 300px)": {
          ".label-primary": {
            width: "100%",
          },
        },
      });
    }),
  ],
};
