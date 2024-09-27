/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors:{
        customYellow: '#FFFB00',
        customGreen: '#59FF00',
        customPink: '#FF07D6',
        customOrange: '#FF6607',
        customBlue: '#3407FF',
      }
    },
  },
  plugins: [],
}

