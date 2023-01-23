/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assests/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../img/bg-banner.jpg')",
        search: "url('../img/icon-search-gray.svg')"
      },
      colors: {
        azul :{
          base: '#2A7AE4'
        },
        cinza: {
          base: '#464646'
        }
      },
      fontFamily: {
        primary: ['Raleway']
      },
      screens: {
        'xl2': '1440px',
        // => @media (min-width: 640px) { ... }
      }
    },
  },
  plugins: [],
}
