/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {},
    container: { center: true },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
