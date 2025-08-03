/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107", // Yellow
        secondary: "#FFD54F", // Light yellow
        accent: "#FFE082", // Very light yellow
        dark: {
          100: "#1A1A1A",
          200: "#242424",
          300: "#2D2D2D",
          400: "#363636",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}