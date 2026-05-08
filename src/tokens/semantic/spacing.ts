import { spacing } from '../primitive/spacing.js'

const minervaSpacing = {
  'space-0':  spacing['0'],
  'space-1':  spacing['1'],
  'space-2':  spacing['2'],
  'space-4':  spacing['3'],
  'space-6':  spacing['4'],
  'space-8':  spacing['5'],
  'space-9':  spacing['6'],
  'space-10': spacing['6b'],
  'space-11': spacing['7'],
  'space-12': spacing['8'],
  'space-16': spacing['9'],
  'space-20': spacing['10'],
  'space-24': spacing['11'],
  'space-30': spacing['12'],
  'space-32': spacing['13'],
  'space-36': spacing['13b'],
  'space-40': spacing['14'],

  // ─── Layout ───────────────────────────────────────────────────────────────
  'sidenav-width-expanded':  '256px',
} as const

const evolutionSpacing = {
  ...minervaSpacing,
} as const

export const spacingThemes = {
  minerva:   minervaSpacing,
  evolution: evolutionSpacing,
}
