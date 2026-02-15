/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:'#9BC264',
        primaryContent:'#000000',
        primarySubContent:'#E7EACB5',
        primaryBase: '#EDDCC6',
        primaryAccent: '#30364F',
        primaryBg: '#fcfcfc',
        
      }
    },
  },
  plugins: [],
}

