/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-green": "rgb(59, 130, 246)",
        "btn-red": "rgb(239, 68, 68)"
      },
      fontFamily: {
        "primary": ["Poppins"],
      },
      screens: {
        'sm': '400px', 
        'md': '700px',
        'lg': '992px',
        'xl': '1200px', 
        '2xl': '1600px',
      }
      
    },
  },
  plugins: [],
}

