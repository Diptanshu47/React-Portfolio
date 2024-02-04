/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '1250px'},
      'sm': {'max': '600px'}, 
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}

