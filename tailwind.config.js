/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#444B51',
        'secondary': '#EE7101',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

