const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-dm-sans)'],
    },
    fontSize: {
      xxs: ['0.625rem', { lineHeight: '0.8125rem' }], // 10px
      xs: ['0.75rem', { lineHeight: '1.25rem' }], // 12px
      sm: ['0.875rem', { lineHeight: '1.5rem' }], // 14px
      base: ['1rem', { lineHeight: '1.25rem' }], // 16px
      md: ['1.125rem', { lineHeight: '1.6875rem' }], // 18px
      lg: ['1.25rem', { lineHeight: '1.5625rem' }], // 20px
      xl: ['1.4375rem', { lineHeight: '1.8125rem' }], // 23px
      'display-xs': ['1.75rem', { lineHeight: '2.1875rem' }], // 28px
      'display-sm': ['2.0625rem', { lineHeight: '2.5625rem' }], // 33px
      'display-md': ['2.5rem', { lineHeight: '3.125rem' }], // 40px
      'display-lg': ['3rem', { lineHeight: '3.75rem' }], // 48px
      'display-xl': ['3.625rem', { lineHeight: '4.5625rem' }], // 58px
      'display-2xl': ['3.875rem', { lineHeight: '4.875rem' }], // 62px
    },
    colors: {
      ...colors,
    },
    screens: {
      xxs: '475px',
      xs: '530px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
  ],
}
