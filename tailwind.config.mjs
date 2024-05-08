/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          900: "#A4C639"
        }
      },
      spacing: {
        "18": "4.5rem",
      }
    },
  },
  plugins: [],
}