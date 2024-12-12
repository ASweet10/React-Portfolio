/** @type {import('tailwindcss').Config} */
module.exports = {
  //darkMode: 'class', /* Tell tailwind adding darkmode via class */
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkBackground': '#121212',
        'background': '#f2f2f2',
        'darkText': '#121212',
        'text': '#dbdbdb',
        'projectTiles': '',
        'button-dark': '#15316b',
        'button-light': '#3b77f5',
        'button-hover': '#161616',
        'html': '#f23000',
        'css': '#264de4',
        'react': '#61DBFB',
        'tailwind': '#06b6d4',
        'mongo': '#3fa037',
        'aws': '#db7900',
        'next': '#454545',
        'typescript': '#3178C6',
      }
    },
    fontFamily: {
      signature: ["Roboto Slab"],
    }
  },
  plugins: [],
}

