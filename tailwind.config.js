/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['YS Text', 'sans-serif'],
        secondary: ['sans-serif'],
        serif: ['serif'],
      },
    },
    screens: {
      'lg': {'max': '899.95px'},
    },
    width: {
      calc: 'calc(100% - 40px)',
    },
  },
  plugins: [],
}

