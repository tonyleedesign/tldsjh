import { themes as colorThemes } from './colors.js'
import { spacingThemes } from './spacing.js'
import { typographyThemes } from './typography.js'

export const themes = {
  minerva: {
    ...colorThemes.minerva,
    ...spacingThemes.minerva,
    ...typographyThemes.minerva,
  },
  evolution: {
    ...colorThemes.evolution,
    ...spacingThemes.evolution,
    ...typographyThemes.evolution,
  },
}
