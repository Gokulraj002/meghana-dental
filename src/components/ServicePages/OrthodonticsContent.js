import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0EA5A0',
  contentImage: '/services/ortho-img-p1-1.jpg',

  gallery: [
    { src: '/images/ortho-crooked-teeth.jpg', caption: 'Severely crowded and overlapping teeth — a typical case for fixed-brace treatment' },
    { src: '/images/ortho-protruded-tooth.jpg', caption: 'Midline diastema — gap between the upper front teeth' },
    { src: '/images/ortho-metal-braces.jpg', caption: 'Stainless steel metal braces with archwire on upper and lower arches' },
    { src: '/images/ortho-ceramic-braces.jpg', caption: 'Ceramic tooth-coloured braces — a discreet aesthetic option' },
    { src: '/images/ortho-before-after-1.jpg', caption: 'Before & after — crooked, crowded teeth fully aligned with braces', contain: true },
  ],

  overview:
    'Dental braces are a proven orthodontic treatment to align the teeth, improve jaw positioning, enhance facial aesthetics, and restore symmetry. At Meghana Dental Hospital, Tirupati, our MDS orthodontist corrects a full range of problems — crowded, spaced, protruded, and rotated teeth; overbites and underbites; crossbites; open bites; and midline diastemas. Using advanced 3D oral scanning technology, we map your teeth precisely before treatment begins and show you a digital simulation of your final smile. We offer metal, ceramic, and self-ligating braces for children, teenagers, and adults — as well as Invisalign clear aligners and fixed functional appliances for growing patients.',

  highlights: [
    { icon: 'bi-phone-fill', text: '3D Oral Scanner Planning' },
    { icon: 'bi-person-check-fill', text: 'MDS Orthodontist Specialist' },
    { icon: 'bi-calendar-range', text: '12–24 Month Treatment' },
  ],

  conditions: [
    { icon: 'bi-arrows-angle-expand', label: 'Crowded or overlapping teeth' },
    { icon: 'bi-arrows-expand', label: 'Widely spaced or gapped teeth' },
    { icon: 'bi-arrow-down-up', label: 'Deep overbite (upper teeth cover lower)' },
    { icon: 'bi-arrow-up-down', label: 'Underbite (lower jaw protrudes forward)' },
    { icon: 'bi-arrow-left-right', label: 'Crossbite (upper & lower teeth misaligned)' },
    { icon: 'bi-dot', label: 'Open bite (front teeth do not touch)' },
    { icon: 'bi-symmetry-vertical', label: 'Midline diastema (gap between front teeth)' },
  ],

  benefits: [
    {
      icon: 'bi-stars',
      title: 'Beautiful, Confident Smile',
      desc: 'Straightened teeth dramatically improve your appearance and the confidence to smile, speak, and laugh without self-consciousness.',
    },
    {
      icon: 'bi-droplet-fill',
      title: 'Better Oral Hygiene',
      desc: 'Properly aligned teeth are far easier to brush and floss — reducing plaque build-up, cavities, and gum disease risk long-term.',
    },
    {
      icon: 'bi-symmetry-horizontal',
      title: 'Improved Facial Symmetry',
      desc: 'Correcting jaw positioning and bite alignment enhances your overall facial balance and profile appearance.',
    },
    {
      icon: 'bi-chat-fill',
      title: 'Better Speech',
      desc: 'Misaligned teeth can affect pronunciation. Orthodontic correction often improves speech clarity and eliminates lisps.',
    },
    {
      icon: 'bi-egg-fried',
      title: 'Improved Chewing Function',
      desc: 'A correct bite ensures even distribution of chewing forces, reducing strain on jaw joints and preventing premature wear.',
    },
    {
      icon: 'bi-phone-fill',
      title: '3D-Planned Precision',
      desc: 'Our 3D intra-oral scanner creates an accurate digital model, enabling us to plan every tooth movement before treatment starts.',
    },
  ],

  process: [
    {
      title: 'Initial Consultation & 3D Oral Scan',
      desc: 'Our orthodontist examines your teeth, jaw, and facial structure. A 3D intra-oral scan captures a precise digital model — no messy impressions needed. X-rays are taken if required.',
    },
    {
      title: 'Digital Treatment Planning',
      desc: 'Using specialised software, we plan every stage of tooth movement digitally, showing you a simulation of your expected results before you commit to treatment.',
    },
    {
      title: 'Brace Placement',
      desc: 'Brackets are bonded to your teeth and connected with an archwire. The type of brace — metal, ceramic, or self-ligating — is chosen based on your clinical needs and aesthetic preference.',
      image: '/services/ortho-img-p5-1.jpg',
    },
    {
      title: 'Regular Adjustment Appointments',
      desc: 'Every 4–6 weeks, you visit for wire changes and adjustments. Each visit progresses tooth movement according to your treatment plan. Total treatment typically spans 12–24 months.',
    },
    {
      title: 'Braces Removal & Retention',
      desc: 'Once your teeth reach their target positions, braces are removed and custom retainers are provided to hold teeth in their new positions while bone stabilises.',
      image: '/services/ortho-img-p7-1.jpg',
    },
  ],

  faqs: [
    {
      q: 'What is the cost of braces in Tirupati?',
      a: 'At Meghana Dental Hospital, Tirupati: metal braces start from ₹18,000, ceramic braces from ₹25,000, and self-ligating braces from ₹30,000. Cost varies by case complexity and treatment duration. EMI options are available. Book a free orthodontic assessment for an accurate quote.',
    },
    {
      q: 'How long does orthodontic treatment take?',
      a: 'Treatment duration at Meghana Dental Hospital typically ranges from 12 to 24 months depending on the severity of misalignment. Mild cases may finish in under a year. Our 3D scanner-based planning ensures the most efficient treatment path for your specific case.',
    },
    {
      q: 'Is there an age limit for getting braces in Tirupati?',
      a: 'No age limit. While the ideal time for children is between 10–14 years (when most permanent teeth are present), adults can achieve excellent results at any age. Our ceramic and self-ligating braces are popular with adult patients seeking a more discreet option.',
    },
    {
      q: 'Are braces painful?',
      a: 'Braces are not painful to place. You may experience mild soreness for 2–4 days after each adjustment as teeth begin moving. This is normal and usually managed with over-the-counter pain relief. Our self-ligating braces apply lighter, gentler forces — often more comfortable than traditional types.',
    },
    {
      q: 'What is the difference between metal, ceramic, and self-ligating braces?',
      a: 'Metal braces are the most durable and cost-effective, ideal for complex cases. Ceramic braces use tooth-coloured brackets for a more aesthetic look. Self-ligating braces use a built-in clip instead of elastic ties, requiring fewer visits, applying lighter forces, and often completing treatment faster.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-range', label: 'Treatment Duration', value: '12–24 months' },
    { icon: 'bi-arrow-repeat', label: 'Visit Frequency', value: 'Every 4–6 wks' },
    { icon: 'bi-person-fill', label: 'Minimum Age', value: '7 years' },
    { icon: 'bi-shield-check', label: 'Technology', value: '3D Oral Scanner' },
  ],

  ctaTitle: 'Free Orthodontic Assessment',
  ctaDesc: 'Find out which braces solution is right for you. Our specialist will examine your teeth and show you your digital smile preview.',

  relatedServices: [
    {
      image: '/images/aligners-wearing.jpg',
      href: '/services/aligners',
      title: 'Clear Aligners',
      desc: 'Virtually invisible removable trays — straighten teeth without metal braces.',
    },
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Brighten your smile up to 8 shades after completing orthodontic treatment.',
    },
    {
      image: '/services/Pediatric-Dentistry.jpg',
      href: '/services/pediatric-dentistry',
      title: 'Pediatric Dentistry',
      desc: 'Early orthodontic screening and gentle dental care for children.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Combine braces with whitening and veneers for a complete transformation.',
    },
  ],
};

export default function OrthodonticsContent() {
  return <ServicePageLayout data={serviceData} />;
}
