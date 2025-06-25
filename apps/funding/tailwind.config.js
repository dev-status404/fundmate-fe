/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#5FBDFF',
        'sub-color': '#DFF2FF',
        'text-active': '#000000',
        'text-unactive': '#343F59',
        'sub-text': '#7E7C7C',
        'input-text': '#94A3B8',
        red: '#FB6565',
        line: '#E2E8F0',
        'gray-background': '#F1F7EC',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        screen: '1200px',
      },
    },
  },
  plugins: [],
};
