/** @type {import('tailwindcss').Config} */
import formKitTailwind from "@formkit/themes/tailwindcss";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./tailwind-formkit-theme.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
