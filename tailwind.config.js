/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', /* Tell tailwind adding darkmode via class */
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background-dark': '#181818',
        'background-light': '#f2f2f2',
        'text-dark': '#121212',
        'text-light': '#dbdbdb',
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

