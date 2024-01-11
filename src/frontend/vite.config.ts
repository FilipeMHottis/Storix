import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = Number(process.env.PORT) || 8080

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  preview: {
    port: PORT,
    host: true
  },
  server: {
    port: PORT,
    host: true  
  },
  plugins: [react()],
})
