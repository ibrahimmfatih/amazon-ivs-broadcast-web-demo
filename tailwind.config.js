/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const brandColors = {
  blue: {
    custom: '#007bff',
    customhover: '#0056b3',
  },
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'toast-enter': 'fadeScale 3s ease-in',
        'toast-exit': 'fadeScale 3s ease-in reverse',
      },
      keyframes: {
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.2)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            blue: brandColors.blue,
            primary: brandColors.blue.custom,
            primaryAlt: brandColors.blue.customhover,
            secondary: colors.gray[500],
            secondaryAlt: colors.gray[700],
            positive: colors.green[500],
            positiveAlt: colors.green[700],
            destruct: colors.red[500],
            destructAlt: colors.red[700],
            warn: colors.yellow[300],
            warnAlt: colors.yellow[500],
            uiText: colors.gray[900],
            uiTextAlt: colors.gray[100],
            surface: colors.white,
            surfaceAlt: colors.gray[100],
            surfaceAlt2: colors.black,
            border: colors.gray[200],
            overlay: colors.gray[100],
          },
        },
      },
      themes: [
        {
          name: 'dark-theme',
          mediaQuery: '@media (prefers-color-scheme: dark)',
          extend: {
            colors: {
              primary: brandColors.blue.custom,
              primaryAlt: brandColors.blue.customhover,
              secondary: colors.gray[500],
              secondaryAlt: colors.gray[700],
              positive: colors.green[600],
              positiveAlt: colors.green[500],
              destruct: colors.red[600],
              destructAlt: colors.red[500],
              warn: colors.yellow[500],
              warnAlt: colors.yellow[400],
              uiText: colors.gray[300],
              uiTextAlt: colors.gray[700],
              surface: colors.black,
              surfaceAlt: colors.gray[900],
              surfaceAlt2: colors.white,
              border: colors.gray[800],
              overlay: colors.gray[900],
            },
          },
        },
      ],
    }),
  ],
};
