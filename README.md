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

## Vista previa de 3 diseños (para el cliente)

Con `SITE.designPreview: true` (en `src/data.mjs`) cada página muestra abajo a la izquierda un selector **Diseño 1 · 2 · 3**:

1. **Actual** — sistema Casa Practica (`site.css`).
2. **Industrial** — grafito, naranja de señalización, rótulos Barlow Condensed y datos en IBM Plex Mono.
3. **Corporativo** — en la línea de ASE Consulting: azul marino, oro, Montserrat 800, esquinas rectas.

Los diseños 2 y 3 están en `src/assets/designs.css`, bajo `[data-design="N"]`. Enlace directo a un diseño: `/?diseno=2` (la elección se recuerda al navegar). Cuando el cliente elija: pasar ese bloque a `site.css`, borrar `designs.css` y poner `designPreview: false`.

## Antes de publicar

1. Completar en `src/data.mjs`: dirección, código postal, NIF, Registro Mercantil, coordenadas y URL del Perfil de Empresa en Google.
2. Confirmar el dominio (`SITE.url`, deducido del correo: `qstsl.es`).
3. Formulario: Shipvela solo sirve archivos estáticos, así que el envío va a un servicio externo. Crear un formulario en Formspree (u otro compatible que acepte `POST` con `Accept: application/json`) y pegar su URL en `SITE.formEndpoint` y el nombre del proveedor en `SITE.formProvider`. Vacío = abre el correo del usuario. Incluye trampa anti-spam (`_gotcha`) y estados de envío/éxito/error.
4. Dar de alta el sitemap (`/sitemap.xml`) en Google Search Console.

La fuente (Geist, licencia OFL) se sirve desde `/fonts/`: ninguna petición a Google. El estilo visual sigue el sistema de Casa Practica (tarjetas crema, pie oliva, botones pill), sin copiar su fuente Diatype ni sus iconos.

## Despliegue en Shipvela

El sitio se publica con la CLI de Shipvela como **sitio estático** (proyecto de subida `qualinor`, enlazado en `shipvela.json`):

```sh
npm run deploy   # = npm run check && shipvela publish dist
```

No usar el proyecto de GitHub (`Stelux1/spanski`): Shipvela lo detecta como «Vite / single-page app» por el `vite` de `package.json` y reescribe toda ruta `.html`/`.xml` (y sin extensión) a la portada, así que `/servicios/`, `/en/` o `sitemap.xml` muestran la portada con 200. Un proyecto de subida sin `--spa` (framework `static`) sirve cada archivo tal cual y devuelve 404 real en URLs inexistentes. `vite build` se mantiene solo como envoltorio de `build.mjs`.

La CLI necesita sesión (`shipvela login`, Node 22+). Tras cada despliegue, comprobar que `/servicios/` y `/sitemap.xml` devuelven su propio contenido y que una URL inexistente da 404.
