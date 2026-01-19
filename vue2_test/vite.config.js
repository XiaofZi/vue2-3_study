import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 字符串简写写法：
      // 代理地址 http://localhost:5173/api 
      // 目标地址 http://localhost:5000/api
      // '/api': 'http://localhost:5000',

      // 带选项写法
      '/api': {
        target: 'http://localhost:5000',
        // 用于控制请求头中的host值
        changeOrigin: true,
        // 请求地址重写，前端发向  /api  的请求会被重写为发向  /  这样就不用修改后端的接口地址
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 用于控制请求头中的host值
        changeOrigin: true,
        // 请求地址重写，前端发向  /demo  的请求会被重写为发向  /  这样就不用修改后端的接口地址
        rewrite: (path) => path.replace(/^\/demo/, ''),
      },
    },
  },
})
