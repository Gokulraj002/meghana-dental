import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#16a34a',
  contentImage: '/services/fillings-inlay-onlay.png',

  gallery: [
    { src: '/services/fillings-inlay-onlay.png', caption: 'Ceramic inlay and onlay restorations on a dental model — precision-fit porcelain pieces that blend perfectly with natural tooth structure' },
    { src: '/services/fillings-inlay-3d.jpg', caption: '3D illustration of a ceramic inlay being placed inside the prepared tooth cavity — a lab-fabricated, solid porcelain restoration' },
    { src: '/services/fillings-onlay-3d.jpg', caption: '3D illustration of a ceramic onlay seated on the tooth — extends over cusps for larger cavities that need more coverage than an inlay' },
    { src: '/services/fillings-before-after-1.jpg', caption: 'Before & after: decayed back teeth restored with tooth-coloured composite fillings — cavity treated and sealed in a single visit', contain: true },
    { src: '/services/fillings-before-after-2.jpg', caption: 'Before & after: chipped front teeth repaired with composite bonding — seamless, natural-looking result' },
    { src: '/services/fillings-composite-bonding.jpg', caption: 'Before & after: broken front teeth rebuilt with composite resin — colour-matched and polished for an invisible repair', contain: true },
  ],

  overview:
    'Dental fillings are the most common restorative procedure in dentistry — used to address tooth decay, fractures, and structural damage before they worsen into bigger problems. The procedure involves removing the decayed or damaged portion of the tooth and filling the space with a durable, carefully matched material to restore the tooth\'s shape, strength, and function. At Meghana Dental Hospital, Tirupati, we offer the full spectrum of filling options: direct tooth-coloured composite fillings placed in a single visit, and indirect ceramic or porcelain inlays and onlays precision-fabricated in the laboratory for large cavities that require maximum strength and longevity. All work is carried out under our dental operating microscope with 25× magnification, ensuring complete caries removal, ideal cavity preparation, and a perfectly sealed restoration every time.',

  highlights: [
    { icon: 'bi-palette', text: 'Tooth-Coloured Composite & Ceramic Options' },
    { icon: 'bi-search', text: 'Microscope-Guided Caries Removal' },
    { icon: 'bi-clock-history', text: 'Inlays Lasting 15–20+ Years' },
  ],

  conditions: [
    { icon: 'bi-virus', label: 'Cavities from tooth decay (caries)' },
    { icon: 'bi-lightning', label: 'Chipped or fractured tooth structure' },
    { icon: 'bi-arrows-collapse', label: 'Worn enamel due to grinding (bruxism)' },
    { icon: 'bi-exclamation-diamond', label: 'Cracked or broken old fillings' },
    { icon: 'bi-eyedropper', label: 'Stained or discoloured teeth needing repair' },
    { icon: 'bi-grid-1x2', label: 'Gaps or rough edges causing food trapping' },
  ],

  benefits: [
    {
      icon: 'bi-palette',
      title: 'Invisible, Natural Results',
      desc: 'Composite and ceramic fillings are matched precisely to your tooth shade — no dark metal restorations. The result blends seamlessly with your natural teeth.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Stops Decay in Its Tracks',
      desc: 'Filling a cavity early prevents the decay from spreading to the pulp, avoiding the need for root canal treatment or extraction down the line.',
    },
    {
      icon: 'bi-link-45deg',
      title: 'Chemically Bonds to Tooth',
      desc: 'Modern composite resin bonds directly to the tooth structure, reinforcing the remaining enamel and dentine rather than just plugging the hole.',
    },
    {
      icon: 'bi-hourglass-split',
      title: 'Long-Lasting Inlays & Onlays',
      desc: 'Ceramic inlays and onlays are precision-milled from solid porcelain — they do not shrink, do not stain, and can last 15–20+ years without replacement.',
    },
    {
      icon: 'bi-search',
      title: 'Microscope-Precision Removal',
      desc: 'Our dental operating microscope allows the dentist to remove only the decayed tissue with confidence, preserving maximum healthy tooth structure.',
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Single-Visit Option Available',
      desc: 'Small and medium cavities are filled in a single appointment with direct composite — no temporary restoration, no waiting, no second visit needed.',
    },
  ],

  process: [
    {
      title: 'Examination & Diagnosis',
      desc: 'Your dentist examines the tooth clinically and with digital X-rays to determine the exact depth and extent of the cavity. We assess whether a direct filling, inlay, or onlay is the right solution, and discuss material options and costs transparently.',
    },
    {
      title: 'Anaesthesia & Caries Removal',
      desc: 'Local anaesthesia is applied so the procedure is completely pain-free. Under the dental microscope with 25× magnification, all decayed and structurally unsound tooth structure is removed precisely — no more, no less than necessary.',
    },
    {
      title: 'For Direct Fillings — Bonding & Composite Placement',
      desc: 'The cavity walls are etched and bonded. Composite resin is placed in thin increments, each cured (hardened) with a blue-light lamp. The filling is sculpted to restore the natural tooth anatomy, then polished to a smooth finish. Total chair time: 45–60 minutes.',
    },
    {
      title: 'For Inlays/Onlays — Impression & Temporary',
      desc: 'For large cavities where a direct filling would be too bulky or prone to shrinkage, a precise impression is taken and sent to our specialist dental laboratory. A temporary filling protects the tooth while your custom ceramic inlay or onlay is fabricated over 3–5 working days.',
    },
    {
      title: 'Inlay/Onlay Bonding (Second Visit)',
      desc: 'The laboratory-fabricated ceramic restoration is tried in for fit, bite, and shade, then permanently bonded with high-strength resin cement. Porcelain inlays and onlays are adjusted and polished chairside for a perfect occlusion.',
    },
    {
      title: 'Aftercare Advice',
      desc: 'Post-filling sensitivity (to cold or pressure) is normal for a few days and resolves on its own. Maintain good oral hygiene — brush twice daily with fluoride toothpaste and floss daily. Avoid very hard foods for 24 hours after a composite filling. Attend 6-monthly check-ups.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between a composite filling and a ceramic inlay?',
      a: 'A composite filling is a direct restoration placed and sculpted chairside in a single visit — ideal for small to medium cavities. A ceramic inlay is an indirect restoration: the cavity is prepared, an impression taken, and a precision-milled porcelain piece is bonded in at a second visit. Inlays are stronger, do not shrink over time, and last significantly longer than direct composite — they are the better choice for large cavities on back teeth.',
    },
    {
      q: 'What is an onlay and when is it needed?',
      a: 'An onlay is like an inlay but extends to cover one or more cusps (the raised points on a tooth\'s biting surface). It is used when the cavity is too large for a direct filling but the tooth does not need a full crown. An onlay preserves more tooth structure than a crown while providing superior strength compared to a large direct filling.',
    },
    {
      q: 'How long do dental fillings last?',
      a: 'Composite fillings typically last 5–10 years, depending on the size of the filling, the tooth location, and oral hygiene. Ceramic inlays and onlays last 15–20+ years and are significantly more resistant to shrinkage, staining, and wear. Regular check-ups allow us to monitor fillings and replace them before they fail.',
    },
    {
      q: 'Is getting a dental filling painful?',
      a: 'No. Local anaesthesia is administered before any preparation begins, so you feel only light pressure — not pain. Post-procedure sensitivity to cold or biting is common for a few days and resolves without treatment. We use topical anaesthetic before the injection to minimise any discomfort.',
    },
    {
      q: 'Can I eat normally after a filling?',
      a: 'After a composite filling, wait until the anaesthesia wears off (usually 1–2 hours) before eating to avoid accidentally biting your cheek. Avoid very sticky or hard foods for 24 hours. After a ceramic inlay or onlay, which is permanently cemented, normal eating can resume once the numbness wears off. There are no long-term food restrictions.',
    },
    {
      q: 'Should I replace my old silver (amalgam) fillings?',
      a: 'Amalgam fillings that are intact and functioning well do not need to be replaced purely for cosmetic reasons. However, if an old amalgam filling is cracked, leaking, or has secondary decay underneath, replacing it with a tooth-coloured composite or ceramic restoration is the right course of action. We assess each filling individually and never recommend unnecessary replacements.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-check', label: 'Direct Filling', value: '1 Visit' },
    { icon: 'bi-calendar-event', label: 'Inlay / Onlay', value: '2 Visits' },
    { icon: 'bi-clock-history', label: 'Composite Lifespan', value: '5–10 Years' },
    { icon: 'bi-gem', label: 'Ceramic Lifespan', value: '15–20+ Years' },
  ],

  ctaTitle: 'Repair Your Tooth with a Natural-Looking Filling',
  ctaDesc: 'Toothache, sensitivity, or a visible cavity? Our dentists in Tirupati will restore your tooth with precision and a perfectly matched, tooth-coloured result.',

  relatedServices: [
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'When decay reaches the pulp, root canal treatment saves the tooth before a filling or crown is placed.',
    },
    {
      image: '/services/crown-zirconia.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'For severely damaged teeth beyond a filling, crowns provide full-coverage protection.',
    },
    {
      image: '/images/microscope-treatment.jpg',
      href: '/services/microscope-dentistry',
      title: 'Microscope Dentistry',
      desc: 'All our fillings are placed under 25× microscope magnification for absolute precision.',
    },
    {
      image: '/services/Gum-Treatment.jpg',
      href: '/services/gum-treatment',
      title: 'Gum Treatment',
      desc: 'Healthy gums are essential for long-lasting restorations — we treat both together.',
    },
  ],
};

export default function DentalFillingsContent() {
  return <ServicePageLayout data={serviceData} />;
}
