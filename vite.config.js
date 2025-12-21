import {
  defineConfig
} from 'vite'
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true, // Дозволяє змінювати розмір через CSS
      },
    }),
  ],
  assetsInclude: ['**/*.woff2'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})