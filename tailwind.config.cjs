/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14181c',
        secondary: '#1f262d',
        tertiary: '#99aabb',
      },
      screens: {
        mobile: {
          max: '768px',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
