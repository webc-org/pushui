import { postcssModules, sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig } from 'tsup'
import path from 'node:path'

const srcPath = path.resolve(__dirname, 'src')
const stylesPackagePath = path.resolve(__dirname, '../styles')

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: false,
  minify: true,
  esbuildOptions(options) {
    options.alias = {
      base: path.resolve(srcPath, 'components/base'),
      form: path.resolve(srcPath, 'components/form'),
      modules: path.resolve(srcPath, 'components/modules'),
      sections: path.resolve(srcPath, 'components/sections'),
      types: path.resolve(srcPath, 'types'),
      styles: path.resolve(stylesPackagePath, 'styles'),
    }
  },
  esbuildPlugins: [
    // CSS Modules for component styles (*.module.scss)
    sassPlugin({
      loadPaths: [srcPath, stylesPackagePath],
      filter: /\.module\.scss$/,
      transform: postcssModules({}),
    }),
    // Global styles (styles/*.scss) - no CSS modules
    sassPlugin({
      loadPaths: [srcPath, stylesPackagePath],
      filter: /styles\/.*\.scss$/,
    }),
  ],
})
