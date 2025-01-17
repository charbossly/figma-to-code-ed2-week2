import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "b-sm": "335px",
      sm: "375px",
      "b-md": "676px",
      md: "768px",
      lg: "1024px",
      "b-xl": "1200px",
      xl: "1440px",
    },
    extend: {
      spacing: {
        "4.5": "18px",
        "6.5": "26px",
        "18": "72px",
        "30": "120px",
        "88": "350px",
        "93": "372px",
        "111": "446px",
        "115": "460px",
        "125": "500px",
        "150": "600px",
      },
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
        "b-stroke": "#4A4A4A",
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
      borderRadius: {
        52: "52px",
      },

      backgroundImage: {
        herobg: "url('/images/herobg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
