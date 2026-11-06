// Menú lateral, cabecera sobre el hero y formulario de presupuesto (sin dependencias)
(() => {
  // Menú lateral (<dialog>): se cierra con Escape, con el botón o al pulsar fuera del panel
  const dialog = document.getElementById('menu');
  const opener = document.querySelector('.menu-toggle');
  if (dialog && opener && typeof dialog.showModal === 'function') {
    opener.addEventListener('click', () => dialog.showModal());
    dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => opener.focus());
  } else if (opener) {
    opener.addEventListener('click', () => { window.location.href = '/servicios/'; });
  }

  // Selector de idioma: se cierra al pulsar fuera o con Escape
  document.querySelectorAll('.language-picker').forEach((d) => {
    document.addEventListener('click', (e) => { if (d.open && !d.contains(e.target)) d.open = false; });
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape') { d.open = false; d.querySelector('summary').focus(); } });
  });

  // Cabecera transparente sobre la foto de portada; blanca al hacer scroll
  const header = document.querySelector('.header[data-over-hero]');
  const hero = document.querySelector('.casa-hero');
  if (header && hero) {
    const update = () => header.classList.toggle('header-over-hero', window.scrollY < hero.offsetHeight - header.offsetHeight);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  // Formulario de presupuesto.
  // - Con endpoint (SITE.formEndpoint, p. ej. Formspree): envío por fetch con estados de envío/éxito/error.
  // - Sin endpoint: abre el programa de correo con la solicitud preparada.
  // Sin JavaScript, el navegador envía el formulario de forma nativa al mismo action.
  const form = document.getElementById('form-presupuesto');
  if (!form) return;
  const error = form.querySelector('.form__error');
  const button = form.querySelector('button[type="submit"]');
  const done = document.getElementById('form-ok');
  const action = form.getAttribute('action') || '';
  const isMailto = action.startsWith('mailto:');
  const MSG_INVALID = error.textContent;
  const EN = document.documentElement.lang.startsWith('en');
  const T = EN
    ? { fail: 'The request could not be sent. Please try again or call us on ', sending: 'Sending…', subject: 'Quote request', name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', service: 'Service', site: 'Site location' }
    : { fail: 'No se ha podido enviar la solicitud. Inténtelo de nuevo o llámenos al ', sending: 'Enviando…', subject: 'Solicitud de presupuesto', name: 'Nombre', company: 'Empresa', email: 'Correo', phone: 'Teléfono', service: 'Servicio', site: 'Localidad de la obra' };
  const MSG_FAIL = T.fail + (document.querySelector('a[href^="tel:"]')?.textContent.trim() || '+34 697 761 413') + '.';

  const validate = () => {
    let firstBad = null;
    form.querySelectorAll('[required]').forEach((el) => {
      const ok = el.type === 'checkbox' ? el.checked : el.value.trim() !== '' && el.checkValidity();
      const wrap = el.closest('.field, .check');
      wrap && wrap.classList.toggle('is-invalid', !ok);
      el.setAttribute('aria-invalid', String(!ok));
      if (!ok && !firstBad) firstBad = el;
    });
    return firstBad;
  };
  const showError = (msg) => { error.textContent = msg; error.hidden = false; };
  const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : '');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstBad = validate();
    if (firstBad) { showError(MSG_INVALID); firstBad.focus(); return; }
    error.hidden = true;

    if (isMailto) {
      const subject = `${T.subject} – ${v('servicio')}${v('localidad') ? ` – ${v('localidad')}` : ''}`;
      const opt = (label, n) => (v(n) ? `${label}: ${v(n)}` : null);
      const body = [
        `${T.name}: ${v('nombre')}`, opt(T.company, 'empresa'), `${T.email}: ${v('email')}`, opt(T.phone, 'telefono'),
        `${T.service}: ${v('servicio')}`, opt(T.site, 'localidad'), '', v('mensaje'),
      ].filter((x) => x !== null).join('\n');
      window.location.href = `${action}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    if (v('_gotcha')) return; // trampa anti-spam rellenada: se descarta en silencio
    const data = new FormData(form);
    data.set('_subject', `${T.subject} – ${v('servicio')}${v('localidad') ? ` – ${v('localidad')}` : ''}`);
    data.set('_replyto', v('email'));
    const label = button.innerHTML;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.textContent = T.sending;
    try {
      const res = await fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      done.hidden = false;
      done.focus();
    } catch {
      showError(MSG_FAIL);
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.innerHTML = label;
    }
  });
})();
