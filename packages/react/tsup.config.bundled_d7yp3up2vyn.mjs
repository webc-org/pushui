// tsup.config.ts
import { postcssModules, sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";
import path from "node:path";
var __injected_dirname__ = "/Users/charles/Web/yop/packages/react";
var srcPath = path.resolve(__injected_dirname__, "src");
var stylesPath = path.resolve(__injected_dirname__, "../styles/src");
var tsup_config_default = defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "tsconfig.build.json",
  clean: true,
  external: ["react", "react-dom"],
  sourcemap: false,
  minify: true,
  esbuildOptions(options) {
    options.alias = {
      base: path.resolve(srcPath, "components/base"),
      form: path.resolve(srcPath, "components/form"),
      modules: path.resolve(srcPath, "components/modules"),
      sections: path.resolve(srcPath, "components/sections"),
      types: path.resolve(srcPath, "types"),
      styles: stylesPath
    };
  },
  esbuildPlugins: [
    // CSS Modules for component styles (*.module.scss)
    sassPlugin({
      loadPaths: [srcPath, stylesPath],
      filter: /\.module\.scss$/,
      transform: postcssModules({})
    }),
    // Global styles - no CSS modules
    sassPlugin({
      loadPaths: [srcPath, stylesPath],
      filter: /(?<!\.module)\.scss$/
    })
  ]
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2NoYXJsZXMvV2ViL3lvcC9wYWNrYWdlcy9yZWFjdC90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvY2hhcmxlcy9XZWIveW9wL3BhY2thZ2VzL3JlYWN0XCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9jaGFybGVzL1dlYi95b3AvcGFja2FnZXMvcmVhY3QvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBwb3N0Y3NzTW9kdWxlcywgc2Fzc1BsdWdpbiB9IGZyb20gJ2VzYnVpbGQtc2Fzcy1wbHVnaW4nXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuXG5jb25zdCBzcmNQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG5jb25zdCBzdHlsZXNQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3N0eWxlcy9zcmMnKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnRyeTogWydzcmMvaW5kZXgudHMnXSxcbiAgZm9ybWF0OiBbJ2VzbScsICdjanMnXSxcbiAgZHRzOiB0cnVlLFxuICB0c2NvbmZpZzogJ3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICBjbGVhbjogdHJ1ZSxcbiAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gIHNvdXJjZW1hcDogZmFsc2UsXG4gIG1pbmlmeTogdHJ1ZSxcbiAgZXNidWlsZE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMuYWxpYXMgPSB7XG4gICAgICBiYXNlOiBwYXRoLnJlc29sdmUoc3JjUGF0aCwgJ2NvbXBvbmVudHMvYmFzZScpLFxuICAgICAgZm9ybTogcGF0aC5yZXNvbHZlKHNyY1BhdGgsICdjb21wb25lbnRzL2Zvcm0nKSxcbiAgICAgIG1vZHVsZXM6IHBhdGgucmVzb2x2ZShzcmNQYXRoLCAnY29tcG9uZW50cy9tb2R1bGVzJyksXG4gICAgICBzZWN0aW9uczogcGF0aC5yZXNvbHZlKHNyY1BhdGgsICdjb21wb25lbnRzL3NlY3Rpb25zJyksXG4gICAgICB0eXBlczogcGF0aC5yZXNvbHZlKHNyY1BhdGgsICd0eXBlcycpLFxuICAgICAgc3R5bGVzOiBzdHlsZXNQYXRoLFxuICAgIH1cbiAgfSxcbiAgZXNidWlsZFBsdWdpbnM6IFtcbiAgICAvLyBDU1MgTW9kdWxlcyBmb3IgY29tcG9uZW50IHN0eWxlcyAoKi5tb2R1bGUuc2NzcylcbiAgICBzYXNzUGx1Z2luKHtcbiAgICAgIGxvYWRQYXRoczogW3NyY1BhdGgsIHN0eWxlc1BhdGhdLFxuICAgICAgZmlsdGVyOiAvXFwubW9kdWxlXFwuc2NzcyQvLFxuICAgICAgdHJhbnNmb3JtOiBwb3N0Y3NzTW9kdWxlcyh7fSksXG4gICAgfSksXG4gICAgLy8gR2xvYmFsIHN0eWxlcyAtIG5vIENTUyBtb2R1bGVzXG4gICAgc2Fzc1BsdWdpbih7XG4gICAgICBsb2FkUGF0aHM6IFtzcmNQYXRoLCBzdHlsZXNQYXRoXSxcbiAgICAgIGZpbHRlcjogLyg/PCFcXC5tb2R1bGUpXFwuc2NzcyQvLFxuICAgIH0pLFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsU0FBUyxnQkFBZ0Isa0JBQWtCO0FBQ3hTLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUZvRSxJQUFNLHVCQUF1QjtBQUlsSCxJQUFNLFVBQVUsS0FBSyxRQUFRLHNCQUFXLEtBQUs7QUFDN0MsSUFBTSxhQUFhLEtBQUssUUFBUSxzQkFBVyxlQUFlO0FBRTFELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsRUFDdEIsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLEVBQ3JCLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixlQUFlLFNBQVM7QUFDdEIsWUFBUSxRQUFRO0FBQUEsTUFDZCxNQUFNLEtBQUssUUFBUSxTQUFTLGlCQUFpQjtBQUFBLE1BQzdDLE1BQU0sS0FBSyxRQUFRLFNBQVMsaUJBQWlCO0FBQUEsTUFDN0MsU0FBUyxLQUFLLFFBQVEsU0FBUyxvQkFBb0I7QUFBQSxNQUNuRCxVQUFVLEtBQUssUUFBUSxTQUFTLHFCQUFxQjtBQUFBLE1BQ3JELE9BQU8sS0FBSyxRQUFRLFNBQVMsT0FBTztBQUFBLE1BQ3BDLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUE7QUFBQSxJQUVkLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxTQUFTLFVBQVU7QUFBQSxNQUMvQixRQUFRO0FBQUEsTUFDUixXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBQUEsSUFDOUIsQ0FBQztBQUFBO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsU0FBUyxVQUFVO0FBQUEsTUFDL0IsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
