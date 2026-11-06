// Paquete de idioma: español (idioma principal del sitio)
import { SITE, AREAS, SERVICE_LINES, PROJECTS, TEAM, METHOD } from '../data.mjs';
import { SERVICES } from '../services.mjs';

export default {
  code: 'es',
  htmlLang: 'es-ES',
  ogLocale: 'es_ES',
  label: 'Español',
  short: 'ES',
  routes: {
    home: '/', services: '/servicios/', projects: '/proyectos/', company: '/empresa/', contact: '/contacto/',
    legal: '/aviso-legal/', privacy: '/privacidad/', cookies: '/cookies/',
  },
  services: SERVICES,
  serviceLines: SERVICE_LINES,
  projects: PROJECTS,
  team: TEAM,
  method: METHOD,
  areas: AREAS,
  knowsAbout: [
    'Tuberías PEAD', 'Tuberías HDPE', 'Soldadura por termofusión a tope', 'Electrofusión',
    'Montajes mecánicos industriales', 'Pruebas de presión hidrostáticas', 'Pruebas de presión neumáticas',
  ],

  t: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    homeAria: 'inicio',
    crumbsLabel: 'Ruta de navegación',
    nav: { services: 'Servicios', projects: 'Proyectos', company: 'Empresa', contact: 'Contacto' },
    mainNav: 'Principal',
    drawerNav: 'Menú principal',
    menu: 'Menú',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    quote: 'Solicitar presupuesto',
    quoteShort: 'Presupuesto',
    servicesHeading: 'Servicios',
    drawerNote: 'Oficina en Valencia · Comunidad Valenciana, España y Europa',
    country: 'España',
    areaLine: 'Comunidad Valenciana, España y Europa',
    callNow: 'Llamar ahora',
    contactHeading: 'Hablemos de su proyecto',
    viewService: 'Ver servicio',
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Preguntas frecuentes',
    finalTitle: 'Un contratista. Toda la instalación.',
    finalText: 'Envíenos planos, ubicación y plazos. Le respondemos con una propuesta técnica y económica.',
    footer: {
      title: 'Instalaciones PEAD y mecánicas, a tiempo, según especificación y dentro de presupuesto.',
      note: 'Oficina en Valencia. Proyectos en toda España y Europa.',
      services: 'Servicios',
      company: 'Empresa',
      about: 'Sobre Qualinor',
      contact: 'Contacto',
      tagline: 'Valencia, con rigor técnico.',
      legal: 'Aviso legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
    },
  },

  home: {
    title: 'Tuberías PEAD (HDPE) y montajes mecánicos en Valencia | Qualinor',
    description:
      'Instalación de tuberías PEAD/HDPE, soldadura a tope y electrofusión, montajes mecánicos y pruebas de presión en Valencia. Técnicos certificados. Pida presupuesto.',
    heroAlt: 'Tendido de tubería PEAD de gran diámetro en zanja junto a una planta industrial',
    newsTag: 'QUALINOR · VALENCIA',
    newsText: '¿Avería o fuga? Reparación urgente.',
    h1: 'Tuberías PEAD y montajes mecánicos en Valencia',
    lead: 'Suministro, soldadura e instalación para la industria y la energía. A tiempo, según especificación y dentro de presupuesto.',
    start: 'Solicite su presupuesto',
    startNote: `Desde ${SITE.foundingYear} · Proyectos en España, Países Bajos y Bélgica`,
    howTitle: 'Cómo trabajamos con usted',
    steps: [
      { icon: 'clipboard', h: 'Envíenos su proyecto', p: 'Planos, ubicación, diámetros y plazos. Revisamos el alcance técnico.' },
      { icon: 'file', h: 'Reciba una propuesta', p: 'Metodología, presupuesto y plan de calidad antes de empezar.' },
      { icon: 'shield', h: 'Ejecutamos y entregamos', p: 'Soldadura, montaje, pruebas de presión y dossier final.' },
    ],
    tasksEyebrow: 'Servicios industriales',
    tasksTitle: 'Todo el ciclo de la instalación. Un solo contratista.',
    tasksText: 'De la estimación y la compra de materiales a las pruebas de presión y la documentación final, con personal certificado en cada fase.',
    taskPhotoAlt: 'Sala de bombas con colectores de tubería PEAD y válvulas actuadas',
    wheelLabel: '¿Qué necesita su instalación?',
    features: [
      {
        title: 'Uniones que no fallan.<br>Cada soldadura, registrada.',
        text: 'Técnicos certificados en termofusión a tope y electrofusión. Cada unión queda identificada en el mapa de soldadura del proyecto.',
        link: 'Descubra la soldadura PEAD', service: 'welding',
        img: 'soldadura-tope-pead-obra', alt: 'Técnicos soldando a tope una tubería PEAD con máquina de termofusión en zanja',
      },
      {
        title: 'Probado antes de entregar.',
        text: 'Pruebas hidrostáticas o neumáticas con registro de cada ensayo. Entregamos el sistema con mapas de soldadura, informes y dossier de calidad.',
        link: 'Descubra las pruebas de presión', service: 'pressure', reverse: true,
        img: 'colector-valvulas-pead', alt: 'Colector de tubería PEAD con válvulas actuadas en una sala de bombeo',
      },
    ],
    servicesEyebrow: 'Nuestros servicios',
    servicesTitle: '¿Qué necesita su proyecto?',
    servicesText: 'Elija el servicio. Envíenos los detalles y le respondemos con una propuesta técnica y económica.',
    helpPrimary: {
      title: 'Cuéntenos qué necesita.',
      text: '¿Tiene planos, un P&amp;ID o solo una idea del alcance? Envíenoslo y le ayudamos a definir la solución y el presupuesto.',
      small: 'Sin compromiso. Propuesta técnica y económica.',
    },
    helpSecondary: {
      title: '¿Avería o fuga en su instalación?',
      text: 'Reparamos tuberías PEAD e instalaciones mecánicas y volvemos a probar la línea antes de devolverla al servicio.',
      link: 'Reparación urgente',
    },
    deliverables: {
      eyebrow: 'Entregables',
      title: 'Documentado. Del primer día al último.',
      text: 'En una instalación crítica, la documentación es tan importante como la soldadura. Esto es lo que recibe en cada proyecto.',
      button: 'Cómo gestionamos los proyectos',
      items: [
        { icon: 'clipboard', h: 'Antes de empezar', p: 'Metodología de ejecución, evaluación de riesgos de seguridad y medioambientales, y protocolos QA/QC.' },
        { icon: 'gauge', h: 'Sistemas probados', p: 'Tuberías completamente probadas, con registros de cada prueba de presión.' },
        { icon: 'flame', h: 'Mapas de soldadura', p: 'Cada unión identificada, con informes de inspección.' },
        { icon: 'file', h: 'Dossier final', p: 'Dossier de calidad, certificado de finalización y documentación de operación y mantenimiento si aplica.' },
        { icon: 'users', h: 'Soporte posterior', p: 'Revisión y soporte post-instalación, y formación del cliente cuando aplica.' },
      ],
    },
    projectsEyebrow: 'Proyectos de referencia',
    projectsTitle: 'Experiencia en plantas de Europa.',
    projectsLink: 'Ver todos los proyectos',
    projectFor: 'para',
    areaEyebrow: 'Zona de servicio',
    areaTitle: 'Desde Valencia, donde esté su obra.',
    areaText: 'Atendemos el área metropolitana y los polígonos industriales de toda la Comunidad Valenciana, y desplazamos equipos al resto de España y Europa.',
    faqs: [
      {
        q: '¿Qué es una tubería PEAD o HDPE?',
        a: 'PEAD son las siglas de polietileno de alta densidad (HDPE en inglés). Es un material que no se corroe, resiste un amplio rango de productos químicos y se une por soldadura, formando una línea continua sin juntas mecánicas. Se utiliza en agua de proceso, biogás y energía, efluentes industriales y redes enterradas.',
      },
      {
        q: '¿Qué diferencia hay entre la soldadura a tope y la electrofusión?',
        a: 'En la termofusión a tope los extremos de los tubos se calientan con una placa y se unen a presión; es la opción habitual en tramos largos y diámetros medios y grandes. En la electrofusión, un accesorio con resistencia integrada funde la unión; se emplea en reparaciones, espacios reducidos, derivaciones y conexiones a redes existentes.',
      },
      {
        q: '¿Realizan pruebas de presión y entregan documentación?',
        a: 'Sí. Probamos cada sistema con pruebas hidrostáticas o neumáticas y entregamos los registros, los mapas de soldadura, los informes de inspección, la documentación as-built y un dossier de calidad final con certificado de finalización.',
      },
      {
        q: '¿Trabajan fuera de Valencia?',
        a: 'Sí. Desde nuestra oficina en Valencia atendemos toda la Comunidad Valenciana y el resto de España, y desplazamos equipos a otros países europeos: hemos ejecutado proyectos en Países Bajos y Bélgica.',
      },
      {
        q: '¿Atienden averías y reparaciones urgentes?',
        a: `Sí, ofrecemos mantenimiento y reparación de emergencia de tuberías PEAD e instalaciones mecánicas. Llámenos al ${SITE.phoneDisplay} indicando la ubicación, el tipo de tubería y la avería.`,
      },
      {
        q: '¿Suministran también los materiales?',
        a: 'Sí. Gestionamos la compra y el suministro de tubería, accesorios y equipos, o trabajamos con el material aportado por el cliente o el contratista principal.',
      },
    ],
  },

  servicesIndex: {
    title: 'Servicios de tuberías PEAD y montajes mecánicos en Valencia | Qualinor',
    description:
      'Instalación de tuberías PEAD, soldadura a tope y electrofusión, montajes mecánicos, pruebas de presión, mantenimiento y gestión de proyectos en Valencia.',
    crumb: 'Servicios',
    h1: 'Servicios de tuberías PEAD y montajes mecánicos',
    lead: 'Cubrimos todo el ciclo de una instalación de tuberías, desde la estimación hasta la documentación de entrega, con soluciones rentables y de alto rendimiento.',
    scopeTitle: 'Nuestros servicios incluyen, entre otros',
  },

  service: {
    write: 'Escribirnos',
    callNowPhone: 'Llamar ahora:',
    includes: 'Qué incluye',
    urgentCard: '¿Avería o fuga?',
    others: 'Otros servicios',
    faqHeading: (s) => `Dudas sobre ${s.nav.toLowerCase().replace('pead (hdpe)', 'PEAD (HDPE)')}`,
    area: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'AdministrativeArea', name: 'Comunidad Valenciana' },
      { '@type': 'Country', name: 'España' },
    ],
  },

  projectsPage: {
    title: 'Proyectos de tuberías PEAD e instalaciones mecánicas | Qualinor',
    description:
      'Proyectos de Qualinor: sistema de tuberías PEAD para Vida Bioenergy (Tilburg) e instalaciones mecánicas y de tuberías en INEOS Project One (Amberes).',
    crumb: 'Proyectos',
    h1: 'Proyectos de tuberías PEAD e instalaciones mecánicas',
    lead: 'Hemos trabajado en plantas energéticas y grandes complejos industriales de Europa, como contratista directo y como subcontratista de grandes constructoras industriales.',
    client: 'Cliente',
    scope: 'Alcance',
    galleryEyebrow: 'En obra',
    galleryTitle: 'Trabajos de instalación',
    gallery: [
      ['planta-biogas-tuberias-pead', 'Colectores de tubería PEAD con válvulas junto a los digestores de una planta de biogás', 'Colectores de PEAD en planta de biogás'],
      ['sala-bombas-colectores-pead', 'Sala de bombas con colectores de PEAD y válvulas actuadas', 'Sala de bombas con colectores de PEAD'],
      ['soldadura-tope-pead-obra', 'Técnicos soldando a tope una tubería PEAD en zanja', 'Soldadura a tope en zanja'],
      ['colector-valvulas-pead', 'Colector de PEAD con válvulas actuadas y bomba', 'Colector con válvulas actuadas'],
      ['skid-bombeo-tuberias-pead', 'Grupo de bombeo con tuberías PEAD montado en nave', 'Grupo de bombeo y tuberías PEAD'],
      ['zanja-tuberia-pead-gran-diametro', 'Tubería PEAD de gran diámetro tendida en zanja en obra industrial', 'Tubería PEAD de gran diámetro'],
    ],
    ctaTitle: '¿Su proyecto es el siguiente?',
    ctaText: 'Cuéntenos el alcance, la ubicación y los plazos. Le respondemos con una propuesta técnica y económica.',
  },

  companyPage: {
    title: 'Sobre nosotros | Qualinor, empresa de tuberías PEAD en Valencia',
    description:
      'Qualinor Servicios Técnicos: empresa de instalaciones PEAD y mecánicas con oficina en Valencia desde 2021. Misión, visión, metodología y equipo certificado.',
    crumb: 'Empresa',
    h1: 'Una empresa de confianza en instalaciones PEAD y mecánicas',
    lead: `Desde ${SITE.foundingYear}, Qualinor Servicios Técnicos ofrece instalación de tuberías PEAD y montajes mecánicos de primera calidad en toda Europa. Combinamos experiencia técnica, personal certificado y un compromiso firme con la seguridad y la eficiencia.`,
    imgAlt: 'Colectores de tubería PEAD con válvulas junto a los digestores de una planta de biogás',
    introTitle: 'A tiempo, según especificación y dentro de presupuesto.',
    intro: [
      'Atendemos a clientes de distintos sectores, desde plantas de bioenergía hasta grandes complejos petroquímicos. Nuestros servicios se basan en la normativa europea, la responsabilidad ambiental y el rendimiento a largo plazo.',
      'Entendemos las exigencias de la infraestructura crítica: una parada no prevista o una unión defectuosa tienen un coste real para nuestros clientes. Por eso trabajamos con precisión y documentamos cada paso.',
    ],
    mission: 'Misión',
    missionText: 'Ejecutar instalaciones de PEAD y montajes mecánicos de forma segura, eficiente y técnicamente sólida, basándonos en la precisión, la profesionalidad y la fiabilidad a largo plazo.',
    vision: 'Visión',
    visionText: 'Convertirnos en la opción de referencia en Europa para proyectos de instalación de PEAD y mecánicos, con alto rendimiento constante, innovación y la satisfacción de nuestros clientes.',
    mtEyebrow: 'Metodología y equipo',
    mtTitle: 'Cómo trabajamos y quién lo hace.',
    methodTitle: 'Metodología',
    teamTitle: 'Equipo',
    factsTitle: 'Ficha de empresa',
    facts: {
      legalName: 'Razón social', tradeName: 'Nombre comercial', activity: 'Actividad', since: 'En activo desde',
      office: 'Oficina', scope: 'Ámbito', contact: 'Contacto',
      activityText: 'Instalación de tuberías PEAD (HDPE) y montajes mecánicos industriales',
    },
    ctaTitle: 'Asóciese con nosotros en su próximo proyecto.',
    ctaText: 'Instalaciones PEAD y mecánicas ejecutadas de forma segura, profesional y con resultados duraderos.',
  },

  contactPage: {
    title: 'Contacto y presupuestos en Valencia | Qualinor Servicios Técnicos',
    description: `Solicite presupuesto para instalación de tuberías PEAD o montajes mecánicos en Valencia. Llame al ${SITE.phoneDisplay} o escriba a ${SITE.email}.`,
    crumb: 'Contacto',
    h1: 'Contacto y presupuestos',
    lead: 'Cuéntenos su proyecto. Le responderemos con una propuesta técnica y económica, o le llamaremos para aclarar el alcance.',
    hiddenSubject: 'Solicitud de presupuesto desde la web',
    honeypot: 'No rellenar',
    f: {
      name: 'Nombre y apellidos', company: 'Empresa', optional: '(opcional)', email: 'Correo electrónico', phone: 'Teléfono',
      service: 'Servicio', other: 'Otro / proyecto completo', location: 'Localidad de la obra', locationPh: 'p. ej. Sagunto',
      message: 'Descripción del proyecto', messagePh: 'Alcance, diámetros y longitudes aproximadas, fluido, plazos…',
      privacy: (href) => `He leído y acepto la <a href="${href}">política de privacidad</a>.`,
      error: 'Revise los campos marcados: nombre, correo válido, descripción y aceptación de la política de privacidad.',
      submit: 'Enviar solicitud',
      noteEndpoint: `Le responderemos lo antes posible. Si lo prefiere, llámenos al <a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a>.`,
      noteMailto: `Al enviar se abrirá su programa de correo con la solicitud preparada para ${SITE.email}.`,
    },
    done: {
      eyebrow: 'Solicitud enviada',
      title: 'Gracias, hemos recibido su solicitud.',
      text: `Revisaremos el alcance y le responderemos con una propuesta o una llamada. Si es urgente, llámenos al <a href="tel:${SITE.phone}">${SITE.phoneIntl}</a>.`,
    },
    cardHeading: 'Qualinor Servicios Técnicos',
    tipsTitle: 'Para un presupuesto más preciso',
    tips: ['Ubicación de la obra y accesos', 'Planos, P&amp;ID o isométricos, si los tiene', 'Diámetros y longitudes aproximadas', 'Fluido y presión de trabajo', 'Plazos y fecha prevista de inicio'],
    areaEyebrow: 'Zona de servicio',
    areaTitle: 'Dónde trabajamos',
    areaText: 'Oficina en Valencia, con servicio en toda la Comunidad Valenciana, el resto de España y Europa.',
  },

  legalTitleSuffix: 'Qualinor Servicios Técnicos',
  legalDescription: (title) => `${title} del sitio web de ${SITE.legalName}.`,
  pending: 'Pendiente',
  legal: [
    {
      key: 'legal', name: 'Aviso legal', title: 'Aviso legal',
      html: ({ esc, pending, addressLine }) => `
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los datos identificativos del titular de este sitio web:</p>
<dl class="facts-table">
  <div><dt>Titular</dt><dd>${esc(SITE.legalName)}</dd></div>
  <div><dt>NIF</dt><dd>${SITE.nif ? esc(SITE.nif) : pending('NIF')}</dd></div>
  <div><dt>Domicilio</dt><dd>${SITE.address.street ? esc(addressLine) : pending('domicilio social')}</dd></div>
  <div><dt>Datos registrales</dt><dd>${SITE.registry ? esc(SITE.registry) : pending('Registro Mercantil')}</dd></div>
  <div><dt>Correo electrónico</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
  <div><dt>Teléfono</dt><dd>${SITE.phoneIntl}</dd></div>
</dl>
<h2>Condiciones de uso</h2>
<p>El acceso a este sitio web es gratuito y atribuye la condición de usuario, que acepta estas condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos, conforme a la ley y a la buena fe.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos, fotografías, diseño y demás contenidos de este sitio son propiedad del titular o se utilizan con autorización. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.</p>
<h2>Responsabilidad</h2>
<p>El titular no se hace responsable de los daños derivados del uso de la información de este sitio ni de los contenidos de sitios externos enlazados.</p>
<h2>Legislación aplicable</h2>
<p>Estas condiciones se rigen por la legislación española.</p>`,
    },
    {
      key: 'privacy', name: 'Privacidad', title: 'Política de privacidad',
      html: ({ esc }) => `
<p>Esta política explica cómo tratamos los datos personales que nos facilita a través de este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
<h2>Responsable del tratamiento</h2>
<p>${esc(SITE.legalName)}${SITE.nif ? `, NIF ${esc(SITE.nif)}` : ''}. Correo: <a href="mailto:${SITE.email}">${SITE.email}</a>. Teléfono: ${SITE.phoneIntl}.</p>
<h2>Finalidad</h2>
<p>Atender sus consultas y solicitudes de presupuesto y, en su caso, gestionar la relación comercial derivada.</p>
<h2>Legitimación</h2>
<p>Su consentimiento al enviarnos la solicitud y, en su caso, la aplicación de medidas precontractuales a petición suya.</p>
<h2>Conservación</h2>
<p>Conservaremos los datos durante el tiempo necesario para atender su solicitud y, después, durante los plazos legalmente exigibles.</p>
<h2>Destinatarios</h2>
<p>No cedemos sus datos a terceros salvo obligación legal.${SITE.formProvider ? ` Los mensajes del formulario de contacto se reciben a través de ${esc(SITE.formProvider)}, que actúa como encargado del tratamiento con las garantías previstas en el RGPD para las transferencias internacionales de datos.` : ''}</p>
<h2>Derechos</h2>
<p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:${SITE.email}">${SITE.email}</a>. Si considera que el tratamiento no es adecuado, puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>`,
    },
    {
      key: 'cookies', name: 'Cookies', title: 'Política de cookies',
      html: () => `
<p>Este sitio web no utiliza cookies propias ni de terceros con fines analíticos, publicitarios o de seguimiento, por lo que no se muestra un aviso de consentimiento.</p>
<p>Las tipografías se sirven desde este mismo dominio, sin conexiones a servicios de terceros.</p>
<p>Si en el futuro se incorporan herramientas que usen cookies no técnicas, esta política se actualizará y se solicitará su consentimiento antes de instalarlas.</p>`,
    },
  ],
};
