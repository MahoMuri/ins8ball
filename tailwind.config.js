/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firaCode: ["Fira Code", "serif"],
      },
      colors: {
        ins8ball: {
          blue: "#365E87",
          green: "#6ECCAF",
          yellow: "#F3ECB0",
          gray: "#B1B1B1",
          black: "#181818",
        },
      },
      backgroundColor: {
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
