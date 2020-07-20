const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          // '"Kosugi Maru"',
          // '"Kosugi"',
          '"M PLUS Rounded 1c"',
          '"Noto Sans JP"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
