import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: "/customGiveaway/",
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  define: {
    __BUILD_TIME__: new Date(),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
