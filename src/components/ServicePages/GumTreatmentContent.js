import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#14b8a6',
  contentImage: '/services/Gum-Treatment.jpg',

  gallery: [
    { src: '/images/bad-smell.jpg', caption: 'Bad breath — a key sign of gum disease' },
    { src: '/images/dental-equipment.jpg', caption: 'Advanced periodontal treatment equipment' },
    { src: '/images/microscope-treatment.jpg', caption: 'Microscope-assisted periodontal care' },
    { src: '/images/dental-clinic-interior.jpg', caption: 'Our modern periodontics suite' },
    { src: '/images/dental-team.jpg', caption: 'Our MDS periodontist team' },
    { src: '/images/about-clinic.png', caption: 'Comprehensive periodontal facilities' },
  ],

  overview:
    'Gum disease — or periodontal disease — is the single leading cause of tooth loss in adults worldwide, yet it is almost entirely preventable and treatable when caught early. It begins silently: gums that bleed on brushing, a persistent bad taste, or slight puffiness that patients dismiss as normal. Left untreated, the infection progresses from gingivitis to periodontitis, destroying the bone and connective tissue that anchor your teeth. At Meghana Dental Hospital, Tirupati, our specialist periodontist provides the full spectrum of gum care — from professional scaling and root planing to laser gum therapy, flap surgery, bone grafting, and long-term periodontal maintenance — using the most advanced equipment available in Andhra Pradesh.',

  highlights: [
    { icon: 'bi-activity', text: 'Full Spectrum Periodontal Care' },
    { icon: 'bi-lightning-charge', text: 'Laser-Assisted Gum Therapy' },
    { icon: 'bi-calendar-check', text: 'Periodontal Maintenance Programmes' },
  ],

  conditions: [
    { icon: 'bi-droplet-fill', label: 'Bleeding gums when brushing or flossing' },
    { icon: 'bi-wind', label: 'Persistent bad breath (halitosis)' },
    { icon: 'bi-arrows-expand', label: 'Receding gums — teeth look longer' },
    { icon: 'bi-exclamation-triangle', label: 'Loose or shifting teeth' },
    { icon: 'bi-thermometer', label: 'Swollen, red, or tender gum tissue' },
    { icon: 'bi-x-circle', label: 'Pus between teeth and gums' },
  ],

  benefits: [
    {
      icon: 'bi-shield-fill-check',
      title: 'Stop the Disease in Its Tracks',
      desc: 'Prompt periodontal treatment halts active infection, prevents further bone loss, and stabilises teeth that would otherwise be lost.',
    },
    {
      icon: 'bi-heart-pulse-fill',
      title: 'Protect Your Systemic Health',
      desc: 'Research links untreated gum disease to heart disease, diabetes complications, and preterm birth. Treating your gums protects your whole body.',
    },
    {
      icon: 'bi-lightning',
      title: 'Laser Gum Therapy Available',
      desc: 'Our Diode laser removes infected tissue with minimal discomfort, no scalpel, and dramatically reduced post-operative soreness.',
    },
    {
      icon: 'bi-person-check-fill',
      title: 'MDS Periodontist On-Site',
      desc: 'Every periodontal case at Meghana Dental is evaluated and treated by a qualified MDS periodontist — not a general dentist.',
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Ongoing Maintenance Prevents Recurrence',
      desc: 'Our structured periodontal maintenance programme monitors your gum health every 3–6 months and prevents the disease from returning.',
    },
    {
      icon: 'bi-columns-gap',
      title: 'Bone & Gum Regeneration',
      desc: 'Where bone has been lost, we offer bone grafting and guided tissue regeneration to rebuild the foundation that supports your teeth.',
    },
  ],

  process: [
    {
      title: 'Comprehensive Periodontal Assessment',
      desc: 'Your periodontist records pocket depths, bleeding points, bone levels on X-ray (OPG), and tooth mobility at every site around every tooth. This mapping is the foundation of your personalised treatment plan.',
    },
    {
      title: 'Phase 1 — Non-Surgical Treatment (Scaling & Root Planing)',
      desc: 'Professional scaling removes hard calculus (tartar) and bacterial biofilm from above and below the gumline. Root planing smooths root surfaces to eliminate bacterial toxins and encourage the gum to reattach. This is usually completed in 1–2 appointments under local anaesthesia.',
    },
    {
      title: 'Phase 2 — Laser Gum Therapy (Where Indicated)',
      desc: 'Our Diode laser is used to remove infected gum tissue lining deep pockets, decontaminate the pocket environment, and bio-stimulate healing — all without a scalpel. This is often sufficient to resolve moderate periodontitis without surgery.',
    },
    {
      title: 'Phase 3 — Surgical Treatment (Flap Surgery / Grafting)',
      desc: 'For advanced cases where non-surgical treatment cannot reach deep deposits, flap surgery provides direct access to clean root surfaces thoroughly. Bone grafting or guided bone regeneration may be performed simultaneously to rebuild lost support.',
    },
    {
      title: 'Phase 4 — Periodontal Maintenance',
      desc: 'After active treatment, you enter a structured maintenance programme with check-ups and professional cleaning every 3–6 months. This is not optional — it is the step that determines whether your results last for years or months.',
    },
  ],

  faqs: [
    {
      q: 'My gums bleed when I brush — is that serious?',
      a: 'Bleeding gums are never "normal" — they are the first warning sign of gingivitis, a bacterial gum infection. At this early stage the disease is fully reversible with professional cleaning and improved home care. If left untreated, gingivitis progresses to periodontitis, which causes permanent bone loss. Book an appointment now while treatment is still simple.',
    },
    {
      q: 'Can gum disease be completely cured, or just controlled?',
      a: 'Gingivitis — the earliest stage — is completely reversible with treatment. Once periodontitis has developed and bone loss has occurred, the bone loss itself cannot always be fully regenerated, but the disease can be controlled and stabilised. With our bone grafting and guided tissue regeneration techniques, we can recover some lost support in selected cases.',
    },
    {
      q: 'Is there a link between gum disease and heart disease or diabetes?',
      a: 'Yes. Multiple large studies have confirmed that the chronic inflammation of periodontal disease increases cardiovascular disease risk and makes blood sugar harder to control in diabetic patients. Treating gum disease improves HbA1c levels in diabetics and reduces systemic inflammatory markers.',
    },
    {
      q: 'Is gum treatment painful? What about the injections?',
      a: 'Modern scaling and root planing is performed under local anaesthesia, which is given after a topical anaesthetic gel — so you barely feel the injection. Our laser gum therapy significantly reduces post-operative soreness compared to conventional gum surgery. Most patients take a mild painkiller for one day after deep cleaning.',
    },
    {
      q: 'What does gum treatment cost at Meghana Dental Hospital, Tirupati?',
      a: 'Scaling and polishing starts from ₹1,500. Full-mouth scaling with root planing ranges from ₹3,000 to ₹8,000 depending on severity. Laser gum therapy starts from ₹2,500 per quadrant. Flap surgery and bone grafting are priced individually after assessment. We always provide a written treatment plan with transparent costs before beginning.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'Scaling Session', value: '30–60 min' },
    { icon: 'bi-calendar2', label: 'Deep Cleaning', value: '1–2 sessions' },
    { icon: 'bi-calendar-check', label: 'Maintenance', value: 'Every 3–6 months' },
    { icon: 'bi-syringe', label: 'Anaesthesia', value: 'Local (deep work)' },
  ],

  ctaTitle: 'Book a Gum Health Assessment',
  ctaDesc: 'Bleeding or swollen gums? Early treatment saves teeth. Our MDS periodontist in Tirupati will assess your gum health and create a personalised treatment plan.',

  relatedServices: [
    {
      image: '/images/dental-equipment.jpg',
      href: '/services/laser-dentistry',
      title: 'Laser Dentistry',
      desc: 'Diode laser gum therapy — minimal bleeding, no scalpel, faster healing.',
    },
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'Permanent tooth replacement after gum disease is fully controlled and treated.',
    },
    {
      image: '/images/dental-team.jpg',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'Comprehensive oral reconstruction — gum treatment is always the first phase.',
    },
    {
      image: '/images/ortho-before-after-1.jpg',
      href: '/services/smile-makeover',
      title: 'Smile Makeover',
      desc: 'Healthy gums are the foundation of any cosmetic smile improvement.',
    },
  ],
};

export default function GumTreatmentContent() {
  return <ServicePageLayout data={serviceData} />;
}
