# Qualinor Servicios Técnicos — sitio web

Sitio estático en español (es-ES) orientado a SEO local en Valencia. Sin dependencias: Node 18+ y Python 3 con Pillow.

```bash
npm run dev      # build + servidor en http://localhost:4321
npm run check    # build + verificación (enlaces, imágenes, JSON-LD, metadatos) — ejecutar antes de cada commit
npm run images   # regenerar WebP, imagen OG y favicons desde src/img-source/
```

## Estructura

- `src/data.mjs` — datos de empresa (NAP), proyectos, fases, entregables. **Campos vacíos = pendientes**, el build los lista.
- `src/locales/es.mjs` y `src/locales/en.mjs` — todos los textos por idioma (español en `/`, inglés en `/en/`). Las páginas se enlazan entre sí con `hreflang` y el selector de idioma; el build falla si a un idioma le falta una página.
- `src/services.en.mjs` — contenido de servicios en inglés (el español está en `src/services.mjs`).
- `src/services.mjs` — contenido de las 6 páginas de servicio (español).
- `src/pages.mjs` — plantillas compartidas por ambos idiomas: inicio, servicios, proyectos, empresa, contacto, legales, 404.
- `src/ui.mjs` — layout, componentes y schema.org (`GeneralContractor`, `Service`, `BreadcrumbList`, `FAQPage`).
- `src/assets/` — CSS y JS. `public/` — imágenes y favicons. Salida en `dist/` (desplegar esa carpeta).

## Antes de publicar

1. Completar en `src/data.mjs`: dirección, código postal, NIF, Registro Mercantil, coordenadas y URL del Perfil de Empresa en Google.
2. Confirmar el dominio (`SITE.url`, deducido del correo: `qstsl.es`).
3. Formulario: Shipvela solo sirve archivos estáticos, así que el envío va a un servicio externo. Crear un formulario en Formspree (u otro compatible que acepte `POST` con `Accept: application/json`) y pegar su URL en `SITE.formEndpoint` y el nombre del proveedor en `SITE.formProvider`. Vacío = abre el correo del usuario. Incluye trampa anti-spam (`_gotcha`) y estados de envío/éxito/error.
4. Dar de alta el sitemap (`/sitemap.xml`) en Google Search Console.

La fuente (Geist, licencia OFL) se sirve desde `/fonts/`: ninguna petición a Google. El estilo visual sigue el sistema de Casa Practica (tarjetas crema, pie oliva, botones pill), sin copiar su fuente Diatype ni sus iconos.

## Despliegue en Shipvela

```bash
shipvela login
npm run deploy   # check + shipvela publish dist --name qualinor
```

Publicar **sin** `--spa`: es un sitio multipágina y `--spa` convertiría las URL inexistentes en la portada (soft-404, malo para SEO). Tras el primer despliegue, comprobar que `/servicios/` (sin `index.html`) carga y que una URL inexistente devuelve la página 404.
