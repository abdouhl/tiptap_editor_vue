import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  build: {
      outDir: '../dist',
      rollupOptions:{
        input:{
          main:resolve(__dirname,'src/index.html'),
          app:resolve(__dirname,'src/app/index.html')
        }
      }
  
  },
  plugins: [
    vue(),
  ],
  publicDir: '../public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
