import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#d97706',
  contentImage: '/images/dental-clinic-interior.jpg',

  gallery: [
    { src: '/services/crown-zirconia.jpg', caption: 'Zirconia crown — metal-free, biocompatible & MRI-safe' },
    { src: '/services/crown-metal-ceramic.jpg', caption: 'Metal ceramic crown (PFM) — durable with natural-looking porcelain facing' },
    { src: '/services/crown-metal.jpg', caption: 'Full metal crown — maximum strength for back teeth' },
    { src: '/images/microscope.jpg', caption: 'dental microscope with 25× magnification-guided crown preparation' },
    { src: '/images/microscope-treatment.jpg', caption: 'Precision tooth preparation under magnification' },
    { src: '/images/dental-equipment.jpg', caption: 'CAD/CAM crown fabrication equipment' },
    { src: '/images/dental-chair.jpg', caption: 'Crown fitting appointment' },
    { src: '/images/ortho-before-after-1.jpg', caption: 'Beautiful results with ceramic crowns' },
    { src: '/images/about-clinic.png', caption: 'Our specialist prosthodontics clinic' },
  ],

  overview:
    'A dental crown — sometimes called a tooth cap — is a full-coverage restoration that encases a damaged, weakened, or badly discoloured tooth from gumline to biting surface, restoring its original shape, strength, and appearance. At Meghana Dental Hospital, Tirupati, we offer the complete range of modern crowns: full-zirconia for unmatched strength, e.max lithium disilicate for exceptional aesthetics, and porcelain-fused-to-metal for durable value. Full ceramic crowns and zirconia crowns are completely metal-free, 100% biocompatible, and MRI-safe — an important advantage for patients who may require medical imaging. When one or more teeth are missing, a fixed dental bridge — three or more crowns fused together — fills the gap permanently without surgery. Every crown and bridge is prepared under our dental operating microscope with 25× magnification for precision that guarantees the perfect fit and maximum preservation of your healthy tooth structure.',

  highlights: [
    { icon: 'bi-gem', text: 'Zirconia, e.max & PFM Crowns' },
    { icon: 'bi-search', text: 'Microscope-Precision Preparation' },
    { icon: 'bi-clock-history', text: '15–25+ Years Lifespan' },
  ],

  conditions: [
    { icon: 'bi-virus', label: 'Severely decayed tooth — too large for a filling' },
    { icon: 'bi-tooth', label: 'Tooth after root canal treatment' },
    { icon: 'bi-lightning', label: 'Cracked or fractured tooth at risk of splitting' },
    { icon: 'bi-gem', label: 'Discoloured or malformed tooth for aesthetics' },
    { icon: 'bi-grid-1x2', label: 'Missing tooth — implant or bridge crown needed' },
    { icon: 'bi-arrows-collapse', label: 'Severely worn teeth due to bruxism (grinding)' },
  ],

  benefits: [
    {
      icon: 'bi-shield-fill-check',
      title: 'Protects a Vulnerable Tooth',
      desc: 'A root-canal-treated or heavily filled tooth is brittle. A crown encases it completely, preventing fracture and extending its life by decades.',
    },
    {
      icon: 'bi-stars',
      title: 'Natural Appearance',
      desc: 'Modern zirconia and e.max crowns are indistinguishable from natural teeth — the right shade, translucency, and anatomy for a seamless smile.',
    },
    {
      icon: 'bi-clock-history',
      title: 'Long-Lasting Investment',
      desc: 'Zirconia crowns routinely last 15–25+ years with good oral hygiene. That is a cost per year lower than most other dental treatments.',
    },
    {
      icon: 'bi-search',
      title: 'Microscope Preparation',
      desc: 'dental microscope with 25× magnification-guided tooth preparation removes only as much healthy tooth as necessary, maximising the tooth structure preserved under the crown.',
    },
    {
      icon: 'bi-house-check',
      title: 'Fixed — Not Removable',
      desc: 'Crowns and bridges are permanently cemented. They feel, function, and are cleaned exactly like natural teeth — no removal required.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Bridges Restore Missing Teeth',
      desc: 'A fixed bridge replaces missing teeth without surgery, restoring chewing, preventing shifting of adjacent teeth, and maintaining facial structure.',
    },
  ],

  process: [
    {
      title: 'Consultation & Treatment Planning',
      desc: 'The tooth is assessed clinically and with X-ray. We determine whether a crown, bridge, or implant crown is needed. Crown material and shade are selected with your input. A written cost estimate is provided.',
    },
    {
      title: 'Appointment 1 — Tooth Preparation & Impression',
      desc: 'Under local anaesthesia, the tooth is shaped under the dental microscope with 25× magnification — a precise amount of structure is removed on all surfaces to create space for the crown. Digital or putty impressions are taken and sent to our specialist dental laboratory. A temporary crown is fitted the same day.',
    },
    {
      title: 'Laboratory Fabrication',
      desc: 'Your custom crown is fabricated by skilled dental technicians over 3–5 working days. Zirconia crowns are milled by computer (CAD/CAM) and hand-characterised by the ceramist for a truly natural appearance.',
    },
    {
      title: 'Appointment 2 — Try-In, Adjustment & Cementation',
      desc: 'The permanent crown is first tried in dry to check fit, bite, and aesthetics. Any minor adjustments are made chairside. Once confirmed, the crown is permanently bonded with high-strength dental cement.',
    },
    {
      title: 'Review & Long-Term Care',
      desc: 'A brief follow-up at 2–4 weeks confirms occlusion and gum health. Crown care is simple: brush twice daily, floss, and attend 6-monthly check-ups. Avoid biting very hard objects like ice or bottle caps.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between a zirconia crown, e.max crown, and PFM crown?',
      a: 'Zirconia crowns are the strongest option — ideal for back teeth and for patients who grind. They are metal-free, fully biocompatible, and natural-looking. e.max (lithium disilicate) crowns are slightly less strong but offer exceptional translucency — preferred for front teeth and smile makeovers. PFM (porcelain-fused-to-metal) crowns combine a metal substructure with porcelain facing — durable and affordable, with a 10–15 year lifespan.',
    },
    {
      q: 'How long does a dental crown last?',
      a: 'With good oral hygiene and regular professional check-ups, zirconia and e.max crowns routinely last 15–25 years or longer. PFM crowns have a typical lifespan of 10–15 years. The main threats to crown longevity are gum disease, grinding without a night guard, and poor oral hygiene.',
    },
    {
      q: 'How much does a dental crown cost in Tirupati at Meghana Dental Hospital?',
      a: 'PFM crowns start from ₹4,000 per unit. Full-zirconia crowns start from ₹7,000. e.max crowns start from ₹10,000. Implant crowns are priced separately. A fixed three-unit bridge is priced per unit (three times the single crown cost). We provide a written, itemised quote at your consultation.',
    },
    {
      q: 'Will I be without a tooth between the two appointments?',
      a: 'Never. A temporary crown — shaped and shaded to closely match your final restoration — is placed at the end of your first appointment and remains in place for the 3–5 days while your permanent crown is fabricated in the lab.',
    },
    {
      q: 'Do I need a crown after a root canal? Can I just fill the tooth?',
      a: 'After root canal treatment, the tooth loses its natural moisture supply and becomes significantly more brittle and prone to fracture under biting forces. A filling alone does not provide the circumferential protection needed. In the vast majority of cases, a crown after root canal is not optional — it is what allows the treated tooth to function safely for many years.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-event', label: 'Appointments', value: '2 Visits' },
    { icon: 'bi-clock', label: 'Lab Time', value: '3–5 Working Days' },
    { icon: 'bi-clock-history', label: 'Lifespan', value: '15–25+ Years' },
    { icon: 'bi-syringe', label: 'Anaesthesia', value: 'Local' },
  ],

  ctaTitle: 'Protect Your Tooth with a Premium Crown',
  ctaDesc: 'Cracked, decayed, or post-root canal tooth? Our prosthodontists in Tirupati will match you to the perfect crown material for lasting results.',

  relatedServices: [
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Implant crowns are the most natural-feeling replacement for missing teeth.',
    },
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'Crowns are essential after RCT to protect the treated tooth from fracture.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Ceramic crowns and veneers combined for a complete aesthetic transformation.',
    },
    {
      image: '/images/about-clinic.png',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'Crowns and bridges form the core of most full-mouth reconstruction programmes.',
    },
  ],
};

export default function DentalCrownsContent() {
  return <ServicePageLayout data={serviceData} />;
}
