/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'scroll-image': 'scroll 5s linear forwards',  
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(100%)' }, 
          '100%': { transform: 'translateY(0)' },    
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      duration: ['group-hover'],
    },
  },
  plugins: [
    require('daisyui'), 
  ],
};
