import animations from '@midudev/tailwind-animations'

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
      },
      colors: {
        'primary-color': '#292327',
        'label-color': '#6A6465',
      }
    },
  },
  plugins: [animations],
}

