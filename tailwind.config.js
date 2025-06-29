/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-transparent', 'bg-white',
    'text-white', 'text-gray-800',
    'shadow-md'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#9EB2B3', // active/dark
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: []
}
