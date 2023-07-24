/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url(drawers.jpg)"
      },

       colors: {
        "dark-gray-blue": "hsl(217, 19%, 35%)",
        "dark-blue": "hsl(214, 17%, 51%)",
        "gray-blue": "hsl(212, 23%, 69%)",
        "light-gray-blue": "hsl(210, 46%, 95%)",
        
      },

      fontFamily: {
        "sans-serif": ['Manrope', 'sans-serif']
      },

      screens: {
        "mobile": "200px",
        "desktop": "768px"
      }
    },
   

    

    
  },
  plugins: [],
}

