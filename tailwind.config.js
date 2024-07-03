export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Existing animations
      animation: {
        'fade-in-delay': 'fadeInDelay 2s ease-out forwards',
      },
      keyframes: {
        fadeInDelay: {
          '0%, 50%' : { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}