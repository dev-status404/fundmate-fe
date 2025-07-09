/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    '../funding/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#F59E0B',

        main: '#5FBDFF',
        mainOpacity: '#5FBDFF1A',
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
        sans: ['Pretendard'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      containers: {
        '2xs': '16rem',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
