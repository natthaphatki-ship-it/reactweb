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
        primarySubContent:'#23e7d7',
        primaryBase: '#08ee96',
        primaryAccent: '#ff0000',
        primaryBg: '#fcfcfc',
        PrimaryBase2: '#76f18a',
        
      }
    },
  },
  plugins: [],
}

