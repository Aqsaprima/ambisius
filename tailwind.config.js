/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fifth': '#293241',
        'primary': '#EE6C4D',
        'biru': '#3D5A80',
        'secondary': '#98C1D9',
        'abu': '#E8E8E8',
      },
      height:{
        'sidebar': 'calc(100vh - 5rem)',
        '2s': '200vh',
      },
    }
  },
  plugins: [],
}

