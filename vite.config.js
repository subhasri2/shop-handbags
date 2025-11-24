import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/shop-handbags/',
  plugins: [react()],
})

