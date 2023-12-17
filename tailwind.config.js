/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ['Fraunces', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        md: '16px',
      },
      colors: {
        primary: {
          SoftRed: 'hsl(7, 99%, 70%)',
          Yellow: 'hsl(51, 100%, 49%)',
          DarkDesaturatedCyanGDesignText: 'hsl(167, 40%, 24%)',
          DarkBluePhotographyText: 'hsl(198, 62%, 26%)',
          DarkModerateCyanFooter: 'hsl(167, 44%, 70%)',
          FooterText: 'hsl(167, 46%, 31%)',
        },
        neutral: {
          VeryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
          VeryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
          DarkGrayishBlue: 'hsl(232, 10%, 55%)',
          GrayishBlue: 'hsl(210, 4%, 67%)',
          White: 'hsl(0, 0%, 100%)',
        },
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'ping-short': 'ping 1s ease-in 1',
      },
    },
  },
  plugins: [],
};
