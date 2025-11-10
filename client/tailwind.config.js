module.exports = {
  theme: {
    extend: {
      keyframes: {
  fade: {
    '0%': { opacity: '0.6', transform: 'scale(0.8)' },
    '100%': { opacity: '0', transform: 'scale(1.5)' },
  },
},
animation: {
  fade: 'fade 0.7s forwards',
},

    },
  },
  plugins: [],
};
