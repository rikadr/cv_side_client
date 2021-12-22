module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./components/BG/**/*.{js,ts,jsx,tsx}", "./components/SirkelNavn/**/*.{js,ts,jsx,tsx}",
          "./components/ContentCard/**/*.{js,ts,jsx,tsx}", "./components/Intersect/**/*.{js,ts,jsx,tsx}", "./components/Tiles/**/*.{js,ts,jsx,tsx}", "./components/Tiles/Skills/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      titleItal: ['"Italiana"', "sans-serif"],
      bread: ["Quicksand", "sans-serif"],
    },
    fontSize: {
      xs: "1.2rem",
      s: "1.8rem",
      m: "4rem",
      lg: "5rem",
    },

    extend: {
      screens: {
        'w500': '500px',
        'w830': '830px',
        'w1500': '1500px',
      },
      width: {
        'card': '1150px',
        '150': '1500px',
        '120': '120rem',
        '830': '830px',
        '1000': '1000px',

      },
      fontSize: {
        a: "1.0rem",
        b: "1.2rem",
        c: "1.4rem",
        d: "1.6rem",
        e: "1.8rem",
        f: "2.0rem",
        g: "2.2rem",
        h: "2.4rem",
        i: "2.6rem",
        j: "2.8rem",
        k: "3.0rem",
        l: "3.2rem",
        m: "3.4rem",
        n: "3.6rem",
        o: "3.8rem",
        p: "4.0rem",
        q: "4.2rem",
        r: "4.4rem",
        s: "4.6rem",
        t: "4.8rem",
        u: "5.0rem",
        v: "5.2rem",
        w: "5.4rem",
        x: "5.6rem",
        y: "5.8rem",
        z: "6.0rem",      
      },
      height: {
        tall: '31rem',
        mtall: '26rem',
       },
      lineHeight: {
        10: "3.2rem",
        11: "3.5rem",
        12: "4.5rem",
      },
      animation: {
        beat: "beat 1.3s ease-in-out infinite",
        flipIn: "flipIn 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.7s ease-in-out forwards",
        enter: "enter 0.4s ease-in-out forwards",
        exit: "exit 0.3s ease-in-out forwards",
      },
      keyframes: {
        beat: {
          "0%, 20%, 45%, 100%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.01)" },
          "30%": { transform: "scale(1.02)" },
        },
        flipIn: {
          "0%": { transform: "rotatex(90deg)"},
          "30%": { transform: "rotatex(90deg)" },
          "100%": { transform: "rotatex(0deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0.0" },
          "100%": { opacity: "1.0" },
        },
        enter: {
          "0%": { transform: "rotatex(90deg)" },
          "1%": { transform: "rotatey(90deg)" },
          "55%": { transform: "rotatex(-10deg)" },
          "56%": { transform: "rotatey(-10deg)" },
          "99%": { transform: "rotatex(0deg)" },
          "100%": { transform: "rotatey(0deg)" },
        },
        exit: {
          "0%": { transform: "rotatex(0deg)" },
          "100%": { transform: "rotatex(90deg)" },
        },
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
    extend: {},
  },
  plugins: [],
};
