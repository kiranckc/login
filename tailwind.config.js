/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        anime: {
          purple: '#7e22ce',
          blue: '#3b82f6',
          pink: '#db2777',
          dark: '#151a36',
          darker: '#0f1225',
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};