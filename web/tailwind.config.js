/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#c7d6fd',
          300: '#a1bbfb',
          400: '#7497f7',
          500: '#667eea',
          600: '#4a5ad8',
          700: '#3d48bd',
          800: '#353f9a',
          900: '#31397a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#764ba2',
          600: '#6b2f8a',
          700: '#5a2171',
          800: '#49195d',
          900: '#3b144a',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
}
