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
      animation: {
        beat: 'beat 1.3s ease-in-out infinite',
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        beat: {
          '0%, 35%, 80%, 100%': { transform: 'scale(1)'},
          '15%': { transform: 'scale(1.01)'},
          '55%': { transform: 'scale(1.03)'},
        },
        fadeIn: {
          "0%": { transform: 'rotatex(90deg)'},
          "100%": { transform: 'rotatex(0deg)'}
        }
      },
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    variants: {
      /*animation: ["motion-safe"]*/
    },
    extend: {
    },
  },
  plugins: [],
};
