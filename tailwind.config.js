/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./login.html",
    "./administrativo.html",
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
          base: '#2A7AE4',
          claro: '#EAF2FD'
        },
        cinza: {
          base: '#464646',
          claro: '#F5F5F5'
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
