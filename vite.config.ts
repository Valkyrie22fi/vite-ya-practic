import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['src/assets/*.svg']
})