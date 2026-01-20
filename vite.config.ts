import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages subdirectory deployment
  base: '/meteo-cyclone-animation/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
