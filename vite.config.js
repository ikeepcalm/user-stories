import { defineConfig } from 'vite'

export default defineConfig({
  base: '/user-stories/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})