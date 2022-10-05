/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        stalinist: "Stalinist One",
      },
      colors: {
        dark: "#121212",
        "dark-light": "#222226",
        light: "#fafafa",
        "dark-muted": "#cecece",
        muted: "#5a5a5a",
      },
    },
  },
  plugins: [],
}
