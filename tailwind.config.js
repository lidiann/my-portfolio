/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
  extend: {
    colors: {
      'beige': '#FBF9F1',
      'purple-light': '#EAE6F9',
      'purple-dark': '#4C3B71',
      'purple-text': '#7B6A9B',
    },
  },
},
    plugins: [],
  };