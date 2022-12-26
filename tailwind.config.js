/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#282a36',
        surface: '#383A58',
        line: '#e35113',
        primary: '#ffb86c',
        accent: '#6cb3ff',
        text: '#f8f8f2',
        muted: '#bcc2cd',
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
              textUnderlineOffset: '5px',
              textDecorationThickness: '2px',
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
                textDecoration: 'none',
              },
              nav: {
                a: {
                  '&:hover': {
                    borderBottom: '3px solid',
                    color: theme('colors.hover'),
                    transition: 'all 0.2s ease',
                  },
                },
              },
            },
            article: {
              a: {
                textDecoration: 'none',
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
