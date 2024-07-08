import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/app-vue-next/' : '/',
  plugins: [
    vue(),
    qiankun('app-vue-next', {
      useDevMode: true
    })
  ],
  server: {
    port: 7002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
