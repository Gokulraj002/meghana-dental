import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#10b981',
  contentImage: '/services/Dentures-Prosthetics.jpg',

  gallery: [
    { src: '/images/bps-dentures.jpg', caption: 'BPS precision dentures — gold standard' },
    { src: '/images/denture-types.jpg', caption: 'Types of dentures available' },
    { src: '/image/flexible-partial-dentures-types.jpg', caption: 'Flexible partial denture options', contain: true },
    { src: '/images/implant-denture.jpg', caption: 'Implant-retained overdenture' },
    { src: '/image/Implant Retained Denture.jpg', caption: 'Implant denture illustration', contain: true },
    { src: '/images/about-clinic.png', caption: 'Our prosthetics clinic' },
  ],

  overview:
    'Missing teeth affect far more than your smile — they impair chewing, compromise speech, cause neighbouring teeth to shift, and accelerate jawbone resorption, leading to a sunken facial appearance over time. Dentures are removable prosthetic appliances that replace missing teeth and restore your mouth to full function and natural aesthetics. At Meghana Dental Hospital, Tirupati, our MDS-qualified prosthodontist offers the complete spectrum of denture solutions — from economical conventional acrylic dentures to precision-engineered BPS (Bio-Functional Prosthetic System) dentures, flexible partial dentures, and implant-supported overdentures — each crafted to fit your anatomy, restore your confidence, and stand up to daily use.',

  highlights: [
    { icon: 'bi-patch-check-fill', text: 'BPS Precision Dentures Available' },
    { icon: 'bi-emoji-smile-fill', text: 'Natural Look & Comfort' },
    { icon: 'bi-award-fill', text: 'MDS Prosthodontist Specialist' },
  ],

  conditions: [
    { icon: 'bi-grid-3x3-gap', label: 'All teeth missing (complete edentulism)' },
    { icon: 'bi-grid-1x2-fill', label: 'Several missing teeth (partial edentulism)' },
    { icon: 'bi-wrench-adjustable', label: 'Ill-fitting or broken existing dentures' },
    { icon: 'bi-x-circle-fill', label: 'Teeth lost due to advanced gum disease' },
    { icon: 'bi-bandaid-fill', label: 'Teeth lost due to trauma or decay' },
    { icon: 'bi-emoji-frown-fill', label: 'Facial sagging from long-term tooth loss' },
  ],

  benefits: [
    {
      icon: 'bi-cup-hot-fill',
      title: 'Restored Chewing Ability',
      desc: 'Modern dentures restore up to 80% of natural chewing efficiency, letting you enjoy a varied, nutritious diet without difficulty.',
    },
    {
      icon: 'bi-chat-fill',
      title: 'Clearer Speech',
      desc: 'Missing teeth cause slurring and lisping. Well-fitted dentures restore proper tooth positioning for clearer, more confident speech.',
    },
    {
      icon: 'bi-person-fill',
      title: 'Restored Facial Contours',
      desc: 'Dentures support your lips and cheeks, reversing the sunken, aged look that develops when teeth and bone are lost.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Prevents Further Bone Loss',
      desc: 'Replacing missing teeth helps distribute chewing forces that stimulate the jaw, slowing the bone resorption associated with tooth loss.',
    },
    {
      icon: 'bi-stars',
      title: 'Natural Aesthetics',
      desc: 'Our denture teeth and gum-coloured bases are individually selected to match your natural appearance — creating an indistinguishable, beautiful smile.',
    },
    {
      icon: 'bi-currency-rupee',
      title: 'Cost-Effective Solution',
      desc: 'Dentures provide an effective tooth replacement solution across all budgets — from conventional acrylic dentures to premium BPS and implant-supported options.',
    },
  ],

  process: [
    {
      title: 'Initial Consultation & Oral Assessment',
      desc: 'Our prosthodontist examines your gums, remaining teeth, and jawbone. X-rays assess bone levels. We discuss your goals, budget, and lifestyle to recommend the most suitable denture type.',
    },
    {
      title: 'Impressions & Bite Registration',
      desc: 'Precise impressions of your gum ridges and jaw are taken, along with a bite registration to record how your upper and lower jaws relate. For BPS dentures, additional facial measurements are recorded to recreate natural aesthetics.',
    },
    {
      title: 'Wax Try-In',
      desc: 'Before the final denture is made, a wax mock-up allows you to evaluate the appearance, fit, and bite. Adjustments to tooth position, shade, and size are made at this stage while changes are still easy.',
    },
    {
      title: 'Denture Fabrication',
      desc: 'Your approved wax try-in design is processed into the final denture using high-quality acrylic, flexible resin (for flexible partials), or precision BPS materials. The denture is carefully finished and polished.',
    },
    {
      title: 'Fitting & Aftercare',
      desc: 'The completed denture is fitted and minor adjustments are made to ensure comfort and proper bite. You receive detailed instructions on cleaning, storage, and follow-up care. Regular review appointments fine-tune the fit over time.',
    },
  ],

  faqs: [
    {
      q: 'What types of dentures are available at Meghana Dental Hospital, Tirupati?',
      a: 'We offer: conventional full acrylic dentures, BPS (Bio-Functional Prosthetic System) precision dentures, flexible partial dentures (Valplast-type), cast metal partial dentures, immediate dentures (placed same day as extractions), and implant-retained overdentures. Our prosthodontist will recommend the best type for your situation.',
    },
    {
      q: 'What is a BPS denture and why is it better?',
      a: 'BPS (Bio-Functional Prosthetic System) dentures are the gold standard in complete dentures. They use a sophisticated bite registration system, advanced materials, and a biometric design philosophy to recreate not just teeth but your natural facial aesthetics and muscle function. They offer superior retention, comfort, and lifespan compared to conventional dentures — without needing adhesives.',
    },
    {
      q: 'How long does it take to adapt to new dentures?',
      a: 'Most patients adapt to new dentures within 4–8 weeks. Initially, speech and chewing may feel slightly different. Minor sore spots are common and resolved at follow-up appointments with small adjustments.',
    },
    {
      q: 'How long do dentures last?',
      a: 'Well-made dentures typically last 5–8 years before needing replacement, as gum and bone changes alter the fit over time. BPS and implant-supported dentures can last longer with proper care. Regular 6-monthly check-ups at Meghana Dental Hospital allow early detection of fit issues before they cause problems.',
    },
    {
      q: 'How much do dentures cost in Tirupati?',
      a: 'Denture costs at Meghana Dental Hospital, Tirupati: conventional acrylic dentures from ₹8,000, flexible partial dentures from ₹12,000, and BPS precision complete dentures from ₹25,000. Implant-retained dentures are priced based on the number of implants required.',
    },
  ],

  stats: [
    { icon: 'bi-calendar', label: 'Treatment Visits', value: '4–5 visits' },
    { icon: 'bi-clock-history', label: 'Lifespan', value: '5–8+ years' },
    { icon: 'bi-person-check-fill', label: 'Specialist', value: 'Prosthodontist' },
    { icon: 'bi-list-ul', label: 'Types Available', value: '5 types' },
  ],

  ctaTitle: 'Restore Your Complete Smile',
  ctaDesc: 'Consult our MDS prosthodontist for a personalised denture recommendation. Premium solutions for every budget and lifestyle.',

  relatedServices: [
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Permanent tooth replacement — the most stable foundation for implant-retained dentures.',
    },
    {
      image: '/images/dental-team.jpg',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'Comprehensive multi-phase programme for complete oral reconstruction.',
    },
    {
      image: '/images/microscope-treatment.jpg',
      href: '/services/tooth-extraction',
      title: 'Tooth Extraction',
      desc: 'Safe extractions before denture fabrication, with immediate denture options available.',
    },
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Fixed alternatives to partial dentures for selected missing-tooth cases.',
    },
  ],
};

export default function DenturesContent() {
  return <ServicePageLayout data={serviceData} />;
}
