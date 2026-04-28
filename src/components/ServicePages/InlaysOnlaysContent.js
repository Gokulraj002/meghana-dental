import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#7c3aed',
  contentImage: '/services/Dental-filling/filling-ceramic-inlay-before-after.jpg',

  gallery: [
    { src: '/services/Dental-filling/filling-ceramic-inlay-before-after.jpg', caption: 'Ceramic inlay before and after — precision porcelain restoration blending seamlessly with natural tooth colour' },
    { src: '/services/Dental-filling/filling-inlay.webp',                     caption: 'Ceramic inlay — lab-fabricated solid porcelain piece seated inside the prepared tooth cavity' },
    { src: '/services/Dental-filling/filling-onlay.webp',                     caption: 'Ceramic onlay — extends over one or more cusps for larger cavities needing more coverage than an inlay' },
    { src: '/services/Dental-filling/filling-inlay-onlay-intro.png',          caption: 'Inlay vs onlay anatomy — showing the difference in coverage area and how each restoration fits the tooth' },
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
    {
      q: 'What is the cost of an inlay or onlay in Tirupati?',
      a: 'At Meghana Dental Hospital, Tirupati, ceramic inlays start from ₹6,000 per tooth and onlays from ₹8,000, depending on the size and material (porcelain or e.max). We provide a detailed written treatment plan with transparent costs before any procedure begins.',
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
      href: '/services/tooth-colored-fillings',
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

export default function InlaysOnlaysContent() {
  return <ServicePageLayout data={serviceData} />;
}
