/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red': '#F91944',
      'black': '#191919',
      'gray': '#a09d9d',
      'light-gray':'#F5F5F5',
      'green': '#19E270',
      'white':'#ffffff',
      'blue': '#5278F7'
    },
  },
  plugins: [],
}
