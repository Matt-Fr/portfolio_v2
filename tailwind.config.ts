import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        black: "2px 3px 0px",
        bigBlack: "4px 6px 0px",
        primary: "2px 3px 0px",
        secondary: "2px 3px 0px",
        header: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      },
      // backgroundImage: {
      //   grey: "url('../app/assets/bg-full.svg')",
      // },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#80f4dc",
      secondary: "#468CF7",
      black: "#000000",
      grey: "#FAF9F9",
    },
  },
  plugins: [],
};
export default config;
