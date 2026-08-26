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
  /* Listed first everywhere. */
  phone: "+91 96379 67171",
  phoneHref: "tel:+919637967171",
  phoneAlt: "+91 97666 78282",
  phoneAltHref: "tel:+919766678282",
  whatsapp: "https://wa.me/919766678282",
  email: "Vastuvistarinfra@gmail.com",
  careersEmail: "Vastuvistarinfra@gmail.com",
  address: "Near Kotak Bank, Ghawane Complex, Sanaswadi, Pune 412208",
  hours: "Monday – Saturday · 9:30 – 18:30 IST",
  instagram: "https://www.instagram.com/vastu_vistar_infra",
};

export const IMG = {
  heroHome: "/assets/aerial-site.jpg",
  ccRoad: "/assets/cc-road.jpeg",
  epoxy: "/assets/epoxy-flooring.jpeg",
  residential: "/assets/residential.jpeg",
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

/** The service verticals. Six from the company profile, plus epoxy flooring. */
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
    image: IMG.ccRoad,
    cardBg: IMG.ccRoad,
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
    image: IMG.residential,
    cardBg: IMG.residential,
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
  {
    id: "epoxy-flooring",
    name: "Epoxy Flooring",
    icon: "Layers",
    image: IMG.epoxy,
    cardBg: IMG.epoxy,
    short: "Seamless industrial floors laid over a prepared slab.",
    description:
      "Epoxy floor coatings for factory, warehouse and workshop floors — surface preparation, primer and topcoat laid to a seamless, dust-free finish, with demarcated walkways and bay markings set out to your layout.",
    features: [
      "Surface preparation, grinding and priming",
      "Seamless epoxy topcoat in the colour specified",
      "Walkway, bay and safety-line demarcation",
      "Dust-free finish, easy to clean and maintain",
    ],
  },
];

export const NOTABLE_CAPABILITIES = [
  { name: "Industrial Sheds & Warehouses", image: IMG.peb },
  { name: "RCC Frame Structures", image: IMG.concretePour },
  { name: "CC Roads & Site Development", image: IMG.siteTeam },
  { name: "Commercial Buildings", image: IMG.highrise },
  { name: "Residential Buildings", image: IMG.residential },
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

/**
 * Photographs from our own sites, grouped by location.
 * Captions describe only what the photograph shows.
 */
export const SITE_GALLERY = [
  {
    src: "/assets/koregaon.jpeg",
    location: "Koregaon",
    caption: "Open-front PEB warehouse with curved roof and RCC plinth",
    wide: true,
  },
  {
    src: "/assets/sanaswadi4.jpeg",
    location: "Sanaswadi",
    caption: "Completed industrial shed with attached office block",
  },
  {
    src: "/assets/sanaswadi.jpeg",
    location: "Sanaswadi",
    caption: "Clear-span portal frames and roof sheeting",
  },
  {
    src: "/assets/sanaswadi2.jpeg",
    location: "Sanaswadi",
    caption: "Roof trusses with translucent skylight panels",
  },
  {
    src: "/assets/sanaswadi8.jpeg",
    location: "Sanaswadi",
    caption: "Finished shed with roller shutter and stone-faced plinth",
  },
  {
    src: "/assets/sanaswadi10.jpeg",
    location: "Sanaswadi",
    caption: "Clad shed with compound wall and gate complete",
  },
  {
    src: "/assets/sanaswadi11.jpeg",
    location: "Sanaswadi",
    caption: "Unit in use, with masonry walls up to sill and sheeting above",
  },
  {
    src: "/assets/talegaon.jpeg",
    location: "Talegaon",
    caption: "RCC slab reinforcement tied and shuttered, ready for pour",
  },
  {
    src: "/assets/cc-road.jpeg",
    location: "Sanaswadi",
    caption: "Internal CC road with kerbs and side drainage",
  },
];

/** Client logos, for the scrolling strip. Files live in public/assets/clients. */
export const CLIENT_LOGOS = [
  { name: "Victora Auto", src: "/assets/clients/victora-auto.png" },
  { name: "Asiatec Coatings", src: "/assets/clients/asiatec-coatings.png" },
  { name: "Lalwani Group", src: "/assets/clients/lalwani-group.png" },
  { name: "UGC Supply Chain Solutions", src: "/assets/clients/ugc-supply-chain.png" },
  { name: "Kunj Glass", src: "/assets/clients/kunj-glass.png" },
  { name: "Delta Estates", src: "/assets/clients/delta-estates.png" },
  { name: "SVA Corporation", src: "/assets/clients/sva-corporation.png" },
];

export const CLIENTS = [
  "Ram Engineering",
  "Bindras Kitchen",
  "Harshovgal",
  "Trans",
  "Jal",
  "Victora Auto",
  "Asiatech Coatings Pvt. Ltd.",
  "Lalwani Infra",
  "A2G Realty LLP",
  "Avni Infra",
  "Kunj Glass Pvt Ltd",
  "UGC Supply Chain Solutions Pvt Ltd",
  "Trimitee Infra",
  "Delta Estates",
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
    image: "/assets/founder-ramdas-darekar.jpeg",
    focus: "56% 50%",
    zoom: 1,
    note: "Leads design coordination, statutory approvals and client relationships.",
  },
  {
    name: "Mr. Chaitanya Darekar",
    role: "Co-Founder",
    image: "/assets/founder-chaitanya-darekar.jpg",
    focus: "50% 16%",
    zoom: 1,
    note: "Leads execution and site delivery across the firm's industrial and infrastructure work.",
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
    role: "Project Head · Commercial Development, Shikrapur",
  },
  {
    quote:
      "Internal CC roads and drainage across the estate were completed during the monsoon window. Two years on, there is no settlement anywhere on the stretch.",
    name: "Amit Pawar",
    role: "General Manager (Projects) · Industrial Estate, Ranjangaon",
  },
];

export const PROJECTS = [
  {
    slug: "sanaswadi-industrial-shed",
    name: "Sanaswadi Industrial Shed",
    location: "Sanaswadi, Pune",
    category: "Industrial",
    year: "2025",
    image: "/assets/sanaswadi4.jpeg",
    gallery: [
      "/assets/sanaswadi8.jpeg",
      "/assets/sanaswadi10.jpeg",
      "/assets/sanaswadi11.jpeg",
      "/assets/sanaswadi.jpeg",
      "/assets/sanaswadi2.jpeg",
    ],
    services: ["PEB Buildings", "RCC Construction", "Fabrication Services"],
    scope: ["Design & Build"],
    tagline:
      "A clear-span pre-engineered shed with an attached RCC office block — portal frames, roof sheeting with translucent skylights and masonry infill walls, built and handed over at Sanaswadi.",
  },
  {
    slug: "koregaon-peb-warehouse",
    name: "Koregaon PEB Warehouse",
    location: "Koregaon, Pune",
    category: "Industrial",
    year: "In progress",
    image: "/assets/koregaon.jpeg",
    gallery: ["/assets/koregaon.jpeg"],
    services: ["PEB Buildings", "RCC Construction"],
    scope: ["Design & Build"],
    tagline:
      "An open-front warehouse on a raised RCC plinth, with a curved PEB roof, full-height clear span for vehicle access and half-height masonry walls below the sheeting.",
  },
  {
    slug: "talegaon-rcc-structure",
    name: "Talegaon RCC Structure",
    location: "Talegaon, Pune",
    category: "Commercial",
    year: "In progress",
    image: "/assets/talegaon.jpeg",
    gallery: ["/assets/talegaon.jpeg"],
    services: ["RCC Construction"],
    scope: ["Civil Execution"],
    tagline:
      "A reinforced concrete framed structure under construction at Talegaon — slab reinforcement tied and shuttered across the floor plate, ready for pour.",
  },
];

export const STATS = [
  { value: 18, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "", label: "Service Verticals" },
  { value: 4.5, decimals: 1, suffix: "L+", label: "Sq.Ft Built-up" },
  { value: 100, suffix: "%", label: "Completion Rate" },
];
