import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#a21caf',
  contentImage: '/images/ortho-before-after-1.jpg',

  gallery: [
    { src: '/images/ortho-before-after-2.png', caption: 'Complete smile makeover result' },
    { src: '/images/aligners-wearing.jpg', caption: 'Clear aligners as part of smile design' },
    { src: '/services/Teeth-Whitening.jpg', caption: 'Professional whitening in smile makeovers' },
    { src: '/images/dental-clinic-interior.jpg', caption: 'Digital smile design suite' },
    { src: '/images/dental-team.jpg', caption: 'Our cosmetic dentistry specialists' },
    { src: '/images/about-clinic.png', caption: 'Our state-of-the-art facilities' },
  ],

  overview:
    'A smile makeover is not a single treatment — it is a precisely choreographed combination of cosmetic and restorative procedures, designed as a whole to transform everything you dislike about your smile. Colour, shape, size, alignment, gum levels, and symmetry are all considered together. At Meghana Dental Hospital, Tirupati, every smile makeover begins with Digital Smile Design (DSD): we photograph your face, map your smile line, and show you a digital preview of your expected result on-screen before a single treatment begins. This means you approve the outcome in advance — no surprises. Whether you need subtle whitening and bonding or a comprehensive transformation with veneers, gum contouring, and clear aligners, we design the minimum intervention required to achieve the maximum impact.',

  highlights: [
    { icon: 'bi-laptop', text: 'Digital Smile Design Preview' },
    { icon: 'bi-palette2', text: 'Porcelain Veneers & Composite Bonding' },
    { icon: 'bi-stars', text: 'Tailored to Your Face & Goals' },
  ],

  conditions: [
    { icon: 'bi-droplet', label: 'Discoloured or stained teeth resistant to whitening' },
    { icon: 'bi-lightning', label: 'Chipped, cracked, or worn front teeth' },
    { icon: 'bi-arrows-expand', label: 'Gaps between teeth (diastema)' },
    { icon: 'bi-symmetry-vertical', label: 'Uneven or misaligned smile line' },
    { icon: 'bi-eye', label: 'Gummy smile — excessive gum display' },
    { icon: 'bi-person-dash', label: 'Missing teeth affecting confidence and appearance' },
  ],

  benefits: [
    {
      icon: 'bi-laptop-fill',
      title: 'See Your Result Before You Start',
      desc: 'Digital Smile Design shows you a realistic digital preview of your new smile before any treatment begins. You approve every detail in advance.',
    },
    {
      icon: 'bi-gem',
      title: 'Porcelain Veneers — The Transformation Tool',
      desc: 'Wafer-thin porcelain shells bonded to the front of teeth can change colour, shape, and size in two appointments — a Hollywood result with minimal tooth reduction.',
    },
    {
      icon: 'bi-palette',
      title: 'Composite Bonding for Quick Results',
      desc: 'Tooth-coloured resin sculpted directly on the tooth repairs chips, closes gaps, and reshapes teeth in a single visit — reversible and excellent value.',
    },
    {
      icon: 'bi-arrows-collapse',
      title: 'Laser Gum Contouring',
      desc: 'An uneven or high gumline is reshaped with our Diode laser in one pain-free appointment, dramatically improving the proportions of your smile.',
    },
    {
      icon: 'bi-person-check',
      title: 'Customised to Your Face',
      desc: 'Your smile is designed to harmonise with your facial proportions, skin tone, and personality — not a generic template. Every smile makeover is unique.',
    },
    {
      icon: 'bi-clock-history',
      title: 'Long-Lasting Results',
      desc: 'Porcelain veneers last 10–15+ years. Crowns last 15–25+ years. With good maintenance, your smile makeover investment lasts for a very long time.',
    },
  ],

  process: [
    {
      title: 'Smile Consultation & Photography',
      desc: 'Your consultation begins with a detailed conversation about your smile goals, lifestyle, and budget. High-resolution facial and dental photographs are taken under standardised lighting. We note every element: tooth colour, shape, size, gum levels, lip support, and facial midline.',
    },
    {
      title: 'Digital Smile Design — See Your New Smile On-Screen',
      desc: 'Using digital design software, our cosmetic dentist digitally maps your ideal smile onto your photograph. You see exactly how your new smile will look before any commitment is made. We adjust the design together until you are completely happy — this is your digital approval.',
    },
    {
      title: 'Treatment Planning & Sequencing',
      desc: 'Based on your approved design, we create a prioritised, sequenced treatment plan. Orthodontic alignment (if needed) comes first. Whitening comes before any ceramic work. Gum contouring is done before veneers. This sequencing ensures every treatment builds on the last for the best final result.',
    },
    {
      title: 'Treatment Execution — Phase by Phase',
      desc: 'Each treatment phase is completed with precision. Veneers are prepared under our Carl Zeiss microscope, ensuring minimal enamel removal. Composite bonding is sculpted freehand by our cosmetic specialists. Gum contouring is done with our Diode laser — precise and comfortable.',
    },
    {
      title: 'Reveal, Photography & Maintenance',
      desc: 'On completion, professional photographs document your transformation. You receive a personalised maintenance guide, your next check-up schedule, and home-care products to protect your investment. We book a 4–6 week review to confirm everything is perfect.',
    },
  ],

  faqs: [
    {
      q: 'What treatments are included in a smile makeover? Does every patient need all of them?',
      a: 'No — a smile makeover is entirely tailored to your specific concerns. It may include just two treatments (such as whitening and composite bonding) or a comprehensive programme combining teeth whitening, porcelain veneers, gum contouring, clear aligners, and dental crowns. The Digital Smile Design process helps us identify exactly which treatments will achieve the biggest change for your particular smile.',
    },
    {
      q: 'How much does a smile makeover cost in Tirupati at Meghana Dental Hospital?',
      a: 'Smile makeover costs vary enormously based on which treatments are included. Simple makeovers involving whitening and composite bonding start from ₹8,000–15,000. Mid-range makeovers with 4–6 veneers and gum contouring range from ₹40,000–80,000. Comprehensive full-smile transformations with veneers, aligners, and crowns can range from ₹1,00,000–2,50,000+.',
    },
    {
      q: 'How long does a smile makeover take?',
      a: 'A single-visit composite bonding makeover can be completed in one 2-hour appointment. Veneers require two appointments over 1–2 weeks. If orthodontic alignment is part of your plan, this adds 6–18 months. Comprehensive makeovers typically span 3–9 months from design to final reveal.',
    },
    {
      q: 'Are porcelain veneers permanent? Do they damage teeth?',
      a: 'Porcelain veneers require the removal of a very thin layer of enamel — typically 0.3–0.7 mm — to create space. This is irreversible, meaning veneers are a long-term commitment. However, at Meghana Dental Hospital we use ultra-minimal preparation techniques under microscope to preserve as much enamel as possible.',
    },
    {
      q: 'I am embarrassed about my smile. How soon can I get started?',
      a: 'We see smile makeover patients every week and understand that many patients feel self-conscious about their teeth. The consultation is entirely confidential, non-judgmental, and focused on understanding your goals. You can book a Digital Smile Design consultation at any time.',
    },
  ],

  stats: [
    { icon: 'bi-laptop', label: 'Digital Design', value: 'Included' },
    { icon: 'bi-calendar2-range', label: 'Duration', value: '1 visit – 9 months' },
    { icon: 'bi-clock-history', label: 'Veneers Lifespan', value: '10–15+ years' },
    { icon: 'bi-gem', label: 'Crown Lifespan', value: '15–25+ years' },
  ],

  ctaTitle: 'Design Your Dream Smile Today',
  ctaDesc: 'Book a Digital Smile Design consultation at Meghana Dental Hospital, Tirupati — and see your new smile on-screen before committing to any treatment.',

  relatedServices: [
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Professional whitening — always the first step in any smile makeover plan.',
    },
    {
      image: '/images/aligners-wearing.jpg',
      href: '/services/aligners',
      title: 'Clear Aligners',
      desc: 'Invisible teeth straightening to achieve the perfect alignment before veneers.',
    },
    {
      image: '/images/dental-equipment.jpg',
      href: '/services/laser-dentistry',
      title: 'Laser Gum Contouring',
      desc: 'Reshape your gumline with a Diode laser for perfect smile proportions.',
    },
    {
      image: '/images/dental-team.jpg',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'For complex cases needing comprehensive structural and cosmetic restoration.',
    },
  ],
};

export default function SmileMakeoverContent() {
  return <ServicePageLayout data={serviceData} />;
}
