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
        dinProBlack: ["DINPro-Black", "sans-serif"],
        dinProBold: ["DINPro-Bold", "sans-serif"],
        dinProLight: ["DINPro-Light", "sans-serif"],
        dinProMedium: ["DINPro-Medium", "sans-serif"],
        dinProRegular: ["DINPro-Regular", "sans-serif"],
      },
    },
    colors: {
      white: "#FDFDF3",
      black: "#101010",
      redDark: "#8B222A",
      redLight: "#C53434",
      greyLight: "#7F7F7F",
      greyDark: "#FAFAFA",
      // DONT CHANGE THE NAME (SOCIALS)
      Discord: "#7289DA",
      Instagram: "#DD2A7B",
      LinkedIn: "#0077B5",
    },
    fontSize: {
      "3xs": "8px",
      "2xs": "11px",
      xs: "16px",
      sm: "21px",
      base: "27px",
      lg: "35px",
      xl: "46px",
      "2xl": "61px",
      "3xl": "79px",
      "4xl": "104px",
      "5xl": "136px",
    },
    backgroundImage: {
      downtown: "url('/imgs/Downtown-Vancouver.png')",
    },
  },
  plugins: [],
};
export default config;
