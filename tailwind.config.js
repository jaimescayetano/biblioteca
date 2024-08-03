/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'auth-container': 'calc(100vw - 400px)',
      }
    },
  },
  plugins: [],
}

