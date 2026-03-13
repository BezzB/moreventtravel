/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': '#f7c500',
        'dark': '#111',
        'overlay': 'rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
