/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1e1e1e',
        surface: '#5d5d5d',
        line: '#e35113',
        primary: '#ffb653',
        accent: '#338fff',
        text: '#fff',
        hover: '#fe9619',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            h1: {
              color: theme('colors.text'),
              a: {
                color: theme('colors.text'),
              },
            },
            h2: {
              color: theme('colors.text'),
              a: {
                color: theme('colors.text'),
              },
            },
            h3: {
              color: theme('colors.text'),
              a: {
                color: theme('colors.text'),
              },
            },
            h4: {
              color: theme('colors.primary'),
              a: {
                color: theme('colors.primary'),
              },
            },
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.hover'),
                transition: 'all 0.2s ease',
              },
            },
            header: {
              img: {
                margin: 0,
              },
              a: {
                color: theme('colors.text'),
                // TODO: remove link underline
                '&:hover': {
                  color: theme('colors.hover'),
                  transition: 'all 0.2s ease',
                },
              },
            },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.slate.800'),
              borderRadius: theme('borderRadius.sm'),
              fontWeight: theme('fontWeight.normal'),
              fontSize: theme('fontSize.xs'),
              padding: theme('spacing.1'),
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
