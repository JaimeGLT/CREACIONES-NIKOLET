/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ballMove1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(80%, -20%) scale(1.1)' },
          '50%': { transform: 'translate(40%, 60%) scale(0.9)' },
          '75%': { transform: 'translate(-20%, 20%) scale(1.05)' },
        },
        ballMove2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-50%, 40%) scale(0.95)' },
          '50%': { transform: 'translate(60%, -30%) scale(1.1)' },
          '75%': { transform: 'translate(30%, 50%) scale(0.9)' },
        },
        ballMove3: {
          '0%, 100%': {
            transform: 'translate(-10%, -10%) scale(1)',
            backgroundColor: 'rgba(255,255,255,0.2)',
          },
          '25%': {
            transform: 'translate(10%, 20%) scale(1.1)',
            backgroundColor: 'rgba(255,255,255,0.3)',
          },
          '50%': {
            transform: 'translate(0%, -10%) scale(0.9)',
            backgroundColor: 'rgba(255,255,255,0.4)',
          },
          '75%': {
            transform: 'translate(-10%, 15%) scale(1.05)',
            backgroundColor: 'rgba(255,255,255,0.3)',
          },
        },
        ballMove4: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-45%, -55%) scale(1.15)' },
          '50%': { transform: 'translate(-50%, -60%) scale(0.95)' },
          '75%': { transform: 'translate(-55%, -45%) scale(1.1)' },
        },
      },
      animation: {
        'ball-move-1': 'ballMove1 6s ease-in-out infinite alternate',
        'ball-move-2': 'ballMove2 8s ease-in-out infinite alternate',
        'ball-move-3': 'ballMove3 10s ease-in-out infinite alternate',
        'ball-move-4': 'ballMove4 7s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
