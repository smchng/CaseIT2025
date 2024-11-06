import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "/styles/global.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Switzer", "sans-serif"],
        acid:["acid", "sans-serif"]
      },
    },
    colors: {
      white: "#FFFFFF", //default white

      black: "#000000", //default black
      sectionBlack: "#2B2B2B", //BG of home page
      buttonBlack: "#C53434", //default black for buttons
      buttonBlackOff: "#383838", //black for off buttons
      buttonBlackHovered: "#3F3F3F", //black for hovered buttons

      red: "#DA1313", //Branding CaseIT Red
      redDark: "#C53434", //Dark shade of red, usually default red used
      footerRed: "#8B222A", //BG of footer
      buttonRedDark: "#9C2828", //Red for when button is hovered
      borderRedCardFocus: "#99444B", //The default border colour of the focused card

      greyLight: "#7F7F7F", //
      greyDark: "#FAFAFA", //Secondary grey. BG for section
      buttonGreyHover: "#D2D2D2", //hovered button grey
      buttonGreyDisabled: "#E4E4E4", //bg colour for disabled buttons
      buttonGreyDisabledText: "#C7C5C5", //text colour for disabled buttons
      borderGreyDisabledFocus: "#C4C4C4", //The default border colour of disabled card

      pivotBlue: "#0449B0", //Branding PIVOT Blue
      pivotBlueDark: "#04347B", //Darker PIVOT Blue

      // DONT CHANGE THE NAME (SOCIALS)
      Discord: "#7289DA",
      Instagram: "#DD2A7B",
      LinkedIn: "#0077B5",
    },
    fontSize: {
      "3xs": "8px",
      "2xs": "12px",
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "48px",
      "5xl": "104px",
    },
  },
  plugins: [],
};
export default config;
