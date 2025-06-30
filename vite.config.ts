/// <reference types="vitest" />

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
// https://github.com/antfu/unocss
// see uno.config.ts for config
import UnoCSS from 'unocss/vite'
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// https://github.com/unplugin/unplugin-icons
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
// https://github.com/antfu/vite-plugin-components
import Components from 'unplugin-vue-components/vite'
import { getPascalCaseRouteName, VueRouterAutoImports } from 'unplugin-vue-router'
// https://github.com/posva/unplugin-vue-router
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
// https://github.com/webfansplz/vite-plugin-vue-devtools
import VueDevTools from 'vite-plugin-vue-devtools'
// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, 'env'))
  console.log(env)

  return {
    envDir: path.resolve(__dirname, 'env'),
    base: env.VITE_APP_PUBLIC_BASE || '/',

    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    plugins: [
      Vue(),

      VueRouter({
        exclude: ['src/pages/components/**/*', '**/*.bak.vue'],
        getRouteName: node => getPascalCaseRouteName(node),
        dts: 'types/typed-router.d.ts',
      }),

      Layouts(),

      AutoImport({
        imports: [
          'vue',
          VueRouterAutoImports,
          { 'vue-router/auto': ['useLink'] },
          'pinia',
          '@vueuse/core',
        ],
        dirs: ['src/composables', 'src/stores', '!src/stores/index.ts'],
        dts: 'types/auto-imports.d.ts',
        vueTemplate: true,
      }),

      Components({
        resolvers: [
          IconsResolver(),
        ],
        dts: 'types/components.d.ts',
      }),

      Icons({
        autoInstall: true, // 自动安装缺失的图标（需联网）
        compiler: 'vue3', // Vue3 项目
      }),

      UnoCSS(),

      ...(env.VITE_DEBUG === 'true' ? [VueDevTools()] : []),
    ],

    server: {
      host: '0.0.0.0',
      hmr: true,
      proxy: {
        [env.VITE_SERVER_PROXY]: {
          // 代理地址
          target: env.VITE_SERVER_BASEURL,
          // 是否跨域
          changeOrigin: true,
          // 重写路径
          rewrite: path => path.replace(new RegExp(`^${env.VITE_SERVER_PROXY}`), ''),
        },
      },
    },

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
    },
  }
})
