/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleCustom': '#6c32d2',
        'purpleLight': '#b084e8', // Lighter purple shade

    }, 
  }
  },
  plugins: [],
}

