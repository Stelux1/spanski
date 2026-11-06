// English service pages. Same rule as Spanish: no figures, certificates or lead times beyond the proposal.

export const SERVICES_EN = [
  {
    id: 'pead',
    slug: 'hdpe-pipe-installation',
    nav: 'HDPE pipe systems',
    summary: 'Complete high-density polyethylene systems, from supply to the final pressure test.',
    serviceType: 'High-density polyethylene pipe installation',
    title: 'HDPE Pipe Installation in Valencia, Spain | Qualinor',
    description:
      'Supply and installation of HDPE pipe systems in Valencia, Spain, for industry, energy and buried networks. Certified technicians and a full QA dossier.',
    h1: 'HDPE pipe supply and installation in Valencia',
    lead:
      'We install complete high-density polyethylene pipe systems for industrial plants, energy facilities and environmental infrastructure: from material procurement to the final test and handover documentation.',
    image: { name: 'zanja-tuberia-pead-gran-diametro', alt: 'Large-diameter HDPE pipe laid in a trench on an industrial site', caption: 'Large-diameter HDPE pipe in a trench' },
    includes: [
      'Supply of HDPE pipe, fittings and special parts',
      'Trench laying and above-ground, in-building or rack installation',
      'Butt fusion and electrofusion welding',
      'Headers, branches and connections to equipment',
      'Pressure testing with records for every section',
      'As-built documentation and quality dossier',
    ],
    sections: [
      {
        id: 'why-hdpe',
        h2: 'Why HDPE for your installation',
        html: `<p>HDPE (high-density polyethylene, known in Spain as PEAD) is the reference material for industrial pipelines and buried networks. It does not corrode, resists a wide range of chemicals and, once welded, forms a continuous line with no mechanical joints where a leak could start.</p>
<p>Its flexibility and impact resistance suit ground that moves and installations exposed to vibration, and its low weight speeds up transport and installation on site.</p>
<p>We install it for process and cooling water, biogas and bioenergy plants, industrial effluents and large-diameter buried networks.</p>`,
      },
      {
        id: 'how-we-work',
        h2: 'How we carry out the installation',
        html: `<ol class="steps">
<li><strong>Technical review.</strong> We study drawings, specifications and site conditions before quoting.</li>
<li><strong>Quality plan.</strong> We define the execution method, QA/QC protocols and documentation plan.</li>
<li><strong>Supply.</strong> We procure pipe and fittings with full material traceability.</li>
<li><strong>Execution.</strong> Certified HDPE fusion technicians weld and install under a site supervisor.</li>
<li><strong>Testing and handover.</strong> We pressure-test the system and hand over records, weld maps and the final dossier.</li>
</ol>`,
      },
      {
        id: 'references',
        h2: 'Experience on operating plants',
        html: `<p>We delivered the complete implementation of an HDPE pipe system for energy distribution at the <strong>Vida Bioenergy plant in Tilburg (Netherlands)</strong>, handed over ahead of schedule. See our other <a href="/en/projects/">reference projects</a>.</p>`,
      },
    ],
    faqs: [
      {
        q: 'Do you also supply the materials?',
        a: 'Yes. We can take care of the full supply of HDPE pipe and fittings, with traceability. If the material is provided by the client or the main contractor, we work within their supply chain.',
      },
      {
        q: 'Do you work as a subcontractor for engineering firms and contractors?',
        a: 'Yes. Much of our experience is as a subcontractor to major industrial contractors, such as on INEOS Project One for TM Vanhout-Mourik and Ballast Nedam Industriebouw België, meeting their QA/QC and HSE requirements.',
      },
    ],
  },
  {
    id: 'welding',
    slug: 'butt-fusion-electrofusion-welding',
    nav: 'Butt fusion & electrofusion',
    summary: 'Butt fusion and electrofusion by certified technicians, with every joint recorded.',
    serviceType: 'Polyethylene pipe welding',
    title: 'HDPE Butt Fusion & Electrofusion Welding in Valencia | Qualinor',
    description:
      'HDPE pipe welding by butt fusion and electrofusion in Valencia, Spain. Certified technicians, weld maps and a record for every joint.',
    h1: 'HDPE butt fusion and electrofusion welding in Valencia',
    lead:
      'A polyethylene network is only as good as its joints. Our technicians, certified in butt fusion and electrofusion, make every weld with a controlled procedure and record it on the weld map.',
    image: { name: 'soldadura-tope-pead-obra', alt: 'Technicians butt-fusion welding an HDPE pipe with a fusion machine in a trench', caption: 'HDPE butt fusion in a trench' },
    includes: [
      'Butt fusion welding with a heater plate',
      'Electrofusion of couplers, elbows, tees and tapping tees',
      'Welding in trenches, buildings and site workshops',
      'Pipe preparation, facing and alignment',
      'Weld map identifying every joint',
      'Parameter records and inspection reports',
    ],
    sections: [
      {
        id: 'butt-fusion',
        h2: 'Butt fusion',
        html: `<p>The pipe ends are faced, heated with a temperature-controlled heater plate and joined under pressure until they cool. The result is a homogeneous joint with the same continuity as the pipe itself.</p>
<p>It is the usual method for joining pipes and fittings of the same diameter and wall thickness, especially in medium and large diameters and long runs.</p>`,
      },
      {
        id: 'electrofusion',
        h2: 'Electrofusion',
        html: `<p>Fittings with a built-in heating wire are used. The electrofusion unit applies the energy defined for each fitting and fuses the surface of pipe and fitting into a single piece.</p>
<p>It is the right solution for repairs, tight spaces, connections to existing networks, branches and tapping tees, and joints where the pipes cannot be moved for butt fusion.</p>`,
      },
      {
        id: 'quality-control',
        h2: 'Every joint identified and recorded',
        html: `<p>Each weld is numbered on the project weld map, with its location and execution records. Together with the inspection reports and the system pressure tests, it forms part of the quality dossier we hand over at the end of the job.</p>`,
      },
    ],
    faqs: [
      {
        q: 'When is butt fusion better, and when electrofusion?',
        a: 'Butt fusion is the usual choice for long runs and medium-to-large diameters with pipes of the same wall thickness. Electrofusion is used for repairs, tight spaces, connections to existing networks and branches. Many projects combine both.',
      },
      {
        q: 'How are the welds documented?',
        a: 'Every joint is identified on the project weld map. At handover we deliver the weld maps, inspection reports and pressure test records as part of the final quality dossier.',
      },
    ],
  },
  {
    id: 'mechanical',
    slug: 'mechanical-installation',
    nav: 'Mechanical installation',
    summary: 'Valves, pumps, fittings, supports and mechanical connections installed on site.',
    serviceType: 'Industrial mechanical installation',
    title: 'Industrial Mechanical Installation in Valencia | Qualinor',
    description:
      'On-site mechanical installation of valves, pumps and fittings, plus fabrication of pipe supports and mechanical connections for pipe systems in Valencia, Spain.',
    h1: 'Industrial mechanical installation in Valencia',
    lead:
      'We install valves, pumps and fittings on site, and fabricate the supports and mechanical connections that tie the pipe network into your plant equipment.',
    image: { name: 'skid-bombeo-tuberias-pead', alt: 'Pump skid with HDPE headers and valves installed in an industrial building', caption: 'Pump skid with HDPE headers' },
    includes: [
      'Installation of pumps and pump skids',
      'Installation of manual and actuated valves',
      'Flanged connections between HDPE pipe and equipment',
      'Fabrication and installation of supports',
      'Installation of in-line fittings and instruments',
      'Installation checks before testing',
    ],
    sections: [
      {
        id: 'on-site-installation',
        h2: 'Mechanical installation on site',
        html: `<p>We install valves, pumps and fittings directly on site, coordinated with pipe laying and welding so the system progresses as a single scope. The same team that welds the line connects the equipment, reducing interfaces and delays between trades.</p>`,
      },
      {
        id: 'supports',
        h2: 'Fabrication of supports and mechanical connections',
        html: `<p>We fabricate and install the supports that fix and guide the pipe, as well as the mechanical connections between the HDPE network and pumps, valves, tanks or existing metal pipework. Well-designed supports are key with polyethylene, which expands more than steel with temperature changes.</p>`,
      },
      {
        id: 'integration',
        h2: 'Integrated with your team',
        html: `<p>We work alongside the client's and main contractor's teams for seamless integration, following their QA/QC and HSE procedures, permits to work and site schedule.</p>`,
      },
    ],
    faqs: [
      {
        q: 'Can you install equipment supplied by the client?',
        a: 'Yes. We install pumps, valves and fittings supplied by the client or the main contractor and integrate them into the pipe network, following their specifications.',
      },
    ],
  },
  {
    id: 'pressure',
    slug: 'pressure-testing',
    nav: 'Pressure testing & as-built',
    summary: 'Hydrostatic and pneumatic testing with records, plus as-built documentation.',
    serviceType: 'Pipe pressure testing',
    title: 'Hydrostatic & Pneumatic Pressure Testing in Valencia | Qualinor',
    description:
      'Hydrostatic and pneumatic pressure testing of HDPE pipe systems and mechanical installations in Valencia, with records, reports and as-built documentation.',
    h1: 'Pressure testing and as-built documentation in Valencia',
    lead:
      'No system is handed over untested. We carry out hydrostatic and pneumatic pressure tests with a record of every test, and close the project with as-built documentation and the quality dossier.',
    image: { name: 'colector-valvulas-pead', alt: 'HDPE header with actuated valves and a pump in a pump room', caption: 'HDPE header with actuated valves, ready for testing' },
    includes: [
      'Hydrostatic testing of pipes and headers',
      'Pneumatic testing where the process requires it',
      'Test planning by section or system',
      'Records of pressure, duration and result',
      'Weld maps and inspection reports',
      'As-built drawings and final quality dossier',
    ],
    sections: [
      {
        id: 'hydrostatic',
        h2: 'Hydrostatic testing',
        html: `<p>We fill the pipe with water, bring it to the test pressure defined for the project and monitor its behaviour for the specified time. For polyethylene, the procedure accounts for the material's elastic behaviour under pressure so the result is reliable.</p>`,
      },
      {
        id: 'pneumatic',
        h2: 'Pneumatic testing',
        html: `<p>Where water cannot be introduced into the system, the test is carried out with air or another gas, with specific safety measures and a controlled exclusion zone during the test.</p>`,
      },
      {
        id: 'as-built',
        h2: 'As-built documentation and project handover',
        html: `<p>At the end of the job we hand over the documentation your maintenance team and end client need:</p>
<ul class="ticks">
<li>Pressure test records for each system</li>
<li>Weld maps and inspection reports</li>
<li>Operation and maintenance documentation, and client training where applicable</li>
<li>Final quality dossier and certificate of completion</li>
</ul>`,
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a hydrostatic and a pneumatic test?',
        a: 'A hydrostatic test uses water and is the standard test for HDPE pipe. A pneumatic test uses air or another gas and is reserved for systems where water cannot be introduced, with additional safety measures.',
      },
      {
        q: 'What documentation do I receive at the end?',
        a: 'Test records, weld maps, inspection reports, operation and maintenance documentation where applicable, the final quality dossier and a certificate of completion.',
      },
    ],
  },
  {
    id: 'maintenance',
    slug: 'emergency-pipe-repair',
    nav: 'Maintenance & emergency repair',
    summary: 'Leak and breakdown repair, plus preventive maintenance of installations.',
    serviceType: 'Pipe maintenance and repair',
    title: 'Emergency HDPE Pipe Repair in Valencia | Qualinor',
    description:
      'Maintenance and emergency repair of HDPE pipe systems and mechanical installations in Valencia, Spain. Call +34 697 761 413 for leaks and breakdowns.',
    h1: 'Pipe maintenance and emergency repair in Valencia',
    lead:
      'When a leak or breakdown stops your installation, every hour counts. We locate the problem, repair it and re-test the line so it returns to service with confidence.',
    image: { name: 'planta-biogas-tuberias-pead', alt: 'HDPE pipe headers with valves next to the digesters of a biogas plant', caption: 'HDPE headers at a biogas plant' },
    includes: [
      'Repair of leaks and breaks in HDPE pipe',
      'Replacement of damaged sections and fittings',
      'Electrofusion repairs in tight spaces',
      'Replacement of valves, pumps and seals',
      'Pressure test after the repair',
      'Preventive maintenance of installations',
    ],
    sections: [
      {
        id: 'breakdowns',
        h2: 'Breakdown repair',
        html: `<p>When something fails, our priority is to bring the installation back into service safely. We assess the damage, isolate the affected section and repair it by electrofusion or by replacing the section, as appropriate. Before returning the line to service, we pressure-test the repair.</p>
<p>To speed things up, when you call please tell us the location, the pipe type and diameter, the fluid and operating pressure, and send photos of the damage if possible.</p>`,
      },
      {
        id: 'preventive',
        h2: 'Preventive maintenance',
        html: `<p>We inspect pipes, supports, valves and pumps to detect wear, misalignment or weak points in time, and schedule interventions during your plant's planned shutdowns.</p>`,
      },
    ],
    faqs: [
      {
        q: 'What information do you need for an urgent repair?',
        a: 'The installation location, the pipe type and diameter, the fluid and operating pressure and, if possible, photos of the damage. That lets us prepare the right materials and equipment.',
      },
    ],
    urgent: true,
  },
  {
    id: 'management',
    slug: 'project-management',
    nav: 'Project management',
    summary: 'Estimating, procurement, planning and cost control with a single point of contact.',
    serviceType: 'Pipe installation project management',
    title: 'Pipe Installation Project Management in Valencia | Qualinor',
    description:
      'Project management, estimating, cost control and procurement for HDPE pipe and mechanical installations. A single point of contact through to handover.',
    h1: 'Project management, estimating and procurement in Valencia',
    lead:
      'We plan, estimate and control every project from start to finish. A single point of contact coordinates estimating, procurement, execution and handover.',
    image: { name: 'sala-bombas-colectores-pead', alt: 'Pump room with HDPE headers and actuated valves in an industrial building', caption: 'Pump room with HDPE headers' },
    includes: [
      'Detailed estimate and quotation',
      'Project planning and scheduling',
      'Cost control during execution',
      'Procurement and supply of materials',
      "Coordination with the client's teams",
      'Management of QA/QC and HSE requirements',
    ],
    sections: [
      {
        id: 'phases',
        h2: 'Five phases, one responsible contractor',
        html: `<ol class="steps">
<li><strong>Project management</strong> and planning.</li>
<li><strong>Mobilisation</strong> and site preparation.</li>
<li><strong>HDPE welding</strong> and mechanical installation.</li>
<li><strong>Testing</strong> and commissioning.</li>
<li><strong>Handover</strong> with complete documentation.</li>
</ol>
<p>Each phase is adapted to the client's priorities, weather conditions and site logistics.</p>`,
      },
      {
        id: 'before-start',
        h2: 'What you receive before we start',
        html: `<ul class="ticks">
<li>Project execution methodology</li>
<li>Safety and environmental risk assessment</li>
<li>QA/QC protocols and documentation plan</li>
</ul>`,
      },
    ],
    faqs: [
      {
        q: 'Can you handle the whole project, including procurement?',
        a: 'Yes. We take care of estimating, procurement and supply of materials, execution, testing and final documentation, with a single point of contact throughout the project.',
      },
    ],
  },
];
