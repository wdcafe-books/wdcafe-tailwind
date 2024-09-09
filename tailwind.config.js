/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // 'custom-color': '#c60'
        'custom-color': {
          50: '#fff2e6',
          100: '#ffe5cc',
          200: '#ffcb99',
          300: '#ffb166',
          400: '#ff9733',
          500: '#cc6600',
          600: '#a35200',
          700: '#7a3d00',
          800: '#522900',
          900: '#291400',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}


