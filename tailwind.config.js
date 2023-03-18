const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "40px": ["40px", "48px"],
      },
      maxWidth: {
        "4/5": "80%",
      },
      colors: {
        "pink-pastel": "#ffa7c4",
        "pink-hot": "#D23669",
        "light-bgsec": "#f9fafb",
        "light-text": "#222",
        "dark-bg": "#282c35",
        "dark-bgsec": "#363c48",
        "dark-text": "hsla(0,0%,100%,0.88)",
        crimson: "#DB143C",
        "ef-keppel": "#45b298", //colors green-efishery medium
        "ef-mint": "#49bf9d", //colors green-efishery light
        "ef-zomp": "#40a994", //colors green-efishery dark
      },
    },
  },
  plugins: [],
};
