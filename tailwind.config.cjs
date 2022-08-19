/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        project: "rgba(255, 255, 255, 0.8)",
      },
      color: {
        primaryGreen: "#1f2937"
      }
    },
  },
  plugins: [],
}
