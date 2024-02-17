/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        shadePurple: '#A39EA5',
        shadeGray: '#261F27',
      },
    },
  },
  plugins: [],
}