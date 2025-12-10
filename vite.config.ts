import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'https://frontend-test-api-izjuflxj4q-nn.a.run.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
