import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { themes } from './semantic/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

function generateThemeBlock(themeName: string, tokens: Record<string, string>): string {
  const vars = Object.entries(tokens)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n')
  return `:root[data-theme="${themeName}"] {\n${vars}\n}`
}

const css = Object.entries(themes)
  .map(([themeName, tokens]) => generateThemeBlock(themeName, tokens))
  .join('\n\n')

const outputPath = resolve(__dirname, '../styles/themes.css')
writeFileSync(outputPath, css + '\n')

console.log('themes.css generated')
