module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'gray-lightest': '#f9f8f9',
        'gray-lighter': '#e5e4e6',
        'gray-light': '#d1d0d2',
        'gray': '#bebebf',
        'gray-dark': '#979697',
        'gray-darker': '#6f6e70',
        'gray-darkest': '#494849',
        'black': '#212021',

        'brand-light': '#e0caee',
        'brand': '#792eb9',
        'brand-dark': '#3e1d59',

        'brand-gd': "#b18f8f",

        'cta-light': '#efedcc',
        'cta': '#b3b92e',
        'cta-dark': '#57581e',

        'info-light': '#dceefc',
        'info': '#5cbcf1',
        'info-dark': '#335a71',

        'warning-light': '#ffedd3',
        'warning': '#ecba50',
        'warning-dark': '#70592c',

        'success-light': '#dcf3d8',
        'success': '#68cb67',
        'success-dark': '#376035',

        'danger-light': '#ffd1d4',
        'danger': '#ea305d',
        'danger-dark': '#702230',
      },
      flex: {
        '2': '2 2 0%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
