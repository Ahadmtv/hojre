/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          '0%': { transform: 'scale(0)', opacity: 1, transformOrigin: 'center' },
          '100%': { transform: 'scale(2)', opacity: 0, transformOrigin: 'center' }
        }
      },
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '230': '230px',
        '400':'400px',
        '770':'770px',
        '170':'170px'
      },
      fontFamily: {
        'vazir':"vazir",
        'vazir-bold':'vazir-bold',
        'vazir-light':'vazir-light',
        'vazir-thin':'vazir-thin',
        'vazir-medium':'vazir-medium'
      },
      backgroundImage: {
        'hover-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(31, 41, 55, 0.6))',
      },
    },
  },
  plugins: [],
}

