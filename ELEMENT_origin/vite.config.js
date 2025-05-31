import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@element': path.resolve(__dirname, 'node_modules/element-plus/es/components'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true, // 启用全局 API
    moduleNameMapper: {
      '^@element/(.*)$': '<rootDir>/node_modules/element-plus/es/components/$1',
    },
    transformMode: {
      web: [/\.vue$/],
    },
    include: ['test/unit/**/*.{test,spec}.js']
  },
})
