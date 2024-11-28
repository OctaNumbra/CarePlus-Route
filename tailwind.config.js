/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'header': '#EBF1EE',
        'body': '#FBFBFB',
        'footer': '#EBF1EE',
        'azul':'#2288AC'
      },
      fontFamily:{
        'cairo' : ['Cairo', 'sans-serif'],
        'dosis' : ['Dosis', 'sans-serif'],
        'grotesque' : ['Dark Grotesque', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}