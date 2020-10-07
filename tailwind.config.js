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
    purgeLayersByDefault: true
  },
  dark: 'media',
  experimental: {
    applyComplexClasses: true,
    darkModeVariant: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
    standardFontWeights: true,
    uniformColorPalette: true
  }
}
