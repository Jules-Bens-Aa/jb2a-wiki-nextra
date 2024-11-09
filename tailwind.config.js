/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'jb2a_grey': {
          100: '#141414',
          200: '#212121',
          300: '#313131',
          400: '#414141'
        },
        'jb2a_orange': {
          100: '#e3621f',
          200: '#cc6127',
          300: '#ad5b2f',
          400: '#8f5232'
        },
        'jb2a_yellow': {
          100: '#ffba00',
          200: '#dfa812',
          300: '#cf9f19',
          400: '#be9627'
        },
        'jb2a_white': {
          100: '#dfdfdf',
          200: '#dfdfdf',
          300: '#dfdfdf',
          400: '#dfdfdf'
        },
      },
    },
  },
  plugins: [],
}