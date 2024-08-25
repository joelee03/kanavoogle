/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Lancelot', 'sans-serif']
      },
      colors:{
        'webcolor': '#7AA647',
        'aftercolor' : "#678a3d"
      }
    },
  },
  plugins: [],
}