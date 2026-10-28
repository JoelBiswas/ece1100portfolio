/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 96px))' },
        },
        slideRight: {
          '0%': { transform: 'translateX(calc(-100% - 96px))' },
          '100%': { transform: 'translateX(0)' },
        },
        rotateTextLarge: {
          '0%': { transform: 'translateY(-120px)' },
          '12%': { transform: 'translateY(-120px)' },
          '17%': { transform: 'translateY(-80px)' },
          '29%': { transform: 'translateY(-80px)' },
          '33%': { transform: 'translateY(-40px)' },
          '45%': { transform: 'translateY(-40px)' },
          '50%': { transform: 'translateY(0px)' },
          '62%': { transform: 'translateY(0px)' },
          '67%': { transform: 'translateY(40px)' },
          '79%': { transform: 'translateY(40px)' },
          '83%': { transform: 'translateY(80px)' },
          '95%': { transform: 'translateY(80px)' },
          '100%': { transform: 'translateY(120px)' },
        },
        rotateTextMedium: {
          '0%': { transform: 'translateY(-108px)' },
          '12%': { transform: 'translateY(-108px)' },
          '17%': { transform: 'translateY(-72px)' },
          '29%': { transform: 'translateY(-72px)' },
          '33%': { transform: 'translateY(-36px)' },
          '45%': { transform: 'translateY(-36px)' },
          '50%': { transform: 'translateY(0px)' },
          '62%': { transform: 'translateY(0px)' },
          '67%': { transform: 'translateY(36px)' },
          '79%': { transform: 'translateY(36px)' },
          '83%': { transform: 'translateY(72px)' },
          '95%': { transform: 'translateY(72px)' },
          '100%': { transform: 'translateY(108px)' },
        },
        rotateTextSmall: {
          '0%': { transform: 'translateY(-96px)' },
          '12%': { transform: 'translateY(-96px)' },
          '17%': { transform: 'translateY(-64px)' },
          '29%': { transform: 'translateY(-64px)' },
          '33%': { transform: 'translateY(-32px)' },
          '45%': { transform: 'translateY(-32px)' },
          '50%': { transform: 'translateY(0px)' },
          '62%': { transform: 'translateY(0px)' },
          '67%': { transform: 'translateY(32px)' },
          '79%': { transform: 'translateY(32px)' },
          '83%': { transform: 'translateY(64px)' },
          '95%': { transform: 'translateY(64px)' },
          '100%': { transform: 'translateY(96px)' },
        }
      },
      animation: {
        slideLeft: 'slideLeft 100s linear infinite',
        slideRight: 'slideRight 100s linear infinite',
        'spin-slow': 'spin 100s linear infinite',
        'spin-slow-reverse': 'spin 100s linear infinite reverse',
        'rotate-text-large': 'rotateTextLarge 6s linear infinite 1s reverse',
        'rotate-text-medium': 'rotateTextMedium 6s linear infinite 1s reverse',
        'rotate-text-small': 'rotateTextSmall 6s linear infinite 1s reverse',
      },
      dropShadow: {
        'custom': 'rgba(0, 0, 0, 0.25) 0px 4px 2px',
      }
    },
  },
  plugins: [],
}

