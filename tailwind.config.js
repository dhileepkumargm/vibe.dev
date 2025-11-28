/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'particle-fade': 'particle-fade var(--particle-duration,6s) linear infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        'particle-fade': {
          '0%': { opacity: '0', transform: 'scale(0.4) translateY(0)' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(1) translateY(-6px)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
