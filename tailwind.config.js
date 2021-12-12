const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
