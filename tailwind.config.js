/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
        'secondary': '#01ee91'
      },
      fontFamily: {
        'fontPrimary': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}