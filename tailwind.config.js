import plugin from 'tailwindcss/plugin';


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
  
  plugins: [
    plugin(function({ addUtilities, theme }) { // Include theme in the function parameters
      const newUtilities = {
        '.gradient-border-top': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px', // Adjust the thickness of the border
            background: `linear-gradient(to right, ${theme('colors.cyan.500')}, ${theme('colors.blue.500')})`, // Correctly access theme colors
            borderRadius: '2px', // Optional: if you want rounded corners
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ]
}