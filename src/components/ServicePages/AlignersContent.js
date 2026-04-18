import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0891b2',
  contentImage: '/images/aligners-wearing.jpg',

  gallery: [
    { src: '/images/aligners-trays.jpg', caption: 'Custom-fabricated aligner trays' },
    { src: '/images/ortho-before-after-1.jpg', caption: 'Before & after aligner treatment' },
    { src: '/images/ortho-before-after-2.png', caption: 'Complete smile transformation results' },
    { src: '/images/ortho-spaced-tooth.jpg', caption: 'Spacing between teeth — correctable with aligners' },
    { src: '/images/ortho-self-ligating-braces.jpg', caption: 'Alternative: self-ligating braces for complex cases' },
  ],

  overview:
    'Clear aligners are a series of custom-fabricated, virtually invisible plastic trays that gradually move your teeth into the desired alignment — without a single metal bracket or wire. Each set of trays is worn for approximately 1–2 weeks before progressing to the next. At Meghana Dental Hospital, Tirupati, our aligners are designed using a 3D intra-oral scanner, which captures a precise digital model of your teeth. This digital data drives a step-by-step treatment simulation, so you can see your projected final smile before treatment even begins. Aligners are fully removable, meaning no food restrictions, no hygiene compromises, and complete discretion throughout treatment.',

  highlights: [
    { icon: 'bi-eye-slash-fill', text: 'Virtually Invisible' },
    { icon: 'bi-phone-fill', text: '3D Intra-oral Scanner' },
    { icon: 'bi-bag-check-fill', text: 'No Food Restrictions' },
  ],

  conditions: [
    { icon: 'bi-arrows-angle-expand', label: 'Mild to moderate crowding' },
    { icon: 'bi-arrows-expand', label: 'Gaps and spacing between teeth' },
    { icon: 'bi-arrow-down-up', label: 'Mild overbite correction' },
    { icon: 'bi-arrow-up-down', label: 'Mild underbite correction' },
    { icon: 'bi-arrow-left-right', label: 'Crossbite (minor to moderate)' },
    { icon: 'bi-dot', label: 'Relapse after previous braces treatment' },
  ],

  benefits: [
    {
      icon: 'bi-eye-slash-fill',
      title: 'Virtually Invisible',
      desc: 'Clear, smooth aligners are nearly undetectable when worn — most people around you will never know you are straightening your teeth.',
    },
    {
      icon: 'bi-bag-check-fill',
      title: 'No Food Restrictions',
      desc: 'Simply remove your aligners before eating or drinking anything other than water. Enjoy all your favourite foods without restrictions.',
    },
    {
      icon: 'bi-droplet-fill',
      title: 'Superior Oral Hygiene',
      desc: 'Unlike fixed braces, aligners are fully removable — brush and floss normally, keeping your teeth and gums healthy throughout treatment.',
    },
    {
      icon: 'bi-calendar-check-fill',
      title: 'Fewer Clinic Visits',
      desc: 'You progress through pre-planned aligner sets at home on a set schedule, reducing the number of adjustment visits compared to traditional braces.',
    },
    {
      icon: 'bi-emoji-smile-fill',
      title: 'Comfortable to Wear',
      desc: 'Smooth BPA-free plastic with no metal brackets or wires means no cuts, no wire poking, and no bracket irritation to your cheeks and lips.',
    },
    {
      icon: 'bi-phone-fill',
      title: '3D-Scanned Precision',
      desc: 'Our 3D intra-oral scanner creates a complete digital model in minutes, allowing perfectly patient-specific aligner sets for accurate, predictable tooth movement.',
    },
  ],

  process: [
    {
      title: 'Consultation & 3D Intra-oral Scan',
      desc: 'Our orthodontist takes a precise 3D digital scan of your teeth using our intra-oral scanner — no messy dental impressions required. Clinical photos and X-rays complete the assessment.',
    },
    {
      title: 'Digital Treatment Simulation',
      desc: 'Using advanced aligner planning software, we create a virtual tooth-movement sequence showing every stage from your current position to your final smile. You approve the plan before any trays are made.',
    },
    {
      title: 'Custom Aligner Fabrication',
      desc: 'Your complete set of precision-cut, BPA-free aligner trays is manufactured based on your digital treatment plan. Depending on your case complexity, you may receive 14–26 sets of aligners.',
    },
    {
      title: 'Wearing Your Aligners',
      desc: 'Wear each set of aligners for 20–22 hours per day. Remove only for eating, drinking, brushing, and flossing. Move to the next set every 1–2 weeks as planned.',
    },
    {
      title: 'Refinements & Retention',
      desc: 'If minor refinements are needed at the end of treatment, additional trays are fabricated. Once complete, custom retainers maintain your new smile long-term.',
    },
  ],

  faqs: [
    {
      q: 'What is the cost of clear aligners in Tirupati?',
      a: 'Clear aligner treatment at Meghana Dental Hospital, Tirupati starts from ₹35,000 for mild cases. The total cost depends on the number of aligners required and the complexity of tooth movement. EMI options are available. Book a free 3D scan consultation for an accurate, personalised quote.',
    },
    {
      q: 'Are clear aligners as effective as braces?',
      a: 'For mild to moderate cases — crowding, spacing, and minor bite issues — clear aligners deliver results comparable to braces. For complex cases involving significant jaw discrepancies or severe misalignment, traditional braces may be recommended. Our orthodontist will guide you to the right treatment after your clinical evaluation.',
    },
    {
      q: 'How long does clear aligner treatment take?',
      a: 'Treatment duration at Meghana Dental Hospital typically ranges from 6 to 18 months, depending on severity. Mild cases can complete in as few as 6 months. Visible improvements are often noticeable within the first few months as your teeth begin shifting.',
    },
    {
      q: 'How many hours a day do I need to wear aligners?',
      a: 'Aligners must be worn for 20–22 hours per day to achieve the planned tooth movement on schedule. They should only be removed for eating, drinking (anything other than water), and oral hygiene. Consistent wear is the single biggest factor in on-time treatment completion.',
    },
    {
      q: 'Can aligners fix my teeth at my age?',
      a: 'Aligners are suitable for teenagers and adults. There is no upper age limit. The key requirement is that you have predominantly permanent teeth and healthy gums. Our orthodontist will evaluate your suitability during a free consultation at Meghana Dental Hospital, Tirupati.',
    },
  ],

  stats: [
    { icon: 'bi-layers-fill', label: 'Aligner Sets', value: '14–26 trays' },
    { icon: 'bi-clock-fill', label: 'Daily Wear', value: '20–22 hrs/day' },
    { icon: 'bi-arrow-repeat', label: 'Change Every', value: '1–2 weeks' },
    { icon: 'bi-calendar-range', label: 'Total Duration', value: '6–18 months' },
  ],

  ctaTitle: 'Get Your Free 3D Scan',
  ctaDesc: 'Find out if aligners are right for you. We will scan your teeth, plan your treatment digitally, and show you your projected final smile — at no cost.',

  relatedServices: [
    {
      image: '/images/ortho-metal-braces.jpg',
      href: '/services/orthodontics',
      title: 'Orthodontic Braces',
      desc: 'Metal, ceramic, and self-ligating braces for all ages and complexity levels.',
    },
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Complete your new smile with professional whitening up to 8 shades brighter.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Combine aligners with whitening and veneers for a complete smile transformation.',
    },
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Permanent tooth replacement — often combined with orthodontic treatment planning.',
    },
  ],
};

export default function AlignersContent() {
  return <ServicePageLayout data={serviceData} />;
}
