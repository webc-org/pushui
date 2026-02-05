import { defineConfig } from 'vitest/config'
import path from 'node:path'

const srcPath = path.resolve(__dirname, 'src')
const stylesPackagePath = path.resolve(__dirname, '../styles/styles')

export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(srcPath, 'components'),
      sections: path.resolve(srcPath, 'components/sections'),
      modules: path.resolve(srcPath, 'components/modules'),
      form: path.resolve(srcPath, 'components/form'),
      base: path.resolve(srcPath, 'components/base'),
      styles: stylesPackagePath,
      types: path.resolve(srcPath, 'types'),
      i18n: path.resolve(srcPath, 'i18n'),
      utils: path.resolve(srcPath, 'utils'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [srcPath, stylesPackagePath],
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['verbose'],
    testTimeout: 15000,
  },
})
