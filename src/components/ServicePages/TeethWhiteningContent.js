import ServicePageLayout from './ServicePageLayout';

export const serviceData = {
  accent: '#f59e0b',
  contentImage: '/services/Teeth-Whitening.jpg',

  gallery: [
    { src: '/services/Teeth-Whitening01.jpg', caption: 'In-office laser whitening procedure' },
    { src: '/images/dental-chair.jpg', caption: 'Comfortable treatment setting' },
    { src: '/images/dental-equipment.jpg', caption: 'Professional whitening equipment' },
    { src: '/images/dental-clinic-interior.jpg', caption: 'Our modern clinic environment' },
    { src: '/images/about-clinic.png', caption: 'State-of-the-art facilities' },
  ],

  overview:
    'Teeth whitening is the most popular cosmetic dental treatment in the world — and for good reason. A brighter smile can transform your appearance and significantly boost your self-confidence. At Meghana Dental Hospital, Tirupati, we offer professional in-office laser teeth whitening that delivers results up to 8 shades brighter in a single 45–60 minute appointment. We also provide take-home professional whitening kits with custom-fitted trays for patients who prefer gradual whitening in the comfort of their own home. Unlike over-the-counter strips and toothpastes, our clinically-approved whitening agents work on intrinsic stains deep within the enamel — safely and effectively, under professional supervision.',

  highlights: [
    { icon: 'bi-sun-fill', text: 'Up to 8 Shades Brighter' },
    { icon: 'bi-1-circle-fill', text: 'Results in 1 Visit' },
    { icon: 'bi-shield-fill-check', text: 'Clinically Safe & Supervised' },
  ],

  conditions: [
    { icon: 'bi-cup-hot-fill', label: 'Stains from tea, coffee & red wine' },
    { icon: 'bi-wind', label: 'Tobacco & smoking-related discolouration' },
    { icon: 'bi-clock-history', label: 'Age-related yellowing of enamel' },
    { icon: 'bi-capsule', label: 'Tetracycline or fluorosis staining' },
    { icon: 'bi-droplet-fill', label: 'Intrinsic stains from trauma or decay' },
    { icon: 'bi-emoji-neutral-fill', label: 'Naturally dull or grey-toned teeth' },
  ],

  benefits: [
    {
      icon: 'bi-sun-fill',
      title: 'Dramatic, Fast Results',
      desc: 'In-office laser whitening can brighten teeth by 4–8 shades in a single 45–60 minute session — no waiting weeks for results.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Safe & Professionally Supervised',
      desc: 'Our dentist protects your gums before applying clinically-approved whitening gel. Far safer and more effective than any DIY product.',
    },
    {
      icon: 'bi-emoji-laughing-fill',
      title: 'Boosted Confidence',
      desc: 'A noticeably whiter smile can improve your professional presence, social confidence, and overall first impressions.',
    },
    {
      icon: 'bi-house-fill',
      title: 'Take-Home Kit Option',
      desc: 'Custom-fitted trays with professional-grade whitening gel allow gradual brightening at home — ideal for patients with tooth sensitivity.',
    },
    {
      icon: 'bi-bandaid-fill',
      title: 'Non-Invasive & Painless',
      desc: 'Teeth whitening is entirely non-invasive — no drilling, no injections, no recovery time. Walk in and walk out with a brighter smile.',
    },
    {
      icon: 'bi-calendar-check-fill',
      title: 'Long-Lasting Results',
      desc: 'Professional whitening results last 1–3 years with proper care. Routine touch-ups and good oral hygiene extend your brighter smile further.',
    },
  ],

  process: [
    {
      title: 'Pre-Whitening Dental Check-up',
      desc: 'We assess your teeth and gums before whitening. Existing cavities, gum disease, or heavy tartar are treated first to ensure safe and even results. A shade guide records your current tooth colour.',
    },
    {
      title: 'Gum Protection',
      desc: 'A protective barrier (rubber dam or light-cured resin) is carefully applied to your gums and lips before the whitening agent is placed, ensuring no irritation to soft tissues.',
    },
    {
      title: 'Whitening Gel Application',
      desc: 'A professional-strength hydrogen peroxide or carbamide peroxide gel is applied to the tooth surfaces. For in-office laser whitening, a special light activates the gel to accelerate the whitening process.',
    },
    {
      title: 'Multiple Gel Cycles',
      desc: 'The whitening gel is applied in 2–3 cycles of 15–20 minutes each, allowing maximum penetration and shade improvement. Between cycles, the gel is refreshed on the teeth.',
    },
    {
      title: 'Final Shade Assessment & Care Advice',
      desc: 'After completing the cycles, we rinse off the gel, remove the gum barrier, and compare your new shade against the pre-treatment record. You receive personalised aftercare instructions and a take-home maintenance kit.',
    },
  ],

  faqs: [
    {
      q: 'Is teeth whitening safe?',
      a: 'Yes. Professional teeth whitening at Meghana Dental Hospital uses clinically-approved bleaching agents in concentrations proven safe for tooth enamel. Your gums are protected throughout the procedure. Temporary tooth sensitivity is the most common side effect, resolving within 24–48 hours.',
    },
    {
      q: 'How long do teeth whitening results last?',
      a: 'Professional whitening results at Meghana Dental Hospital typically last 1–3 years depending on your diet and oral hygiene habits. Avoiding or reducing tea, coffee, tobacco, and red wine, and maintaining regular brushing and dental check-ups will significantly extend your results.',
    },
    {
      q: 'What is the cost of teeth whitening in Tirupati?',
      a: 'In-office laser teeth whitening at Meghana Dental Hospital, Tirupati starts from ₹5,000. Take-home professional whitening kits are also available at a lower price point. The exact cost depends on the degree of staining and method recommended.',
    },
    {
      q: 'Who is not suitable for teeth whitening?',
      a: 'Teeth whitening is not recommended during pregnancy or breastfeeding, for children under 16, or for patients with active gum disease, untreated cavities, or severe intrinsic staining. It also does not whiten crowns, veneers, or fillings. Our dentist will assess your suitability at the consultation.',
    },
    {
      q: 'Will whitening remove all my stains?',
      a: 'Professional whitening is highly effective on extrinsic stains (from food, drink, tobacco) and mild intrinsic stains. Severe intrinsic staining from tetracycline or fluorosis may require alternative cosmetic solutions such as veneers or bonding. Our dentist will advise the best option for your specific type of discolouration.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'In-Office Duration', value: '45–60 min' },
    { icon: 'bi-brightness-high-fill', label: 'Shade Improvement', value: 'Up to 8 shades' },
    { icon: 'bi-calendar-check', label: 'Results Last', value: '1–3 years' },
    { icon: 'bi-house-fill', label: 'Take-Home Kit', value: '2–3 weeks' },
  ],

  ctaTitle: 'Get a Brighter Smile Today',
  ctaDesc: 'Book your teeth whitening consultation in Tirupati. Professional results in one visit — walk in, walk out smiling.',

  relatedServices: [
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Combine whitening with veneers, bonding, and more for a complete smile transformation.',
    },
    {
      image: '/images/aligners-wearing.jpg',
      href: '/services/aligners',
      title: 'Clear Aligners',
      desc: 'Straighten teeth invisibly — then brighten them with professional whitening.',
    },
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Shade-matched ceramic crowns that complement your newly whitened natural teeth.',
    },
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Permanent tooth replacement to complete your smile makeover.',
    },
  ],
};

export default function TeethWhiteningContent({ overrides = {} }) {
  return <ServicePageLayout data={{ ...serviceData, ...overrides }} />;
}
