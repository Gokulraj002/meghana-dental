import ServicePageLayout from './ServicePageLayout';

export const serviceData = {
  accent: '#64748b',
  contentImage: '/services/wisdom-img1.jpg',

  gallery: [
    { src: '/services/pdf-wisdom-p1.jpg', caption: 'Wisdom tooth impaction angles — mesioangular, distoangular, horizontal, vertical' },
    { src: '/services/pdf-wisdom-p2.jpg', caption: 'Surgical extraction procedure — incision, bone access, and sectioning steps' },
    { src: '/services/pdf-wisdom-p3.jpg', caption: 'Inferior alveolar nerve proximity — pre-surgical nerve mapping' },
    { src: '/services/pdf-wisdom-p4.jpg', caption: 'Post-extraction socket healing — blood clot to bone regeneration stages' },
    { src: '/services/wisdom-img1.jpg', caption: 'Impacted wisdom tooth — 3D anatomical view' },
    { src: '/services/wisdom-img2.jpg', caption: 'Wisdom tooth anatomy — eruption patterns explained' },
    { src: '/services/wisdom-img3.jpg', caption: 'Six types of wisdom tooth impaction — clinical classification' },
    { src: '/services/wisdom-img4.jpg', caption: 'OPG X-ray with impacted wisdom teeth highlighted — pre-surgical planning' },
  ],

  overview:
    'Wisdom teeth (third molars) typically emerge between ages 17–25 when there is often insufficient space in the jaw, causing them to become impacted — partially or fully trapped beneath the gumline. At Meghana Dental Hospital, Tirupati, our philosophy is simple: save every tooth possible. But when a tooth is beyond saving or is causing active harm — infection, crowding, cyst formation — a safe, painless extraction is the best treatment. Our MDS Oral & Maxillofacial Surgeon Dr. Eswar performs both routine extractions and complex surgical wisdom tooth removals under complete local anaesthesia. Every surgical case is planned with an OPG or CBCT scan to precisely map root morphology and proximity to the inferior alveolar nerve, eliminating risk of nerve paresthesia. Post-extraction, we provide a clear aftercare plan and discuss tooth replacement options so your smile never has a gap for long.',

  highlights: [
    { icon: 'bi-shield-check', text: 'OPG & CBCT Planned Extractions' },
    { icon: 'bi-emoji-smile', text: 'Painless Under Local Anaesthesia' },
    { icon: 'bi-tooth', text: 'Complex Impacted Wisdom Tooth Surgery' },
  ],

  conditions: [
    { icon: 'bi-exclamation-octagon', label: 'Impacted teeth causing pain and swelling' },
    { icon: 'bi-bandaid-fill', label: 'Infection in the gums (pericoronitis)' },
    { icon: 'bi-virus', label: 'Food lodgement leading to tooth decay' },
    { icon: 'bi-heart-pulse', label: 'Gum disease or dental abscess' },
    { icon: 'bi-circle-fill', label: 'Cyst formation around the tooth' },
    { icon: 'bi-arrow-left-right', label: 'Damage to nearby teeth or bone' },
    { icon: 'bi-arrows-expand', label: 'Crowding — wisdom tooth pushing adjacent teeth' },
    { icon: 'bi-x-circle', label: 'Difficulty in opening mouth (trismus)' },
  ],

  benefits: [
    {
      icon: 'bi-bandaid-fill',
      title: 'Painless Procedure',
      desc: 'Comprehensive local anaesthesia means you feel pressure, not pain. Topical gel is applied before the injection to minimise discomfort.',
    },
    {
      icon: 'bi-file-earmark-medical',
      title: 'OPG X-Ray Planning',
      desc: 'Every surgical extraction is preceded by an OPG panoramic X-ray so we know the exact root shape, depth, and proximity to nerves before we begin.',
    },
    {
      icon: 'bi-clock-history',
      title: 'Quick & Efficient',
      desc: 'Simple extractions take 10–15 minutes. Complex wisdom tooth surgeries are completed in 30–45 minutes with our experienced surgical team.',
    },
    {
      icon: 'bi-house-heart',
      title: 'Clear Aftercare Instructions',
      desc: 'You leave with a printed aftercare guide covering diet, oral hygiene, warning signs, and a follow-up schedule to ensure smooth healing.',
    },
    {
      icon: 'bi-arrow-right-circle',
      title: 'Immediate Replacement Planning',
      desc: 'We discuss implant, bridge, or denture options at the same appointment so you always have a plan to restore your smile after extraction.',
    },
    {
      icon: 'bi-person-check',
      title: 'Experienced Oral Surgeons',
      desc: 'Our qualified MDS oral surgeons handle complex cases — impacted wisdom teeth, root tips, and proximity to the inferior alveolar nerve — with confidence.',
    },
  ],

  process: [
    {
      title: 'Assessment & OPG X-Ray',
      desc: 'The tooth is examined clinically and an OPG X-ray is taken to assess root morphology, bone levels, and the relationship of the tooth to adjacent structures. For wisdom teeth, the proximity to the inferior alveolar nerve is checked. Where nerve proximity is critical, a CBCT scan provides a 3D map to eliminate any risk of nerve paresthesia.',
      image: '/services/wisdom-img4.jpg',
    },
    {
      title: 'Anaesthesia & Preparation',
      desc: 'A topical anaesthetic gel is applied to the injection site first. The local anaesthetic is then administered and given 3–5 minutes to take full effect. You will feel gentle pressure, nothing more. Sedation options are available for anxious patients.',
    },
    {
      title: 'Simple or Surgical Extraction',
      desc: 'Simple extraction: the tooth is gently loosened with an elevator and removed with forceps in 5–15 minutes. Surgical extraction: a small, precise incision creates access; bone is minimally removed if needed; the tooth is sectioned if required. Sutures dissolve in 7–10 days.',
    },
    {
      title: 'Post-Extraction Care & Aftercare Instructions',
      desc: 'A gauze pack is placed to control initial bleeding. Ice pack application, dietary guidelines, medication instructions, and oral hygiene advice are given. Avoid smoking, straws, and spitting for 24 hours.',
    },
    {
      title: 'Follow-Up & Tooth Replacement Discussion',
      desc: 'A 5–7 day review confirms healing and any sutures are checked. This appointment is also when we discuss your tooth replacement options — dental implant, fixed bridge, or partial denture — in detail.',
    },
  ],

  faqs: [
    {
      q: 'Does tooth extraction hurt? What will I actually feel?',
      a: 'During extraction you will not feel pain — the area is fully anaesthetised. You will feel pressure and movement as the tooth is loosened, but no sharp or burning sensations. After the anaesthetic wears off (2–4 hours later), mild soreness is normal and is managed well with ibuprofen or paracetamol.',
    },
    {
      q: 'What problems can a wisdom tooth cause if not removed?',
      a: 'Wisdom teeth cause several problems when they lack space to erupt properly: (1) Crowding — the erupting wisdom tooth pushes adjacent teeth causing misalignment. (2) Pain & discomfort — especially when the tooth is impacted or erupting at an angle. (3) Infection & abscess — partially erupted wisdom teeth create a flap of gum tissue that traps food, leading to decay, gum swelling, and abscess. (4) Cyst formation around the tooth root. (5) Difficulty opening the mouth (trismus). Early removal prevents all of these complications.',
    },
    {
      q: 'My wisdom tooth is impacted. Do I need surgery, and is it complicated?',
      a: 'Impacted wisdom teeth — those that have not fully erupted due to lack of space — almost always require surgical extraction. The complexity depends on the depth of impaction and root anatomy, which we assess on your OPG X-ray. Horizontally impacted lower wisdom teeth are our most complex procedure, but even these are routinely performed under local anaesthesia at Meghana Dental Hospital.',
    },
    {
      q: 'What can I eat after tooth extraction? How long until I heal?',
      a: 'For the first 24 hours, soft cool foods are recommended — yoghurt, dal, cold rice, soft roti. Avoid hot, hard, spicy, and crunchy foods for 3–5 days. The socket closes over 1–2 weeks. Complete bone healing takes 3–6 months.',
    },
    {
      q: 'What is a "dry socket" and how do I prevent it?',
      a: 'Dry socket occurs when the blood clot in the extraction socket is dislodged prematurely, exposing bare bone and causing significant pain 3–5 days after extraction. It is prevented by not smoking, not using straws, not spitting forcefully, and following aftercare instructions. If you develop worsening pain after day 3, call us — dry socket is treated quickly and effectively at our clinic.',
    },
    {
      q: 'What are my options for replacing the extracted tooth?',
      a: 'A dental implant is the gold standard — it replaces the root and crown independently, lasts a lifetime with care, and does not involve any other teeth. A fixed bridge is faster and less expensive but requires crowning the adjacent teeth. A partial denture is removable and the most affordable option. We explain the pros, cons, and costs of each option in detail.',
    },
  ],

  stats: [
    { icon: 'bi-clock', label: 'Simple Extraction', value: '10–20 min' },
    { icon: 'bi-clock-fill', label: 'Surgical Extraction', value: '30–45 min' },
    { icon: 'bi-house-check', label: 'Recovery', value: '1–3 days' },
    { icon: 'bi-file-earmark-image', label: 'X-Ray Planning', value: 'OPG / CBCT' },
  ],

  ctaTitle: 'Tooth Pain? Book a Same-Day Consultation',
  ctaDesc: 'If you have a painful, broken, or impacted tooth in Tirupati, our oral surgeons can assess and treat you promptly with minimal discomfort.',

  relatedServices: [
    {
      image: '/services/dental-implants.jpg',
      href: '/services/dental-implants',
      title: 'Dental Implants',
      desc: 'The best long-term replacement after extraction — natural look, lifetime durability.',
    },
    {
      image: '/images/dental-clinic-interior.jpg',
      href: '/services/dental-crowns',
      title: 'Dental Crowns & Bridges',
      desc: 'Fixed bridge — a faster alternative to implants for replacing extracted teeth.',
    },
    {
      image: '/services/Root-Canal-Treatment.jpg',
      href: '/services/root-canal',
      title: 'Root Canal Treatment',
      desc: 'We always try to save your tooth with RCT before recommending extraction.',
    },
    {
      image: '/images/about-clinic.png',
      href: '/services/full-mouth-rehab',
      title: 'Full Mouth Rehabilitation',
      desc: 'Comprehensive reconstruction after multiple extractions or complex cases.',
    },
  ],
};

export default function ToothExtractionContent({ overrides = {} }) {
  return <ServicePageLayout data={{ ...serviceData, ...overrides }} />;
}
