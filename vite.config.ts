import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
export default defineConfig({
  root: './',
  base: '/api',
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 9090,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [react()]
})
