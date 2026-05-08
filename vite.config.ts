import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { execSync } from 'child_process'
import dts from 'vite-plugin-dts'

function tokenWatcher() {
  return {
    name: 'token-watcher',
    configureServer(server: any) {
      const tokenDir = resolve(__dirname, 'src/tokens')
      server.watcher.add(tokenDir)
      server.watcher.on('change', (file: string) => {
        if (file.startsWith(tokenDir) && file.endsWith('.ts')) {
          try {
            execSync('npx tsx src/tokens/buildCss.ts', { cwd: __dirname })
            console.log('[token-watcher] themes.css rebuilt')
          } catch (e) {
            console.error('[token-watcher] build failed', e)
          }
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tokenWatcher(),
    dts({
      include:      ['src'],
      exclude:      ['src/app/**', 'src/tokens/buildCss.ts', 'src/main.tsx'],
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry:    resolve(__dirname, 'src/index.ts'),
      formats:  ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
  },
})
