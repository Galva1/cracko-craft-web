// tailwind.config.js
//Tentei usar uma schematic mas não FUNCOINOU não sei pq
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste conforme sua estrutura
  ],
  theme: {
    extend: {
      colors: {
        'razzle-dazzle-rose': {
          '50': '#fff3fc',
          '100': '#ffe6fb',
          '200': '#ffccf6',
          '300': '#ffa3ec',
          '400': '#ff6de0',
          '500': '#ff33da',
          '600': '#e316b9',
          '700': '#bd0e96',
          '800': '#9a0e79',
          '900': '#7e1162',
          '950': '#550040',
        }
      },
    },
  },
  plugins: [],
};
