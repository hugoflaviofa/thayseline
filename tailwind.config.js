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
  },
  plugins: [],
}
