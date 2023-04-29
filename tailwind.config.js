

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
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

