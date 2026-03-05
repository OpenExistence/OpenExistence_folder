import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    allowedHosts: ['.trycloudflare.com', 'sterling-darwin-condo-convenient.trycloudflare.com']
  }
})
