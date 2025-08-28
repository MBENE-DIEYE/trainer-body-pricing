/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
        button: ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-color': '#26262cff',
        'text-color': '#f5f5f5ff',
        'action-color': '#75e6c4ff',
        'accent-color': '#71acd6ff',
      }
    },

  },
  plugins: [],
}