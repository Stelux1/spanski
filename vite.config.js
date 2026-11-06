import { defineConfig } from 'vite';
import { execFileSync } from 'node:child_process';

// Shipvela despliega desde GitHub con `npm run build` (Vite). El sitio lo genera
// build.mjs: Vite compila una entrada mínima y, al cerrar, build.mjs reescribe
// dist/ por completo con las 29 páginas, assets, sitemap y robots.
export default defineConfig({
  root: 'tools/vite',
  publicDir: false,
  logLevel: 'warn',
  build: { outDir: '../../dist', emptyOutDir: true },
  plugins: [{
    name: 'qualinor-static-site',
    apply: 'build',
    closeBundle() {
      execFileSync(process.execPath, ['build.mjs'], { stdio: 'inherit' });
    },
  }],
});
