import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "/styles/global.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", "sans-serif"],
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      sectionBlack: "#2B2B2B",
      red: "#DA1313",
      redDark: "#C53434",
      footerRed: "#8B222A",
      greyLight: "#7F7F7F",
      greyDark: "#FAFAFA",
      buttonGreyLight: "#3F3F3F",
      buttonRedDark: "#9C2828",
      // DONT CHANGE THE NAME (SOCIALS)
      Discord: "#7289DA",
      Instagram: "#DD2A7B",
      LinkedIn: "#0077B5",
    },
    fontSize: {
      "3xs": "10px",
      "2xs": "15px",
      xs: "20px",
      sm: "30px",
      base: "27px",
      lg: "40px",
      xl: "50px",
      "2xl": "61px",
      "3xl": "79px",
      "4xl": "104px",
      "5xl": "136px",
    },
  },
  plugins: [],
};
export default config;
