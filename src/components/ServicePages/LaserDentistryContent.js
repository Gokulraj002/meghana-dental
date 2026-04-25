import ServicePageLayout from './ServicePageLayout';

export const serviceData = {
  accent: '#f97316',
  contentImage: '/images/dental-equipment.jpg',

  gallery: [
    { src: '/images/dental-clinic-interior.jpg', caption: 'Modern laser treatment room' },
    { src: '/images/dental-chair.jpg', caption: 'Comfortable treatment setting' },
    { src: '/images/about-clinic.png', caption: 'Our trained laser dentistry team' },
    { src: '/images/microscope-treatment.jpg', caption: 'Precision dental procedures at Meghana Dental' },
    { src: '/images/about-clinic.png', caption: 'State-of-the-art clinic facilities' },
  ],

  overview:
    'At Meghana Dental Hospital, Tirupati, we use advanced Diode laser technology to deliver dental treatments that are faster, gentler, and dramatically more comfortable than traditional methods. Laser dentistry replaces the scalpel with a precise beam of focused light energy — no cutting, no sutures in most cases, and minimal bleeding. From gum surgery and gum contouring to cavity preparation, mouth ulcer treatment, and laser-assisted teeth whitening, our laser procedures are designed around your comfort. Many treatments require no anaesthetic injection at all. If you have been avoiding the dentist because of fear or anxiety, laser dentistry at Meghana Dental is the answer.',

  highlights: [
    { icon: 'bi-lightning-charge', text: 'Advanced Diode Laser Technology' },
    { icon: 'bi-emoji-smile', text: 'Painless — Often No Injections' },
    { icon: 'bi-bandaid', text: 'Same-Day Recovery for Most Procedures' },
  ],

  conditions: [
    { icon: 'bi-heart-pulse', label: 'Gum disease (gingivitis & periodontitis)' },
    { icon: 'bi-symmetry-horizontal', label: 'Gummy smile / uneven gumline' },
    { icon: 'bi-droplet', label: 'Recurrent mouth ulcers (aphthous stomatitis)' },
    { icon: 'bi-scissors', label: 'Tongue-tie or lip-tie (frenectomy)' },
    { icon: 'bi-brightness-high', label: 'Stained or yellowed teeth for whitening' },
    { icon: 'bi-thermometer-half', label: 'Tooth sensitivity to hot and cold' },
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
      title: 'Consultation & Laser Treatment Planning',
      desc: 'Our dentist conducts a thorough clinical assessment and explains which laser procedure is appropriate for your condition. Photographs and measurements are taken. You will understand exactly what will happen before the appointment.',
    },
    {
      title: 'Preparation & Comfort Measures',
      desc: 'Protective eyewear is provided for both patient and clinical team. For gum procedures, a topical anaesthetic gel is applied to the treatment area. Injections are required for fewer than 30% of laser treatments at our clinic.',
    },
    {
      title: 'Laser Treatment',
      desc: 'The calibrated Diode laser handpiece delivers focused energy to the target tissue. The procedure is quiet, vibration-free, and precise. Gum contouring takes 15–30 minutes; ulcer treatment takes as little as 5 minutes.',
    },
    {
      title: 'Post-Treatment Review & Instructions',
      desc: 'After treatment, the dentist checks the result and gives you specific aftercare instructions. Most patients return to normal activities the same day. A follow-up appointment confirms complete healing.',
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

export default function LaserDentistryContent({ overrides = {} }) {
  return <ServicePageLayout data={{ ...serviceData, ...overrides }} />;
}
