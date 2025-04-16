import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/Compontes': 'http://localhost:3000',
      '/img': 'http://localhost:3000'
    }
  }
}) 