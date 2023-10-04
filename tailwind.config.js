/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', /* Tell tailwind adding darkmode via class */
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBackground': '#181818',
        'background': '#f2f2f2',
        'darkText': '#121212',
        'text': '#dbdbdb',
        'button-hover': '#161616',
        'project-tools-bg': '#131c80',
      }
    },
    fontFamily: {
      signature: ["Roboto Slab"],
    }
  },
  plugins: [],
}

