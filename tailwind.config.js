module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      titleItal: ['"Italiana"', 'sans-serif'],
    },
    fontSize: {
      'm': '2rem',
      'lg': '5rem'
    },
    extend: {},
    
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
