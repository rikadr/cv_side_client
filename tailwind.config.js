module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      titleItal: ['"Italiana"', "sans-serif"],
      bread: ['Quicksand', "sans-serif"]
    },
    fontSize: {
      s: "1.6rem",
      m: "2rem",
      lg: "5rem",
      xs: "1.2rem",
    },

    extend: {
      lineHeight: {
        12: "4.5rem",
      },
    },

    container: {
      center: true,
      padding: "1rem",
      borderStyle: "solid",
      borderColor: "red",
      borderWidth: "10px",

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
