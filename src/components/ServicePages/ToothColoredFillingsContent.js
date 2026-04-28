import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#16a34a',
  contentImage: '/services/Dental-filling/filling-decayed-tooth-composite.jpg',

  gallery: [
    { src: '/services/Dental-filling/filling-decayed-tooth-composite.jpg',    caption: 'Decayed tooth restored with tooth-coloured composite resin — natural appearance after treatment' },
    { src: '/services/Dental-filling/filling-fractured-tooth-composite.jpg',  caption: 'Fractured tooth restored with composite — seamless repair matching natural tooth shade' },
    { src: '/services/Dental-filling/filling-posterior-composite-1.jpg',      caption: 'Posterior composite restoration — durable tooth-coloured filling on back molar tooth' },
    { src: '/services/Dental-filling/filling-posterior-composite-2.jpg',      caption: 'Composite restoration on posterior tooth — perfectly blended with surrounding natural enamel' },
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
    {
      q: 'What is the cost of a composite filling in Tirupati?',
      a: 'At Meghana Dental Hospital, Tirupati, composite fillings start from ₹800 per tooth for a small cavity, ranging up to ₹2,500 for a larger restoration. Cost depends on the size and number of surfaces involved. We provide a written estimate before any treatment begins.',
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
      href: '/services/inlays-onlays',
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

export default function ToothColoredFillingsContent() {
  return <ServicePageLayout data={serviceData} />;
}
