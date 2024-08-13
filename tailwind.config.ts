import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "b-white": "#FFFFFF",
        "b-light-gray": "#E5E5E5",
        "b-gray": "#C3C3C3",
        "b-dark-gray": "#7E7E7E",
        "b-black": "#1D1D1D",
        "b-green": "#2D5C43",
        "b-purple": "#393158",
        "b-ocean": "#2A5259",
        "b-olive": "#706947",
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
        t24: "24px",
        t28: "28px",
        t30: "30px",
        t36: "36px",
        t42: "42px",
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
