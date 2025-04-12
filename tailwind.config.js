// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        ar53: { raw: '(min-aspect-ratio: 0.53)' },
        ar85: { raw: '(min-aspect-ratio: 0.85)' },
        ar120: { raw: '(min-aspect-ratio: 1.2)' },
      },
    },
  },
  plugins: [],
};
