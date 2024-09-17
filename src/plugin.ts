export default function vuePageCraftVitePlugin() {
    return {
      name: 'vue-page-craft-vite-plugin',
      config(config: any) {
        return {
          ...config,
          resolve: {
            ...(config.resolve ?? {}),
            alias: {
              ...(config.resolve?.alias ?? {}),
              // Add the alias for Vue to point to the ESM bundle
              vue: 'vue/dist/vue.esm-bundler.js',
            },
          },
        };
      },
    };
  }
  