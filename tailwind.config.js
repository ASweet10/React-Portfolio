/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-bg-one': '#080606',
      }
    },
    fontFamily: {
      signature: ["Roboto Slab"],
    }
  },
  plugins: [],
}

