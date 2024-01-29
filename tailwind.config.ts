import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: ['0.625rem', { lineHeight: '0.75rem' }], // 10px
      xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      base: ['1rem', { lineHeight: '1.5rem' }], // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
      '1.5xl': ['1.375rem', { lineHeight: '1.875rem' }], // 22px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
      '2.5xl': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      '3.5xl': ['2rem', { lineHeight: '2.5rem' }], // 32px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      '4.5xl': ['2.5rem', { lineHeight: '2.75rem' }], // 40px
      '5xl': ['3rem', { lineHeight: '3.625rem' }], // 48px
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        archivo: ['var(--font-archivo)'],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#1690DF', // primary
            100: '#E8F2FC',
            200: '#B0DAF5',
            300: '#62B5EC',
            400: '#1690DF', // primary
            500: '#125F91',
          },
          grey: {
            DEFAULT: '#F4F4F4',
            100: '#F4F4F4',
            200: '#EAEAEA',
            300: '#D4D4D4',
            400: '#A9A9A9',
            500: '#7F7F7F',
            600: '#545454',
          },
          green: {
            DEFAULT: '#39AA58',
            100: '#F0F7E1',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
