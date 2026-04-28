import ServiceTabsWrapper from './ServiceTabsWrapper';

const toothColoredData = {
  accent: '#16a34a',
  contentImage: '/services/fillings-before-after-1.jpg',

  gallery: [
    { src: '/services/fillings-before-after-1.jpg', caption: 'Before & after: decayed back teeth restored with tooth-coloured composite fillings — cavity treated and sealed in a single visit', contain: true },
    { src: '/services/fillings-before-after-2.jpg', caption: 'Before & after: chipped front teeth repaired with composite bonding — seamless, natural-looking result', contain: true },
    { src: '/services/fillings-composite-bonding.jpg', caption: 'Before & after: broken front teeth rebuilt with composite resin — colour-matched and polished for an invisible repair', contain: true },
  ],

  overview:
    'Tooth-coloured composite resin fillings are the most common restorative treatment in modern dentistry — used to repair cavities, chipped teeth, and minor structural damage in a single, comfortable visit. Composite is a BPA-free, tooth-coloured plastic-and-glass blend that is applied directly to the prepared cavity, sculpted to the exact tooth anatomy, and hardened instantly with a blue-light curing lamp. Unlike old silver amalgam fillings, composite bonds chemically to the natural tooth structure, reinforcing what remains rather than just plugging the space. At Meghana Dental Hospital, Tirupati, every composite filling is placed under our dental operating microscope with 25× magnification — ensuring complete decay removal, perfect cavity edges, and a restoration that fits and seals with absolute precision.',

  highlights: [
    { icon: 'bi-palette', text: 'Perfectly Shade-Matched to Your Tooth' },
    { icon: 'bi-calendar-check', text: 'Completed in a Single Visit' },
    { icon: 'bi-link-45deg', text: 'Chemically Bonds to Tooth Structure' },
  ],

  conditions: [
    { icon: 'bi-virus', label: 'Small to medium cavities from tooth decay' },
    { icon: 'bi-lightning', label: 'Chipped or fractured front or back teeth' },
    { icon: 'bi-arrows-collapse', label: 'Worn enamel due to grinding or acid erosion' },
    { icon: 'bi-circle-fill', label: 'Stained or discoloured patches on tooth surface' },
    { icon: 'bi-exclamation-diamond', label: 'Old cracked or leaking silver amalgam fillings' },
    { icon: 'bi-grid-1x2', label: 'Small gaps between teeth (minor diastema)' },
  ],

  benefits: [
    {
      icon: 'bi-palette',
      title: 'Invisible Result',
      desc: 'Composite is shade-matched to your exact tooth colour — no dark metal fillings visible when you eat, laugh, or speak.',
    },
    {
      icon: 'bi-calendar-check',
      title: 'Single Visit — Done in 45–60 Min',
      desc: 'The entire procedure — decay removal, bonding, composite sculpting, curing, and polishing — is completed chairside in one appointment.',
    },
    {
      icon: 'bi-link-45deg',
      title: 'Chemically Bonds to Enamel',
      desc: 'Composite resin is etched and bonded into the tooth surface, reinforcing the remaining healthy structure and providing a tight, long-lasting seal against bacteria.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Stops Decay Immediately',
      desc: 'Filling a cavity early prevents bacteria from reaching the pulp — avoiding root canal treatment, crowns, or extraction in the future.',
    },
    {
      icon: 'bi-search',
      title: 'Microscope Precision',
      desc: 'Our 25× dental operating microscope ensures every last trace of decay is removed cleanly without sacrificing healthy enamel or dentine.',
    },
    {
      icon: 'bi-cash-coin',
      title: 'Affordable & Accessible',
      desc: 'Composite fillings are one of the most cost-effective restorative treatments available — protecting your tooth for 5–10 years with proper care.',
    },
  ],

  process: [
    {
      title: 'Examination & X-Ray',
      desc: 'The tooth is assessed with clinical examination and a digital X-ray to confirm the depth and extent of the cavity. We confirm that direct composite is the right treatment (not an inlay or crown) and discuss the shade selection with you.',
    },
    {
      title: 'Local Anaesthesia',
      desc: 'A topical anaesthetic gel is applied first, then local anaesthesia is administered so you feel zero pain throughout the procedure. We wait until you are fully comfortable before beginning.',
    },
    {
      title: 'Decay Removal Under Microscope',
      desc: 'Under 25× dental microscope magnification, all decayed and structurally unsound tooth structure is removed precisely using a dental drill and hand instruments. The cavity is then cleaned and conditioned.',
    },
    {
      title: 'Bonding & Composite Placement',
      desc: 'The cavity walls are etched with a mild acid and then coated with a bonding agent that chemically links the composite to the tooth. Composite resin is applied in thin increments, each layer hardened (cured) within seconds using a blue-light lamp.',
    },
    {
      title: 'Sculpting, Bite Check & Polish',
      desc: 'The composite is carefully carved and shaped to recreate the natural tooth anatomy. The bite is checked with articulating paper and adjusted until perfect. The surface is then polished to a smooth, natural shine.',
    },
  ],

  faqs: [
    {
      q: 'How long do composite fillings last?',
      a: 'Tooth-coloured composite fillings typically last 5–10 years, depending on cavity size, tooth location, and oral hygiene. Back teeth that bear heavy chewing forces will wear composite faster than front teeth. Regular 6-monthly check-ups allow us to monitor fillings and replace them before they fail.',
    },
    {
      q: 'Does getting a composite filling hurt?',
      a: 'No. Local anaesthesia makes the procedure completely pain-free. Some cold or pressure sensitivity after the filling is normal for a few days — this resolves on its own without treatment.',
    },
    {
      q: 'Will my composite filling be the same colour as my tooth?',
      a: 'Yes. We select the composite shade from a standardised colour guide under natural light to exactly match your tooth colour. Once polished, the filling is virtually indistinguishable from the surrounding natural tooth.',
    },
    {
      q: 'Can I eat immediately after a filling?',
      a: 'Composite fillings are fully hardened by the curing lamp during placement — you can eat as soon as the anaesthetic wears off (usually 1–2 hours). Avoid very hard or sticky foods on the day of treatment.',
    },
    {
      q: 'Should I replace my old silver amalgam fillings with composite?',
      a: 'There is no need to replace amalgam fillings that are intact and functioning well. However, if an old silver filling is cracked, leaking, or has secondary decay underneath it, replacing it with tooth-coloured composite is the right decision. We never recommend unnecessary treatment.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-check', label: 'Visits Required', value: '1 Visit' },
    { icon: 'bi-clock', label: 'Chair Time', value: '45–60 min' },
    { icon: 'bi-clock-history', label: 'Lifespan', value: '5–10 Years' },
    { icon: 'bi-syringe', label: 'Anaesthesia', value: 'Local' },
  ],

  ctaTitle: 'Fix Your Cavity Today — Single Visit',
  ctaDesc: 'Toothache or sensitivity? Our dentists in Tirupati restore your tooth with a perfectly matched composite filling in one comfortable appointment.',

  relatedServices: [
    {
      image: '/services/fillings-inlay-onlay.png',
      href: '/services/dental-fillings',
      title: 'Inlays & Onlays',
      desc: 'For large cavities — precision ceramic restorations lasting 15–20+ years.',
    },
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'When decay reaches the pulp, RCT saves the tooth before a filling is placed.',
    },
    {
      image: '/services/crown-zirconia.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns',
      desc: 'Full-coverage crown for teeth too damaged for any type of filling.',
    },
    {
      image: '/images/microscope-treatment.jpg',
      href: '/services/microscope-dentistry',
      title: 'Microscope Dentistry',
      desc: 'All fillings placed under 25× magnification for maximum precision.',
    },
  ],
};

const inlaysOnlaysData = {
  accent: '#7c3aed',
  contentImage: '/services/fillings-inlay-onlay.png',

  gallery: [
    { src: '/services/fillings-inlay-onlay.png', caption: 'Ceramic inlay and onlay restorations on a dental model — precision-fit porcelain pieces that blend perfectly with natural tooth structure' },
    { src: '/services/fillings-inlay-3d.jpg', caption: '3D illustration of a ceramic inlay being lowered into the prepared tooth cavity — lab-fabricated, solid porcelain, precision fit' },
    { src: '/services/fillings-onlay-3d.jpg', caption: '3D illustration of a ceramic onlay seated on the tooth — extends over one or more cusps for larger cavities that need more coverage' },
  ],

  overview:
    'Ceramic inlays and onlays are the gold standard for restoring large, heavily damaged, or cusp-involved back teeth — situations where a direct composite filling would be too bulky, too prone to shrinkage, or simply not strong enough to withstand long-term chewing forces. Unlike direct fillings placed chairside, inlays and onlays are precision-milled from solid porcelain or ceramic in a specialist dental laboratory, then permanently bonded to the tooth at a second visit. The result is a restoration that does not shrink, does not stain, lasts 15–20+ years, and is virtually indistinguishable from natural tooth enamel. An inlay fits inside the cusps of the tooth; an onlay extends over one or more cusps when additional coverage is needed — making it the ideal solution between a large filling and a full crown. At Meghana Dental Hospital, Tirupati, all inlay and onlay preparations are performed under our 25× dental operating microscope for micron-level precision.',

  highlights: [
    { icon: 'bi-gem', text: 'Solid Ceramic — No Shrinkage, No Staining' },
    { icon: 'bi-clock-history', text: 'Lasts 15–20+ Years' },
    { icon: 'bi-search', text: 'Microscope-Precision Preparation' },
  ],

  conditions: [
    { icon: 'bi-virus', label: 'Large cavities too extensive for a direct filling' },
    { icon: 'bi-lightning', label: 'Cracked or fractured cusps on back teeth' },
    { icon: 'bi-arrows-collapse', label: 'Heavily worn molar surfaces due to bruxism' },
    { icon: 'bi-exclamation-diamond', label: 'Old large silver amalgam fillings needing replacement' },
    { icon: 'bi-grid-1x2', label: 'Deep cavities where composite shrinkage is a concern' },
    { icon: 'bi-gem', label: 'Patients wanting the strongest, longest-lasting back tooth restoration' },
  ],

  benefits: [
    {
      icon: 'bi-gem',
      title: 'Strongest Available Restoration',
      desc: 'Solid ceramic inlays are significantly stronger than direct composite fillings — engineered to withstand the full biting force of back teeth for 15–20+ years.',
    },
    {
      icon: 'bi-droplet-slash',
      title: 'Zero Shrinkage or Staining',
      desc: 'Composite resin shrinks slightly during curing, creating micro-gaps over time. Ceramic inlays are cured in the lab at controlled temperatures — no shrinkage, no gap, no staining.',
    },
    {
      icon: 'bi-palette',
      title: 'Indistinguishable from Natural Enamel',
      desc: 'Porcelain and e.max ceramic have the same light transmission and translucency as natural tooth enamel — the restoration disappears into the tooth.',
    },
    {
      icon: 'bi-clock-history',
      title: '15–20+ Year Lifespan',
      desc: 'With proper care, ceramic inlays last 2–3× longer than composite fillings — making them a better long-term investment for large restorations.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Preserves More Tooth Than a Crown',
      desc: 'An onlay covers only what is damaged, saving significantly more healthy tooth structure than a full crown — always the conservative choice when it is sufficient.',
    },
    {
      icon: 'bi-search',
      title: 'Microscope-Guided Precision',
      desc: 'The preparation margins are created under 25× magnification — ensuring the ceramic piece seats flush with the tooth and seals perfectly to prevent micro-leakage.',
    },
  ],

  process: [
    {
      title: 'Examination & Planning',
      desc: 'The tooth is assessed clinically and with digital X-rays. We determine whether an inlay (fits inside the cusps) or onlay (covers one or more cusps) is required, select the ceramic material, and provide a written cost estimate.',
    },
    {
      title: 'Visit 1 — Preparation Under Microscope',
      desc: 'Under local anaesthesia and dental microscope guidance at 25× magnification, the cavity is precisely prepared: all decay removed, cavity walls refined to create ideal retentive angles, and margins finished cleanly. Digital or putty impressions are taken and sent to the specialist laboratory.',
    },
    {
      title: 'Temporary Restoration',
      desc: 'A well-fitted temporary composite inlay/onlay is placed at the end of Visit 1, protecting the prepared tooth while your permanent ceramic piece is being fabricated. Tooth sensitivity during this period is normal.',
    },
    {
      title: 'Laboratory Fabrication (3–5 Days)',
      desc: 'Skilled dental technicians mill your inlay or onlay from a solid block of porcelain or e.max ceramic using CAD/CAM technology, then hand-characterise the surface texture and shade to match your surrounding teeth precisely.',
    },
    {
      title: 'Visit 2 — Try-In & Permanent Bonding',
      desc: 'The ceramic piece is first tried in dry to check fit, contact points, and aesthetics. Once confirmed, the tooth surface is etched and the inlay/onlay is permanently bonded with high-strength dual-cure resin cement. Excess cement is removed under the microscope, and the bite is refined.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between an inlay and an onlay?',
      a: 'An inlay fits within the cusps of the tooth — used for cavities that do not involve the cusp tips. An onlay extends over one or more cusps — used for larger cavities or when a cusp is cracked or missing. Both are lab-fabricated from solid ceramic and permanently bonded. The choice depends on the extent of damage, which is assessed during your consultation.',
    },
    {
      q: 'Why should I choose a ceramic inlay instead of a direct composite filling?',
      a: 'For small to medium cavities, a direct composite filling is perfectly adequate. For large cavities — especially on back teeth that bear heavy chewing loads — composite has two disadvantages: it shrinks slightly during curing (creating micro-gaps) and it is softer than ceramic, wearing faster under biting forces. A ceramic inlay shrinks zero, is stronger, and lasts 15–20+ years versus 5–10 years for composite.',
    },
    {
      q: 'How many visits does an inlay or onlay require?',
      a: 'Two visits: Visit 1 (tooth preparation and impression, temporary placed) and Visit 2 (permanent ceramic bonded in) with a 3–5 day gap for laboratory fabrication. You leave both appointments fully comfortable and with a tooth in place.',
    },
    {
      q: 'Is an onlay better than a crown for a cracked cusp?',
      a: 'In many cases, yes — an onlay can cover and protect a cracked cusp while preserving significantly more healthy tooth structure than a full crown, which requires shaping the entire tooth on all surfaces. Our guiding principle is always maximum tooth conservation. If the damage is so extensive that an onlay cannot provide adequate protection, we will recommend a crown and explain why.',
    },
    {
      q: 'How long do ceramic inlays and onlays last?',
      a: 'Ceramic inlays and onlays routinely last 15–20+ years with good oral hygiene and regular check-ups. The main threats to longevity are heavy grinding (for which a night guard is recommended) and secondary decay around the margins from poor oral hygiene.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-event', label: 'Visits Required', value: '2 Visits' },
    { icon: 'bi-clock', label: 'Lab Fabrication', value: '3–5 Days' },
    { icon: 'bi-clock-history', label: 'Lifespan', value: '15–20+ Years' },
    { icon: 'bi-gem', label: 'Material', value: 'Ceramic / e.max' },
  ],

  ctaTitle: 'Restore Your Tooth with a Precision Ceramic Inlay',
  ctaDesc: 'Large cavity or cracked cusp on a back tooth? Our team in Tirupati will fit you with a ceramic inlay or onlay that lasts decades.',

  relatedServices: [
    {
      image: '/services/fillings-before-after-1.jpg',
      href: '/services/dental-fillings',
      title: 'Tooth Colored Fillings',
      desc: 'Direct composite fillings — the right choice for small to medium cavities in one visit.',
    },
    {
      image: '/services/crown-zirconia.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns',
      desc: 'Full-coverage zirconia or e.max crown when damage is too extensive for an inlay.',
    },
    {
      image: '/images/microscope-treatment.jpg',
      href: '/services/microscope-dentistry',
      title: 'Microscope Dentistry',
      desc: 'All inlay preparations done under 25× dental operating microscope for perfect margins.',
    },
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'Onlays are often the restoration of choice after RCT on premolars and molars.',
    },
  ],
};

const tabs = [
  {
    id: 'tooth-colored-fillings',
    label: 'Tooth Colored Fillings',
    icon: 'bi-palette',
    data: toothColoredData,
  },
  {
    id: 'inlays-onlays',
    label: 'Inlays & Onlays',
    icon: 'bi-gem',
    badge: 'Premium',
    data: inlaysOnlaysData,
  },
];

export default function DentalFillingsTabsContent() {
  return <ServiceTabsWrapper tabs={tabs} />;
}
