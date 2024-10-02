/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3F70B7',
          light: '#E8F4FC',
          dark: '#054D13'
        },
       dark: {
        DEFAULT: '#0A0D14',
      },
      gray: {
        DEFAULT: '#868C98',
      },
      }
    },
  },
  plugins: [],
}
