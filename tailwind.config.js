/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "lemonade"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

