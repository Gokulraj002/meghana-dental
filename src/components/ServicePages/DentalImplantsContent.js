import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0ea5e9',

  contentImage: '/services/dental-implants.jpg',

  gallery: [
    { src: '/images/implant-denture.jpg', caption: 'Implant-retained denture — full arch restoration' },
    { src: '/images/microscope.jpg', caption: 'dental microscope with 25× magnification used for precision' },
    { src: '/images/microscope-treatment.jpg', caption: 'Microscope-guided implant treatment' },
    { src: '/images/about-clinic.png', caption: 'Our modern clinic interior' },
    { src: '/services/Dentures-Prosthetics.jpg', caption: 'Finished full-arch prosthetic' },
  ],

  overview:
    'A dental implant is a small titanium post that is surgically placed into the jawbone to replace the root of a missing tooth. Over 2–3 months, the bone fuses with the implant through a natural process called osseointegration. A custom crown is then fitted on top — looking, feeling and functioning exactly like a natural tooth. Unlike bridges or dentures, implants do not damage neighbouring teeth and actively preserve the jawbone.',

  highlights: [
    { icon: 'bi-shield-check', text: '95%+ Success Rate' },
    { icon: 'bi-infinity', text: 'Lasts 20+ Years' },
    { icon: 'bi-emoji-smile', text: 'Natural Look & Feel' },
  ],

  conditions: [
    { icon: 'bi-circle', label: 'Single missing tooth' },
    { icon: 'bi-grid-3x2-gap-fill', label: 'Multiple missing teeth' },
    { icon: 'bi-x-circle', label: 'Complete tooth loss (edentulous)' },
    { icon: 'bi-exclamation-triangle', label: 'Ill-fitting or loose dentures' },
    { icon: 'bi-bandaid', label: 'Tooth lost due to injury or decay' },
    { icon: 'bi-layers-half', label: 'Jawbone shrinkage from missing teeth' },
  ],

  benefits: [
    { icon: 'bi-emoji-heart-eyes-fill', title: 'Looks & Feels Natural', desc: 'Custom-coloured ceramic crowns are indistinguishable from real teeth.' },
    { icon: 'bi-shield-check', title: 'Preserves the Jawbone', desc: 'Titanium stimulates bone just like a real root — preventing bone loss.' },
    { icon: 'bi-x-circle-fill', title: 'No Damage to Other Teeth', desc: 'Unlike bridges, implants do not require grinding of healthy neighbouring teeth.' },
    { icon: 'bi-infinity', title: 'Lifetime Solution', desc: 'With basic care, implants last 20+ years — a one-time investment in your smile.' },
    { icon: 'bi-cup-hot-fill', title: 'No Dietary Restrictions', desc: 'Eat everything you love — implants are as strong as natural teeth.' },
    { icon: 'bi-chat-heart-fill', title: 'Speak with Confidence', desc: 'No slipping, no clicking — speak and laugh naturally any time.' },
  ],

  process: [
    {
      title: 'Consultation & 3D Scan',
      desc: 'A CBCT scan maps your jawbone in 3D. Our prosthodontist plans the exact implant position and size before any surgery.',
    },
    {
      title: 'Implant Placement',
      desc: 'Under local anaesthesia, the titanium implant is placed into the jawbone. Painless and takes 30–90 minutes.',
    },
    {
      title: 'Healing & Osseointegration',
      desc: 'Over 2–3 months, the implant fuses naturally with the jawbone.',
    },
    {
      title: 'Crown / Bridge Fitting',
      desc: 'A digital impression is taken and a custom-coloured zirconia crown is fabricated and fitted.',
    },
    {
      title: 'Review & Aftercare',
      desc: 'Regular follow-up checks ensure the implant is settling perfectly for long-term success.',
    },
  ],

  faqs: [
    {
      q: 'How much do dental implants cost in Tirupati?',
      a: 'At Meghana Dental Hospital, single implant treatment starts from ₹25,000 (implant + abutment + crown). The final cost depends on the implant brand (Nobel Biocare, Osstem, Dentium, MIS, Adin), case complexity, crown material selected, and whether bone grafting is needed. We provide transparent, upfront quotes — no hidden charges. EMI options are also available.',
    },
    {
      q: 'Is dental implant surgery painful?',
      a: 'No. Implant surgery is performed under local anaesthesia so you feel nothing during the procedure. Most patients report less discomfort than a tooth extraction. Minor soreness the following day is easily managed with standard painkillers.',
    },
    {
      q: 'How long does the whole implant process take?',
      a: 'From first consultation to final crown, most cases are completed in 2–3 months. The surgery itself takes only 30–90 minutes. The waiting period is for osseointegration — the implant bonding with your jawbone. Immediate loading implants are available for suitable cases.',
    },
    {
      q: 'Am I too old for dental implants?',
      a: 'There is no upper age limit for dental implants. Many of our patients are in their 60s, 70s and 80s and are fully satisfied. What matters is your general health and jawbone quality — both of which we assess in the first consultation.',
    },
    {
      q: 'What if I don\u2019t have enough jawbone for implants?',
      a: 'Even if you have lost some jawbone, implants are still possible. We routinely perform bone grafting, sinus lifts and ridge augmentation to rebuild the bone before implant placement. For severely resorbed jaws, zygomatic implants are also an option.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'Surgery Duration', value: '30–90 min' },
    { icon: 'bi-calendar', label: 'Healing Time', value: '2–3 months' },
    { icon: 'bi-shield-check', label: 'Success Rate', value: '95%+' },
    { icon: 'bi-heart-fill', label: 'Lifespan', value: '20+ years' },
    { icon: 'bi-currency-rupee', label: 'Starts From', value: '₹25,000' },
  ],

  ctaTitle: 'Free Implant Consultation',
  ctaDesc: 'Find out if implants are right for you. Our specialist will assess your case and explain all options — with transparent pricing.',

  relatedServices: [
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Premium zirconia and e.max crowns prepared with microscope precision.',
    },
    {
      image: '/services/Dentures-Prosthetics.jpg',
      href: '/services/dentures',
      title: 'Dentures & Prosthetics',
      desc: 'BPS precision and implant-retained dentures for full-arch restoration.',
    },
    {
      image: '/images/about-clinic.png',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'Multi-specialist programme to rebuild your entire smile from the ground up.',
    },
    {
      image: '/images/microscope-treatment.jpg',
      href: '/services/tooth-extraction',
      title: 'Tooth Extraction',
      desc: 'Safe, painless simple and surgical extractions with same-day replacement planning.',
    },
  ],
};

export default function DentalImplantsContent() {
  return <ServicePageLayout data={serviceData} />;
}
