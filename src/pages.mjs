// Plantillas de página compartidas por todos los idiomas. El texto viene del paquete de idioma (src/locales/*).
import { SITE } from './data.mjs';
import {
  esc, abs, icon, iconLg, picture, heroPreload, eyebrow, breadcrumbs, breadcrumbSchema, faqBlock, faqSchema,
  serviceCard, finalCta, contactCard, areaChips, addressLine, svcPath,
} from './ui.mjs';

const svcById = (L, id) => L.services.find((s) => s.id === id);

function home(L) {
  const H = L.home;
  const R = L.routes;
  return {
    key: 'home',
    path: R.home,
    overHero: true,
    title: H.title,
    description: H.description,
    preload: heroPreload('zanja-tuberia-pead-gran-diametro', '100vw'),
    schema: [
      { '@type': 'WebSite', '@id': abs(`${R.home}#web`), url: abs(R.home), name: SITE.name, inLanguage: L.htmlLang, publisher: { '@id': abs('/#empresa') } },
      faqSchema(H.faqs),
    ],
    body: `
<section class="casa-hero" aria-labelledby="hero-t">
  ${picture('zanja-tuberia-pead-gran-diametro', H.heroAlt, { eager: true, sizes: '100vw', cls: 'casa-hero-poster' })}
  <div class="hero-shade"></div>
  <a class="hero-news" href="${svcPath(L, svcById(L, 'maintenance'))}">
    <span>${esc(H.newsTag)}</span><span class="hero-news-divider"></span><em><span class="live-dot" aria-hidden="true"></span>${esc(H.newsText)}</em>${icon.arrow}
  </a>
  <div class="casa-hero-copy">
    <h1 id="hero-t">${esc(H.h1)}</h1>
    <p>${esc(H.lead)}</p>
  </div>
  <div class="casa-hero-bottom">
    <a class="hero-start" href="${R.contact}"><span>${icon.spark} ${esc(H.start)}</span><span class="hero-start-icon">${icon.arrow}</span></a>
    <p>${esc(H.startNote)}</p>
  </div>
</section>

<div class="casa-home-content">
  <section class="casa-how container" aria-labelledby="how-t">
    <h2 id="how-t">${esc(H.howTitle)}</h2>
    <div class="casa-steps">
      ${H.steps.map((s, i) => `<article><span class="step-icon tone-${i}">${iconLg(s.icon)}</span><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></article>`).join('')}
    </div>
  </section>

  <section class="casa-tasks" aria-labelledby="tasks-t">
    <div class="casa-section-heading container">
      ${eyebrow(esc(H.tasksEyebrow), 'peach')}
      <h2 id="tasks-t">${esc(H.tasksTitle)}</h2>
      <p>${esc(H.tasksText)}</p>
    </div>
    <div class="casa-task-photo">
      ${picture('sala-bombas-colectores-pead', H.taskPhotoAlt, { sizes: '100vw' })}
      <div class="task-shade"></div>
      <div class="task-wheel">
        <span>${esc(H.wheelLabel)}</span>
        <div class="task-wheel-window" tabindex="0" aria-label="${esc(L.t.servicesHeading)}">
          <div class="task-wheel-list">
            ${L.serviceLines.map((l) => `<a href="${l.href}">${esc(l.short)} ${icon.arrowUp}</a>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="feature-rows container" aria-label="${esc(H.tasksEyebrow)}">
    ${H.features
      .map(
        (f) => `<article class="feature-row${f.reverse ? ' feature-row-reverse' : ''}">
      <div class="feature-copy">
        <h2>${f.title}</h2>
        <p>${esc(f.text)}</p>
        <a class="text-link" href="${svcPath(L, svcById(L, f.service))}">${esc(f.link)} ${icon.arrow}</a>
      </div>
      <div class="feature-image">${picture(f.img, f.alt, { sizes: '(min-width: 1000px) 560px, 100vw' })}</div>
    </article>`,
      )
      .join('')}
  </section>

  <section class="home-services container" id="servicios" aria-labelledby="svc-t">
    <div class="center-heading">
      ${eyebrow(esc(H.servicesEyebrow), 'sage')}
      <h2 id="svc-t">${esc(H.servicesTitle)}</h2>
      <p>${esc(H.servicesText)}</p>
    </div>
    <div class="home-services-grid">${L.services.map((s, i) => serviceCard(L, s, i)).join('')}</div>
  </section>

  <section class="home-help container" aria-label="${esc(L.t.nav.contact)}">
    <article class="home-help-primary">
      ${icon.message}
      <h2>${esc(H.helpPrimary.title)}</h2>
      <p>${H.helpPrimary.text}</p>
      <a class="button button-dark" href="${R.contact}">${esc(L.t.quote)} ${icon.arrow}</a>
      <small>${esc(H.helpPrimary.small)}</small>
    </article>
    <article class="home-help-urgent">
      ${icon.wrench}
      <h2>${esc(H.helpSecondary.title)}</h2>
      <p>${esc(H.helpSecondary.text)}</p>
      <a class="text-link" href="${svcPath(L, svcById(L, 'maintenance'))}">${esc(H.helpSecondary.link)} ${icon.arrow}</a>
    </article>
  </section>

  <section class="club-value container" aria-labelledby="del-t">
    <div class="club-value-intro">
      ${eyebrow(esc(H.deliverables.eyebrow), 'mustard')}
      <h2 id="del-t">${esc(H.deliverables.title)}</h2>
      <p>${esc(H.deliverables.text)}</p>
      <a class="button button-light" href="${svcPath(L, svcById(L, 'management'))}">${esc(H.deliverables.button)} ${icon.arrow}</a>
    </div>
    <div class="club-value-benefits">
      ${H.deliverables.items.map((d) => `<article>${icon[d.icon]}<div><h3>${esc(d.h)}</h3><p>${esc(d.p)}</p></div></article>`).join('')}
    </div>
  </section>

  <section class="trust-standard container" aria-labelledby="proj-t">
    ${eyebrow(esc(H.projectsEyebrow), 'peach')}
    <h2 id="proj-t">${esc(H.projectsTitle)}</h2>
    <div class="trust-grid">
      ${L.projects
        .map(
          (p, i) => `<article class="tone-${i}">
        <span class="trust-meta">${esc(p.sector)} · ${esc(p.place)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.scope)}${p.client ? ` ${H.projectFor} ${esc(p.client)}` : ''}.${p.tag ? ` ${esc(p.tag)}.` : ''}</p>
      </article>`,
        )
        .join('')}
    </div>
    <a class="text-link" href="${R.projects}">${esc(H.projectsLink)} ${icon.arrow}</a>
  </section>

  <section class="area-section container" aria-labelledby="zona-t">
    <div class="center-heading">
      ${eyebrow(esc(H.areaEyebrow), 'sage')}
      <h2 id="zona-t">${esc(H.areaTitle)}</h2>
      <p>${esc(H.areaText)}</p>
    </div>
    ${areaChips(L)}
  </section>

  ${faqBlock(L, H.faqs)}
  ${finalCta(L)}
</div>
`,
  };
}

function servicesIndex(L) {
  const S = L.servicesIndex;
  const crumbs = [{ name: S.crumb, path: L.routes.services }];
  return {
    key: 'services',
    path: L.routes.services,
    title: S.title,
    description: S.description,
    schema: [breadcrumbSchema(L, crumbs)],
    body: `
<section class="page-section container">
  <div class="center-heading page-heading">
    ${breadcrumbs(L, crumbs)}
    <h1>${esc(S.h1)}</h1>
    <p>${esc(S.lead)}</p>
  </div>
  <div class="home-services-grid">${L.services.map((s, i) => serviceCard(L, s, i)).join('')}</div>
</section>
<section class="container scope-panel" aria-labelledby="lines-t">
  <div class="casa-how">
    <h2 id="lines-t">${esc(S.scopeTitle)}</h2>
    <ul class="scope-list">${L.serviceLines.map((l) => `<li><a href="${l.href}">${icon.check}<span>${esc(l.name)}</span>${icon.arrowUp}</a></li>`).join('')}</ul>
  </div>
</section>
${finalCta(L)}
`,
  };
}

function servicePages(L) {
  const T = L.service;
  return L.services.map((s) => {
    const path = svcPath(L, s);
    const crumbs = [{ name: L.servicesIndex.crumb, path: L.routes.services }, { name: s.nav, path }];
    const others = L.services.filter((o) => o.id !== s.id);
    return {
      key: `svc:${s.id}`,
      path,
      title: s.title,
      description: s.description,
      preload: heroPreload(s.image.name, '(min-width: 1000px) 560px, 100vw'),
      schema: [
        breadcrumbSchema(L, crumbs),
        {
          '@type': 'Service',
          '@id': abs(`${path}#service`),
          name: s.h1,
          serviceType: s.serviceType,
          description: s.description,
          url: abs(path),
          inLanguage: L.htmlLang,
          provider: { '@id': abs('/#empresa') },
          areaServed: T.area,
        },
        ...(s.faqs?.length ? [faqSchema(s.faqs)] : []),
      ],
      body: `
<section class="page-section page-hero container">
  <div class="page-hero-copy">
    ${breadcrumbs(L, crumbs)}
    <h1>${esc(s.h1)}</h1>
    <p>${esc(s.lead)}</p>
    <div class="button-row">
      ${
        s.urgent
          ? `<a class="button button-dark" href="tel:${SITE.phone}">${icon.phone} ${esc(T.callNowPhone)} ${SITE.phoneIntl}</a><a class="button button-light" href="${L.routes.contact}">${esc(T.write)} ${icon.arrow}</a>`
          : `<a class="button button-dark" href="${L.routes.contact}">${esc(L.t.quote)} ${icon.arrow}</a><a class="button button-light" href="tel:${SITE.phone}">${icon.phone} ${SITE.phoneIntl}</a>`
      }
    </div>
  </div>
  <figure class="page-hero-image">${picture(s.image.name, s.image.alt, { eager: true, sizes: '(min-width: 1000px) 560px, 100vw' })}</figure>
</section>

<section class="container">
  <div class="casa-how includes-panel">
    <h2>${esc(T.includes)}</h2>
    <ul class="includes-list">${s.includes.map((x) => `<li>${icon.check}<span>${esc(x)}</span></li>`).join('')}</ul>
  </div>
</section>

<section class="container article-layout">
  <div class="article">
    ${s.sections.map((sec) => `<section id="${sec.id}"><h2>${esc(sec.h2)}</h2>${sec.html}</section>`).join('')}
  </div>
  <div class="article-aside">
    ${contactCard(L, { heading: s.urgent ? T.urgentCard : L.t.contactHeading, call: !!s.urgent })}
  </div>
</section>

<section class="container related" aria-labelledby="rel-t">
  <h2 id="rel-t">${esc(T.others)}</h2>
  <ul class="chip-row chip-row-left">${others.map((o) => `<li><a class="chip chip-link" href="${svcPath(L, o)}">${esc(o.nav)} ${icon.arrowUp}</a></li>`).join('')}</ul>
</section>

${s.faqs?.length ? faqBlock(L, s.faqs, { heading: T.faqHeading(s) }) : ''}
${finalCta(L)}
`,
    };
  });
}

function projects(L) {
  const P = L.projectsPage;
  const crumbs = [{ name: P.crumb, path: L.routes.projects }];
  return {
    key: 'projects',
    path: L.routes.projects,
    title: P.title,
    description: P.description,
    schema: [breadcrumbSchema(L, crumbs)],
    body: `
<section class="page-section container">
  <div class="center-heading page-heading">
    ${breadcrumbs(L, crumbs)}
    <h1>${esc(P.h1)}</h1>
    <p>${esc(P.lead)}</p>
  </div>
  <div class="trust-grid case-grid">
    ${L.projects
      .map(
        (p, i) => `<article class="tone-${i}">
      <span class="trust-meta">${esc(p.sector)} · ${esc(p.place)}</span>
      <h2>${esc(p.name)}</h2>
      <p>${esc(p.text)}</p>
      <dl>
        ${p.client ? `<div><dt>${esc(P.client)}</dt><dd>${esc(p.client)}</dd></div>` : ''}
        <div><dt>${esc(P.scope)}</dt><dd>${esc(p.scope)}</dd></div>
      </dl>
    </article>`,
      )
      .join('')}
  </div>
</section>
<section class="container gallery-section" aria-labelledby="gal-t">
  <div class="center-heading">${eyebrow(esc(P.galleryEyebrow), 'sage')}<h2 id="gal-t">${esc(P.galleryTitle)}</h2></div>
  <div class="gallery">
    ${P.gallery
      .map(([n, alt, cap]) => `<figure>${picture(n, alt, { sizes: '(min-width: 1000px) 370px, (min-width: 760px) 45vw, 100vw' })}<figcaption>${esc(cap)}</figcaption></figure>`)
      .join('')}
  </div>
</section>
${finalCta(L, { title: P.ctaTitle, text: P.ctaText })}
`,
  };
}

function company(L) {
  const C = L.companyPage;
  const crumbs = [{ name: C.crumb, path: L.routes.company }];
  return {
    key: 'company',
    path: L.routes.company,
    title: C.title,
    description: C.description,
    preload: heroPreload('planta-biogas-tuberias-pead', '(min-width: 1000px) 560px, 100vw'),
    schema: [breadcrumbSchema(L, crumbs), { '@type': 'AboutPage', url: abs(L.routes.company), inLanguage: L.htmlLang, about: { '@id': abs('/#empresa') } }],
    body: `
<section class="page-section page-hero container">
  <div class="page-hero-copy">
    ${breadcrumbs(L, crumbs)}
    <h1>${esc(C.h1)}</h1>
    <p>${esc(C.lead)}</p>
  </div>
  <figure class="page-hero-image">${picture('planta-biogas-tuberias-pead', C.imgAlt, { eager: true, sizes: '(min-width: 1000px) 560px, 100vw' })}</figure>
</section>

<section class="container feature-rows">
  <article class="feature-row feature-row-text">
    <div class="feature-copy"><h2>${esc(C.introTitle)}</h2></div>
    <div class="feature-copy">${C.intro.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
  </article>
</section>

<section class="container mv-grid">
  <article class="service-card tone-0"><h3>${esc(C.mission)}</h3><p>${esc(C.missionText)}</p></article>
  <article class="service-card tone-1"><h3>${esc(C.vision)}</h3><p>${esc(C.visionText)}</p></article>
</section>

<section class="trust-standard container" aria-labelledby="met-t">
  ${eyebrow(esc(C.mtEyebrow), 'sage')}
  <h2 id="met-t">${esc(C.mtTitle)}</h2>
  <div class="trust-grid two-col">
    <article><h3>${esc(C.methodTitle)}</h3><ul class="check-list">${L.method.map((m) => `<li>${icon.check}<span>${esc(m)}</span></li>`).join('')}</ul></article>
    <article><h3>${esc(C.teamTitle)}</h3><ul class="check-list">${L.team.map((m) => `<li>${icon.check}<span>${esc(m)}</span></li>`).join('')}</ul></article>
  </div>
</section>

<section class="container" aria-labelledby="datos-t">
  <div class="casa-how facts-panel">
    <h2 id="datos-t">${esc(C.factsTitle)}</h2>
    <dl class="facts-table">
      <div><dt>${esc(C.facts.legalName)}</dt><dd>${esc(SITE.legalName)}</dd></div>
      <div><dt>${esc(C.facts.tradeName)}</dt><dd>${esc(SITE.name)} (${esc(SITE.alternateName)})</dd></div>
      <div><dt>${esc(C.facts.activity)}</dt><dd>${esc(C.facts.activityText)}</dd></div>
      <div><dt>${esc(C.facts.since)}</dt><dd>${SITE.foundingYear}</dd></div>
      <div><dt>${esc(C.facts.office)}</dt><dd>${esc(addressLine(L))}</dd></div>
      <div><dt>${esc(C.facts.scope)}</dt><dd>${esc(L.t.areaLine)}</dd></div>
      <div><dt>${esc(C.facts.contact)}</dt><dd><a href="tel:${SITE.phone}">${SITE.phoneIntl}</a> · <a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
    </dl>
  </div>
</section>
${finalCta(L, { title: C.ctaTitle, text: C.ctaText })}
`,
  };
}

function contact(L) {
  const C = L.contactPage;
  const F = C.f;
  const crumbs = [{ name: C.crumb, path: L.routes.contact }];
  return {
    key: 'contact',
    path: L.routes.contact,
    title: C.title,
    description: C.description,
    schema: [breadcrumbSchema(L, crumbs), { '@type': 'ContactPage', url: abs(L.routes.contact), inLanguage: L.htmlLang, about: { '@id': abs('/#empresa') } }],
    body: `
<section class="page-section container">
  <div class="center-heading page-heading">
    ${breadcrumbs(L, crumbs)}
    <h1>${esc(C.h1)}</h1>
    <p>${esc(C.lead)}</p>
  </div>
  <div class="contact-layout">
    <div class="form-panel">
    <form class="form" id="form-presupuesto" ${SITE.formEndpoint ? `action="${esc(SITE.formEndpoint)}" method="post"` : `action="mailto:${SITE.email}" method="post" enctype="text/plain"`} novalidate>
      <input type="hidden" name="_subject" value="${esc(C.hiddenSubject)}">
      <div class="hp" aria-hidden="true"><label for="f-web">${esc(C.honeypot)}</label><input id="f-web" name="_gotcha" tabindex="-1" autocomplete="off"></div>
      <div class="form__row">
        <div class="field"><label for="f-nombre">${esc(F.name)}</label><input id="f-nombre" name="nombre" autocomplete="name" required></div>
        <div class="field"><label for="f-empresa">${esc(F.company)} <span class="opt">${esc(F.optional)}</span></label><input id="f-empresa" name="empresa" autocomplete="organization"></div>
      </div>
      <div class="form__row">
        <div class="field"><label for="f-email">${esc(F.email)}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="f-tel">${esc(F.phone)}</label><input id="f-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel"></div>
      </div>
      <div class="form__row">
        <div class="field"><label for="f-servicio">${esc(F.service)}</label>
          <select id="f-servicio" name="servicio">
            ${L.services.map((s) => `<option>${esc(s.nav)}</option>`).join('')}
            <option>${esc(F.other)}</option>
          </select>
        </div>
        <div class="field"><label for="f-loc">${esc(F.location)}</label><input id="f-loc" name="localidad" placeholder="${esc(F.locationPh)}"></div>
      </div>
      <div class="field"><label for="f-msg">${esc(F.message)}</label><textarea id="f-msg" name="mensaje" rows="6" required placeholder="${esc(F.messagePh)}"></textarea></div>
      <div class="check"><input id="f-priv" name="privacidad" type="checkbox" required><label for="f-priv">${F.privacy(L.routes.privacy)}</label></div>
      <p class="form__error" role="alert" hidden>${esc(F.error)}</p>
      <button class="button button-dark" type="submit">${esc(F.submit)} ${icon.arrow}</button>
      <p class="form__note">${SITE.formEndpoint ? F.noteEndpoint : esc(F.noteMailto)}</p>
    </form>
    <div class="form-done" id="form-ok" tabindex="-1" hidden>
      ${eyebrow(esc(C.done.eyebrow), 'sage')}
      <h2>${esc(C.done.title)}</h2>
      <p>${C.done.text}</p>
    </div>
    </div>
    <div class="contact-side">
      ${contactCard(L, { heading: C.cardHeading, call: true })}
      <div class="tips">
        <h3>${esc(C.tipsTitle)}</h3>
        <ul class="check-list">${C.tips.map((x) => `<li>${icon.check}<span>${x}</span></li>`).join('')}</ul>
      </div>
    </div>
  </div>
</section>
<section class="area-section container" aria-labelledby="zona-t">
  <div class="center-heading">
    ${eyebrow(esc(C.areaEyebrow), 'sage')}
    <h2 id="zona-t">${esc(C.areaTitle)}</h2>
    <p>${esc(C.areaText)}</p>
  </div>
  ${areaChips(L)}
</section>
`,
  };
}

function legal(L) {
  const pending = (label) => `<mark class="todo">${esc(L.pending)}: ${esc(label)}</mark>`;
  return L.legal.map((d) => {
    const path = L.routes[d.key];
    return {
      key: d.key,
      path,
      title: `${d.title} | ${L.legalTitleSuffix}`,
      description: L.legalDescription(d.title),
      robots: 'noindex,follow',
      schema: [breadcrumbSchema(L, [{ name: d.name, path }])],
      body: `
<section class="page-section container legal">${breadcrumbs(L, [{ name: d.name, path }])}<h1>${esc(d.title)}</h1><div class="prose">${d.html({ esc, pending, addressLine: addressLine(L) })}</div></section>`,
    };
  });
}

/** Todas las páginas de un idioma */
export function pagesFor(L) {
  return [home(L), servicesIndex(L), ...servicePages(L), projects(L), company(L), contact(L), ...legal(L)].map((p) => ({ ...p, L }));
}

/** Página 404 bilingüe (una sola, servida para cualquier URL inexistente) */
export function notFoundPage(L, EN) {
  return {
    key: '404',
    L,
    path: '/404.html',
    file: '404.html',
    title: 'Página no encontrada · Page not found | Qualinor',
    description: 'La página que busca no existe. The page you are looking for does not exist.',
    robots: 'noindex,follow',
    noSitemap: true,
    body: `
<section class="page-section container">
  <div class="center-heading page-heading">
    ${eyebrow('Error 404', 'peach')}
    <h1>No encontramos esta página.</h1>
    <p>Puede que la dirección haya cambiado. <span lang="en">This page could not be found — it may have moved.</span></p>
    <div class="button-row button-row-center">
      <a class="button button-dark" href="${L.routes.home}">Ir al inicio ${icon.arrow}</a>
      <a class="button button-light" href="${L.routes.services}">Ver servicios</a>
      <a class="button button-light" href="${EN.routes.home}" hreflang="en" lang="en">English site</a>
    </div>
  </div>
</section>`,
  };
}
