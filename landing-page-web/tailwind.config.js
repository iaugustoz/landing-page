/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', '.**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'dark-grey-700': '#7D7987',
        'mustard-700': '#FF9900',
      },
    },
  },
  plugins: [],
};
