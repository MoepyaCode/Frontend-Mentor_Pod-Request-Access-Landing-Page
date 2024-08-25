/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      }
    },
  },
  plugins: [],
}