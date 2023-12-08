/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors: {
        primary: "#2e2c69",
        secondary: "#ffe433",
        neutral: "#333",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
