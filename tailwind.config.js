/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ymcaRed: '#E6402E',
        ymcaBlue: '#003DA5'
      }
    }
  },
  plugins: []
}
