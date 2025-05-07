import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import VitePluginStyleInject from 'vite-plugin-style-inject'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const config = {
    plugins: [
      vue(),
      dts({
        // 指定 tsconfig 文件
        tsconfigPath: 'tsconfig.app.json',
        rollupTypes: true, // 合并为单个文件（如 main.d.ts）
        copyDtsFiles: true // 确保复制所有关联的 .d.ts 文件
      }),
      vueJsx()
    ],
    build: {
      outDir: 'lib',
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          exports: 'named',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: resolve(__dirname, './src/components/TimeLine/index.ts'), //指定组件编译入口文件
        name: 'vue3-time-line',
        fileName: 'vue3-time-line'
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  if (command === 'build') {
    if (mode === 'lib') {
      config.build.lib = {
        entry: resolve(__dirname, './src/components/TimeLine/index.ts'), //指定组件编译入口文件
        name: 'vue3-time-line',
        fileName: 'vue3-time-line'
      }
      config.plugins.push(VitePluginStyleInject())
    } else if (mode === 'demo') {
      delete config.build.lib
      config.base = './' // 设置基础路径
      config.build.outDir = 'dist'
      config.build.rollupOptions = {
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        }
      }
    }
    return config
  } else if (command === 'serve') {
    return config
  }
})
