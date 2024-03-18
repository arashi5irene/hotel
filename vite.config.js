import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import tailwindConfig from './tailwind.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // write this
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  css: {
    postcss: {
      plugins: [ tailwind, autoprefixer]
    }
  }
})
