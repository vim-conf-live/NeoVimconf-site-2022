module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        //'16': 'repeat(16, minmax(0, 1fr))',
        'hero-info': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        brand: {
          discord: '#5865F2',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        glow: {
          from: {
            filter: `blur(3px)`,
          },
          to: {
            filter: `blur(6px)`,
          },
          glow2: {
            from: {
              filter: `blur(10px)`,
            },
            to: {
              filter: `blur(15px)`,
            },
          },
        },
      },
      animation: {
        glow: 'glow 2s alternate infinite',
        glow2: 'glow2 2s alternate infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
