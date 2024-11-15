/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize  } from 'fluid-tailwind'
import daisyui from "daisyui"


module.exports = {
  content: {
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    extract
    
    },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize,
    extend: {},
  },
  plugins: [ daisyui,fluid],
}