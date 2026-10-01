import react from '@vitejs/plugin-react'
import stylex from '@stylexjs/unplugin'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [stylex.vite({ useCSSLayers: true }), react()],
})
