/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    __dirname + "/components/**/*.{js,vue,ts}",
    __dirname + "/layouts/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00c16a", // var(--color-primary-500)
          50: "#effdf5", // var(--color-primary-50)
          100: "#d9fbe8", // var(--color-primary-100)
          200: "#b3f5d1", // var(--color-primary-200)
          300: "#75edae", // var(--color-primary-300)
          400: "#00dc82", // var(--color-primary-400)
          500: "#00c16a", // DEFAULT
          600: "#00a155", // var(--color-primary-600)
          700: "#007f45", // var(--color-primary-700)
          800: "#016538", // var(--color-primary-800)
          900: "#0a5331", // var(--color-primary-900)
          950: "#052e16", // var(--color-primary-950)
        },
        black: {
          DEFAULT: "#010101",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#010101",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        aquamarine: {
          DEFAULT: "#00d9a6",
          100: "#002c22",
          200: "#005843",
          300: "#008465",
          400: "#00af87",
          500: "#00d9a6",
          600: "#16ffc9",
          700: "#51ffd6",
          800: "#8bffe4",
          900: "#c5fff1",
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
        red: {
          DEFAULT: "#ff0000",
          100: "#330000",
          200: "#660000",
          300: "#990000",
          400: "#cc0000",
          500: "#ff0000",
          600: "#ff3333",
          700: "#ff6666",
          800: "#ff9999",
          900: "#ffcccc",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
