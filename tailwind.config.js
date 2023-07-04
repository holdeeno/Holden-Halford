/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'apple-system', 'system-ui', 'sans-serif'],
        'header': ['TiemposHeadline', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
      }
    },
  },
  plugins: [],
}