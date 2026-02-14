/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:'#BF4646',
        primaryContent:'#7EACB5',
        primarySubContent:'#E7EACB5',
        primaryBase: '#EDDCC6',
        primaryAccent: '#EDDCC6',
        primaryBg: '#44A194',
        
      }
    },
  },
  plugins: [],
}

