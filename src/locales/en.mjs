// Language pack: English (/en/)
import { SITE } from '../data.mjs';
import { SERVICES_EN } from '../services.en.mjs';

const svc = (id, hash = '') => `/en/services/${SERVICES_EN.find((s) => s.id === id).slug}/${hash ? `#${hash}` : ''}`;

export default {
  code: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  label: 'English',
  short: 'EN',
  routes: {
    home: '/en/', services: '/en/services/', projects: '/en/projects/', company: '/en/company/', contact: '/en/contact/',
    legal: '/en/legal-notice/', privacy: '/en/privacy/', cookies: '/en/cookies/',
  },
  services: SERVICES_EN,
  serviceLines: [
    { short: 'HDPE pipe installation', name: 'Supply and installation of HDPE pipe systems', href: svc('pead') },
    { short: 'butt fusion & electrofusion', name: 'Butt fusion and electrofusion welding', href: svc('welding') },
    { short: 'pumps & valves', name: 'On-site mechanical installation: valves, pumps and fittings', href: svc('mechanical') },
    { short: 'supports & connections', name: 'Fabrication of supports and mechanical connections', href: svc('mechanical', 'supports') },
    { short: 'pressure testing', name: 'Hydrostatic and pneumatic pressure testing', href: svc('pressure') },
    { short: 'as-built documentation', name: 'As-built documentation and project handover', href: svc('pressure', 'as-built') },
    { short: 'emergency repair', name: 'Maintenance and emergency repair', href: svc('maintenance') },
    { short: 'project management', name: 'Project management, estimating, cost control and procurement', href: svc('management') },
  ],
  projects: [
    {
      name: 'Vida Bioenergy', place: 'Tilburg, Netherlands', sector: 'Bioenergy',
      scope: 'Complete HDPE pipe system for energy distribution',
      text: "Complete implementation of the plant's HDPE pipe system, from installation to handover. Delivered ahead of schedule.",
      tag: 'Delivered ahead of schedule',
    },
    {
      name: 'INEOS Project One — OSBL', place: 'Antwerp, Belgium', sector: 'Petrochemical', client: 'TM Vanhout-Mourik',
      scope: 'Mechanical and piping installation',
      text: "Highly complex mechanical and piping installation in the project's outside battery limits (OSBL), carried out under demanding industrial conditions.",
    },
    {
      name: 'INEOS Project One — ECR', place: 'Antwerp, Belgium', sector: 'Petrochemical', client: 'Ballast Nedam Industriebouw België',
      scope: 'Mechanical and piping installation',
      text: "Complex mechanical and piping installation for Ballast Nedam Industriebouw België, on a major industrial project with the client's QA/QC and HSE requirements.",
    },
  ],
  team: [
    'Technicians certified in HDPE fusion: butt fusion and electrofusion',
    'Qualified mechanical engineers',
    'Experienced site supervisors and project leaders',
    'Dedicated safety and quality professionals',
    'Bilingual Dutch/English support for international projects',
    'Proven experience in industrial and environmental projects',
  ],
  method: [
    'Project-specific planning and scheduling',
    'Estimating and cost control',
    'Procurement and supply of materials',
    'Certified and trained personnel',
    "Compliance with each client's QA/QC and HSE requirements",
    "Collaboration with the client's teams for seamless integration",
  ],
  areas: [
    'Valencia and metropolitan area', 'Port of Valencia', 'Sagunto', 'Paterna and Ribarroja del Turia',
    'Almussafes and La Ribera', 'Castellón', 'Alicante', 'Rest of Spain and Europe',
  ],
  knowsAbout: [
    'HDPE pipe', 'Polyethylene pipe', 'Butt fusion welding', 'Electrofusion',
    'Industrial mechanical installation', 'Hydrostatic pressure testing', 'Pneumatic pressure testing',
  ],

  t: {
    skip: 'Skip to content',
    home: 'Home',
    homeAria: 'home',
    crumbsLabel: 'Breadcrumb',
    nav: { services: 'Services', projects: 'Projects', company: 'Company', contact: 'Contact' },
    mainNav: 'Main',
    drawerNav: 'Main menu',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    quote: 'Request a quote',
    quoteShort: 'Quote',
    servicesHeading: 'Services',
    drawerNote: 'Office in Valencia · Valencian Community, Spain and Europe',
    country: 'Spain',
    areaLine: 'Valencian Community, Spain and Europe',
    callNow: 'Call now',
    contactHeading: "Let's talk about your project",
    viewService: 'View service',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    finalTitle: 'One contractor. The whole installation.',
    finalText: "Send us drawings, location and timelines. We'll reply with a technical and commercial proposal.",
    footer: {
      title: 'HDPE and mechanical installations, on time, to specification and on budget.',
      note: 'Office in Valencia. Projects across Spain and Europe.',
      services: 'Services',
      company: 'Company',
      about: 'About Qualinor',
      contact: 'Contact',
      tagline: 'Valencia, with technical rigour.',
      legal: 'Legal notice',
      privacy: 'Privacy',
      cookies: 'Cookies',
    },
  },

  home: {
    title: 'HDPE Pipe Installation & Mechanical Contractor in Valencia | Qualinor',
    description:
      'HDPE pipe installation, butt fusion and electrofusion, mechanical installation and pressure testing in Valencia, Spain. Certified technicians. Request a quote.',
    heroAlt: 'Large-diameter HDPE pipe laid in a trench next to an industrial plant',
    newsTag: 'QUALINOR · VALENCIA',
    newsText: 'Leak or breakdown? Emergency repair.',
    h1: 'HDPE pipe and mechanical installation in Valencia',
    lead: 'Supply, welding and installation for industry and energy. On time, to specification and on budget.',
    start: 'Request your quote',
    startNote: `Since ${SITE.foundingYear} · Projects in Spain, the Netherlands and Belgium`,
    howTitle: 'How we work with you',
    steps: [
      { icon: 'clipboard', h: 'Send us your project', p: 'Drawings, location, diameters and timelines. We review the technical scope.' },
      { icon: 'file', h: 'Receive a proposal', p: 'Method statement, quotation and quality plan before we start.' },
      { icon: 'shield', h: 'We build and hand over', p: 'Welding, installation, pressure testing and final dossier.' },
    ],
    tasksEyebrow: 'Industrial services',
    tasksTitle: 'The whole installation cycle. One contractor.',
    tasksText: 'From estimating and procurement to pressure testing and final documentation, with certified personnel at every stage.',
    taskPhotoAlt: 'Pump room with HDPE pipe headers and actuated valves',
    wheelLabel: 'What does your installation need?',
    features: [
      {
        title: 'Joints that hold.<br>Every weld on record.',
        text: 'Technicians certified in butt fusion and electrofusion. Every joint is identified on the project weld map.',
        link: 'Explore HDPE welding', service: 'welding',
        img: 'soldadura-tope-pead-obra', alt: 'Technicians butt-fusion welding an HDPE pipe with a fusion machine in a trench',
      },
      {
        title: 'Tested before handover.',
        text: 'Hydrostatic or pneumatic testing with a record of every test. We hand over the system with weld maps, reports and a quality dossier.',
        link: 'Explore pressure testing', service: 'pressure', reverse: true,
        img: 'colector-valvulas-pead', alt: 'HDPE pipe header with actuated valves in a pump room',
      },
    ],
    servicesEyebrow: 'Our services',
    servicesTitle: 'What does your project need?',
    servicesText: "Choose a service. Send us the details and we'll reply with a technical and commercial proposal.",
    helpPrimary: {
      title: 'Tell us what you need.',
      text: 'Got drawings, a P&amp;ID or just an idea of the scope? Send it over and we will help you define the solution and the budget.',
      small: 'No obligation. Technical and commercial proposal.',
    },
    helpSecondary: {
      title: 'Leak or breakdown in your installation?',
      text: 'We repair HDPE pipe and mechanical installations and re-test the line before returning it to service.',
      link: 'Emergency repair',
    },
    deliverables: {
      eyebrow: 'Deliverables',
      title: 'Documented. From day one to the last.',
      text: 'On a critical installation, documentation matters as much as the weld. This is what you receive on every project.',
      button: 'How we manage projects',
      items: [
        { icon: 'clipboard', h: 'Before we start', p: 'Method statement, safety and environmental risk assessment, and QA/QC protocols.' },
        { icon: 'gauge', h: 'Tested systems', p: 'Fully tested pipe systems, with records of every pressure test.' },
        { icon: 'flame', h: 'Weld maps', p: 'Every joint identified, with inspection reports.' },
        { icon: 'file', h: 'Final dossier', p: 'Quality dossier, certificate of completion and O&M documentation where applicable.' },
        { icon: 'users', h: 'Aftercare', p: 'Post-installation review and support, and client training where applicable.' },
      ],
    },
    projectsEyebrow: 'Reference projects',
    projectsTitle: 'Experience on plants across Europe.',
    projectsLink: 'See all projects',
    projectFor: 'for',
    areaEyebrow: 'Service area',
    areaTitle: 'Based in Valencia, wherever your site is.',
    areaText: 'We serve the metropolitan area and industrial estates across the Valencian Community, and send crews to the rest of Spain and Europe.',
    faqs: [
      {
        q: 'What is HDPE pipe?',
        a: 'HDPE stands for high-density polyethylene (PEAD in Spanish). It does not corrode, resists a wide range of chemicals and is joined by welding, forming a continuous line with no mechanical joints. It is used for process water, biogas and energy, industrial effluents and buried networks.',
      },
      {
        q: 'What is the difference between butt fusion and electrofusion?',
        a: 'In butt fusion, the pipe ends are heated with a plate and joined under pressure; it is the usual option for long runs and medium-to-large diameters. In electrofusion, a fitting with a built-in heating wire fuses the joint; it is used for repairs, tight spaces, branches and connections to existing networks.',
      },
      {
        q: 'Do you carry out pressure tests and provide documentation?',
        a: 'Yes. We test every system hydrostatically or pneumatically and hand over the records, weld maps, inspection reports, as-built documentation and a final quality dossier with a certificate of completion.',
      },
      {
        q: 'Do you work outside Valencia?',
        a: 'Yes. From our office in Valencia we cover the whole Valencian Community and the rest of Spain, and we send crews to other European countries: we have delivered projects in the Netherlands and Belgium.',
      },
      {
        q: 'Do you handle breakdowns and emergency repairs?',
        a: `Yes, we provide maintenance and emergency repair of HDPE pipe and mechanical installations. Call us on ${SITE.phoneIntl} with the location, the pipe type and the fault.`,
      },
      {
        q: 'Do you also supply the materials?',
        a: 'Yes. We handle procurement and supply of pipe, fittings and equipment, or work with materials provided by the client or the main contractor.',
      },
    ],
  },

  servicesIndex: {
    title: 'HDPE Pipe & Mechanical Installation Services in Valencia | Qualinor',
    description:
      'HDPE pipe installation, butt fusion and electrofusion, mechanical installation, pressure testing, maintenance and project management in Valencia, Spain.',
    crumb: 'Services',
    h1: 'HDPE pipe and mechanical installation services',
    lead: 'We cover the whole pipe installation cycle, from estimating to handover documentation, with cost-effective, high-performance solutions.',
    scopeTitle: 'Our services include, among others',
  },

  service: {
    write: 'Write to us',
    callNowPhone: 'Call now:',
    includes: "What's included",
    urgentCard: 'Leak or breakdown?',
    others: 'Other services',
    faqHeading: (s) => `Questions about ${s.nav.replace(/^HDPE/, 'HDPE').toLowerCase().replace('hdpe', 'HDPE')}`,
    area: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'AdministrativeArea', name: 'Valencian Community' },
      { '@type': 'Country', name: 'Spain' },
    ],
  },

  projectsPage: {
    title: 'HDPE Pipe & Mechanical Installation Projects | Qualinor',
    description:
      'Qualinor projects: HDPE pipe system for Vida Bioenergy (Tilburg) and mechanical and piping installation on INEOS Project One (Antwerp).',
    crumb: 'Projects',
    h1: 'HDPE pipe and mechanical installation projects',
    lead: 'We have worked on energy plants and major industrial complexes across Europe, both as a direct contractor and as a subcontractor to large industrial contractors.',
    client: 'Client',
    scope: 'Scope',
    galleryEyebrow: 'On site',
    galleryTitle: 'Installation work',
    gallery: [
      ['planta-biogas-tuberias-pead', 'HDPE pipe headers with valves next to the digesters of a biogas plant', 'HDPE headers at a biogas plant'],
      ['sala-bombas-colectores-pead', 'Pump room with HDPE headers and actuated valves', 'Pump room with HDPE headers'],
      ['soldadura-tope-pead-obra', 'Technicians butt-fusion welding an HDPE pipe in a trench', 'Butt fusion in a trench'],
      ['colector-valvulas-pead', 'HDPE header with actuated valves and a pump', 'Header with actuated valves'],
      ['skid-bombeo-tuberias-pead', 'Pump skid with HDPE pipework installed in a building', 'Pump skid and HDPE pipework'],
      ['zanja-tuberia-pead-gran-diametro', 'Large-diameter HDPE pipe laid in a trench on an industrial site', 'Large-diameter HDPE pipe'],
    ],
    ctaTitle: 'Is your project next?',
    ctaText: "Tell us the scope, location and timelines. We'll reply with a technical and commercial proposal.",
  },

  companyPage: {
    title: 'About Us | Qualinor, HDPE Pipe Contractor in Valencia',
    description:
      'Qualinor Servicios Técnicos: HDPE and mechanical installation contractor with an office in Valencia since 2021. Mission, vision, method and certified team.',
    crumb: 'Company',
    h1: 'A trusted contractor for HDPE and mechanical installations',
    lead: `Since ${SITE.foundingYear}, Qualinor Servicios Técnicos has delivered first-class HDPE pipe and mechanical installation services across Europe. We combine technical expertise, certified personnel and a firm commitment to safety and efficiency.`,
    imgAlt: 'HDPE pipe headers with valves next to the digesters of a biogas plant',
    introTitle: 'On time, to specification and on budget.',
    intro: [
      'We serve clients across sectors, from bioenergy plants to large petrochemical complexes. Our services are built on European standards, environmental responsibility and long-term performance.',
      'We understand the demands of critical infrastructure: an unplanned shutdown or a faulty joint carries a real cost for our clients. That is why we work with precision and document every step.',
    ],
    mission: 'Mission',
    missionText: 'To deliver HDPE and mechanical installations safely, efficiently and on sound technical footing, grounded in precision, professionalism and long-term reliability.',
    vision: 'Vision',
    visionText: 'To become the leading choice in Europe for HDPE and mechanical installation projects, consistently delivering high performance, innovation and client satisfaction.',
    mtEyebrow: 'Method and team',
    mtTitle: 'How we work and who does it.',
    methodTitle: 'Method',
    teamTitle: 'Team',
    factsTitle: 'Company details',
    facts: {
      legalName: 'Legal name', tradeName: 'Trading name', activity: 'Activity', since: 'Active since',
      office: 'Office', scope: 'Coverage', contact: 'Contact',
      activityText: 'HDPE pipe installation and industrial mechanical installation',
    },
    ctaTitle: 'Partner with us on your next project.',
    ctaText: 'HDPE and mechanical installations delivered safely, professionally and with lasting results.',
  },

  contactPage: {
    title: 'Contact & Quotes in Valencia | Qualinor Servicios Técnicos',
    description: `Request a quote for HDPE pipe or mechanical installation in Valencia, Spain. Call ${SITE.phoneIntl} or email ${SITE.email}.`,
    crumb: 'Contact',
    h1: 'Contact and quotes',
    lead: "Tell us about your project. We'll reply with a technical and commercial proposal, or call you to clarify the scope.",
    hiddenSubject: 'Quote request from the website',
    honeypot: 'Do not fill in',
    f: {
      name: 'Full name', company: 'Company', optional: '(optional)', email: 'Email', phone: 'Phone',
      service: 'Service', other: 'Other / full project', location: 'Site location', locationPh: 'e.g. Sagunto',
      message: 'Project description', messagePh: 'Scope, approximate diameters and lengths, fluid, timelines…',
      privacy: (href) => `I have read and accept the <a href="${href}">privacy policy</a>.`,
      error: 'Please check the highlighted fields: name, a valid email, description and acceptance of the privacy policy.',
      submit: 'Send request',
      noteEndpoint: `We'll get back to you as soon as possible. If you prefer, call us on <a href="tel:${SITE.phone}">${SITE.phoneIntl}</a>.`,
      noteMailto: `Sending will open your email app with the request ready for ${SITE.email}.`,
    },
    done: {
      eyebrow: 'Request sent',
      title: "Thank you, we've received your request.",
      text: `We'll review the scope and reply with a proposal or a call. If it's urgent, call us on <a href="tel:${SITE.phone}">${SITE.phoneIntl}</a>.`,
    },
    cardHeading: 'Qualinor Servicios Técnicos',
    tipsTitle: 'For a more accurate quote',
    tips: ['Site location and access', 'Drawings, P&amp;IDs or isometrics, if available', 'Approximate diameters and lengths', 'Fluid and operating pressure', 'Timelines and planned start date'],
    areaEyebrow: 'Service area',
    areaTitle: 'Where we work',
    areaText: 'Office in Valencia, serving the whole Valencian Community, the rest of Spain and Europe.',
  },

  legalTitleSuffix: 'Qualinor Servicios Técnicos',
  legalDescription: (title) => `${title} of the ${SITE.legalName} website.`,
  pending: 'Pending',
  legal: [
    {
      key: 'legal', name: 'Legal notice', title: 'Legal notice',
      html: ({ esc, pending, addressLine }) => `
<p><em>This is a courtesy translation. In case of discrepancy, the Spanish version prevails.</em></p>
<p>In compliance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is identified below:</p>
<dl class="facts-table">
  <div><dt>Owner</dt><dd>${esc(SITE.legalName)}</dd></div>
  <div><dt>Tax ID (NIF)</dt><dd>${SITE.nif ? esc(SITE.nif) : pending('tax ID')}</dd></div>
  <div><dt>Registered address</dt><dd>${SITE.address.street ? esc(addressLine) : pending('registered address')}</dd></div>
  <div><dt>Registry details</dt><dd>${SITE.registry ? esc(SITE.registry) : pending('Commercial Registry')}</dd></div>
  <div><dt>Email</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
  <div><dt>Phone</dt><dd>${SITE.phoneIntl}</dd></div>
</dl>
<h2>Terms of use</h2>
<p>Access to this website is free of charge and makes you a user, who accepts these terms. Users agree to make appropriate use of the content, in accordance with the law and good faith.</p>
<h2>Intellectual property</h2>
<p>The texts, photographs, design and other content of this site belong to the owner or are used with permission. Reproduction, distribution or transformation without express authorisation is prohibited.</p>
<h2>Liability</h2>
<p>The owner is not liable for damage arising from the use of the information on this site or from the content of linked external sites.</p>
<h2>Governing law</h2>
<p>These terms are governed by Spanish law.</p>`,
    },
    {
      key: 'privacy', name: 'Privacy', title: 'Privacy policy',
      html: ({ esc }) => `
<p><em>This is a courtesy translation. In case of discrepancy, the Spanish version prevails.</em></p>
<p>This policy explains how we process the personal data you provide through this website, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).</p>
<h2>Data controller</h2>
<p>${esc(SITE.legalName)}${SITE.nif ? `, tax ID ${esc(SITE.nif)}` : ''}. Email: <a href="mailto:${SITE.email}">${SITE.email}</a>. Phone: ${SITE.phoneIntl}.</p>
<h2>Purpose</h2>
<p>To answer your enquiries and quote requests and, where applicable, to manage the resulting business relationship.</p>
<h2>Legal basis</h2>
<p>Your consent when sending us the request and, where applicable, pre-contractual measures taken at your request.</p>
<h2>Retention</h2>
<p>We keep the data for as long as needed to handle your request and, afterwards, for the legally required periods.</p>
<h2>Recipients</h2>
<p>We do not share your data with third parties unless legally required.${SITE.formProvider ? ` Contact form messages are received through ${esc(SITE.formProvider)}, acting as data processor with the safeguards provided by the GDPR for international data transfers.` : ''}</p>
<h2>Your rights</h2>
<p>You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to <a href="mailto:${SITE.email}">${SITE.email}</a>. If you consider the processing inappropriate, you may file a complaint with the Spanish Data Protection Agency (aepd.es).</p>`,
    },
    {
      key: 'cookies', name: 'Cookies', title: 'Cookie policy',
      html: () => `
<p>This website does not use its own or third-party cookies for analytics, advertising or tracking, so no consent banner is shown.</p>
<p>Fonts are served from this same domain, with no connections to third-party services.</p>
<p>If tools using non-essential cookies are added in the future, this policy will be updated and your consent requested before they are set.</p>`,
    },
  ],
};
