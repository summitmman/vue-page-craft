import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (mode === 'app') {
    return {
      base: env.BASE_URL,
      plugins: [vue()],
      resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm-bundler.js'
        }
      }
    };
  } else {
    return {
      base: env.BASE_URL,
      plugins: [vue(), dts()],
      resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm-bundler.js'
        }
      },
      build: {
        copyPublicDir: false,
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'vue-page-craft',
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    };
  }
})
