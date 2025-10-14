/* eslint-disable import/no-anonymous-default-export */
// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        color: {
            primary: '#1c1c22',
            accent: {
                DEFAULT: '#00ff99',
                hover: '#00e187',
                
            }
        },
      padding: {
        '5xl': '10rem',
        '7xl': '14rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
        'xl': '1200px',
      },
      fontFamily: {
        primary: 'var(--font-jetbrainsMono)'
      }
    },
  },
  plugins: [],
};
