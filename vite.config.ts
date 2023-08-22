import { resolve, relative, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import glob from 'fast-glob'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  appType: 'custom',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: 'inline',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-core',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('src/**/*.*').map((file: string) => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
        inlineDynamicImports: false,
      },
    },
  },
})
