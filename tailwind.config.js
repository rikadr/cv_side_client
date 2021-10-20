module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'lg': '2rem'
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
