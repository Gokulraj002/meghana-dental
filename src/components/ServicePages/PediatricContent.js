import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#ec4899',
  contentImage: '/services/Pediatric-Dentistry.jpg',

  gallery: [
    { src: '/images/children-dentist.jpg', caption: 'Gentle care for young patients' },
    { src: '/images/dental-care-children.jpg', caption: 'Children\'s dental health education' },
    { src: '/images/children-happy.png', caption: 'Happy, anxiety-free dental visits' },
    { src: '/image/Childrens-Dentist-in-San-Jose.jpg', caption: 'Child-friendly dental environment' },
    { src: '/images/fluoride-kids.png', caption: 'Fluoride treatment for children' },
    { src: '/images/about-clinic.png', caption: 'Our welcoming clinic interior' },
  ],

  overview:
    'A child\'s dental health journey begins long before permanent teeth appear. Baby (primary) teeth guide the eruption of permanent teeth, maintain space in the jaw, support speech development, and enable proper chewing for nutrition — they matter enormously. The habits and experiences formed during early childhood dental visits shape a child\'s attitude toward oral health for life. At Meghana Dental Hospital, Tirupati, our MDS-qualified pedodontist (children\'s dental specialist) has created a warm, colourful, child-friendly environment where little patients feel safe, heard, and even excited about their check-ups. From the first tooth to teenage years, we provide comprehensive, gentle, fear-free dental care that sets the foundation for a lifetime of healthy smiles.',

  highlights: [
    { icon: 'bi-heart-fill', text: 'Gentle & Fear-Free Care' },
    { icon: 'bi-person-badge-fill', text: 'MDS Pedodontist Specialist' },
    { icon: 'bi-house-heart-fill', text: 'Child-Friendly Environment' },
  ],

  conditions: [
    { icon: 'bi-droplet-fill', label: 'Early childhood tooth decay (milk teeth cavities)' },
    { icon: 'bi-hourglass-split', label: 'Early or delayed loss of baby teeth' },
    { icon: 'bi-arrows-angle-expand', label: 'Thumb sucking & finger habits' },
    { icon: 'bi-wind', label: 'Mouth breathing causing dental changes' },
    { icon: 'bi-shield-slash-fill', label: 'Teeth at high risk of cavities (deep fissures)' },
    { icon: 'bi-bandaid-fill', label: 'Dental trauma from falls or sports injuries' },
  ],

  benefits: [
    {
      icon: 'bi-shield-fill-check',
      title: 'Prevention Over Treatment',
      desc: 'Fluoride varnishes, fissure sealants, and dietary guidance prevent cavities before they develop — saving your child from pain and procedures.',
    },
    {
      icon: 'bi-arrows-expand',
      title: 'Space Maintenance',
      desc: 'When baby teeth are lost too early, space maintainers preserve the gap for permanent teeth, preventing costly orthodontic problems later.',
    },
    {
      icon: 'bi-emoji-smile-fill',
      title: 'Anxiety-Free Experience',
      desc: 'Our Tell-Show-Do technique, gentle touch, and rewarding system transform anxious children into willing, cooperative dental patients.',
    },
    {
      icon: 'bi-lightbulb-fill',
      title: 'Early Orthodontic Screening',
      desc: 'By age 7, our orthodontic assessment identifies developing bite problems that are far easier and cheaper to treat early than to correct in adulthood.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Parent Education',
      desc: 'We coach parents on correct brushing techniques, fluoride toothpaste use, dietary habits, and how to make home dental care fun for children.',
    },
    {
      icon: 'bi-calendar-check-fill',
      title: 'Regular Monitoring',
      desc: 'Six-monthly check-ups track tooth eruption, growth patterns, and cavity risk, catching issues early when treatment is minimal and results are best.',
    },
  ],

  process: [
    {
      title: 'The First Dental Visit (Age 1 or First Tooth)',
      desc: 'The first visit is all about familiarisation — no procedures, no stress. Our pedodontist examines the gum and any erupted teeth, speaks with parents about brushing, diet, and fluoride, and helps your child feel comfortable in the dental chair.',
    },
    {
      title: 'Regular Check-ups & Cleaning',
      desc: 'Every 6 months we examine your child\'s teeth, check for early cavities, remove any plaque or tartar build-up, and monitor the eruption pattern of permanent teeth. Oral hygiene instruction is reinforced at every visit.',
    },
    {
      title: 'Fluoride Varnish Application',
      desc: 'Fluoride varnish is painted onto teeth in a quick, painless procedure. It strengthens enamel and significantly reduces the risk of cavities. We recommend application 2–4 times per year for children at moderate to high cavity risk.',
    },
    {
      title: 'Fissure Sealants',
      desc: 'The chewing surfaces of back molars have deep grooves where bacteria accumulate easily. We apply a thin protective coating (sealant) that physically blocks decay for years — one of the most cost-effective preventive treatments available.',
    },
    {
      title: 'Treatment for Cavities & Dental Injuries',
      desc: 'If treatment is needed, we use the gentlest possible techniques, child-sized instruments, and flavoured local anaesthetic gels to ensure a comfortable experience. Dental injuries from falls are assessed and managed promptly to protect developing permanent teeth.',
    },
  ],

  faqs: [
    {
      q: 'At what age should my child first visit the dentist?',
      a: 'The Indian Society of Pedodontics and Preventive Dentistry recommends a child\'s first dental visit within 6 months of the first tooth erupting or by age 1, whichever comes first. Early visits at Meghana Dental Hospital, Tirupati establish comfort with dental care, allow early cavity detection, and give parents expert guidance on home care.',
    },
    {
      q: 'Why should I treat baby teeth if they will fall out anyway?',
      a: 'Baby teeth are critical — they hold space for permanent teeth, guide their eruption path, support speech development, and are essential for chewing and nutrition. Untreated cavities in baby teeth cause pain, infection, and premature loss, leading to crowded or misaligned permanent teeth.',
    },
    {
      q: 'My child is terrified of dentists — what can you do?',
      a: 'Dental anxiety in children is very common and completely manageable with the right approach. Our pedodontist is trained in behaviour management techniques including Tell-Show-Do, positive reinforcement, and distraction therapy. We never rush or force a child. Most anxious children become co-operative patients within 2–3 visits.',
    },
    {
      q: 'When should fissure sealants be applied?',
      a: 'Sealants are most beneficial when applied soon after the permanent molars erupt: first molars around age 6, and second molars around age 12. The procedure is quick and painless — no drilling involved. Sealants can reduce molar cavities by up to 80% and are highly recommended for all children.',
    },
    {
      q: 'Is fluoride toothpaste safe for young children?',
      a: 'Yes, with appropriate dosing. Children under 2 should use a rice grain-sized smear; children 2–6 years use a pea-sized amount; older children use a standard amount. Fluoride toothpaste at the correct dose is safe and highly effective at preventing tooth decay.',
    },
  ],

  stats: [
    { icon: 'bi-calendar-heart', label: 'First Visit Age', value: 'By age 1' },
    { icon: 'bi-arrow-repeat', label: 'Check-up Frequency', value: 'Every 6 months' },
    { icon: 'bi-shield-fill-check', label: 'Fluoride Varnish', value: '2–4 times/year' },
    { icon: 'bi-clock-fill', label: 'Sealant Age', value: 'Age 6 & 12' },
  ],

  ctaTitle: 'Book Your Child\'s First Visit',
  ctaDesc: 'Give your child the gift of healthy teeth from the very start. Book a gentle, fun-filled appointment at Meghana Dental Hospital, Tirupati.',

  relatedServices: [
    {
      image: '/images/ortho-metal-braces.jpg',
      href: '/services/orthodontics',
      title: 'Orthodontic Braces',
      desc: 'Early orthodontic treatment for children to guide proper jaw and teeth development.',
    },
    {
      image: '/images/aligners-wearing.jpg',
      href: '/services/aligners',
      title: 'Clear Aligners',
      desc: 'Discreet teeth straightening for teenagers who prefer an alternative to metal braces.',
    },
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'Saving infected milk and permanent teeth in children with gentle, microscope-guided RCT.',
    },
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Professional whitening for teenagers (16+) after orthodontic treatment is complete.',
    },
  ],
};

export default function PediatricContent() {
  return <ServicePageLayout data={serviceData} />;
}
