import ServicePageLayout from './ServicePageLayout';

const serviceData = {
  accent: '#0EA5A0',
  contentImage: '/services/Pediatric-Dentistry.jpg',

  gallery: [
    { src: '/services/Pediatric-Dentistry.jpg', caption: 'Pedodontist examining a young patient with braces during a routine check-up' },
    { src: '/images/children-dentist.jpg', caption: 'Gentle, child-friendly dental examination in progress' },
    { src: '/images/fluoride-kids.png', caption: 'Why fluoride varnish 4 times a year matters — patient education poster', contain: true },
    { src: '/images/children-happy.png', caption: 'Happy, anxiety-free children after a fear-free visit at Meghana Dental', contain: true },
  ],

  overview:
    'Paediatric dentistry focuses on the oral health of infants, children, and adolescents. Human teeth start erupting from the age of 6 months, and between 6 months and 6 years children develop their full set of primary "milk" teeth. By the age of 6–7 years, milk teeth start to fall out and the permanent set begins to appear. Many parents ignore problems with milk teeth — but untreated decay, premature loss, and bad oral habits at this stage directly affect the permanent teeth that follow. The main goals of paediatric dentistry are to track jaw expansion and tooth development, perform regular cleanings, deliver early interceptive orthodontics, provide preventive care, and manage dental injuries. At Meghana Dental Hospital, Tirupati, our pedodontists are concerned with your child\'s comfort and welfare at all times — combining exceptional expertise with genuine care to keep your child\'s smile healthy for a lifetime.',

  highlights: [
    { icon: 'bi-heart-fill', text: 'Gentle & Fear-Free Care' },
    { icon: 'bi-person-badge-fill', text: 'MDS Pedodontist Specialist' },
    { icon: 'bi-house-heart-fill', text: 'Child-Friendly Environment' },
  ],

  conditions: [
    { icon: 'bi-droplet-fill', label: 'Cavities & deep caries in milk teeth (needs filling or pulpectomy)' },
    { icon: 'bi-hourglass-split', label: 'Early or delayed loss of baby teeth' },
    { icon: 'bi-hand-thumbs-up-fill', label: 'Thumb sucking & finger habits' },
    { icon: 'bi-chat-dots-fill', label: 'Tongue thrusting habit affecting tooth alignment' },
    { icon: 'bi-arrows-collapse', label: 'Teeth grinding (bruxism) in children' },
    { icon: 'bi-wind', label: 'Mouth breathing causing dental & facial changes' },
    { icon: 'bi-shield-slash-fill', label: 'Deep grooves at high risk of cavities (need sealants)' },
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
    {
      icon: 'bi-tools',
      title: 'Habit-Breaking Appliances',
      desc: 'Thumb sucking, tongue thrusting, mouth breathing & teeth grinding can cause malocclusions. Our custom appliances gently correct these habits early.',
    },
    {
      icon: 'bi-tooth',
      title: 'Pulpectomy & Pediatric Crowns',
      desc: 'Deep cavities involving the pulp are saved with pulpectomy and restored using strip, polycarbonate, metal, or zirconium crowns — preserving the milk tooth until natural exfoliation.',
    },
  ],

  process: [
    {
      title: 'Regular Check-ups, Cleaning & Education',
      desc: 'We monitor your child\'s growth, oral development, and detect problems early. Every 6 months we perform professional cleaning to remove plaque and prevent cavities, and teach kids and parents the right brushing & flossing techniques along with healthy nutrition advice. Routine visits also catch issues early — when treatment is minimal.',
    },
    {
      title: 'Fluoride Treatments — Varnish & Gel Application',
      desc: 'Topical fluoride strengthens enamel and protects against tooth decay. At Meghana Dental we apply fluoride varnish or fluoride gel (using a soft tray) as a preventive measure. Quick, painless, and recommended 2–4 times a year for children at moderate-to-high cavity risk.',
    },
    {
      title: 'Dental Sealants on Chewing Surfaces',
      desc: 'The deep grooves on the chewing surfaces of permanent molars trap bacteria and food. A thin protective resin coating is bonded onto these grooves to physically block decay — protecting the tooth for years. Most cost-effective preventive treatment available.',
    },
    {
      title: 'Fillings & Pulpectomy for Cavities',
      desc: 'Small cavities are restored with child-friendly tooth-coloured filling materials. Deeper caries that involve the pulp require a procedure called Pulpectomy — the infected pulp tissue is removed and the canals are filled with resorbable materials such as MTA, Zinc Oxide Eugenol, or Iodoform paste. The tooth is then restored with a metal, polycarbonate, strip, or zirconium crown for full protection.',
    },
    {
      title: 'Habit-Breaking Appliances',
      desc: 'Thumb sucking, tongue thrusting, teeth grinding, and mouth breathing are common childhood oral habits. If left uncorrected they cause dental malocclusions — protruded front teeth, open bite, narrow arches and more. We design custom habit-breaking appliances that gently and effectively stop these habits, allowing the teeth and jaws to develop normally.',
    },
    {
      title: 'Emergency Care & Dental Injury Management',
      desc: 'Falls and sports injuries can chip, fracture, or knock out a child\'s teeth. Quick action makes the difference between saving and losing the tooth. Our team is trained in paediatric dental trauma — assessing the injury, splinting loose teeth, and protecting developing permanent teeth underneath.',
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
    {
      q: 'What is Pulpectomy and when does my child need it?',
      a: 'Pulpectomy is a root canal procedure for milk teeth — performed when deep decay reaches the pulp (nerve). The infected pulp tissue is gently removed and the canals are filled with resorbable materials such as MTA, Zinc Oxide Eugenol, or Iodoform paste. The tooth is then restored with a metal, polycarbonate, strip, or zirconium crown. This saves the natural milk tooth until it is ready to fall out at the right time, preserving space for the permanent tooth.',
    },
    {
      q: 'My child has thumb sucking / mouth breathing habit — can it be fixed?',
      a: 'Yes. Thumb sucking, tongue thrusting, teeth grinding, and mouth breathing are common but cause significant dental malocclusions if left uncorrected — protruded front teeth, open bite, narrow upper jaw, and more. We design custom habit-breaking appliances that gently and effectively help your child stop the habit, allowing the teeth and jaws to develop normally. Best results are achieved when started before age 7.',
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
