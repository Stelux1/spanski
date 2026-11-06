// Generador estático: node build.mjs  →  dist/
import { mkdir, writeFile, readFile, rm, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './src/data.mjs';
import { pagesFor, notFoundPage } from './src/pages.mjs';
import { layout } from './src/ui.mjs';
import ES from './src/locales/es.mjs';
import EN from './src/locales/en.mjs';

const LOCALES = [ES, EN];
const PAGES = [...LOCALES.flatMap((L) => pagesFor(L)), notFoundPage(ES, EN)];

// Versiones de cada página por idioma (para hreflang y el selector de idioma)
const ALT = {};
for (const p of PAGES) if (p.key !== '404') (ALT[p.key] ||= {})[p.L.code] = p.path;
for (const L of LOCALES) {
  const missing = Object.keys(ALT).filter((k) => !ALT[k][L.code]);
  if (missing.length) throw new Error(`Faltan páginas en "${L.code}": ${missing.join(', ')}`);
}

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');

const warn = [];
if (!SITE.address.street) warn.push('SITE.address.street vacío (dirección de la oficina)');
if (!SITE.address.postalCode) warn.push('SITE.address.postalCode vacío');
if (!SITE.nif) warn.push('SITE.nif vacío (obligatorio en el aviso legal, LSSI art. 10)');
if (!SITE.geo) warn.push('SITE.geo vacío (coordenadas de la oficina)');
if (!SITE.formEndpoint) warn.push('SITE.formEndpoint vacío: el formulario abrirá el correo del usuario (mailto)');
if (SITE.formEndpoint && !SITE.formProvider) warn.push('SITE.formProvider vacío: nómbrelo para la política de privacidad');
if (!SITE.googleBusinessUrl) warn.push('SITE.googleBusinessUrl vacío (Perfil de Empresa en Google)');

await rm(DIST, { recursive: true, force: true });
await mkdir(join(DIST, 'assets'), { recursive: true });

// Assets con versión por hash de contenido (cache-busting)
const css = await readFile(join(ROOT, 'src/assets/site.css'), 'utf8');
const js = await readFile(join(ROOT, 'src/assets/site.js'), 'utf8');
const assetVersion = createHash('sha1').update(css + js).digest('hex').slice(0, 8);
await writeFile(join(DIST, 'assets/site.css'), css);
await writeFile(join(DIST, 'assets/site.js'), js);
await cp(join(ROOT, 'public'), DIST, { recursive: true });

// Comprobaciones SEO básicas
const titles = new Set();
for (const p of PAGES) {
  if (p.title.length > 70) warn.push(`title largo (${p.title.length}) en ${p.path}`);
  if (p.description.length > 165) warn.push(`description larga (${p.description.length}) en ${p.path}`);
  if (titles.has(p.title)) warn.push(`title duplicado: ${p.title}`);
  if (/[áéíóúñ¿¡]/i.test(p.title + p.description) && p.L.code === 'en' && !/Qualinor Servicios Técnicos|Ribarroja|Túria|Castellón/.test(p.title + p.description)) warn.push(`posible texto en español en página EN: ${p.path}`);
  titles.add(p.title);
  const h1s = (p.body.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) warn.push(`${h1s} h1 en ${p.path}`);
}

for (const p of PAGES) {
  const html = layout({ ...p, locales: LOCALES, alternates: ALT[p.key] || {}, assetVersion });
  const out = p.file ? join(DIST, p.file) : join(DIST, p.path, 'index.html');
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const indexable = PAGES.filter((p) => !p.noSitemap && !(p.robots || '').includes('noindex'));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexable
  .map((p) => {
    const alts = Object.entries(ALT[p.key] || {})
      .map(([code, path]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE.url}${path}"/>`)
      .join('\n');
    return `  <url>\n    <loc>${SITE.url}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n${alts}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
await writeFile(join(DIST, 'sitemap.xml'), sitemap);
await writeFile(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
await writeFile(
  join(DIST, 'site.webmanifest'),
  JSON.stringify({
    name: SITE.name, short_name: SITE.shortName, lang: 'es-ES', start_url: '/', display: 'browser',
    background_color: '#ffffff', theme_color: '#444835',
    icons: [{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }, { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  }, null, 2),
);

console.log(`✓ ${PAGES.length} páginas → dist/  (assets v${assetVersion})`);
if (warn.length) console.log('\nPendiente antes de publicar:\n' + warn.map((w) => '  • ' + w).join('\n'));
