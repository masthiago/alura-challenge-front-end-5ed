/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assests/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/img/bg-banner.jpg')",
        search: "url('/assets/img/icon-search-gray.svg')"
      },
      colors: {
        azul :{
          normal: '#2A7AE4'
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
