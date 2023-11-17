/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#8EACCD",
        greenie: "#D7E5CA",
        yellowie: "#F9F3CC",
        lightblue: "#D2E0FB",
      }
    },
  },
  plugins: [],
}