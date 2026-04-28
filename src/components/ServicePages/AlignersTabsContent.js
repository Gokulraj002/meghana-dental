import ServiceTabsWrapper from './ServiceTabsWrapper';

const clearAlignersData = {
  accent: '#0EA5A0',
  contentImage: '/services/aligners-img2.jpg',

  gallery: [
    { src: '/images/aligners-trays.jpg', caption: 'Custom-fabricated BPA-free clear aligner trays — virtually invisible when worn' },
    { src: '/images/aligners-wearing.jpg', caption: 'Removable aligner being placed over the upper teeth — worn 20–22 hours per day' },
    { src: '/images/ortho-before-after-1.jpg', caption: 'Before & after: severely crowded teeth aligned to a straight, even smile', contain: true },
    { src: '/images/ortho-before-after-2.png', caption: 'Before & after (side profile): bite and alignment corrected', contain: true },
  ],

  overview:
    'Clear aligners are custom-fitted, transparent plastic trays that gradually shift teeth into their correct positions — completely invisibly, without any metal brackets or wires. Each set of trays is worn for 20–22 hours a day and changed every 1–2 weeks, moving teeth incrementally along a pre-planned digital treatment path. At Meghana Dental Hospital, Tirupati, we use a precision 3D intra-oral scanner to capture your exact tooth positions in minutes — no messy impressions. A complete digital simulation shows you your projected final smile before treatment begins. Aligners are ideal for adults and teenagers seeking a discreet, comfortable, and removable alternative to traditional braces for mild to moderate crowding, spacing, and bite issues.',

  highlights: [
    { icon: 'bi-eye-slash-fill', text: 'Virtually Invisible When Worn' },
    { icon: 'bi-phone-fill', text: '3D Intra-Oral Scan — No Impressions' },
    { icon: 'bi-bag-check-fill', text: 'Removable — No Food Restrictions' },
  ],

  conditions: [
    { icon: 'bi-arrows-angle-expand', label: 'Mild to moderate crowding' },
    { icon: 'bi-arrows-expand', label: 'Gaps and spacing between teeth' },
    { icon: 'bi-arrow-down-up', label: 'Overbite correction' },
    { icon: 'bi-arrow-up-down', label: 'Underbite (mild)' },
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
      desc: 'You progress through pre-planned aligner sets at home, reducing the number of adjustment visits compared to traditional braces.',
    },
    {
      icon: 'bi-emoji-smile-fill',
      title: 'Comfortable to Wear',
      desc: 'Smooth BPA-free plastic with no metal brackets or wires means no cuts, no wire poking, and no bracket irritation.',
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
      desc: 'Our orthodontist takes a precise 3D digital scan of your teeth using our intra-oral scanner — no messy dental impressions. Clinical photos and X-rays complete the assessment.',
    },
    {
      title: 'Digital Treatment Simulation',
      desc: 'Using advanced aligner planning software, we create a virtual tooth-movement sequence showing every stage from your current position to your final smile. You approve the plan before any trays are made.',
    },
    {
      title: 'Custom Aligner Fabrication',
      desc: 'Your complete set of precision-cut, BPA-free aligner trays is manufactured based on your digital treatment plan. Depending on case complexity, you may receive 14–26 sets of aligners.',
    },
    {
      title: 'Wearing Your Aligners',
      desc: 'Wear each set for 20–22 hours per day. Remove only for eating, drinking, brushing, and flossing. Move to the next set every 1–2 weeks as planned.',
    },
    {
      title: 'Refinements & Retention',
      desc: 'If minor refinements are needed at the end of treatment, additional trays are fabricated. Once complete, custom retainers maintain your new smile long-term.',
    },
  ],

  faqs: [
    {
      q: 'What is the cost of clear aligners in Tirupati?',
      a: 'Clear aligner treatment at Meghana Dental Hospital starts from ₹35,000 for mild cases. The total cost depends on the number of aligners and case complexity. EMI options are available. Book a free 3D scan consultation for an accurate quote.',
    },
    {
      q: 'Are clear aligners as effective as braces?',
      a: 'For mild to moderate cases — crowding, spacing, and minor bite issues — clear aligners deliver results comparable to braces. For complex cases, traditional braces or Invisalign may be recommended. Our orthodontist will guide you after clinical evaluation.',
    },
    {
      q: 'How long does clear aligner treatment take?',
      a: 'Treatment at Meghana Dental Hospital typically ranges from 6 to 18 months, depending on severity. Mild cases can complete in as few as 6 months.',
    },
    {
      q: 'How many hours a day do I need to wear aligners?',
      a: 'Aligners must be worn for 20–22 hours per day to achieve planned tooth movement on schedule. Remove only for eating, drinking (except water), and oral hygiene.',
    },
    {
      q: 'Can aligners fix my teeth at any age?',
      a: 'Aligners are suitable for teenagers and adults with no upper age limit. The key requirement is predominantly permanent teeth and healthy gums. Our orthodontist will evaluate suitability during a free consultation.',
    },
  ],

  stats: [
    { icon: 'bi-layers-fill', label: 'Aligner Sets', value: '14–26 trays' },
    { icon: 'bi-clock-fill', label: 'Daily Wear', value: '20–22 hrs/day' },
    { icon: 'bi-arrow-repeat', label: 'Change Every', value: '1–2 weeks' },
    { icon: 'bi-calendar-range', label: 'Total Duration', value: '6–18 months' },
  ],

  ctaTitle: 'Get Your Free 3D Scan',
  ctaDesc: 'Find out if aligners are right for you. We scan your teeth, plan your treatment digitally, and show you your projected final smile — at no cost.',

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

const invisalignData = {
  accent: '#0f766e',
  contentImage: '/services/invisalign.jpeg',

  gallery: [
    { src: '/images/aligners-trays.jpg', caption: 'Invisalign precision trays — fabricated by Align Technology using SmartTrack material, engineered for consistent, predictable tooth movement' },
    { src: '/services/aligners-img1.jpg', caption: 'Invisalign aligner worn in the mouth — virtually invisible, smooth, and comfortable with no metal components' },
    { src: '/images/ortho-before-after-1.jpg', caption: 'Before & after Invisalign treatment: crowded, misaligned teeth transformed into a straight, confident smile', contain: true },
    { src: '/images/ortho-before-after-2.png', caption: 'Before & after: bite correction achieved with Invisalign — side profile showing improved jaw alignment', contain: true },
  ],

  overview:
    'Meghana Dental Hospital, Tirupati is one of the best certified providers of Invisalign — the world\'s most advanced and clinically proven clear aligner system, used by over 14 million patients worldwide. What sets Invisalign apart from generic clear aligners is its ability to correct functional jaw movements, not just tooth alignment. Using precise 3D ClinCheck® imaging, your entire treatment is planned digitally and every tray is precision-manufactured by Align Technology in SmartTrack® material — engineered to apply the right force to the right teeth at the right time. Invisalign often delivers results faster and more comfortably than other methods, and the trays are fully removable for eating and brushing. Wear them 20–22 hours a day and change sets as planned. Our specialists combine Invisalign\'s digital planning technology with advanced diagnostics and personalised clinical expertise to deliver a smile transformation unique to you.',

  highlights: [
    { icon: 'bi-award-fill', text: 'Certified Invisalign Provider — Tirupati' },
    { icon: 'bi-gear-fill', text: 'Corrects Functional Jaw Movements' },
    { icon: 'bi-phone-fill', text: 'ClinCheck® 3D Digital Treatment Planning' },
  ],

  conditions: [
    { icon: 'bi-arrows-angle-expand', label: 'Moderate to severe crowding' },
    { icon: 'bi-arrows-expand', label: 'Gaps and spacing between teeth' },
    { icon: 'bi-arrow-down-up', label: 'Overbite — upper teeth overlap lower teeth' },
    { icon: 'bi-arrow-up-down', label: 'Underbite — lower teeth protrude forward' },
    { icon: 'bi-arrow-left-right', label: 'Crossbite — upper and lower jaw misalignment' },
    { icon: 'bi-arrows-fullscreen', label: 'Open bite — teeth don\'t meet when mouth closes' },
    { icon: 'bi-gear-fill', label: 'Functional jaw movement correction' },
    { icon: 'bi-dot', label: 'Relapse or regression after previous orthodontics' },
  ],

  benefits: [
    {
      icon: 'bi-gear-fill',
      title: 'Corrects Functional Jaw Movements',
      desc: 'Unlike generic aligners, Invisalign is uniquely engineered to address functional jaw discrepancies — not just straightening teeth but correcting how the upper and lower jaws relate to each other.',
    },
    {
      icon: 'bi-award-fill',
      title: 'World\'s Most Trusted Aligner System',
      desc: 'Invisalign has treated over 14 million patients globally with decades of clinical research behind every tray design. No other aligner system has comparable long-term outcome data.',
    },
    {
      icon: 'bi-phone-fill',
      title: 'ClinCheck® 3D Digital Simulation',
      desc: 'Before a single tray is made, you see a full 3D simulation of your tooth movement from start to finish — reviewed and refined together with your doctor until the plan is perfect.',
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Often Faster Than Other Methods',
      desc: 'Invisalign\'s SmartTrack® material and SmartForce® attachments enable more predictable, efficient tooth movement — meaning shorter treatment duration for equivalent results.',
    },
    {
      icon: 'bi-eye-slash-fill',
      title: 'Virtually Invisible & Removable',
      desc: 'Invisalign trays are completely clear and smooth — no one will know you are in treatment. Remove them for meals, brushing, and special occasions.',
    },
    {
      icon: 'bi-person-check-fill',
      title: 'Personalised Expert Care',
      desc: 'At Meghana Dental Hospital, our Invisalign-certified specialists combine advanced diagnostics and personalised treatment planning to achieve results that generic aligners cannot match.',
    },
  ],

  process: [
    {
      title: 'Invisalign Consultation & Clinical Assessment',
      desc: 'Our certified Invisalign provider assesses your teeth, bite, jaw function, and facial profile. Clinical photographs, dental X-rays (OPG), and a full orthodontic evaluation determine your suitability and the likely complexity and duration of treatment.',
    },
    {
      title: 'iTero 3D Intra-Oral Scan',
      desc: 'We take a precise 3D digital scan of your upper and lower teeth using our intra-oral scanner — a fast, comfortable, impression-free process that captures every detail of your dentition in minutes.',
    },
    {
      title: 'ClinCheck® Treatment Simulation',
      desc: 'The scan is used to create a personalised ClinCheck® plan — a 3D digital animation showing every stage of your tooth movement from the current position to the final smile. You review and approve the plan with your doctor before any trays are ordered.',
    },
    {
      title: 'Custom Invisalign Tray Fabrication',
      desc: 'Your approved ClinCheck plan is sent directly to Align Technology, which manufactures your complete set of Invisalign trays in SmartTrack® material — the exclusive elastomer engineered for consistent, gentle force and comfortable fit. Each tray is a precise step toward your final smile.',
    },
    {
      title: 'Wearing Your Invisalign Trays',
      desc: 'Wear each set of trays for 20–22 hours per day. Remove only for eating, drinking (except water), and oral hygiene. Change to the next set every 1–2 weeks. Attachments (small tooth-coloured bumps) may be placed on certain teeth to enable more complex movements.',
    },
    {
      title: 'Progress Reviews & Refinements',
      desc: 'Regular progress appointments (every 6–8 weeks) monitor your tooth movement against the ClinCheck plan. If minor refinements are needed at the end of treatment, additional Invisalign trays are ordered at no extra cost for Invisalign Comprehensive cases.',
    },
    {
      title: 'Vivera Retainers & Long-Term Retention',
      desc: 'On completing Invisalign treatment, Vivera® retainers — custom-made by Align Technology, 30% stronger than generic retainers — are fitted to maintain your new smile. Consistent retainer wear is the final and permanent step of any orthodontic treatment.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between Invisalign and generic clear aligners?',
      a: 'Invisalign is manufactured by Align Technology with decades of R&D, proprietary SmartTrack® material, and ClinCheck® planning software. It is the only aligner system clinically proven to correct functional jaw movements, not just tooth alignment. Generic aligners use similar-looking trays but lack the precision engineering, attachment systems, and clinical data backing that Invisalign provides. For straightforward mild cases, generic aligners may suffice; for moderate to complex cases, Invisalign consistently delivers superior outcomes.',
    },
    {
      q: 'Is Meghana Dental Hospital an official Invisalign provider?',
      a: 'Yes. Meghana Dental Hospital is one of the best certified Invisalign providers in Tirupati. Our specialists are trained and certified by Align Technology and have completed a substantial number of Invisalign cases with documented outcomes.',
    },
    {
      q: 'How much does Invisalign cost in Tirupati?',
      a: 'Invisalign treatment at Meghana Dental Hospital is priced according to the product type — Invisalign Lite (mild cases), Invisalign Moderate, or Invisalign Comprehensive (complex cases including jaw corrections). Exact pricing is provided after your ClinCheck planning session. EMI options are available.',
    },
    {
      q: 'How is Invisalign different from regular braces?',
      a: 'Invisalign trays are clear, smooth, and removable — no metal brackets or wires. There are no food restrictions, oral hygiene is maintained normally, and there are fewer clinic visits. For complex jaw discrepancies, Invisalign\'s functional correction capability means it can achieve outcomes that braces cannot without surgical intervention in some cases.',
    },
    {
      q: 'How long does Invisalign take?',
      a: 'Invisalign Lite cases can complete in 3–6 months. Moderate cases take 9–12 months. Comprehensive cases — including those with jaw movement correction — can take 12–18 months. The ClinCheck simulation will show you the exact planned timeline before treatment begins.',
    },
    {
      q: 'What are Invisalign attachments?',
      a: 'Attachments are small, tooth-coloured composite bumps bonded to certain teeth. They give the aligner trays something to grip, enabling more complex movements — rotations, root tipping, and extrusions — that smooth trays alone cannot achieve. They are virtually invisible in daily life and are removed at the end of treatment.',
    },
  ],

  stats: [
    { icon: 'bi-award-fill', label: 'Provider', value: 'Certified' },
    { icon: 'bi-clock-fill', label: 'Daily Wear', value: '20–22 hrs/day' },
    { icon: 'bi-arrow-repeat', label: 'Change Every', value: '1–2 weeks' },
    { icon: 'bi-calendar-range', label: 'Duration', value: '3–18 months' },
  ],

  ctaTitle: 'Book Your Free Invisalign ClinCheck Consultation',
  ctaDesc: 'Find out if Invisalign is right for your case. We\'ll scan your teeth and show you your projected final smile using ClinCheck® 3D simulation — at no cost.',

  relatedServices: [
    {
      image: '/services/aligners-img2.jpg',
      href: '/services/aligners',
      title: 'Clear Aligners',
      desc: 'Budget-friendly generic clear aligner option for mild to moderate cases.',
    },
    {
      image: '/images/ortho-metal-braces.jpg',
      href: '/services/orthodontics',
      title: 'Orthodontic Braces',
      desc: 'Metal, ceramic, and self-ligating braces — best for complex cases.',
    },
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Complete your Invisalign transformation with professional whitening.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Combine Invisalign with whitening and veneers for a complete smile redesign.',
    },
  ],
};

const tabs = [
  {
    id: 'clear-aligners',
    label: 'Clear Aligners',
    icon: 'bi-layers-fill',
    data: clearAlignersData,
  },
  {
    id: 'invisalign',
    label: 'Invisalign',
    icon: 'bi-award-fill',
    badge: 'Official Provider',
    data: invisalignData,
  },
];

export default function AlignersTabsContent() {
  return <ServiceTabsWrapper tabs={tabs} />;
}
