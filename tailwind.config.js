

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lmgreen:'#188803',
        standardgray:{
          dark:'#e6e6e6'
        }
      },
      minHeight: {
        '10vh': '10vh',
        '80vh':'80vh'
      },
      width:{
        '33%':'33%',
        '50%':'50%',
        '70%':'70%',
        '100%':'100%'
      },
      backgroundSize: { //trucco per far funzionare la class transition con bg-gradient
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-transition')],
}

