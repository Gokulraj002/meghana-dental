import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0EA5A0',
  contentImage: '/images/dental-equipment.jpg',

  gallery: [
    { src: '/services/Gum-Treatment.jpg', caption: 'Soft-tissue treatment area — the kind of case suited to laser dentistry' },
  ],

  overview:
    'At Meghana Dental Hospital, Tirupati, we use the advanced BIOLASE Epic Pro laser — one of the most precise dental laser systems available — to deliver treatments that are faster, gentler, and dramatically more comfortable than traditional methods. A narrow, focused beam of light energy reacts with tissue to remove or reshape it with pinpoint accuracy. No Cut. No Sew. No Fear. From gummy smile correction and tongue-tie release to gum pigmentation removal, root canal disinfection, ulcer healing, flap surgery, and laser teeth whitening — our BIOLASE laser handles it all with minimal bleeding, no anaesthesia in most cases, and same-day recovery. Laser Dentistry is an advanced method of dental care and we at Meghana Dental provide this technology to enhance your every dental visit.',

  highlights: [
    { icon: 'bi-lightning-charge', text: 'BIOLASE Epic Pro Laser' },
    { icon: 'bi-slash-circle', text: 'No Cut • No Sew • No Fear' },
    { icon: 'bi-bandaid', text: 'Same-Day Recovery' },
  ],

  conditions: [
    { icon: 'bi-symmetry-horizontal', label: 'Gummy smile correction' },
    { icon: 'bi-scissors', label: 'Tongue-tie & lip-tie (Frenectomy)' },
    { icon: 'bi-palette', label: 'Gum pigmentation removal' },
    { icon: 'bi-droplet', label: 'Mouth ulcers & cold sore treatment' },
    { icon: 'bi-heart-pulse', label: 'Gum infection & flap surgery' },
    { icon: 'bi-activity', label: 'Laser-assisted root canal disinfection' },
    { icon: 'bi-brightness-high', label: 'Laser teeth whitening' },
    { icon: 'bi-circle', label: 'Second stage implant surgery' },
    { icon: 'bi-tooth', label: 'Operculectomy (wisdom tooth gum flap)' },
  ],

  benefits: [
    {
      icon: 'bi-slash-circle',
      title: 'No Scalpel, No Sutures',
      desc: 'The laser seals tissue as it works — most soft-tissue procedures need no cutting and no stitches, meaning faster healing.',
    },
    {
      icon: 'bi-droplet-fill',
      title: 'Minimal Bleeding',
      desc: 'Laser energy cauterises blood vessels simultaneously, drastically reducing bleeding during and after gum procedures.',
    },
    {
      icon: 'bi-shield-fill-check',
      title: 'Built-In Sterilisation',
      desc: 'The laser beam destroys bacteria on contact, reducing the risk of post-procedure infection without antibiotics in many cases.',
    },
    {
      icon: 'bi-emoji-smile-fill',
      title: 'Virtually Painless',
      desc: 'Most laser procedures are comfortable with topical anaesthetic only. Ideal for patients with dental anxiety or needle phobia.',
    },
    {
      icon: 'bi-bullseye',
      title: 'Pinpoint Precision',
      desc: 'The laser targets only diseased or targeted tissue, leaving surrounding healthy structures completely unaffected.',
    },
    {
      icon: 'bi-clock-fill',
      title: 'Faster Healing & Less Swelling',
      desc: 'Laser-treated tissue bio-stimulates cellular repair. Swelling and post-operative soreness are significantly reduced compared to scalpel surgery.',
    },
  ],

  process: [
    {
      title: 'Gummy Smile Correction',
      desc: 'Excess gum tissue covering the teeth is precisely removed using the BIOLASE laser. This eliminates bleeding, surgical cuts, and the need for anaesthesia that traditional surgical methods require — revealing more of your natural tooth.',
    },
    {
      title: 'Tongue-Tie & Lip-Tie Release (Frenectomy)',
      desc: 'The laser releases tongue-tie to improve clarity of speech. Lip-tie, which causes spacing between front teeth, is also corrected painlessly. Hassle-free removal with no cuts, no stitches, and faster healing.',
    },
    {
      title: 'Gum Pigmentation Removal',
      desc: 'Dark gum pigmentation caused by melanin production gives an unpleasant look while smiling. Lasers eliminate pigmentation with faster healing, less bleeding, and far greater comfort compared to traditional methods.',
    },
    {
      title: 'Ulcer, Gum Infection & Root Canal Laser Therapy',
      desc: 'Cold sores and oral ulcers are treated quickly and painlessly. For gum infections, the laser removes infected tissue and bacteria with precision. In root canal treatment, the laser cleans and disinfects the canal — killing bacteria in hard-to-reach areas, reducing anaesthesia needs, and enabling single-visit procedures.',
    },
    {
      title: 'Flap Surgery, Whitening & Implant Surgery',
      desc: 'Laser flap surgery achieves excellent periodontal outcomes with minimal recovery. Laser teeth whitening uses a special laser light to activate whitening gel — resulting in brighter teeth faster than traditional methods. In second-stage implant surgery, the laser precisely removes gum tissue over submerged implants without cutting.',
    },
  ],

  faqs: [
    {
      q: 'Is laser dentistry completely safe? What type of laser do you use?',
      a: 'Yes, dental lasers are fully safe and have been used in dentistry for over 30 years. At Meghana Dental Hospital we use a Diode laser, which is specifically optimised for soft-tissue procedures including gum treatment, contouring, ulcer treatment, and frenectomy. All safety protocols — including wavelength-matched protective eyewear — are strictly followed.',
    },
    {
      q: 'Will I need an injection for laser dental treatment?',
      a: 'It depends on the procedure. Simple treatments like aphthous ulcer healing, gum contouring for minor reshaping, and tooth sensitivity treatment typically require only topical anaesthetic gel or no anaesthetic at all. Deeper gum procedures such as laser gum surgery or crown lengthening may require a local injection.',
    },
    {
      q: 'How does laser gum surgery compare to traditional gum surgery?',
      a: 'Traditional gum surgery involves a scalpel, bleeding, sutures, and several days of recovery. Laser gum surgery achieves the same clinical result — removing infected tissue and bacteria — but with minimal bleeding, no sutures in most cases, significantly less post-operative pain, and a recovery time measured in hours rather than days.',
    },
    {
      q: 'What is the cost of laser dentistry treatment in Tirupati?',
      a: 'At Meghana Dental Hospital, Tirupati, laser ulcer treatment starts from ₹500 per ulcer. Gum contouring starts from ₹3,000. Laser gum disease treatment (per quadrant) starts from ₹2,500. Laser-assisted teeth whitening starts from ₹6,000. We provide a written cost estimate before any treatment begins.',
    },
    {
      q: 'Can children have laser dental treatment?',
      a: 'Laser dentistry is particularly well-suited for children because it eliminates the need for injections in many cases and removes the frightening noise and vibration of the dental drill. We routinely use laser treatment for children with dental anxiety, tongue-tie correction, and gum issues.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'Procedure Time', value: '5–60 min' },
    { icon: 'bi-syringe', label: 'Anaesthesia', value: 'Often Not Needed' },
    { icon: 'bi-house-check', label: 'Recovery', value: 'Same Day' },
    { icon: 'bi-droplet-half', label: 'Bleeding', value: 'Minimal to None' },
  ],

  ctaTitle: 'Book Your Laser Dentistry Appointment',
  ctaDesc: 'Experience painless, precise dental care in Tirupati. Our Diode laser makes gum treatment, contouring, and more completely comfortable.',

  relatedServices: [
    {
      image: '/services/Gum-Treatment.jpg',
      href: '/services/gum-treatment',
      title: 'Gum Treatment',
      desc: 'Full-spectrum periodontal care combining laser therapy, scaling, and bone grafting.',
    },
    {
      image: '/images/microscope-use.jpg',
      href: '/services/microscope-dentistry',
      title: 'Microscope Dentistry',
      desc: 'dental microscope 25× precision for root canals and complex dental procedures.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Laser gum contouring is a key part of a complete smile transformation.',
    },
    {
      image: '/services/Teeth-Whitening.jpg',
      href: '/services/teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Laser-assisted whitening for dramatically brighter results in a single visit.',
    },
  ],
};

export default function LaserDentistryContent() {
  return <ServicePageLayout data={serviceData} />;
}
