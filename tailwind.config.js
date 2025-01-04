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
        'javascript': '#F7DF1E',
        'react': '#61DBFB',
        'tailwind': '#06b6d4',
        'mongo': '#3fa037',
        'aws': '#db7900',
        'next': '#454545',
        'nodejs': '#3c873a',
        'typescript': '#3178C6',
        'mysql': '#f29111',
      }
    },
    fontFamily: {
      signature: ["Roboto Slab"],
    }
  },
  plugins: [],
}

