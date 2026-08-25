const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const p = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const COMPANY = {
  name: "Vastu Vistar LLP",
  shortName: "Vastu Vistar",
  tagline: "Experience Your Growth With Vastu Vistar",
  strapline: "The Integrated Industrials and \u2018A Foundation for Generations\u2019",
  promise: "All under one roof.",
};

export const CONTACT = {
  phone: "+91 96379 67171",
  phoneHref: "tel:+919637967171",
  phoneAlt: "+91 97666 78282",
  phoneAltHref: "tel:+919766678282",
  whatsapp: "https://wa.me/919637967171",
  email: "Vastuvistarllp@gmail.com",
  careersEmail: "Vastuvistarllp@gmail.com",
  address: "Pune, Maharashtra, India",
  hours: "Monday – Saturday · 9:30 – 18:30 IST",
};

export const IMG = {
  heroHome: "/assets/aerial-site.jpg",
  peb: u("1496247749665-49cf5b1022e9"),
  steelStructure: "/assets/steel-structure.jpg",
  siteTeam: "/assets/site-team.jpg",
  concretePour: "/assets/concrete-pour.jpg",
  highrise: "/assets/highrise.jpg",
  multistorey: "/assets/multistorey.jpg",
  aerialSite: "/assets/aerial-site.jpg",
  site: u("1504307651254-35680f356dfd"),
  rcc: u("1541888946425-d81bb19240f5"),
  road: u("1449157291145-7efd050a4d0e"),
  factory: u("1496247749665-49cf5b1022e9"),
  facade: u("1487958449943-2429e8be8625"),
  tower: u("1518005020951-eccb494ad742"),
  curved: u("1493397212122-2b85dda8106b"),
  whiteArch: u("1524230572899-a752b3835840"),
  apartment: u("1522708323590-d24dbb6b0267"),
  civicBuilding: u("1431576901776-e539bd916ba2"),
  retail: u("1445205170230-053b83016050"),
  office1: u("1497366216548-37526070297c"),
  office2: u("1497366811353-6870744d04b2"),
  office3: u("1497366754035-f200968a6e72"),
  interior1: p(31771712),
  interior2: u("1600585154340-be6161a56a0c"),
  interior3: u("1600210492486-724fe5c67fb0"),
  interior4: u("1600566753086-00f18fb6b3ea"),
  workspace: p(33827309),
  boardroom: u("1600880292203-757bb62b4baf"),
  handshake: u("1521791136064-7986c2920216"),
  team1: u("1522071820081-009f0129c71c"),
  glassRoom: u("1636125658784-8c7adc0f7ff1"),
  hotel: u("1566073771259-6a8506099945"),
  person1: u("1560250097-0b93528c311a", 800),
  person2: u("1573496359142-b8d87734a5a2", 800),
  person3: u("1519085360753-af0119f7cbe7", 800),
  person4: u("1573497019940-1c28c88b4f3e", 800),
};

/** The six service verticals from the company profile. */
export const SERVICES = [
  {
    id: "turnkey-projects",
    name: "Turnkey Projects",
    icon: "KeyRound",
    image: IMG.aerialSite,
    cardBg: IMG.aerialSite,
    short: "One contract, one accountable team — design to handover.",
    description:
      "Hand us the plot and the brief; take back a finished, functioning building. Vastu Vistar runs the entire chain in-house — design, statutory sanctioning, civil execution, MEP coordination, finishing, and handover — so you deal with a single accountable partner instead of a dozen agencies.",
    features: [
      "Single-point responsibility from concept to keys",
      "Design, sanctioning, development and handover under one roof",
      "Transparent budgeting with locked scope and timelines",
      "Coordinated MEP, finishing and external development",
    ],
  },
  {
    id: "peb-buildings",
    name: "PEB Buildings",
    icon: "Factory",
    image: IMG.peb,
    cardBg: IMG.peb,
    short: "Pre-engineered steel structures for industrial spans.",
    description:
      "Pre-engineered building systems engineered for clear spans, fast erection, and long service life. From warehouses and manufacturing sheds to cold storage and logistics parks, we handle design, fabrication, supply and erection with the tolerances industrial clients expect.",
    features: [
      "Clear-span warehouses, sheds and logistics facilities",
      "Design, fabrication, supply and erection in one scope",
      "Mezzanine floors, crane gantries and utility platforms",
      "Rapid erection cycles that compress project timelines",
    ],
  },
  {
    id: "rcc-construction",
    name: "RCC Construction",
    icon: "Building2",
    image: IMG.concretePour,
    cardBg: IMG.concretePour,
    short: "Reinforced concrete frames built to design intent.",
    description:
      "Reinforced cement concrete work executed to structural drawings, with the mix design, reinforcement detailing, formwork discipline and curing regime that decide whether a structure lasts thirty years or a hundred. Every pour is checked, recorded, and signed off.",
    features: [
      "Foundations, footings, columns, beams and slabs",
      "Design-mix concrete with cube testing at every stage",
      "Reinforcement detailing checked against structural drawings",
      "Systematic formwork, curing and quality documentation",
    ],
  },
  {
    id: "cc-road-land-development",
    name: "CC Road & Land Development",
    icon: "Route",
    image: IMG.siteTeam,
    cardBg: IMG.siteTeam,
    short: "Site infrastructure that carries real industrial loads.",
    description:
      "Cement concrete roads, internal pavements, hardstanding, drainage and complete land development for industrial estates and townships — from levelling and compaction through to storm-water networks, culverts, kerbs and boundary works.",
    features: [
      "CC roads, internal pavements and heavy-duty hardstanding",
      "Site levelling, cutting, filling and compaction",
      "Storm-water drainage, culverts and kerb works",
      "Compound walls, gates and external site development",
    ],
  },
  {
    id: "residential-commercial",
    name: "Residential & Commercial Buildings",
    icon: "Building",
    image: IMG.multistorey,
    cardBg: IMG.multistorey,
    short: "Homes, offices and retail — built and finished complete.",
    description:
      "Apartment buildings, bungalows, office blocks and retail spaces delivered from foundation to final finish. Structure, masonry, plaster, waterproofing, flooring, joinery and painting are sequenced by one team, so the finish quality matches the structural quality.",
    features: [
      "Apartment buildings, bungalows and row houses",
      "Office blocks, showrooms and retail interiors",
      "Waterproofing, flooring, joinery and painting packages",
      "Snag-free handover with as-built documentation",
    ],
  },
  {
    id: "fabrication-services",
    name: "Fabrication Services",
    icon: "Wrench",
    image: IMG.steelStructure,
    cardBg: IMG.steelStructure,
    short: "Structural steel fabricated, finished and installed.",
    description:
      "Structural and architectural steel fabrication — trusses, platforms, staircases, railings, sheds and custom assemblies. Fabricated to drawing, surface-treated against corrosion, and installed by our own erection crews.",
    features: [
      "Trusses, purlins, platforms and mezzanines",
      "Staircases, railings, gratings and canopies",
      "Welding to specification with surface treatment",
      "Site erection handled by in-house crews",
    ],
  },
];

export const NOTABLE_CAPABILITIES = [
  { name: "Industrial Sheds & Warehouses", image: IMG.peb },
  { name: "RCC Frame Structures", image: IMG.concretePour },
  { name: "CC Roads & Site Development", image: IMG.siteTeam },
  { name: "Commercial Buildings", image: IMG.highrise },
  { name: "Structural Steel Fabrication", image: IMG.steelStructure },
];

/** The four-stage development process from the company profile. */
export const PROCESS_STEPS = [
  {
    title: "Designing",
    description:
      "Architectural and structural design worked out against your brief, your budget, and the realities of the site.",
  },
  {
    title: "Sanctioning",
    description:
      "Drawings, approvals and statutory clearances pursued and closed by our liaison team — you don't chase files.",
  },
  {
    title: "Developing",
    description:
      "Civil execution with supervised quality checks, planned material flow, and a schedule you can track week by week.",
  },
  {
    title: "Project Handover",
    description:
      "Snagging, testing, final finishing and documented handover of a building that is ready to occupy and operate.",
  },
];

export const INDUSTRIES = [
  {
    name: "Industrial",
    icon: "Factory",
    description: "Factories, warehouses, sheds and logistics facilities.",
  },
  {
    name: "Commercial",
    icon: "Building2",
    description: "Office blocks, showrooms, retail and mixed-use builds.",
  },
  {
    name: "Residential",
    icon: "Home",
    description: "Apartment buildings, bungalows and housing schemes.",
  },
  {
    name: "Public & Infrastructure",
    icon: "Landmark",
    description: "CC roads, land development and civic infrastructure.",
  },
];

export const VISION =
  "To be a trusted partner in industrial and commercial development by delivering reliable, cost-effective and structurally superior construction solutions — redefining construction standards by combining advanced engineering, quality craftsmanship and modern technology to create durable, efficient and future-ready structures.";

export const MISSION = [
  "Deliver superior quality construction solutions",
  "Maintain the highest safety and engineering standards",
  "Complete projects on schedule and within budget",
  "Build long-term client partnerships",
  "Embrace innovation and modern technologies",
];

export const VALUES = [
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty and transparency, so clients can trust us to deliver on our promises.",
  },
  {
    title: "Innovation",
    description:
      "We foster creativity and continuous improvement, exploring new ideas and technologies that make our work better.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our clients sit at the centre of every decision. We prioritise their needs and aim to exceed expectations on every site.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in teamwork. Working closely with clients, consultants and our own crews produces the best outcomes.",
  },
];

/**
 * Founders. `focus` sets CSS object-position so both portraits crop to the same
 * frame despite one being full-length (1006x1361) and one square (1254x1254).
 */
export const LEADERSHIP = [
  {
    name: "Mr. Ramdas Darekar",
    role: "Founder",
    image: "/assets/founder-ramdas-darekar.jpg",
    focus: "50% 10%",
    zoom: 1.5,
    note: "Leads execution and site delivery across the firm's industrial and infrastructure work.",
  },
  {
    name: "Mr. Chaitanya Darekar",
    role: "Co-Founder",
    image: "/assets/founder-chaitanya-darekar.jpg",
    focus: "50% 16%",
    zoom: 1,
    note: "Leads design coordination, statutory approvals and client relationships.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They took our shed from drawing to commissioning without us having to coordinate a single vendor. The clear-span erection finished ahead of the date they committed to.",
    name: "Rajesh Deshmukh",
    role: "Director · Auto Component Manufacturer, Pune",
  },
  {
    quote:
      "The RCC work was documented properly — mix design, cube results, reinforcement checks. Our structural consultant signed off without a single observation.",
    name: "Sneha Kulkarni",
    role: "Project Head · Commercial Development, Nashik",
  },
  {
    quote:
      "Internal CC roads and drainage across the estate were completed during the monsoon window. Two years on, there is no settlement anywhere on the stretch.",
    name: "Amit Pawar",
    role: "General Manager (Projects) · Industrial Estate, Chakan",
  },
];

export const PROJECTS = [
  {
    slug: "chakan-manufacturing-facility",
    name: "Chakan Manufacturing Facility",
    location: "Chakan, Pune",
    category: "Industrial",
    year: "2024",
    image: IMG.peb,
    gallery: [IMG.factory, IMG.site, IMG.road],
    services: ["PEB Buildings", "RCC Construction", "CC Road & Site Development"],
    scope: ["Turnkey Delivery", "Fabrication & Erection"],
    tagline:
      "A 65,000 sq.ft clear-span PEB manufacturing unit with RCC foundations, internal roads and utilities.",
    challenge:
      "The client needed a production floor free of intermediate columns, sized for overhead crane movement, and commissioned in time for a fixed equipment-installation window handed down by their OEM.",
    solution:
      "We executed RCC foundations and pedestals ahead of steel delivery, fabricated the PEB frames in parallel, and erected the structure in phased bays so flooring could follow the erection crew instead of waiting for it.",
    outcome:
      "Handover three weeks ahead of the equipment window. The client has since appointed us for their adjacent warehouse block.",
  },
  {
    slug: "ranjangaon-logistics-warehouse",
    name: "Ranjangaon Logistics Warehouse",
    location: "Ranjangaon, Pune",
    category: "Industrial",
    year: "2024",
    image: IMG.factory,
    gallery: [IMG.peb, IMG.site, IMG.rcc],
    services: ["PEB Buildings", "Fabrication Services"],
    scope: ["Design & Build"],
    tagline:
      "A high-bay warehouse with mezzanine, dock levellers and heavy-duty hardstanding for container movement.",
    challenge:
      "Container traffic demanded a yard surface that would not rut under sustained axle loads, and a clear internal height tall enough for racking that had already been ordered.",
    solution:
      "The PEB frame was re-detailed for the racking heights, and the yard was built as reinforced CC hardstanding over an engineered sub-base designed for repeated trailer loading.",
    outcome:
      "Full racking installed without a single dimensional clash. The yard has carried two years of continuous container traffic without surface failure.",
  },
  {
    slug: "koregaon-park-commercial-block",
    name: "Koregaon Park Commercial Block",
    location: "Koregaon Park, Pune",
    category: "Commercial",
    year: "2024",
    image: IMG.highrise,
    gallery: [IMG.multistorey, IMG.concretePour, IMG.office2],
    services: ["RCC Construction", "Residential & Commercial Buildings"],
    scope: ["Turnkey Delivery"],
    tagline:
      "A seven-floor commercial building delivered from foundation to fit-out-ready shell and core.",
    challenge:
      "A tight urban plot with neighbouring structures on two sides left no room for open excavation or material stacking, while the leasing team needed floors released progressively.",
    solution:
      "We sequenced shoring and controlled excavation, ran a just-in-time material plan with night deliveries, and released completed floors for tenant fit-out while the upper floors were still in structure.",
    outcome:
      "Three floors leased before practical completion. Zero complaints registered by adjoining property owners through the build.",
  },
  {
    slug: "talegaon-industrial-estate-roads",
    name: "Talegaon Industrial Estate — Internal Roads",
    location: "Talegaon, Pune",
    category: "Infrastructure",
    year: "2023",
    image: IMG.siteTeam,
    gallery: [IMG.aerialSite, IMG.civicBuilding, IMG.concretePour],
    services: ["CC Road & Land Development"],
    scope: ["Site Infrastructure"],
    tagline:
      "4.2 km of cement concrete roads with storm-water drainage across a working industrial estate.",
    challenge:
      "The estate could not be shut down. Roads had to be rebuilt in sections while tenant factories continued to receive and dispatch material every working day.",
    solution:
      "Work was split into short stretches with diversions agreed tenant by tenant, pouring one carriageway at a time and building the drainage network ahead of the pavement.",
    outcome:
      "The full network was completed without a single day of access loss for any tenant, and drains cleared their first monsoon without standing water.",
  },
  {
    slug: "nashik-warehousing-park",
    name: "Nashik Warehousing Park",
    location: "Nashik, Maharashtra",
    category: "Industrial",
    year: "2023",
    image: IMG.aerialSite,
    gallery: [IMG.peb, IMG.factory, IMG.siteTeam],
    services: ["Turnkey Projects", "PEB Buildings", "CC Road & Land Development"],
    scope: ["Turnkey Delivery"],
    tagline:
      "Three warehouse blocks with shared internal roads, drainage and compound development.",
    challenge:
      "Three blocks, one site, one monsoon. Earthwork, foundations and steel erection all had to land inside a compressed dry-season window.",
    solution:
      "Earthwork and foundations for all three blocks ran concurrently under separate crews, with steel fabrication progressing off-site so erection could begin the day foundations cured.",
    outcome:
      "All three blocks were weather-tight before the monsoon broke, and internal development was completed during the rains under cover.",
  },
  {
    slug: "baner-residential-tower",
    name: "Baner Residential Tower",
    location: "Baner, Pune",
    category: "Residential",
    year: "2024",
    image: IMG.multistorey,
    gallery: [IMG.highrise, IMG.interior2, IMG.whiteArch],
    services: ["RCC Construction", "Residential & Commercial Buildings"],
    scope: ["Structure & Finishing"],
    tagline:
      "An 11-floor residential tower — RCC structure, finishing and external development.",
    challenge:
      "Buyers were already booked against a committed possession date, leaving no float in the finishing programme across 88 apartments.",
    solution:
      "Finishing trades were run floor-by-floor immediately behind the structural cycle, with a fixed inspection checklist closed out per unit before the next trade was allowed in.",
    outcome:
      "Possession handed over on the committed date, with the snag list closed within three weeks of handover.",
  },
  {
    slug: "chinchwad-fabrication-shed",
    name: "Chinchwad Fabrication Shed",
    location: "Chinchwad, Pune",
    category: "Industrial",
    year: "2023",
    image: IMG.concretePour,
    gallery: [IMG.factory, IMG.peb, IMG.steelStructure],
    services: ["Fabrication Services", "PEB Buildings"],
    scope: ["Fabrication & Erection"],
    tagline:
      "A crane-served fabrication shed with gantry girders, platforms and steel staircases.",
    challenge:
      "The shed had to carry a 10-tonne overhead crane, which meant gantry alignment tolerances far tighter than a standard shed and no room for field improvisation.",
    solution:
      "Gantry girders were fabricated and trial-assembled in the shop before dispatch, and erection was surveyed at every bay before the crane rail was fixed.",
    outcome:
      "The crane commissioned on first alignment check, with no post-erection correction required.",
  },
  {
    slug: "hinjawadi-office-campus",
    name: "Hinjawadi Office Campus",
    location: "Hinjawadi, Pune",
    category: "Commercial",
    year: "2022",
    image: IMG.highrise,
    gallery: [IMG.office3, IMG.boardroom, IMG.multistorey],
    services: ["Turnkey Projects", "RCC Construction"],
    scope: ["Turnkey Delivery"],
    tagline:
      "A two-building office campus with landscaped external development and parking deck.",
    challenge:
      "Two buildings, one shared basement, and a client team that needed a fixed cost before board approval — with no appetite for variation claims later.",
    solution:
      "We froze the scope with the design team before mobilising, priced the package on measured quantities, and ran the build against that locked BOQ with weekly cost tracking.",
    outcome:
      "The campus closed within 2% of the sanctioned budget, and the client's board approved a second phase on the same commercial model.",
  },
  {
    slug: "shirur-agro-processing-unit",
    name: "Shirur Agro Processing Unit",
    location: "Shirur, Pune",
    category: "Industrial",
    year: "2022",
    image: IMG.civicBuilding,
    gallery: [IMG.factory, IMG.rcc, IMG.road],
    services: ["Turnkey Projects", "RCC Construction", "Fabrication Services"],
    scope: ["Turnkey Delivery"],
    tagline:
      "A food-grade processing facility with washable finishes, effluent works and utility structures.",
    challenge:
      "Food-grade compliance dictated coving, slopes, drainage falls and surface finishes that had to be built right the first time — rework after commissioning would not be permitted.",
    solution:
      "We built a full mock-up bay for client and auditor sign-off before rolling the detail out across the plant, and held the same crew across all wet areas for consistency.",
    outcome:
      "The facility cleared its compliance audit on the first inspection, with no remedial civil work called for.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Service Verticals" },
  { value: 25, suffix: "L+", label: "Sq.Ft Built" },
  { value: 100, suffix: "%", label: "Single-Point Accountability" },
];
