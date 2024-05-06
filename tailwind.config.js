/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#192346',
        secondary: '#FE5301'

      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fade-left': 'fade-left 1.5s linear',
        'fade-in': 'fade-in 1.1s linear',
        'fade-up': 'fade-up 1.1s linear',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

        'fade-left': {
          from: { opacity:'0', transform: 'translate(2rem)'},
          to: { opacity: '1', transform: 'translate(0)'}
        },

        'fade-in': {
          from: { opacity:'0'},
          to: { opacity: '1'}
        },

        'fade-up': {
          from: { opacity:'0', transform: 'translateY(2rem)'},
          to: { opacity: '1', transform: 'translateY(0)'}
        },
      }   
    },
  },
  plugins: [require('flowbite/plugin')],
}

