/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#687181',
        'border-zinc-350': '#b0b5b8',
      },
      borderWidth: {
        '3': '3px',
      },
      screens: {
        'smx': '900px',
      },
    },
  },
  plugins: [],
}

