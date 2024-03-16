import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import tailwindConfig from './tailwind.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // write this
  ],
  css: {
    postcss: {
      plugins: [ tailwind, autoprefixer]
    }
  }
})
