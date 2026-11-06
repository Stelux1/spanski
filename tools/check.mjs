// Verificación del sitio generado: node tools/check.mjs  (tras node build.mjs)
// Comprueba enlaces internos, imágenes, JSON-LD, title/description/canonical/h1 y alt.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const errors = [];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}
const exists = async (p) => stat(p).then(() => true, () => false);

async function resolveUrl(u) {
  const clean = u.split('#')[0].split('?')[0];
  if (!clean) return true;
  const p = join(DIST, clean);
  if (clean.endsWith('/')) return exists(join(p, 'index.html'));
  return exists(p);
}

const files = await walk(DIST);
for (const f of files) {
  const rel = f.slice(DIST.length);
  const html = await readFile(f, 'utf8');
  const one = (re) => (html.match(re) || [])[1];

  if (!one(/<title>([^<]+)<\/title>/)) errors.push(`${rel}: sin <title>`);
  if (!one(/<meta name="description" content="([^"]+)"/)) errors.push(`${rel}: sin description`);
  if (!one(/<link rel="canonical" href="([^"]+)"/)) errors.push(`${rel}: sin canonical`);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} h1`);

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch (e) { errors.push(`${rel}: JSON-LD inválido (${e.message})`); }
  }
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]+"/.test(tag)) errors.push(`${rel}: <img> sin alt`);
    if (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag)) errors.push(`${rel}: <img> sin width/height`);
  }
  const urls = new Set();
  for (const [, u] of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) urls.add(u);
  for (const [, set] of html.matchAll(/(?:srcset|imagesrcset)="([^"]+)"/g))
    set.split(',').forEach((s) => urls.add(s.trim().split(/\s+/)[0]));
  for (const u of urls) if (u.startsWith('/') && !u.startsWith('//') && !(await resolveUrl(u))) errors.push(`${rel}: enlace roto ${u}`);
}

for (const f of ['sitemap.xml', 'robots.txt', 'favicon.svg', 'site.webmanifest', 'img/og-qualinor.jpg', 'img/logo-qualinor.png'])
  if (!(await exists(join(DIST, f)))) errors.push(`falta ${f}`);

if (errors.length) {
  console.error(`✗ ${errors.length} errores:\n` + errors.map((e) => '  • ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${files.length} páginas verificadas: enlaces, imágenes, JSON-LD y metadatos correctos`);
