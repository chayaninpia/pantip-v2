/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          '1' : '#2D2A49',
          '2' : '#44416F',
          '3' : '#3C3963',
          '4' : '#7976a0',
          '5' : '#1f1d33',
          '6' : '#353156',
          'text': {
            '1': '#9d9ac0',
            '2': '#b39ddb',
          }
        }
      }
    },
  },
  plugins: [],
}

