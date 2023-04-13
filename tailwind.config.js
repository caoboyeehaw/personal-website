/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      colors: {
        'github-grey': '#30363d',
      },

      boxShadow: {
        '4xl': '10px 20px 45px -15px rgba(0, 0, 0, 0.6)',
        '5xl': '5px 12px 20px -12px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  
  plugins: [],
}
