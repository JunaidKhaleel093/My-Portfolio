/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display"', 'serif', 'Montserrat', 'Philosopher', 'Alegreya', 'sans-serif' ],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#111827',
        secondary: '#A0AEC0',
        binary: '#00755e',
        dark: '#555555',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',
      },
      fontFamily: {
        signature: ['Great Vibes',],
      },
    },
  },
  plugins: [],
}