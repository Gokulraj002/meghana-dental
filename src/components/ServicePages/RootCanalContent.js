import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0EA5A0',
  contentImage: '/services/Root-Canal-Treatment.jpg',

  gallery: [
    { src: '/services/Root-Canal-Treatment.jpg', caption: 'Cross-section tooth model showing decay reaching the pulp' },
    { src: '/images/root-canal-need.png', caption: 'Signs that you may need a root canal', contain: true },
    { src: '/images/root-canal-signs.jpg', caption: 'Common warning signs of pulp infection', contain: true },
    { src: '/images/root-canal-process.jpg', caption: 'Step-by-step RCT — opening, cleaning, filling and crown', contain: true },
    { src: '/images/microscope-treatment.jpg', caption: 'Microscope-guided canal cleaning at 25× magnification' },
  ],

  overview:
    'Root canal treatment (RCT), or endodontic therapy, is a procedure to remove infected, inflamed, or damaged pulp from inside the tooth — the soft tissue containing nerves and blood vessels. Rather than extracting the tooth, RCT saves it, eliminates the pain, and seals the tooth against future infection. At Meghana Dental Hospital, Tirupati, our endodontists perform microscope-guided root canal treatment using a dental operating microscope at 25× magnification and advanced rotary instruments, ensuring the highest levels of precision and success in the region.',

  highlights: [
    { icon: 'bi-search', text: 'Dental Microscope — 25× Magnification' },
    { icon: 'bi-1-circle-fill', text: 'Single-Sitting RCT Available' },
    { icon: 'bi-emoji-smile-fill', text: 'Completely Painless Procedure' },
  ],

  conditions: [
    { icon: 'bi-exclamation-triangle-fill', label: 'Severe toothache or throbbing pain' },
    { icon: 'bi-thermometer-half', label: 'Prolonged sensitivity to hot & cold' },
    { icon: 'bi-droplet-fill', label: 'Gum swelling or abscess (pimple on gums)' },
    { icon: 'bi-palette-fill', label: 'Tooth discolouration or darkening' },
    { icon: 'bi-lightning-fill', label: 'Cracked tooth with exposed nerve' },
    { icon: 'bi-activity', label: 'Deep decay reaching the pulp chamber' },
  ],

  benefits: [
    {
      icon: 'bi-tooth',
      title: 'Saves Your Natural Tooth',
      desc: 'Preserving your natural tooth is always the best option — it maintains your bite, jaw structure, and appearance better than any artificial replacement.',
    },
    {
      icon: 'bi-bandaid-fill',
      title: 'Immediate Pain Relief',
      desc: 'Infected pulp causes intense pain. RCT removes the source of infection within a single appointment, providing rapid and lasting relief.',
    },
    {
      icon: 'bi-search',
      title: 'Microscope-Guided Precision',
      desc: 'Our dental microscope with 25× magnification reveals hidden canals, micro-cracks, and tissue invisible to the naked eye — dramatically improving success rates.',
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Rotary Endodontics',
      desc: 'Nickel-titanium rotary files clean and shape root canals faster, more gently, and more thoroughly than manual techniques.',
    },
    {
      icon: 'bi-1-circle-fill',
      title: 'Single-Sitting Convenience',
      desc: 'Most cases at Meghana Dental Hospital can be completed in one visit, saving you multiple appointments and long wait times.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Long-Term Durability',
      desc: 'A root-canal-treated tooth capped with a crown can last decades — often a lifetime — with regular dental check-ups.',
    },
  ],

  process: [
    {
      title: 'Diagnosis & Digital X-Ray',
      desc: 'We take digital X-rays (and CBCT if needed) to assess the extent of infection, number of canals, and root anatomy. This guides the entire treatment plan.',
    },
    {
      title: 'Local Anaesthesia & Isolation',
      desc: 'The tooth is numbed completely with local anaesthesia. A rubber dam is placed around the tooth to keep it clean and dry throughout the procedure.',
    },
    {
      title: 'Pulp Removal Under Microscope',
      desc: 'Using the dental operating microscope at 25× magnification, our endodontist opens the crown of the tooth and removes the infected or inflamed pulp with precision rotary instruments.',
    },
    {
      title: 'Canal Cleaning, Shaping & Disinfection',
      desc: 'Each root canal is cleaned, shaped, and irrigated with antimicrobial solutions to eliminate all bacteria and infected tissue, including in curved or narrow canals.',
    },
    {
      title: 'Sealing & Crown Restoration',
      desc: 'The cleaned canals are filled with a biocompatible material (gutta-percha) and sealed. A tooth-coloured filling or ceramic crown is placed to protect and restore full function to the tooth.',
    },
  ],

  faqs: [
    {
      q: 'Is root canal treatment painful?',
      a: 'No. Root canal treatment at Meghana Dental Hospital is performed under local anaesthesia — you will feel no pain during the procedure. Most patients report that the discomfort of the infected tooth beforehand was far worse than the RCT itself. Mild tenderness for 1–2 days after is normal.',
    },
    {
      q: 'Can root canal be done in a single sitting in Tirupati?',
      a: 'Yes. We offer single-sitting RCT for eligible cases using our advanced rotary endodontic system and dental microscope with 25× magnification. Complex multi-rooted teeth or severe infections may require two visits. We will let you know at consultation what to expect.',
    },
    {
      q: 'How much does root canal treatment cost in Tirupati?',
      a: 'RCT cost at Meghana Dental Hospital, Tirupati: front teeth start from ₹2,500, premolars from ₹3,500, and molars from ₹4,000. Microscope-assisted treatment may be slightly higher due to advanced equipment. A post-RCT crown is recommended and priced separately.',
    },
    {
      q: 'Why choose microscope-guided RCT over regular RCT?',
      a: 'The dental microscope with 25× magnification illuminates hidden canals, fractures, and calcified tissue invisible to the naked eye. This means fewer missed canals, higher success rates, and significantly better long-term outcomes. Meghana Dental Hospital is one of very few clinics in Tirupati with this technology.',
    },
    {
      q: 'Do I need a crown after root canal treatment?',
      a: 'Yes, a crown (cap) is strongly recommended after RCT — especially for back teeth. The procedure removes the pulp, making the tooth more brittle over time. A crown restores full strength, protects against fracture, and seals the tooth from re-infection.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'Duration', value: '30–60 min' },
    { icon: 'bi-calendar-check', label: 'Sittings', value: '1–2 visits' },
    { icon: 'bi-shield-check', label: 'Anaesthesia', value: 'Local' },
    { icon: 'bi-activity', label: 'Recovery', value: 'Same day' },
  ],

  ctaTitle: 'Stop Tooth Pain Today',
  ctaDesc: 'Don\'t let toothache disrupt your life. Book a same-day diagnosis appointment — our endodontist will relieve your pain fast.',

  relatedServices: [
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Permanent titanium tooth replacement for teeth that cannot be saved.',
    },
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Zirconia and e.max crowns to protect and restore root-canal-treated teeth.',
    },
    {
      image: '/images/microscope-use.jpg',
      href: '/services/microscope-dentistry',
      title: 'Microscope Dentistry',
      desc: 'Dental microscope 25× precision for complex RCT retreatments and hidden canals.',
    },
    {
      image: '/services/Dentures-Prosthetics.jpg',
      href: '/services/dentures',
      title: 'Dentures & Prosthetics',
      desc: 'Complete and partial denture solutions when teeth cannot be saved.',
    },
  ],
};

export default function RootCanalContent() {
  return <ServicePageLayout data={serviceData} />;
}
