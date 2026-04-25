const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({ datasourceUrl: 'mysql://root:root@localhost:8889/meghana-dental' });

async function main() {
  console.log('Seeding database...');

  // ── Services ──────────────────────────────────────────────
  const services = [
    { title: 'Dental Implants', slug: 'dental-implants', shortDesc: 'Permanent titanium tooth roots for a natural-looking, lifelong smile.', icon: 'bi-tooth', image: '/services/dental-implants.jpg', accentColor: '#0ea5e9', sortOrder: 1 },
    { title: 'Root Canal Treatment', slug: 'root-canal', shortDesc: 'Painless, microscope-guided root canal therapy — single-sitting RCT available.', icon: 'bi-activity', image: '/services/Root-Canal-Treatment.jpg', accentColor: '#10b981', sortOrder: 2 },
    { title: 'Orthodontic Treatment', slug: 'orthodontics', shortDesc: 'Ceramic, metal & self-ligating braces for perfectly aligned teeth.', icon: 'bi-align-center', image: '/services/ortho-img-p5-1.jpg', accentColor: '#8b5cf6', sortOrder: 3 },
    { title: 'Clear Aligners', slug: 'aligners', shortDesc: 'Invisible removable transparent trays custom-fitted using 3D scanning.', icon: 'bi-circle', image: '/images/aligners-trays.jpg', accentColor: '#06b6d4', sortOrder: 4 },
    { title: 'Teeth Whitening', slug: 'teeth-whitening', shortDesc: 'Professional in-office laser whitening for a dramatically brighter smile.', icon: 'bi-brightness-high', image: '/services/Teeth-Whitening.jpg', accentColor: '#f59e0b', sortOrder: 5 },
    { title: 'Dentures & Prosthetics', slug: 'dentures', shortDesc: 'Premium BPS dentures, flexible partials & implant-supported dentures.', icon: 'bi-circle-half', image: '/services/Dentures-Prosthetics.jpg', accentColor: '#ec4899', sortOrder: 6 },
    { title: 'Pediatric Dentistry', slug: 'pediatric-dentistry', shortDesc: 'Gentle, fun, fear-free dental care in a kid-friendly environment.', icon: 'bi-emoji-smile', image: '/services/Pediatric-Dentistry.jpg', accentColor: '#f97316', sortOrder: 7 },
    { title: 'Microscope Dentistry', slug: 'microscope-dentistry', shortDesc: '25× magnification precision — only clinic in Tirupati with this technology.', icon: 'bi-zoom-in', image: '/images/microscope-use.jpg', accentColor: '#3b82f6', sortOrder: 8 },
    { title: 'Laser Dentistry', slug: 'laser-dentistry', shortDesc: 'Minimally invasive laser treatments for gum surgery and cavity removal.', icon: 'bi-lightning', image: '/images/microscope-equipment.jpg', accentColor: '#ef4444', sortOrder: 9 },
    { title: 'Gum Treatment', slug: 'gum-treatment', shortDesc: 'Advanced periodontal therapy for healthy gums and lasting oral health.', icon: 'bi-heart-pulse', image: '/services/dental-implants.jpg', accentColor: '#14b8a6', sortOrder: 10 },
    { title: 'Tooth Extraction', slug: 'tooth-extraction', shortDesc: 'Painless extractions including wisdom teeth and impacted teeth.', icon: 'bi-x-circle', image: '/services/dental-implants.jpg', accentColor: '#64748b', sortOrder: 11 },
    { title: 'Smile Makeover', slug: 'smile-makeover', shortDesc: 'Complete smile transformation combining multiple cosmetic procedures.', icon: 'bi-stars', image: '/services/Teeth-Whitening.jpg', accentColor: '#a855f7', sortOrder: 12 },
  ];

  for (const s of services) {
    await prisma.service.upsert({ where: { slug: s.slug }, update: s, create: s });
  }
  console.log('✓ Services seeded');

  // ── Doctors ───────────────────────────────────────────────
  const doctors = [
    {
      name: 'Dr. M. Hemadri',
      qualification: 'MDS — Conservative Dentistry & Endodontics',
      speciality: 'Endodontist & Founder',
      experience: '17+ Years',
      photo: '/images/dr-hemu.jpg',
      bio: 'Dr. Hemadri is the founder and director of Meghana Multi-Speciality Dental Hospital. A distinguished endodontist with 17 years of experience, he completed his MDS from Bapuji Dental College, Davanagere (2007). Expert in single-visit endodontic treatment and complex re-treatment cases. ICOI Fellowship in Implant Dentistry.',
      sortOrder: 1,
    },
    {
      name: 'Dr. Eswar',
      qualification: 'MDS — Oral Surgery Specialist',
      speciality: 'Oral & Maxillofacial Surgeon',
      experience: '15+ Years',
      photo: '/doctors/Eswar.jpeg',
      bio: 'Dr. Eswar is an eminent oral & maxillofacial surgeon with over 15 years of experience. Expert in third molar (wisdom tooth) extractions, impacted tooth surgery, and jaw fracture management.',
      sortOrder: 2,
    },
    {
      name: 'Dr. O.G. Lakshmikar Reddy',
      qualification: 'MDS — Clear Aligner & Braces Specialist',
      speciality: 'Orthodontist',
      experience: '9+ Years',
      photo: '/doctors/Lakshmikar.jpeg',
      bio: 'Dr. Lakshmikar Reddy specialises in the full spectrum of orthodontic treatment — from traditional metal braces and ceramic braces to modern Invisalign and clear aligner systems.',
      sortOrder: 3,
    },
    {
      name: 'Dr. Sandeep Narahari',
      qualification: 'MDS — Gum Specialist & Implant Expert',
      speciality: 'Periodontist & Implantologist',
      experience: '8+ Years',
      photo: '/doctors/Sandeep.jpeg',
      bio: 'Dr. Sandeep Narahari specialises in advanced periodontal flap surgeries, guided bone grafting, and complex implant procedures including All-on-4 and All-on-6 implant placement.',
      sortOrder: 4,
    },
    {
      name: 'Dr. Dinakar Reddy',
      qualification: 'MDS — Prosthetics & Smile Rehabilitation Specialist',
      speciality: 'Prosthodontist',
      experience: '10+ Years',
      photo: '/doctors/Dinakar.jpeg',
      bio: 'Dr. Dinakar Reddy specialises in complete and partial dentures, BPS precision dentures, over-dentures, fixed bridges, and zirconia crowns — crafting restorations with natural aesthetics.',
      sortOrder: 5,
    },
  ];

  for (const d of doctors) {
    const exists = await prisma.doctor.findFirst({ where: { name: d.name } });
    if (!exists) await prisma.doctor.create({ data: d });
  }
  console.log('✓ Doctors seeded');

  // ── Testimonials ──────────────────────────────────────────
  const testimonials = [
    { patientName: 'Gunturu Raveendra', rating: 5, review: 'Meghna Dental clinic is the best laser & Root canal center in Tirupathi', service: 'Laser & Root Canal' },
    { patientName: 'E Giridhar', rating: 5, review: 'Way of treatment is good. Dr. Hemadri sir is having lot of patience and will give reply for all patient queries. Reception also good follow up.', service: 'General Dentistry' },
    { patientName: 'Srivatsava Sharma', rating: 5, review: 'I thank Dr Hemadri Sir for his excellent service. He explained about my problem in detail and provided excellent treatment. Highly recommended!', service: 'General Dentistry' },
    { patientName: 'Chaitanya Subba Reddy', rating: 5, review: 'The treatment provided is excellent and supported by advanced technology. The doctor is highly dedicated and passionate about delivering the best care.', service: 'Advanced Treatment' },
    { patientName: 'P Praveen', rating: 5, review: 'Dr Hemadri sir is having plenty of knowledge in his profession. I had root canal treatment from him, I am 100 percent satisfied with his treatment.', service: 'Root Canal Treatment' },
    { patientName: 'Ratna', rating: 5, review: 'Best dental hospital in Tirupati. Treatment and maintenance are so good. Doctor and staff are very friendly!', service: 'General Dentistry' },
    { patientName: 'Naveen Reddy', rating: 5, review: "Dr. Hemadri is a skilled doctor; he treats well without any complications. I'm completely satisfied by his treatment.", service: 'General Dentistry' },
    { patientName: 'Raghavendra Rao', rating: 5, review: 'Dr Hemadri garu provides quality treatment at Meghana dental clinic. He is an expert in doing RCT.', service: 'Root Canal Treatment' },
  ];

  const existingCount = await prisma.testimonial.count();
  if (existingCount === 0) {
    await prisma.testimonial.createMany({ data: testimonials });
  }
  console.log('✓ Testimonials seeded');

  // ── FAQs ──────────────────────────────────────────────────
  const faqs = [
    { question: 'Is root canal treatment painful?', answer: 'No. At Meghana Dental Hospital, we use advanced local anesthesia techniques combined with our dental microscope with 25× magnification for precision. Most patients feel little to no discomfort. We also offer single-sitting RCT to minimize visits.', sortOrder: 1 },
    { question: 'How long do dental implants last?', answer: 'Dental implants are designed to be permanent — with proper care, they can last a lifetime. The titanium post fuses with your jawbone in a process called osseointegration, creating a stable, natural-feeling tooth.', sortOrder: 2 },
    { question: 'At what age can my child get braces?', answer: 'Orthodontic treatment can typically begin around age 10–14 when most permanent teeth have come in. However, early consultation at age 7–8 helps identify developing issues. Adults can get braces or clear aligners at any age.', sortOrder: 3 },
    { question: 'How often should I visit the dentist?', answer: 'We recommend a dental check-up and professional cleaning every 6 months. Regular visits help detect problems early — including cavities, gum disease, and oral cancer — before they become serious.', sortOrder: 4 },
    { question: 'Do you offer payment plans or EMI options?', answer: 'Yes. We offer flexible payment plans and zero-cost EMI options on major treatments including dental implants, orthodontics, and full-mouth rehabilitation. Speak to our team at reception.', sortOrder: 5 },
    { question: 'What is microscope dentistry and why is it better?', answer: 'Microscope dentistry uses a dental microscope with up to 25× magnification to see and treat dental issues with far greater precision. This means better outcomes for root canals, cavity preparations, and surgical procedures.', sortOrder: 6 },
    { question: 'Are the sterilization standards safe?', answer: 'Absolutely. We follow international infection control protocols including Class B autoclave sterilization for all instruments, disposable single-use items, and strict surface disinfection between patients.', sortOrder: 7 },
    { question: 'Can I book an appointment on WhatsApp?', answer: "Yes! You can message us directly on WhatsApp to book an appointment, ask questions, or get a treatment quote. Tap the WhatsApp button on our website and we'll respond promptly during clinic hours.", sortOrder: 8 },
  ];

  const faqCount = await prisma.faq.count();
  if (faqCount === 0) {
    await prisma.faq.createMany({ data: faqs });
  }
  console.log('✓ FAQs seeded');

  // ── Site Settings ─────────────────────────────────────────
  const settings = [
    { settingKey: 'clinic_name', settingValue: 'Meghana Dental Hospital', settingGroup: 'general' },
    { settingKey: 'phone', settingValue: '+91-98491-58195', settingGroup: 'contact' },
    { settingKey: 'whatsapp', settingValue: '+919849158195', settingGroup: 'contact' },
    { settingKey: 'email', settingValue: 'info@meghanadental.in', settingGroup: 'contact' },
    { settingKey: 'address', settingValue: 'No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501', settingGroup: 'contact' },
    { settingKey: 'primary_color', settingValue: '#0ea5e9', settingGroup: 'theme' },
    { settingKey: 'secondary_color', settingValue: '#10b981', settingGroup: 'theme' },
    { settingKey: 'facebook_url', settingValue: 'https://www.facebook.com/meghanadental', settingGroup: 'social' },
    { settingKey: 'instagram_url', settingValue: 'https://www.instagram.com/meghanadental', settingGroup: 'social' },
    { settingKey: 'youtube_url', settingValue: 'https://www.youtube.com/@meghanadental', settingGroup: 'social' },
    { settingKey: 'hero_title', settingValue: 'Your Smile Deserves the Best Care', settingGroup: 'hero' },
    { settingKey: 'hero_subtitle', settingValue: "Tirupati's most trusted Dental center with 17+ years of excellence. Advanced microscopic guided treatments, Laser assisted painless procedures, and a team of MDS specialists dedicated to your perfect smile.", settingGroup: 'hero' },
    { settingKey: 'patients_count', settingValue: '50,000+', settingGroup: 'stats' },
    { settingKey: 'years_experience', settingValue: '17+', settingGroup: 'stats' },
    { settingKey: 'google_rating', settingValue: '4.9★', settingGroup: 'stats' },
    { settingKey: 'reviews_count', settingValue: '850+', settingGroup: 'stats' },
  ];

  for (const s of settings) {
    await prisma.siteSetting.upsert({ where: { settingKey: s.settingKey }, update: { settingValue: s.settingValue }, create: s });
  }
  console.log('✓ Settings seeded');

  // ── Extra Site Settings (hero/about/footer) ───────────────
  const extraSettings = [
    { settingKey: 'site_url', settingValue: 'https://meghanadental.in', settingGroup: 'general' },
    { settingKey: 'site_tagline', settingValue: 'Best Dental Clinic in Tirupati', settingGroup: 'general' },
    { settingKey: 'logo_url', settingValue: '/logo.png', settingGroup: 'branding' },
    { settingKey: 'favicon_url', settingValue: '/favicon.ico', settingGroup: 'branding' },
    { settingKey: 'hero_image', settingValue: '/images/microscope-treatment.jpg', settingGroup: 'hero' },
    { settingKey: 'hero_badge_text', settingValue: 'Rated 4.9 on Google — 850+ Reviews', settingGroup: 'hero' },
    { settingKey: 'hero_cta_primary_text', settingValue: 'Book Appointment', settingGroup: 'hero' },
    { settingKey: 'hero_cta_primary_link', settingValue: '/contact', settingGroup: 'hero' },
    { settingKey: 'hero_cta_secondary_text', settingValue: 'Chat on WhatsApp', settingGroup: 'hero' },
    { settingKey: 'hero_floating_badge_1', settingValue: 'NABH Certified', settingGroup: 'hero' },
    { settingKey: 'hero_floating_badge_2', settingValue: '25× Microscope', settingGroup: 'hero' },
    { settingKey: 'about_subtitle', settingValue: 'ABOUT MEGHANA DENTAL', settingGroup: 'about' },
    { settingKey: 'about_title', settingValue: '17+ Years of Trusted Dental Care', settingGroup: 'about' },
    { settingKey: 'about_story', settingValue: 'Established with a vision to deliver world-class dental care in Tirupati, Meghana Dental Hospital has grown into a multi-speciality center known for advanced treatments, painless procedures and a patient-first philosophy.', settingGroup: 'about' },
    { settingKey: 'about_image', settingValue: '/images/about-clinic.png', settingGroup: 'about' },
    { settingKey: 'mission_text', settingValue: 'Deliver world-class dental care that improves health, restores confidence and brings genuine smiles — using the most advanced technology, by skilled MDS specialists, in a setting our patients trust.', settingGroup: 'about' },
    { settingKey: 'vision_text', settingValue: 'To be the most trusted multi-speciality dental hospital in South India — recognised for clinical excellence, cutting-edge technology, and a deeply caring patient experience.', settingGroup: 'about' },
    { settingKey: 'footer_about', settingValue: "Tirupati's most trusted multi-speciality dental hospital — 17+ years of excellence, microscope-guided precision, and MDS specialists you can rely on.", settingGroup: 'footer' },
    { settingKey: 'footer_copyright', settingValue: '© 2025 Meghana Dental Hospital. All rights reserved.', settingGroup: 'footer' },
    { settingKey: 'opening_hours', settingValue: 'Mon–Sat: 9:30 AM – 9:00 PM | Sun: 10:00 AM – 2:00 PM', settingGroup: 'contact' },
    { settingKey: 'map_embed_url', settingValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0!2d79.4!3d13.6!', settingGroup: 'contact' },
    { settingKey: 'google_maps_link', settingValue: 'https://maps.google.com/?q=Meghana+Dental+Hospital+Tirupati', settingGroup: 'contact' },
  ];
  for (const s of extraSettings) {
    await prisma.siteSetting.upsert({ where: { settingKey: s.settingKey }, update: { settingValue: s.settingValue }, create: s });
  }
  console.log('✓ Extra settings seeded');

  // ── Hero Stats ────────────────────────────────────────────
  const heroStats = [
    { value: '17+', label: 'Years Experience', sortOrder: 1 },
    { value: '50K+', label: 'Happy Patients', sortOrder: 2 },
    { value: '6+', label: 'Specialist Doctors', sortOrder: 3 },
    { value: '14+', label: 'Dental Services', sortOrder: 4 },
  ];
  if ((await prisma.heroStat.count()) === 0) await prisma.heroStat.createMany({ data: heroStats });
  console.log('✓ Hero stats seeded');

  // ── Marquee Items ─────────────────────────────────────────
  const marqueeItems = [
    'Dental Implants', 'Root Canal Treatment', 'Orthodontic Treatment', 'Clear Aligners',
    'Teeth Whitening', 'Pediatric Dentistry', 'Microscope Dentistry', 'Dentures & Prosthetics',
    'Laser Dentistry', 'Full Mouth Rehab', 'Dental Crowns',
  ].map((text, i) => ({ text, sortOrder: i + 1 }));
  if ((await prisma.marqueeItem.count()) === 0) await prisma.marqueeItem.createMany({ data: marqueeItems });
  console.log('✓ Marquee items seeded');

  // ── About Features ────────────────────────────────────────
  const aboutFeatures = [
    { icon: 'bi-people-fill', title: 'Expert Doctors', desc: 'Team of specialized dentists with decades of experience', sortOrder: 1 },
    { icon: 'bi-cpu', title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise diagnosis & treatment', sortOrder: 2 },
    { icon: 'bi-heart-pulse-fill', title: 'Comfortable Care', desc: 'Pain-free procedures in a relaxing environment', sortOrder: 3 },
    { icon: 'bi-wallet2', title: 'Affordable Pricing', desc: 'Quality dental care at competitive, transparent prices', sortOrder: 4 },
  ];
  if ((await prisma.aboutFeature.count()) === 0) await prisma.aboutFeature.createMany({ data: aboutFeatures });
  console.log('✓ About features seeded');

  // ── Partners (Empanelled) ─────────────────────────────────
  const partners = [
    { name: 'Government of India', logo: '/empanelled/govt-of-india.png', sortOrder: 1 },
    { name: 'ECHS — Ex-servicemen Health Scheme', logo: '/empanelled/echs.png', sortOrder: 2 },
    { name: 'Tirumala Tirupati Devasthanams (TTD)', logo: '/empanelled/ttd.png', sortOrder: 3 },
    { name: 'Andhra Pradesh Police', logo: '/empanelled/ap-police.png', sortOrder: 4 },
    { name: 'APSRTC', logo: '/empanelled/apsrtc.png', sortOrder: 5 },
    { name: 'Southern Power Distribution AP', logo: '/empanelled/southern-power-ap.png', sortOrder: 6 },
    { name: 'APTRANSCO', logo: '/empanelled/aptransco.png', sortOrder: 7 },
    { name: 'BSNL', logo: '/empanelled/bsnl.png', sortOrder: 8 },
    { name: 'India Post', logo: '/empanelled/india-post.png', sortOrder: 9 },
    { name: 'Dr. NTR Vaidya Seva', logo: '/empanelled/ntr-vaidyaseva.png', sortOrder: 10 },
    { name: 'Bank Employees', logo: '/empanelled/bank.png', sortOrder: 11 },
  ];
  if ((await prisma.partner.count()) === 0) await prisma.partner.createMany({ data: partners });
  console.log('✓ Partners seeded');

  // ── Problems ──────────────────────────────────────────────
  const problems = [
    { title: 'Missing Teeth', desc: 'Dental Implants', icon: 'bi-patch-exclamation-fill', color: '#0ea5e9', sortOrder: 1 },
    { title: 'Crooked Teeth', desc: 'Braces / Aligners', icon: 'bi-align-center', color: '#8b5cf6', sortOrder: 2 },
    { title: 'Tooth Pain', desc: 'Root Canal Treatment', icon: 'bi-activity', color: '#3b82f6', sortOrder: 3 },
    { title: 'Stained / Yellow Teeth', desc: 'Teeth Whitening', icon: 'bi-brightness-high-fill', color: '#f59e0b', sortOrder: 4 },
    { title: 'Bleeding Gums', desc: 'Gum Treatment', icon: 'bi-heart-pulse-fill', color: '#10b981', sortOrder: 5 },
    { title: 'Misaligned Bite', desc: 'Clear Aligners', icon: 'bi-gem', color: '#06b6d4', sortOrder: 6 },
    { title: 'Loose / No Teeth', desc: 'Dentures & Implants', icon: 'bi-person-fill', color: '#059669', sortOrder: 7 },
    { title: 'Smile You Hate', desc: 'Smile Makeover', icon: 'bi-stars', color: '#ec4899', sortOrder: 8 },
  ];
  if ((await prisma.problem.count()) === 0) await prisma.problem.createMany({ data: problems });
  console.log('✓ Problems seeded');

  // ── Facilities ────────────────────────────────────────────
  const facilities = [
    { title: 'Dental Microscope (25× Magnification)', desc: '25x magnification — precision dentistry', image: '/images/microscope.jpg', sortOrder: 1 },
    { title: 'Microscope Treatment', desc: 'Doctor performing microscope-guided procedure', image: '/images/microscope-use.jpg', sortOrder: 2 },
    { title: 'Advanced Treatment Room', desc: 'Ergonomic, hygienic treatment suites', image: '/images/microscope-treatment.jpg', sortOrder: 3 },
    { title: 'Precision In Action', desc: 'Magnified view for superior outcomes', image: '/images/microscope-equipment.jpg', sortOrder: 4 },
  ];
  if ((await prisma.facility.count()) === 0) await prisma.facility.createMany({ data: facilities });
  console.log('✓ Facilities seeded');

  // ── Quotes ────────────────────────────────────────────────
  const quotes = [
    { text: 'For you and your family.', icon: 'bi-house-heart-fill', sortOrder: 1 },
    { text: 'A range of easy to manage payment options.', icon: 'bi-credit-card-fill', sortOrder: 2 },
    { text: 'Rejuvenate your smile. Rejuvenate your look.', icon: 'bi-stars', sortOrder: 3 },
    { text: 'Your pain free life starts from here.', icon: 'bi-heart-pulse-fill', sortOrder: 4 },
    { text: 'Individual personalized care.', icon: 'bi-person-check-fill', sortOrder: 5 },
  ];
  if ((await prisma.quote.count()) === 0) await prisma.quote.createMany({ data: quotes });
  console.log('✓ Quotes seeded');

  // ── Menu Items ────────────────────────────────────────────
  const menuItems = [
    // Navbar
    { label: 'Home', href: '/', location: 'navbar', sortOrder: 1 },
    { label: 'About', href: '/about', location: 'navbar', sortOrder: 2 },
    { label: 'Our Services', href: '/services', location: 'navbar', sortOrder: 3 },
    { label: 'Doctors', href: '/doctors', location: 'navbar', sortOrder: 4 },
    { label: 'Testimonials', href: '/testimonials', location: 'navbar', sortOrder: 5 },
    { label: 'Contact', href: '/contact', location: 'navbar', sortOrder: 6 },
    // Footer Quick Links
    { label: 'Home', href: '/', location: 'footer_quick', sortOrder: 1 },
    { label: 'About Us', href: '/about', location: 'footer_quick', sortOrder: 2 },
    { label: 'Services', href: '/services', location: 'footer_quick', sortOrder: 3 },
    { label: 'Our Doctors', href: '/doctors', location: 'footer_quick', sortOrder: 4 },
    { label: 'Testimonials', href: '/testimonials', location: 'footer_quick', sortOrder: 5 },
    { label: 'Book Appointment', href: '/contact', location: 'footer_quick', sortOrder: 6 },
    // Footer Services
    { label: 'Dental Implants', href: '/services/dental-implants', location: 'footer_services', sortOrder: 1 },
    { label: 'Root Canal', href: '/services/root-canal', location: 'footer_services', sortOrder: 2 },
    { label: 'Orthodontics', href: '/services/orthodontics', location: 'footer_services', sortOrder: 3 },
    { label: 'Clear Aligners', href: '/services/aligners', location: 'footer_services', sortOrder: 4 },
    { label: 'Teeth Whitening', href: '/services/teeth-whitening', location: 'footer_services', sortOrder: 5 },
    { label: 'Dental Crowns', href: '/services/dental-crowns', location: 'footer_services', sortOrder: 6 },
    { label: 'Dentures', href: '/services/dentures', location: 'footer_services', sortOrder: 7 },
    { label: 'Gum Treatment', href: '/services/gum-treatment', location: 'footer_services', sortOrder: 8 },
    { label: 'Tooth Extraction', href: '/services/tooth-extraction', location: 'footer_services', sortOrder: 9 },
    { label: 'Laser Dentistry', href: '/services/laser-dentistry', location: 'footer_services', sortOrder: 10 },
    { label: 'Smile Makeover', href: '/services/smile-makeover', location: 'footer_services', sortOrder: 11 },
    { label: 'Full Mouth Rehab', href: '/services/full-mouth-rehab', location: 'footer_services', sortOrder: 12 },
    { label: 'Microscope', href: '/services/microscope-dentistry', location: 'footer_services', sortOrder: 13 },
    { label: 'Pediatric', href: '/services/pediatric-dentistry', location: 'footer_services', sortOrder: 14 },
  ];
  if ((await prisma.menuItem.count()) === 0) await prisma.menuItem.createMany({ data: menuItems });
  console.log('✓ Menu items seeded');

  // ── SEO Meta (per-page defaults) ──────────────────────────
  const seoEntries = [
    { pageKey: 'home', pageTitle: 'Home', metaTitle: 'Best Dental Clinic in Tirupati | Meghana Dental', metaDescription: 'Best dental clinic in Tirupati — 17+ years, MDS specialists, microscope dentistry, implants, root canal, braces & aligners. 50,000+ happy patients.', metaKeywords: 'best dental clinic Tirupati, dentist Tirupati, dental hospital Tirupati', canonical: 'https://meghanadental.in/', ogImage: '/images/about-clinic.png' },
    { pageKey: 'about', pageTitle: 'About', metaTitle: 'About Meghana Dental Hospital | 17+ Years Trusted Care', metaDescription: 'Learn about Meghana Dental Hospital Tirupati — 17+ years, NABH certified, MDS specialists, advanced microscope dentistry, 50,000+ patients served.', metaKeywords: 'about Meghana Dental, dental hospital Tirupati, NABH certified', canonical: 'https://meghanadental.in/about' },
    { pageKey: 'services', pageTitle: 'Services', metaTitle: 'Dental Services Tirupati | All Treatments — Meghana Dental', metaDescription: 'Comprehensive dental services in Tirupati — implants, root canal, braces, aligners, whitening, dentures, microscope & laser dentistry. Book today.', metaKeywords: 'dental services Tirupati, dental treatments', canonical: 'https://meghanadental.in/services' },
    { pageKey: 'doctors', pageTitle: 'Doctors', metaTitle: 'Best Dentists in Tirupati | MDS Specialists — Meghana Dental', metaDescription: 'Meet our team of MDS specialist dentists in Tirupati — endodontists, orthodontists, periodontists, prosthodontists & oral surgeons.', metaKeywords: 'best dentist Tirupati, MDS specialist Tirupati', canonical: 'https://meghanadental.in/doctors' },
    { pageKey: 'testimonials', pageTitle: 'Testimonials', metaTitle: 'Patient Reviews | Meghana Dental Hospital Tirupati', metaDescription: 'Read 850+ verified patient reviews of Meghana Dental Hospital Tirupati. 4.9★ Google rating from happy patients across all dental treatments.', metaKeywords: 'Meghana Dental reviews, patient testimonials Tirupati', canonical: 'https://meghanadental.in/testimonials' },
    { pageKey: 'contact', pageTitle: 'Contact', metaTitle: 'Contact Meghana Dental Hospital Tirupati | Book Appointment', metaDescription: 'Book a dental appointment at Meghana Dental Hospital Tirupati. Call, WhatsApp or visit our clinic in Ashok Nagar. Open Mon–Sat 9:30AM–9PM.', metaKeywords: 'contact Meghana Dental, book dentist Tirupati', canonical: 'https://meghanadental.in/contact' },
    // Service pages
    { pageKey: 'service:dental-implants', pageTitle: 'Dental Implants', metaTitle: 'Dental Implants in Tirupati | Premium Titanium Implants', metaDescription: 'Premium dental implants in Tirupati — single-tooth, All-on-4, All-on-6. Lifetime warranty options. 17+ years expertise. Book a free consultation.', metaKeywords: 'dental implants Tirupati, All-on-4 Tirupati', canonical: 'https://meghanadental.in/services/dental-implants' },
    { pageKey: 'service:root-canal', pageTitle: 'Root Canal', metaTitle: 'Painless Root Canal Treatment Tirupati | Single Sitting', metaDescription: 'Painless, microscope-guided root canal treatment in Tirupati. Single-sitting RCT available. Expert MDS endodontist with 25× magnification. Book now.', metaKeywords: 'root canal Tirupati, painless RCT', canonical: 'https://meghanadental.in/services/root-canal' },
    { pageKey: 'service:orthodontics', pageTitle: 'Orthodontics', metaTitle: 'Braces & Orthodontic Treatment Tirupati | All Ages', metaDescription: 'Modern orthodontic treatment in Tirupati — metal, ceramic, self-ligating braces & clear aligners. MDS orthodontist for all ages. EMI options.', metaKeywords: 'braces Tirupati, orthodontist Tirupati', canonical: 'https://meghanadental.in/services/orthodontics' },
    { pageKey: 'service:aligners', pageTitle: 'Clear Aligners', metaTitle: 'Clear Aligners Tirupati | Invisalign-style Invisible Braces', metaDescription: 'Invisible clear aligners in Tirupati — 3D scanned, custom-fitted trays for adults & teens. Removable, comfortable & nearly invisible. Free consult.', metaKeywords: 'clear aligners Tirupati, invisalign Tirupati', canonical: 'https://meghanadental.in/services/aligners' },
    { pageKey: 'service:teeth-whitening', pageTitle: 'Teeth Whitening', metaTitle: 'Laser Teeth Whitening Tirupati | Same-Day Brighter Smile', metaDescription: 'Professional in-office laser teeth whitening in Tirupati. Same-day results, safe for enamel, dramatic shade improvement. Book a session today.', metaKeywords: 'teeth whitening Tirupati, laser whitening', canonical: 'https://meghanadental.in/services/teeth-whitening' },
    { pageKey: 'service:dentures', pageTitle: 'Dentures', metaTitle: 'Dentures & Prosthetics Tirupati | BPS, Flexible & Implant', metaDescription: 'Premium dentures in Tirupati — complete, partial, BPS, flexible & implant-supported. Natural look & comfortable fit by MDS prosthodontist.', metaKeywords: 'dentures Tirupati, BPS dentures', canonical: 'https://meghanadental.in/services/dentures' },
    { pageKey: 'service:pediatric-dentistry', pageTitle: 'Pediatric Dentistry', metaTitle: "Children's Dentist Tirupati | Kid-Friendly Dental Care", metaDescription: "Gentle, fear-free pediatric dental care in Tirupati. Kid-friendly clinic, fillings, fluoride, sealants & habit counselling for children's healthy smiles.", metaKeywords: 'pediatric dentist Tirupati, children dentist', canonical: 'https://meghanadental.in/services/pediatric-dentistry' },
    { pageKey: 'service:microscope-dentistry', pageTitle: 'Microscope Dentistry', metaTitle: 'Microscope Dentistry Tirupati | 25× Magnification Precision', metaDescription: 'Microscope-guided dentistry in Tirupati with 25× magnification — only clinic with this technology. Higher success rate for RCT, fillings & surgery.', metaKeywords: 'microscope dentistry Tirupati', canonical: 'https://meghanadental.in/services/microscope-dentistry' },
    { pageKey: 'service:laser-dentistry', pageTitle: 'Laser Dentistry', metaTitle: 'Laser Dentistry Tirupati | Painless Gum & Cavity Treatment', metaDescription: 'Minimally invasive laser dentistry in Tirupati — painless gum surgery, cavity removal, frenectomy & teeth whitening. Faster healing, no stitches.', metaKeywords: 'laser dentistry Tirupati', canonical: 'https://meghanadental.in/services/laser-dentistry' },
    { pageKey: 'service:gum-treatment', pageTitle: 'Gum Treatment', metaTitle: 'Gum Treatment Tirupati | Periodontist & Bleeding Gum Care', metaDescription: 'Advanced gum treatment in Tirupati by MDS periodontist — scaling, root planing, flap surgery & laser gum therapy. Healthy gums for life.', metaKeywords: 'gum treatment Tirupati, periodontist', canonical: 'https://meghanadental.in/services/gum-treatment' },
    { pageKey: 'service:tooth-extraction', pageTitle: 'Tooth Extraction', metaTitle: 'Painless Tooth Extraction Tirupati | Wisdom Tooth Surgery', metaDescription: 'Painless tooth extractions in Tirupati including wisdom tooth and impacted tooth surgery. Done by MDS oral & maxillofacial surgeon.', metaKeywords: 'tooth extraction Tirupati, wisdom tooth Tirupati', canonical: 'https://meghanadental.in/services/tooth-extraction' },
    { pageKey: 'service:smile-makeover', pageTitle: 'Smile Makeover', metaTitle: 'Smile Makeover Tirupati | Cosmetic Dental Transformation', metaDescription: 'Complete smile makeover in Tirupati — veneers, whitening, crowns & orthodontics combined for a stunning new smile. EMI options available.', metaKeywords: 'smile makeover Tirupati, cosmetic dentistry', canonical: 'https://meghanadental.in/services/smile-makeover' },
    { pageKey: 'service:dental-crowns', pageTitle: 'Dental Crowns', metaTitle: 'Dental Crowns & Bridges Tirupati | Zirconia, e.max & PFM', metaDescription: 'Premium dental crowns & bridges in Tirupati — zirconia, e.max & PFM options. Natural-looking, long-lasting restorations by MDS prosthodontist.', metaKeywords: 'dental crowns Tirupati, zirconia crowns', canonical: 'https://meghanadental.in/services/dental-crowns' },
    { pageKey: 'service:full-mouth-rehab', pageTitle: 'Full Mouth Rehabilitation', metaTitle: 'Full Mouth Rehabilitation Tirupati | Complete Reconstruction', metaDescription: 'Complete full mouth rehabilitation in Tirupati — implants, crowns, orthodontics combined. EMI options. Restore function and aesthetics fully.', metaKeywords: 'full mouth rehab Tirupati', canonical: 'https://meghanadental.in/services/full-mouth-rehab' },
  ];
  for (const s of seoEntries) {
    await prisma.seoMeta.upsert({ where: { pageKey: s.pageKey }, update: s, create: s });
  }
  console.log('✓ SEO meta seeded');

  console.log('Database seeded successfully!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
