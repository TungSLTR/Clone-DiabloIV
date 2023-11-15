/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'customBlueIcon': 'rgb(0, 174, 255)',
        'hoverCustomBlueIcon': 'rgb(0, 200, 255)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        'fenris': ["Old Fenris", 'serif'],
        'alegreyaSansMedium': ["Alegreya Sans Medium", 'sans-serif'],
        'exocet': ["exocet", 'sans-serif']
      
      },

      dropShadowBrand: {
        'shadowRed': '0px 0px 10px rgba(224, 165, 115, 0.66), 0px 0px 10px #C85541, 0px 4px 15px #000000'
      }
    },
  },
  plugins: [],
}
