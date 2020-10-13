const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/ui')],
  purge: {
    content: ['./**/*.jsx']
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
    darkModeVariant: true,
    additionalBreakpoint: true
  },
  dark: 'media'
}
