

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
        '70vh':'70vh',
        '80vh':'80vh',
        '120vh':'120vh'

      },
      maxHeight:{
        '10vh':'10vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '50%':'50%',
        '30%':'30%'
      },
      maxWidth:{
        '65%':'65%',
        '70%':'70%',
      },
      width:{
        '33%':'33%',
        '50%':'50%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '100%':'100%'
      },
      backgroundSize: { //trucco per far funzionare la class transition con bg-gradient
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-transition')],
}

