/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    __dirname + '/components/**/*.{js,vue,ts}',
    __dirname + '/layouts/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
