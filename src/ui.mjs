import { SITE, IMAGES } from './data.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const abs = (p) => SITE.url + p;
export const svcPath = (L, s) => `${L.routes.services}${s.slug}/`;

/* ---------- Iconos de línea (24px, trazo 1.5, extremos redondeados) ---------- */
const svg = (d, size = 18) =>
  `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const P = {
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUp: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7"/>',
  pin: '<path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  spark: '<path d="M9.9 15.5A2 2 0 0 0 8.5 14l-6.1-1.6a.5.5 0 0 1 0-1L8.5 9.9A2 2 0 0 0 9.9 8.5l1.6-6.1a.5.5 0 0 1 1 0l1.6 6.1a2 2 0 0 0 1.4 1.4l6.1 1.6a.5.5 0 0 1 0 1l-6.1 1.6a2 2 0 0 0-1.4 1.4l-1.6 6.1a.5.5 0 0 1-1 0z"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.3 19a10 10 0 1 1 17.3 0"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
};
export const icon = Object.fromEntries(Object.entries(P).map(([k, d]) => [k, svg(d)]));
export const iconLg = (k) => svg(P[k], 24);

/** Emblema: sección de tubería (dos círculos concéntricos) */
export const emblem = `<svg class="brand-emblem" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="14" cy="14" r="11.5"/><circle class="brand-emblem-core" cx="14" cy="14" r="5.5"/></svg>`;
export const brand = () => `<span class="brand-lockup">${emblem}<span class="brand-lettering">qualinor</span></span>`;

/* ---------- Imagen responsive ---------- */
export function picture(name, alt, { sizes = '100vw', eager = false, cls = '' } = {}) {
  const m = IMAGES[name];
  if (!m) throw new Error(`Imagen desconocida: ${name}`);
  const srcset = m.widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ');
  const fallback = `/img/${name}-${m.widths[Math.min(1, m.widths.length - 1)]}.webp`;
  return `<img${cls ? ` class="${cls}"` : ''} src="${fallback}" srcset="${srcset}" sizes="${sizes}" width="${m.w}" height="${m.h}" alt="${esc(alt)}" ${
    eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'
  }>`;
}
export const heroPreload = (name, sizes) => ({
  srcset: IMAGES[name].widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', '),
  sizes,
});

/* ---------- Piezas ---------- */
export const eyebrow = (t, tone = '') => `<span class="eyebrow${tone ? ` eyebrow-${tone}` : ''}">${t}</span>`;

export function breadcrumbs(L, items) {
  const all = [{ name: L.t.home, path: L.routes.home }, ...items];
  return `<nav class="crumbs" aria-label="${esc(L.t.crumbsLabel)}"><ol>${all
    .map((c, i) =>
      i === all.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.path}">${esc(c.name)}</a></li>`,
    )
    .join('')}</ol></nav>`;
}

export function breadcrumbSchema(L, items) {
  const all = [{ name: L.t.home, path: L.routes.home }, ...items];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function faqBlock(L, faqs, { heading = L.t.faqTitle, id = 'faq' } = {}) {
  return `<section class="faq-section container" id="${id}" aria-labelledby="${id}-t">
  <div class="center-heading">${eyebrow(L.t.faqEyebrow)}<h2 id="${id}-t">${esc(heading)}</h2></div>
  <div class="faq-list">${faqs
    .map((f) => `<details><summary>${esc(f.q)}<span aria-hidden="true">+</span></summary><p>${esc(f.a)}</p></details>`)
    .join('')}</div>
</section>`;
}

export function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** Tarjeta de servicio: foto 4:3, título, texto y acción */
export function serviceCard(L, s, i = 0) {
  return `<a class="home-service-card tone-${i % 3}" href="${svcPath(L, s)}">
  <div class="home-service-image">${picture(s.image.name, s.image.alt, { sizes: '(min-width: 1000px) 360px, (min-width: 760px) 45vw, 100vw' })}</div>
  <div class="home-service-copy">
    <h3>${esc(s.nav)}</h3>
    <p>${esc(s.summary)}</p>
    <span>${esc(L.t.viewService)} <span class="card-arrow">${icon.arrowUp}</span></span>
  </div>
</a>`;
}

export function finalCta(L, { title = L.t.finalTitle, text = L.t.finalText } = {}) {
  return `<section class="home-final-cta container" aria-labelledby="cta-t">
  <div class="final-panel">
    <h2 id="cta-t">${esc(title)}</h2>
    <p>${esc(text)}</p>
    <div class="button-row">
      <a class="button button-dark" href="${L.routes.contact}">${esc(L.t.quote)} ${icon.arrow}</a>
      <a class="button button-light" href="tel:${SITE.phone}">${icon.phone} ${SITE.phoneIntl}</a>
    </div>
  </div>
</section>`;
}

/** Ficha de contacto (tarjeta crema) */
export function contactCard(L, { heading = L.t.contactHeading, call = false } = {}) {
  return `<aside class="contact-card" aria-label="${esc(heading)}">
  <h3>${esc(heading)}</h3>
  <ul>
    <li>${icon.phone}<a href="tel:${SITE.phone}">${SITE.phoneIntl}</a></li>
    <li>${icon.mail}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
    <li>${icon.pin}<span>${esc(addressLine(L))}</span></li>
    <li>${icon.globe}<span>${esc(L.t.areaLine)}</span></li>
  </ul>
  ${call
    ? `<a class="button button-dark" href="tel:${SITE.phone}">${icon.phone} ${esc(L.t.callNow)}</a>`
    : `<a class="button button-dark" href="${L.routes.contact}">${esc(L.t.quote)} ${icon.arrow}</a>`}
</aside>`;
}

export function addressLine(L) {
  const a = SITE.address;
  return [a.street, [a.postalCode, a.locality].filter(Boolean).join(' '), L.t.country].filter(Boolean).join(', ');
}

export function areaChips(L) {
  return `<ul class="chip-row">${L.areas.map((a) => `<li class="chip">${icon.pin}<span>${esc(a)}</span></li>`).join('')}</ul>`;
}

/* ---------- Schema de la empresa (en todas las páginas) ---------- */
export function orgSchema(L) {
  const a = SITE.address;
  const address = { '@type': 'PostalAddress', addressLocality: a.locality, addressRegion: a.region, addressCountry: a.country };
  if (a.street) address.streetAddress = a.street;
  if (a.postalCode) address.postalCode = a.postalCode;
  const org = {
    '@type': ['GeneralContractor'],
    '@id': abs('/#empresa'),
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: [SITE.alternateName, 'Qualinor'],
    url: abs('/'),
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: SITE.foundingYear,
    image: abs('/img/og-qualinor.jpg'),
    logo: abs('/img/logo-qualinor.png'),
    address,
    knowsLanguage: ['es', 'en', 'nl'],
    areaServed: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'AdministrativeArea', name: L.service.area[1].name },
      { '@type': 'Country', name: L.t.country },
      { '@type': 'Country', name: L.code === 'en' ? 'Netherlands' : 'Países Bajos' },
      { '@type': 'Country', name: L.code === 'en' ? 'Belgium' : 'Bélgica' },
    ],
    knowsAbout: L.knowsAbout,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: L.t.servicesHeading,
      itemListElement: L.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nav, url: abs(svcPath(L, s)) },
      })),
    },
  };
  if (SITE.geo) org.geo = { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng };
  const same = [SITE.googleBusinessUrl, SITE.linkedinUrl].filter(Boolean);
  if (same.length) org.sameAs = same;
  if (SITE.nif) org.taxID = SITE.nif;
  return org;
}

/* ---------- Selector de idioma ---------- */
function languagePicker(L, alternates, locales, cls = '') {
  return `<details class="language-picker ${cls}">
  <summary aria-label="${esc(L.t.language)}: ${esc(L.label)}">${icon.globe}<span>${L.short}</span>${icon.chevron}</summary>
  <div class="language-options">${locales
    .map(
      (o) => `<a href="${alternates[o.code] || o.routes.home}" hreflang="${o.code}" lang="${o.code}"${o.code === L.code ? ' aria-current="true"' : ''}>${o.label}${o.code === L.code ? icon.check : ''}</a>`,
    )
    .join('')}</div>
</details>`;
}

/* ---------- Layout ---------- */
export function layout({ L, locales, path, alternates = {}, title, description, body, schema = [], ogImage = '/img/og-qualinor.jpg', robots = 'index,follow', preload = null, assetVersion = '1', overHero = false }) {
  const t = L.t;
  const canonical = abs(path);
  const graph = { '@context': 'https://schema.org', '@graph': [orgSchema(L), ...schema] };
  const current = (p) => (path.startsWith(p) ? ' aria-current="page"' : '');
  const year = new Date().getFullYear();
  const R = L.routes;
  const NAV = [
    { name: t.nav.services, path: R.services },
    { name: t.nav.projects, path: R.projects },
    { name: t.nav.company, path: R.company },
    { name: t.nav.contact, path: R.contact },
  ];
  const hreflang = robots.includes('noindex')
    ? ''
    : Object.entries(alternates)
        .map(([code, p]) => `<link rel="alternate" hreflang="${code}" href="${abs(p)}">`)
        .concat(alternates.es ? [`<link rel="alternate" hreflang="x-default" href="${abs(alternates.es)}">`] : [])
        .join('\n');
  const ogAlt = locales.filter((o) => o.code !== L.code && alternates[o.code]).map((o) => `<meta property="og:locale:alternate" content="${o.ogLocale}">`).join('\n');

  return `<!doctype html>
<html lang="${L.htmlLang}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${hreflang}
<meta name="robots" content="${robots}">
<meta name="geo.region" content="ES-V">
<meta name="geo.placename" content="Valencia">
<meta property="og:type" content="website">
<meta property="og:locale" content="${L.ogLocale}">
${ogAlt}
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${abs(ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#444835">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
${preload ? `<link rel="preload" as="image" type="image/webp" imagesrcset="${preload.srcset}" imagesizes="${preload.sizes}" fetchpriority="high">\n` : ''}<link rel="stylesheet" href="/assets/site.css?v=${assetVersion}">
<script>document.documentElement.classList.replace('no-js','js')</script>
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
<a class="skip" href="#contenido">${esc(t.skip)}</a>
<header class="header${overHero ? ' header-over-hero' : ''}"${overHero ? ' data-over-hero' : ''}>
  <div class="header-inner">
    <a href="${R.home}" aria-label="${esc(SITE.name)}, ${esc(t.homeAria)}">${brand()}</a>
    <nav class="header-actions" aria-label="${esc(t.mainNav)}">
      ${languagePicker(L, alternates, locales)}
      <a class="header-benefits header-hide-sm" href="${R.services}"${current(R.services)}>${esc(t.nav.services)}</a>
      <a class="header-benefits header-hide-md" href="${R.projects}"${current(R.projects)}>${esc(t.nav.projects)}</a>
      <a class="header-cta" href="${R.contact}"><span class="cta-long">${esc(t.quote)}</span><span class="cta-short">${esc(t.quoteShort)}</span> ${icon.arrow}</a>
      <button class="menu-toggle" type="button" aria-haspopup="dialog" aria-controls="menu" aria-label="${esc(t.openMenu)}">${icon.menu}</button>
    </nav>
  </div>
</header>
<dialog class="navigation-dialog" id="menu" aria-label="${esc(t.menu)}">
  <div class="navigation-panel">
    <div class="navigation-top">
      <a href="${R.home}">${brand()}</a>
      <button class="icon-button" type="button" data-close aria-label="${esc(t.closeMenu)}">${svg(P.close, 24)}</button>
    </div>
    <nav aria-label="${esc(t.drawerNav)}">
      <a href="${R.home}"${path === R.home ? ' aria-current="page"' : ''}>${esc(t.home)} ${icon.arrow}</a>
      ${NAV.map((n) => `<a href="${n.path}"${current(n.path)}>${esc(n.name)} ${icon.arrow}</a>`).join('')}
    </nav>
    <div class="navigation-services">
      <span>${esc(t.servicesHeading)}</span>
      ${L.services.map((s) => `<a href="${svcPath(L, s)}">${esc(s.nav)}</a>`).join('')}
    </div>
    <div class="navigation-languages">${locales
      .map((o) => `<a href="${alternates[o.code] || o.routes.home}" hreflang="${o.code}" lang="${o.code}"${o.code === L.code ? ' aria-current="true"' : ''}>${icon.globe} ${o.label}</a>`)
      .join('')}</div>
    <div class="navigation-bottom">
      <span>${esc(t.drawerNote)}</span>
      <a class="button button-dark" href="${R.contact}">${esc(t.quote)} ${icon.arrow}</a>
      <a class="button button-light" href="tel:${SITE.phone}">${icon.phone} ${SITE.phoneIntl}</a>
    </div>
  </div>
</dialog>
<main id="contenido">
${body}
</main>
<footer class="footer">
  <div class="footer-main">
    <div class="footer-invitation">
      <h2>${esc(t.footer.title)}</h2>
      <p>${esc(t.footer.note)}</p>
      <a class="button" href="${R.contact}">${esc(t.quote)} ${icon.arrow}</a>
    </div>
    <div class="footer-top">
      <div>
        <span class="eyebrow">${esc(t.footer.services)}</span>
        ${L.services.map((s) => `<a href="${svcPath(L, s)}">${esc(s.nav)}</a>`).join('')}
      </div>
      <div>
        <span class="eyebrow">${esc(t.footer.company)}</span>
        <a href="${R.company}">${esc(t.footer.about)}</a>
        <a href="${R.projects}">${esc(t.nav.projects)}</a>
        <a href="${R.contact}">${esc(t.nav.contact)}</a>
        <span class="eyebrow footer-gap">${esc(t.footer.contact)}</span>
        <a href="tel:${SITE.phone}">${SITE.phoneIntl}</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <span>${esc(addressLine(L))}</span>
        <span class="footer-langs">${locales.map((o) => `<a href="${alternates[o.code] || o.routes.home}" hreflang="${o.code}" lang="${o.code}"${o.code === L.code ? ' aria-current="true"' : ''}>${o.short}</a>`).join(' · ')}</span>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${year} ${esc(SITE.legalName)}</span>
    <span>${esc(t.footer.tagline)}</span>
    <span class="footer-legal"><a href="${R.legal}">${esc(t.footer.legal)}</a><a href="${R.privacy}">${esc(t.footer.privacy)}</a><a href="${R.cookies}">${esc(t.footer.cookies)}</a></span>
  </div>
  <p class="footer-large-brand" aria-hidden="true">qualinor</p>
</footer>
<script src="/assets/site.js?v=${assetVersion}" defer></script>
</body>
</html>
`;
}
