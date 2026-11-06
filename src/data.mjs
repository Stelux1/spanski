// Datos de la empresa. Fuente: "Qualinor Project Proposal" (octubre 2025).
// Los campos vacíos ('') NO se inventan: el build avisa y las páginas legales los marcan como pendientes.

export const SITE = {
  url: 'https://qstsl.es', // dominio deducido del correo corporativo; confirmar antes de publicar
  name: 'Qualinor Servicios Técnicos',
  shortName: 'Qualinor',
  legalName: 'QUALINOR SERVICIOS TECNICOS SL',
  alternateName: 'QST SL',
  foundingYear: '2021',
  email: 'oficina_valencia@qstsl.es',
  phone: '+34697761413',
  phoneDisplay: '697 761 413',
  phoneIntl: '+34 697 761 413',
  locale: 'es_ES',
  address: {
    street: '', // PENDIENTE: dirección de la oficina de Valencia
    postalCode: '', // PENDIENTE
    locality: 'Valencia',
    region: 'Comunidad Valenciana',
    country: 'ES',
  },
  nif: '', // PENDIENTE: NIF/CIF de la sociedad
  registry: '', // PENDIENTE: datos del Registro Mercantil
  geo: null, // PENDIENTE: { lat, lng } de la oficina, para el perfil de Google y el schema
  googleBusinessUrl: '', // PENDIENTE: URL del Perfil de Empresa en Google
  linkedinUrl: '',
  // Formulario: Shipvela solo sirve archivos estáticos, así que el envío va a un servicio externo.
  // Pegue aquí la URL del endpoint (p. ej. https://formspree.io/f/xxxxxxx). Vacío = se abre el correo del usuario.
  formEndpoint: process.env.FORM_ENDPOINT || '', // también se puede pasar como variable de entorno al hacer build
  formProvider: '', // nombre del proveedor, para la política de privacidad (p. ej. 'Formspree, Inc.')
};

export const AREAS = [
  'Valencia y área metropolitana',
  'Puerto de Valencia',
  'Sagunto',
  'Paterna y Ribarroja del Turia',
  'Almussafes y La Ribera',
  'Castellón',
  'Alicante',
  'Resto de España y Europa',
];

// Las 8 líneas de servicio tal como figuran en la propuesta, enlazadas a su página.
export const SERVICE_LINES = [
  { short: 'instalación de tuberías PEAD', name: 'Suministro e instalación de sistemas de tuberías PEAD (HDPE)', href: '/servicios/instalacion-tuberias-pead-hdpe/' },
  { short: 'soldadura a tope y electrofusión', name: 'Soldadura por termofusión a tope y electrofusión', href: '/servicios/soldadura-tope-electrofusion/' },
  { short: 'montaje de bombas y válvulas', name: 'Montajes mecánicos en obra: válvulas, bombas y accesorios', href: '/servicios/montajes-mecanicos/' },
  { short: 'soportes y conexiones', name: 'Fabricación de soportes y conexiones mecánicas', href: '/servicios/montajes-mecanicos/#soportes' },
  { short: 'pruebas de presión', name: 'Pruebas de presión hidrostáticas y neumáticas', href: '/servicios/pruebas-de-presion/' },
  { short: 'documentación as-built', name: 'Documentación as-built y entrega del proyecto', href: '/servicios/pruebas-de-presion/#as-built' },
  { short: 'reparación urgente', name: 'Mantenimiento y reparación de urgencia', href: '/servicios/mantenimiento-reparacion-urgente/' },
  { short: 'gestión de proyectos', name: 'Gestión de proyectos, estimación, control de costes y compras', href: '/servicios/gestion-de-proyectos/' },
];

export const PROJECTS = [
  {
    name: 'Vida Bioenergy',
    place: 'Tilburg, Países Bajos',
    sector: 'Bioenergía',
    scope: 'Sistema completo de tuberías PEAD para distribución de energía',
    text: 'Implementación completa del sistema de tuberías PEAD de la planta, desde la instalación hasta la entrega. Proyecto entregado antes del plazo previsto.',
    tag: 'Entregado antes de plazo',
  },
  {
    name: 'INEOS Project One — OSBL',
    place: 'Amberes, Bélgica',
    sector: 'Petroquímica',
    client: 'TM Vanhout-Mourik',
    scope: 'Instalación mecánica y de tuberías',
    text: 'Instalación mecánica y de tuberías de alta complejidad en las instalaciones exteriores (OSBL) del proyecto, ejecutada en condiciones industriales exigentes.',
  },
  {
    name: 'INEOS Project One — ECR',
    place: 'Amberes, Bélgica',
    sector: 'Petroquímica',
    client: 'Ballast Nedam Industriebouw België',
    scope: 'Instalación mecánica y de tuberías',
    text: 'Instalación mecánica y de tuberías compleja para Ballast Nedam Industriebouw België, en un entorno de gran proyecto industrial con requisitos QA/QC y HSE del cliente.',
  },
];

export const PHASES = [
  { n: '01', title: 'Gestión y planificación', text: 'Planificación y programación específicas del proyecto, estimación y control de costes.' },
  { n: '02', title: 'Movilización y preparación', text: 'Acopio de materiales, equipos de soldadura y preparación de la zona de trabajo.' },
  { n: '03', title: 'Soldadura PEAD y montaje mecánico', text: 'Ejecución por técnicos certificados, con control QA/QC durante toda la obra.' },
  { n: '04', title: 'Pruebas y puesta en marcha', text: 'Pruebas hidrostáticas o neumáticas, con registro de cada ensayo.' },
  { n: '05', title: 'Entrega documentada', text: 'Mapas de soldadura, informes de inspección y dossier de calidad final.' },
];

export const DELIVERABLES = {
  start: [
    'Metodología de ejecución del proyecto',
    'Evaluación de riesgos de seguridad y medioambientales',
    'Protocolos QA/QC y plan de documentación',
  ],
  end: [
    'Sistemas de tuberías completamente probados, con registros',
    'Mapas de soldadura e informes de inspección',
    'Documentación de operación y mantenimiento y formación del cliente (si aplica)',
    'Dossier de calidad final y certificado de finalización',
    'Revisión y soporte post-instalación',
  ],
};

export const TEAM = [
  'Técnicos certificados en fusión PEAD: termofusión a tope y electrofusión',
  'Ingenieros mecánicos titulados',
  'Supervisores de obra y jefes de proyecto con experiencia',
  'Profesionales dedicados a seguridad y calidad',
  'Coordinación bilingüe en neerlandés e inglés para proyectos internacionales',
  'Experiencia demostrada en proyectos industriales y medioambientales',
];

export const METHOD = [
  'Planificación y programación específicas para cada proyecto',
  'Estimación y control de costes',
  'Adquisición y suministro de materiales',
  'Personal certificado y formado',
  'Cumplimiento de los requisitos QA/QC y HSE de cada cliente',
  'Colaboración con los equipos del cliente para una integración fluida',
];

// Metadatos de las imágenes generadas por tools/images.py (dimensiones tras el recorte)
export const IMAGES = {
  'sala-bombas-colectores-pead': { w: 1200, h: 1600, widths: [480, 800, 1200] },
  'colector-valvulas-pead': { w: 1200, h: 1600, widths: [480, 800, 1200] },
  'soldadura-tope-pead-obra': { w: 1383, h: 1037, widths: [480, 800, 1280] },
  'skid-bombeo-tuberias-pead': { w: 720, h: 960, widths: [480, 720] },
  'zanja-tuberia-pead-gran-diametro': { w: 2765, h: 1556, widths: [480, 800, 1200, 1600] },
  'planta-biogas-tuberias-pead': { w: 3024, h: 4032, widths: [480, 800, 1200] },
};
