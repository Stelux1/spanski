// Contenido de las páginas de servicio. Basado en la propuesta de Qualinor (oct. 2025).
// Regla: nada de cifras, certificados ni plazos que no figuren en la propuesta.

export const SERVICES = [
  {
    id: 'pead',
    slug: 'instalacion-tuberias-pead-hdpe',
    nav: 'Tuberías PEAD (HDPE)',
    summary: 'Sistemas completos de polietileno de alta densidad, del suministro a la prueba final.',
    serviceType: 'Instalación de tuberías de polietileno de alta densidad',
    title: 'Instalación de tuberías PEAD (HDPE) en Valencia | Qualinor',
    description:
      'Suministro e instalación de tuberías de polietileno PEAD/HDPE en Valencia para industria, energía y redes enterradas. Personal certificado y dossier de calidad.',
    h1: 'Suministro e instalación de tuberías PEAD (HDPE) en Valencia',
    lead:
      'Instalamos sistemas completos de tuberías de polietileno de alta densidad para plantas industriales, instalaciones energéticas e infraestructura medioambiental: desde la compra del material hasta la prueba final y la documentación de entrega.',
    image: { name: 'zanja-tuberia-pead-gran-diametro', alt: 'Tendido de tubería PEAD de gran diámetro en zanja, en una obra industrial', caption: 'Tendido de tubería PEAD de gran diámetro en zanja' },
    includes: [
      'Suministro de tubería, accesorios y piezas especiales de PEAD',
      'Tendido en zanja y montaje en superficie, en nave o en rack',
      'Soldadura por termofusión a tope y electrofusión',
      'Colectores, derivaciones y conexiones a equipos',
      'Pruebas de presión con registro de cada tramo',
      'Documentación as-built y dossier de calidad',
    ],
    sections: [
      {
        id: 'por-que-pead',
        h2: 'Por qué PEAD para su instalación',
        html: `<p>El PEAD —polietileno de alta densidad, o <abbr title="High-Density Polyethylene">HDPE</abbr> por sus siglas en inglés— es el material de referencia para conducciones industriales y redes enterradas. No se corroe, resiste un amplio rango de productos químicos y, al unirse por soldadura, forma una línea continua sin juntas mecánicas por donde pueda aparecer una fuga.</p>
<p>Su flexibilidad y su resistencia al impacto lo hacen adecuado para terrenos con movimientos y para instalaciones sometidas a vibraciones, y su bajo peso agiliza el transporte y el montaje en obra.</p>
<p>Lo instalamos en conducciones de agua de proceso y refrigeración, plantas de biogás y bioenergía, efluentes industriales y redes enterradas de gran diámetro.</p>`,
      },
      {
        id: 'como-trabajamos',
        h2: 'Cómo ejecutamos la instalación',
        html: `<ol class="steps">
<li><strong>Revisión técnica.</strong> Analizamos planos, especificaciones y condiciones de la obra antes de presupuestar.</li>
<li><strong>Plan de calidad.</strong> Definimos la metodología de ejecución, los protocolos QA/QC y el plan de documentación.</li>
<li><strong>Suministro.</strong> Gestionamos la compra de tubería y accesorios con trazabilidad del material.</li>
<li><strong>Ejecución.</strong> Técnicos certificados en fusión PEAD sueldan e instalan bajo la dirección de un supervisor de obra.</li>
<li><strong>Pruebas y entrega.</strong> Probamos el sistema a presión y entregamos registros, mapas de soldadura y dossier final.</li>
</ol>`,
      },
      {
        id: 'referencias',
        h2: 'Experiencia en plantas en servicio',
        html: `<p>Hemos ejecutado la implementación completa de un sistema de tuberías PEAD para distribución de energía en la planta de <strong>Vida Bioenergy en Tilburg (Países Bajos)</strong>, entregado antes del plazo previsto. Consulte el resto de <a href="/proyectos/">proyectos de referencia</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Suministran también el material?',
        a: 'Sí. Podemos encargarnos del suministro completo de tubería y accesorios de PEAD, con su trazabilidad. Si el material lo aporta el cliente o el contratista principal, nos adaptamos a su cadena de suministro.',
      },
      {
        q: '¿Trabajan como subcontratista de ingenierías y constructoras?',
        a: 'Sí. Buena parte de nuestra experiencia es como subcontratista de grandes contratistas industriales, como en INEOS Project One para TM Vanhout-Mourik y Ballast Nedam Industriebouw België, cumpliendo sus requisitos QA/QC y HSE.',
      },
    ],
  },
  {
    id: 'welding',
    slug: 'soldadura-tope-electrofusion',
    nav: 'Soldadura a tope y electrofusión',
    summary: 'Termofusión a tope y electrofusión por técnicos certificados, con cada unión registrada.',
    serviceType: 'Soldadura de tuberías de polietileno',
    title: 'Soldadura de polietileno a tope y electrofusión en Valencia | Qualinor',
    description:
      'Soldadura de tuberías PEAD por termofusión a tope y electrofusión en Valencia. Técnicos certificados, mapa de soldadura y registro de cada unión.',
    h1: 'Soldadura de tuberías PEAD a tope y por electrofusión en Valencia',
    lead:
      'La calidad de una red de polietileno depende de sus uniones. Nuestros técnicos certificados en termofusión a tope y electrofusión ejecutan cada soldadura con un procedimiento controlado y la dejan registrada en el mapa de soldadura.',
    image: { name: 'soldadura-tope-pead-obra', alt: 'Técnicos realizando una soldadura a tope de tubería PEAD con máquina de termofusión en zanja', caption: 'Soldadura a tope de tubería PEAD en zanja' },
    includes: [
      'Soldadura por termofusión a tope con placa calefactora',
      'Electrofusión de manguitos, codos, tes y tomas en carga',
      'Soldadura en zanja, en nave y en taller de obra',
      'Preparación, refrentado y alineación de tubos',
      'Mapa de soldadura con identificación de cada unión',
      'Registro de parámetros e informes de inspección',
    ],
    sections: [
      {
        id: 'termofusion-a-tope',
        h2: 'Termofusión a tope',
        html: `<p>Los extremos de los tubos se refrentan, se calientan con una placa calefactora a temperatura controlada y se unen a presión hasta su enfriamiento. El resultado es una unión homogénea, con la misma continuidad que el propio tubo.</p>
<p>Es el método habitual para unir tubos y accesorios del mismo diámetro y espesor, sobre todo en diámetros medios y grandes y en tramos largos.</p>`,
      },
      {
        id: 'electrofusion',
        h2: 'Electrofusión',
        html: `<p>Se emplean accesorios con una resistencia eléctrica integrada. El equipo de electrofusión aplica la energía definida para cada accesorio y funde la superficie del tubo y del accesorio en una sola pieza.</p>
<p>Es la solución idónea para reparaciones, espacios reducidos, conexiones a redes existentes, derivaciones y tomas en carga, y uniones donde no es posible mover los tubos para una soldadura a tope.</p>`,
      },
      {
        id: 'control-de-calidad',
        h2: 'Cada unión, identificada y registrada',
        html: `<p>Cada soldadura se numera en el mapa de soldadura del proyecto, con su ubicación y sus registros de ejecución. Junto con los informes de inspección y las pruebas de presión del sistema, forma parte del dossier de calidad que entregamos al cierre de la obra.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Cuándo conviene la soldadura a tope y cuándo la electrofusión?',
        a: 'La termofusión a tope es la opción habitual para tramos largos y diámetros medios y grandes con tubos del mismo espesor. La electrofusión se utiliza en reparaciones, espacios reducidos, conexiones a redes existentes y derivaciones. En muchas obras se combinan ambas.',
      },
      {
        q: '¿Cómo se documentan las soldaduras?',
        a: 'Cada unión queda identificada en el mapa de soldadura del proyecto. Al cierre entregamos los mapas de soldadura, los informes de inspección y los registros de las pruebas de presión dentro del dossier de calidad final.',
      },
    ],
  },
  {
    id: 'mechanical',
    slug: 'montajes-mecanicos',
    nav: 'Montajes mecánicos',
    summary: 'Válvulas, bombas, accesorios, soportes y conexiones mecánicas montados en obra.',
    serviceType: 'Montajes mecánicos industriales',
    title: 'Montajes mecánicos industriales en Valencia | Qualinor',
    description:
      'Instalación mecánica en obra de válvulas, bombas y accesorios, y fabricación de soportes y conexiones mecánicas para sistemas de tuberías en Valencia.',
    h1: 'Montajes mecánicos industriales en Valencia',
    lead:
      'Instalamos en obra válvulas, bombas y accesorios, y fabricamos los soportes y conexiones mecánicas que integran la red de tuberías con los equipos de su planta.',
    image: { name: 'skid-bombeo-tuberias-pead', alt: 'Grupo de bombeo con colectores y válvulas de PEAD montado en una nave industrial', caption: 'Grupo de bombeo con colectores de PEAD' },
    includes: [
      'Montaje de bombas y grupos de bombeo',
      'Instalación de válvulas manuales y actuadas',
      'Conexiones bridadas entre tubería PEAD y equipos',
      'Fabricación y montaje de soportes',
      'Montaje de accesorios e instrumentos en línea',
      'Verificación del montaje antes de las pruebas',
    ],
    sections: [
      {
        id: 'instalaciones-mecanicas',
        h2: 'Instalaciones mecánicas en obra',
        html: `<p>Montamos válvulas, bombas y accesorios directamente en la obra, coordinados con el tendido y la soldadura de la tubería para que el sistema avance como un único trabajo. El mismo equipo que suelda la línea conecta los equipos, lo que reduce interfaces y retrasos entre gremios.</p>`,
      },
      {
        id: 'soportes',
        h2: 'Fabricación de soportes y conexiones mecánicas',
        html: `<p>Fabricamos y montamos los soportes que fijan y guían la tubería, así como las conexiones mecánicas entre la red de PEAD y bombas, válvulas, depósitos o tubería metálica existente. Una soportería bien resuelta es clave en el polietileno, que dilata más que el acero con los cambios de temperatura.</p>`,
      },
      {
        id: 'integracion',
        h2: 'Integrados con su equipo',
        html: `<p>Trabajamos con los equipos del cliente y del contratista principal para una integración fluida: seguimos sus procedimientos QA/QC y HSE, sus permisos de trabajo y su planificación de obra.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Pueden montar equipos suministrados por el cliente?',
        a: 'Sí. Montamos e integramos en la red de tuberías bombas, válvulas y accesorios aportados por el cliente o por el contratista principal, siguiendo sus especificaciones.',
      },
    ],
  },
  {
    id: 'pressure',
    slug: 'pruebas-de-presion',
    nav: 'Pruebas de presión y as-built',
    summary: 'Pruebas hidrostáticas y neumáticas con registros, y documentación as-built.',
    serviceType: 'Pruebas de presión de tuberías',
    title: 'Pruebas de presión hidrostáticas y neumáticas en Valencia | Qualinor',
    description:
      'Pruebas de presión hidrostáticas y neumáticas de tuberías PEAD e instalaciones mecánicas en Valencia, con registros, informes y documentación as-built.',
    h1: 'Pruebas de presión y documentación as-built en Valencia',
    lead:
      'Ningún sistema se entrega sin probar. Realizamos pruebas de presión hidrostáticas y neumáticas con registro de cada ensayo, y cerramos el proyecto con la documentación as-built y el dossier de calidad.',
    image: { name: 'colector-valvulas-pead', alt: 'Colector de tubería PEAD con válvulas actuadas y bomba en una sala de bombeo', caption: 'Colector de PEAD con válvulas actuadas, listo para pruebas' },
    includes: [
      'Pruebas hidrostáticas de tuberías y colectores',
      'Pruebas neumáticas cuando el proceso lo requiere',
      'Planificación de las pruebas por tramos o sistemas',
      'Registro de presión, duración y resultado',
      'Mapas de soldadura e informes de inspección',
      'Planos as-built y dossier de calidad final',
    ],
    sections: [
      {
        id: 'hidrostaticas',
        h2: 'Pruebas hidrostáticas',
        html: `<p>Llenamos la tubería con agua, la llevamos a la presión de prueba definida en el proyecto y controlamos su comportamiento durante el tiempo establecido. En el polietileno, el procedimiento tiene en cuenta su comportamiento elástico bajo presión para que el resultado sea fiable.</p>`,
      },
      {
        id: 'neumaticas',
        h2: 'Pruebas neumáticas',
        html: `<p>Cuando no es posible introducir agua en el sistema, la prueba se realiza con aire u otro gas, con medidas de seguridad específicas y una zona de exclusión controlada durante el ensayo.</p>`,
      },
      {
        id: 'as-built',
        h2: 'Documentación as-built y entrega del proyecto',
        html: `<p>Al cierre de la obra entregamos la documentación que su equipo de mantenimiento y su cliente final necesitan:</p>
<ul class="ticks">
<li>Registros de las pruebas de presión de cada sistema</li>
<li>Mapas de soldadura e informes de inspección</li>
<li>Documentación de operación y mantenimiento, y formación del cliente si aplica</li>
<li>Dossier de calidad final y certificado de finalización</li>
</ul>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué diferencia hay entre una prueba hidrostática y una neumática?',
        a: 'La prueba hidrostática se realiza con agua y es la habitual en tuberías de PEAD. La neumática se hace con aire u otro gas y se reserva para sistemas en los que no puede introducirse agua, con medidas de seguridad adicionales.',
      },
      {
        q: '¿Qué documentación recibo al terminar la obra?',
        a: 'Registros de pruebas, mapas de soldadura, informes de inspección, documentación de operación y mantenimiento si aplica, dossier de calidad final y certificado de finalización.',
      },
    ],
  },
  {
    id: 'maintenance',
    slug: 'mantenimiento-reparacion-urgente',
    nav: 'Mantenimiento y urgencias',
    summary: 'Reparación de fugas y averías, y mantenimiento preventivo de instalaciones.',
    serviceType: 'Mantenimiento y reparación de tuberías',
    title: 'Reparación urgente de tuberías PEAD en Valencia | Qualinor',
    description:
      'Mantenimiento y reparación de emergencia de tuberías PEAD e instalaciones mecánicas en Valencia. Llame al 697 761 413 ante fugas y averías.',
    h1: 'Mantenimiento y reparación urgente de tuberías en Valencia',
    lead:
      'Cuando una fuga o una avería detiene su instalación, cada hora cuenta. Localizamos el problema, reparamos y volvemos a probar la línea para que recupere el servicio con garantías.',
    image: { name: 'planta-biogas-tuberias-pead', alt: 'Colectores de tubería PEAD con válvulas junto a los digestores de una planta de biogás', caption: 'Colectores de PEAD en una planta de biogás' },
    includes: [
      'Reparación de fugas y roturas en tuberías PEAD',
      'Sustitución de tramos y accesorios dañados',
      'Reparaciones por electrofusión en espacios reducidos',
      'Sustitución de válvulas, bombas y juntas',
      'Prueba de presión después de la reparación',
      'Mantenimiento preventivo de instalaciones',
    ],
    sections: [
      {
        id: 'averias',
        h2: 'Reparación de averías',
        html: `<p>Ante una avería, priorizamos devolver la instalación al servicio de forma segura. Valoramos el daño, aislamos el tramo afectado y reparamos mediante electrofusión o sustitución del tramo, según el caso. Antes de devolver la línea, comprobamos la reparación a presión.</p>
<p>Para agilizar la intervención, al llamarnos indíquenos la ubicación, el tipo y diámetro de la tubería, el fluido y la presión de trabajo, y envíenos fotografías de la avería si es posible.</p>`,
      },
      {
        id: 'preventivo',
        h2: 'Mantenimiento preventivo',
        html: `<p>Revisamos el estado de tuberías, soportes, válvulas y bombas para detectar a tiempo desgastes, desalineaciones o puntos débiles, y planificamos las intervenciones en las paradas programadas de su planta.</p>`,
      },
    ],
    faqs: [
      {
        q: '¿Qué información necesitan para una reparación urgente?',
        a: 'La ubicación de la instalación, el tipo y diámetro de la tubería, el fluido y la presión de trabajo y, si es posible, fotografías de la avería. Con eso podemos preparar el material y el equipo adecuados.',
      },
    ],
    urgent: true,
  },
  {
    id: 'management',
    slug: 'gestion-de-proyectos',
    nav: 'Gestión de proyectos',
    summary: 'Estimación, compras, planificación y control de costes con un único interlocutor.',
    serviceType: 'Gestión de proyectos de instalaciones de tuberías',
    title: 'Gestión de proyectos de tuberías en Valencia | Qualinor',
    description:
      'Gestión de proyectos, estimación, control de costes y compras para instalaciones de tuberías PEAD y montajes mecánicos. Un único interlocutor hasta la entrega.',
    h1: 'Gestión de proyectos, estimación y compras en Valencia',
    lead:
      'Planificamos, presupuestamos y controlamos cada proyecto de principio a fin. Un único interlocutor coordina la estimación, las compras, la ejecución y la entrega.',
    image: { name: 'sala-bombas-colectores-pead', alt: 'Sala de bombas con colectores de PEAD y válvulas actuadas en una nave industrial', caption: 'Sala de bombas con colectores de PEAD' },
    includes: [
      'Estimación y presupuesto detallado',
      'Planificación y programación de la obra',
      'Control de costes durante la ejecución',
      'Adquisición y suministro de materiales',
      'Coordinación con los equipos del cliente',
      'Gestión de los requisitos QA/QC y HSE',
    ],
    sections: [
      {
        id: 'fases',
        h2: 'Cinco fases, un único responsable',
        html: `<ol class="steps">
<li><strong>Gestión y planificación</strong> del proyecto.</li>
<li><strong>Movilización</strong> y preparación de la zona de trabajo.</li>
<li><strong>Soldadura PEAD</strong> e instalación mecánica.</li>
<li><strong>Pruebas</strong> y puesta en marcha.</li>
<li><strong>Entrega</strong> con documentación completa.</li>
</ol>
<p>Cada fase se adapta a las prioridades del cliente, a las condiciones climáticas y a la logística de la obra.</p>`,
      },
      {
        id: 'entregables-inicio',
        h2: 'Lo que recibe antes de empezar',
        html: `<ul class="ticks">
<li>Metodología de ejecución del proyecto</li>
<li>Evaluación de riesgos de seguridad y medioambientales</li>
<li>Protocolos QA/QC y plan de documentación</li>
</ul>`,
      },
    ],
    faqs: [
      {
        q: '¿Pueden encargarse del proyecto completo, incluida la compra de materiales?',
        a: 'Sí. Nos ocupamos de la estimación, la compra y el suministro de materiales, la ejecución, las pruebas y la documentación final, con un único interlocutor durante todo el proyecto.',
      },
    ],
  },
];
