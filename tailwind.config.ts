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
        black: "2px 3px 0px rgba(0, 0, 0)",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#80f4dc",
      secondary: "#468CF7",
      black: "#000000",
    },
  },
  plugins: [],
};
export default config;
