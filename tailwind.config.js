module.exports = {
  darkMode: 'class', // or 'media or false
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'linkedin': '#0072b1',
        'linkedin-hover': '#005e91',
        'twitter': '#1DA1F2',
        'twitter-hover': '#177fbf',
        dark: "#24283b",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.700"),
                textDecoration: "none",
              },
            },
          },
        },

        dark: {
          css: {
            color: "#7982a9",
            a: {
              color: "#9ECE6A",
              "&:hover": {
                color: "#9ECE6A",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}