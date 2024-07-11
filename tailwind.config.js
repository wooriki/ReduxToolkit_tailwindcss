const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0d9488",
          secondary: "#64748b",
          accent: "#d946ef",
          neutral: "#374151",
          "base-100": "#ffffff", // 기본 배경색 설정
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
});
