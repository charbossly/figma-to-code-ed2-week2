import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteUi: "#FFFFFF",
        lightGrayUi: "#E5E5E5",
        grayUi: "#C3C3C3",
        darkGrayUi: "#7E7E7E",
        blackUi: "#1D1D1D",
        greenUi: "#2D5C43",
        purpleUi: "#393158",
        oceanUi: "#2A5259",
        oliveUi: "#706947",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        Chillax: ["Chillax", "sans-serif"],
      },
      fontSize: {
        t10: "10px",
        t12: "12px",
        t14: "14px",
        t16: "16px",
        t18: "18px",
        t20: "20px",
        t28: "28px",
        t30: "30px",
        t36: "36px",
        t48: "48px",
      },

      backgroundImage: {
        herobg: "url('/images/herobg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
