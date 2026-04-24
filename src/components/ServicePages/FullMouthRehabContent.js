import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0f766e',
  contentImage: '/services/fmr-before-after-1.jpg',

  gallery: [
    { src: '/services/fmr-before-after-1.jpg', caption: 'Full mouth rehabilitation — before & after (worn teeth restored)' },
    { src: '/services/fmr-before-after-2.jpg', caption: 'Full mouth rehabilitation — before & after (broken teeth to perfect smile)' },
    { src: '/images/microscope.jpg', caption: 'Microscope-guided precision restorations' },
    { src: '/images/dental-clinic-interior.jpg', caption: 'Our specialist rehabilitation suite' },
    { src: '/images/microscope-treatment.jpg', caption: 'Advanced treatment technology' },
    { src: '/images/about-clinic.png', caption: 'All specialists under one roof' },
  ],

  overview:
    'Full mouth rehabilitation — also called full mouth reconstruction — is one of the most comprehensive and life-changing treatments in modern dentistry. It is not a single procedure; it is a carefully designed, multi-phase programme that restores every tooth in both jaws using the combined expertise of multiple dental specialists. At Meghana Dental Hospital, Tirupati, our in-house team of prosthodontists, endodontists, periodontists, oral surgeons, and orthodontists work together under one roof, coordinated through digital treatment planning and guided by a primary specialist who oversees your entire journey. Whether your mouth has been damaged by years of grinding, acid erosion, multiple failed restorations, extensive decay, or tooth loss — full mouth rehabilitation can rebuild your oral health, restore your chewing function, and give you back the confidence of a complete, healthy smile.',

  highlights: [
    { icon: 'bi-people-fill', text: 'Multi-Specialist Team Under One Roof' },
    { icon: 'bi-laptop', text: 'Digital Treatment Planning' },
    { icon: 'bi-award', text: '17+ Years Treating Complex Cases in Tirupati' },
  ],

  conditions: [
    { icon: 'bi-arrows-collapse', label: 'Severely worn teeth from grinding (bruxism) or acid' },
    { icon: 'bi-grid-3x2-gap', label: 'Multiple missing teeth affecting bite and nutrition' },
    { icon: 'bi-virus', label: 'Extensive decay throughout the entire mouth' },
    { icon: 'bi-lightning', label: 'Trauma damaging multiple teeth and jaw structures' },
    { icon: 'bi-arrow-repeat', label: 'Failed or worn-out old crowns, bridges, or dentures' },
    { icon: 'bi-heart', label: 'TMJ disorders affecting bite, jaw pain, and function' },
  ],

  benefits: [
    {
      icon: 'bi-clipboard2-pulse-fill',
      title: 'Comprehensive Diagnosis First',
      desc: 'We use OPG X-ray, CBCT where needed, bite analysis, joint assessment, and digital photography. Treatment plans are built on evidence, not guesswork.',
    },
    {
      icon: 'bi-people-fill',
      title: 'All Specialists On-Site',
      desc: 'You do not travel between multiple clinics. Prosthodontist, endodontist, periodontist, and oral surgeon all operate at Meghana Dental Hospital, Tirupati.',
    },
    {
      icon: 'bi-layers-fill',
      title: 'Phased Treatment — Manageable & Affordable',
      desc: 'Treatment is divided into logical phases. You can spread the work and cost over time without compromising the overall clinical outcome.',
    },
    {
      icon: 'bi-laptop',
      title: 'Digital Smile Design Preview',
      desc: 'Before treatment begins, you see a digital visualisation of your expected final result. Full transparency — approved by you before any preparation.',
    },
    {
      icon: 'bi-calendar-check',
      title: 'Never Without Teeth',
      desc: 'Temporary restorations are always provided at every phase. You will look and function normally throughout treatment — no gaps, ever.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Long-Term Outcome Focus',
      desc: 'We design for 15–20 year outcomes, not quick fixes. Every material, technique, and decision is made with your long-term health in mind.',
    },
  ],

  process: [
    {
      title: 'Phase 0 — Comprehensive Examination & Digital Planning',
      desc: 'A thorough assessment including full-mouth X-rays (OPG), CBCT imaging where indicated, periodontal charting, bite analysis, TMJ assessment, and digital facial and dental photography. All findings are compiled into a master treatment plan that maps every procedure needed, in the correct sequence, with clear timelines and costs.',
    },
    {
      title: 'Phase 1 — Disease Control (Gum Treatment & Extractions)',
      desc: 'Active disease is eliminated first. This means completing gum treatment (scaling, root planing, laser therapy), extracting unsalvageable teeth, and treating any urgent infections. No restorations are placed until the oral environment is stable and healthy.',
    },
    {
      title: 'Phase 2 — Foundation Restorations (Root Canals, Implants, Bone Grafts)',
      desc: 'Teeth with nerve involvement receive microscope-guided root canal treatment. Missing teeth are replaced with dental implants — allowing adequate healing time for osseointegration. Bone grafting is performed where there is insufficient bone for implants.',
    },
    {
      title: 'Phase 3 — Reconstructive Restorations (Crowns, Bridges & Prosthetics)',
      desc: 'All prepared teeth receive their final restorations: zirconia or e.max crowns, fixed bridges, or implant crowns. Bite (occlusion) is carefully balanced across all teeth simultaneously — the most technically demanding phase.',
    },
    {
      title: 'Phase 4 — Maintenance & Long-Term Monitoring',
      desc: 'After rehabilitation is complete, you enter a structured maintenance programme. Regular check-ups every 3–6 months monitor gum health, restoration integrity, and bite stability. Night guards are prescribed for patients with bruxism.',
    },
  ],

  faqs: [
    {
      q: 'How do I know if I need full mouth rehabilitation or just a few crowns?',
      a: 'Full mouth rehabilitation is appropriate when the problems in your mouth are interconnected and cannot be addressed one tooth at a time without considering the whole. Signs you may need FMR include: severely worn teeth throughout the mouth, bite collapse, TMJ pain, multiple missing teeth affecting your ability to chew, or the need to replace restorations in many teeth simultaneously.',
    },
    {
      q: 'How long does full mouth rehabilitation take in Tirupati?',
      a: 'Most full mouth rehabilitation cases at Meghana Dental Hospital are completed in 3–4 months. We give you a detailed phase-by-phase timeline at your treatment planning appointment.',
    },
    {
      q: 'Is full mouth rehabilitation done by one doctor or multiple?',
      a: 'At Meghana Dental Hospital, your rehabilitation is coordinated by a primary specialist — usually a prosthodontist — who designs the treatment plan and manages the overall programme. Other specialists (endodontist, periodontist, oral surgeon, orthodontist) contribute at the appropriate phases. You have one main point of contact who understands your entire plan.',
    },
    {
      q: 'What does full mouth rehabilitation cost in Tirupati?',
      a: 'Cost depends entirely on the number and type of treatments needed. Moderate cases involving crowns on many teeth and a few implants typically range from ₹1,50,000–4,00,000. Complex cases with orthodontics, multiple implants, bone grafts, and full-arch reconstruction can range from ₹3,00,000–8,00,000+. We provide a fully itemised, phase-by-phase cost breakdown. EMI options are available.',
    },
    {
      q: 'Am I too old for full mouth rehabilitation?',
      a: 'No. We treat patients of all ages — from young adults with congenital dental conditions to patients in their 70s replacing decades of failing dentistry. The most important factors are overall health, bone quality (for implants), and commitment to the maintenance programme after treatment.',
    },
  ],

  stats: [
    { icon: 'bi-calendar2-range', label: 'Treatment Duration', value: '3–4 months' },
    { icon: 'bi-people', label: 'Specialists', value: 'Full Team On-Site' },
    { icon: 'bi-laptop', label: 'Smile Preview', value: 'Digital Design Included' },
    { icon: 'bi-credit-card', label: 'Payment', value: 'EMI Options Available' },
  ],

  ctaTitle: 'Begin Your Full Mouth Rehabilitation',
  ctaDesc: 'Book a comprehensive consultation at Meghana Dental Hospital, Tirupati. Our multi-specialist team will assess your case and create a personalised, phased treatment plan.',

  relatedServices: [
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Titanium implants form the structural foundation of most full-mouth reconstructions.',
    },
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Zirconia and e.max crowns — the final restoration layer in every rehabilitation.',
    },
    {
      image: '/services/Gum-Treatment.jpg',
      href: '/services/gum-treatment',
      title: 'Gum Treatment',
      desc: 'Periodontal health is always the first phase of any full-mouth rehabilitation.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'A focused cosmetic programme for patients needing aesthetic rather than structural rebuilding.',
    },
  ],
};

export default function FullMouthRehabContent() {
  return <ServicePageLayout data={serviceData} />;
}
