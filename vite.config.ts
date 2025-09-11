import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: './src/types/typed-router.d.ts',
    }),
    vue(),
    tailwindcss(),
    Components({
      dts: './src/types/components.d.ts',
      dirs: ['./src/components'],
    }),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'tailwind-merge': ['twMerge'],
        },
      ],
      dirs: ['./src/composables'],
    }),
    svgLoader(),
  ],
})
