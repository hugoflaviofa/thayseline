/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mdMob': {'max': '767px'},
      'md': '768px',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 1s ease-out'
      }
    },
  },
  plugins: [],
}
