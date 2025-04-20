// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        landscape: 'calc((1vw + 1vh) * 0.8)',
        portrait: 'calc((1vw + 1vh) * 1.2)',
      },
    },
  },
  plugins: [],
};
