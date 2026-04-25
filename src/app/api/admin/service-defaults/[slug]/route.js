import { NextResponse } from 'next/server';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

function authCheck(r) {
  const t = getTokenFromRequest(r);
  return t ? verifyToken(t) : null;
}

/** Hero-specific defaults (image, title, description, hero stats) per slug */
const HERO_DEFAULTS = {
  'aligners': {
    heroImage: '/images/aligners-wearing.jpg',
    titleBefore: 'Clear',
    titleHighlight: 'Aligners',
    titleAfter: ' in Tirupati',
    description: "Straighten your teeth discreetly in Tirupati with custom-fitted, transparent clear aligners — no metal braces, no wires, just a confident smile at your own pace.",
    stats: [
      { icon: 'bi-layers-fill', label: 'Aligner Sets', value: '14–26 trays' },
      { icon: 'bi-clock-fill', label: 'Daily Wear', value: '20–22 hrs/day' },
      { icon: 'bi-arrow-repeat', label: 'Change Every', value: '1–2 weeks' },
      { icon: 'bi-calendar-range', label: 'Total Duration', value: '6–18 months' },
    ],
  },
  'dental-crowns': {
    heroImage: '/images/about-clinic.png',
    titleBefore: 'Dental Crowns',
    titleHighlight: '& Bridges',
    titleAfter: ' in Tirupati',
    description: "Protect damaged teeth and replace missing ones with premium zirconia, e.max, and PFM crowns. Natural-looking, long-lasting restorations crafted by specialist prosthodontists in Tirupati.",
    stats: [
      { icon: 'bi-gem', label: 'Crown Types', value: 'Zirconia, e.max, PFM' },
      { icon: 'bi-calendar-event', label: 'Appointments', value: '2 Visits' },
      { icon: 'bi-clock-history', label: 'Lifespan', value: '15–25+ Years' },
      { icon: 'bi-clock', label: 'Lab Time', value: '3–5 Working Days' },
    ],
  },
  'dental-implants': {
    heroImage: '/services/dental-implants.jpg',
    titleBefore: 'Dental',
    titleHighlight: 'Implants',
    titleAfter: ' in Tirupati',
    description: "Restore your smile permanently with world-class dental implants in Tirupati. Our MDS specialists use cutting-edge titanium implant systems for natural-looking, lifelong tooth replacement.",
    stats: [
      { icon: 'bi-clock', label: 'Surgery Duration', value: '30–90 min' },
      { icon: 'bi-calendar', label: 'Healing Time', value: '2–3 months' },
      { icon: 'bi-shield-check', label: 'Success Rate', value: '95%+' },
      { icon: 'bi-heart-fill', label: 'Lifespan', value: '20+ years' },
    ],
  },
  'dentures': {
    heroImage: '/services/Dentures-Prosthetics.jpg',
    titleBefore: 'Dentures &',
    titleHighlight: 'Prosthetics',
    titleAfter: ' in Tirupati',
    description: "Restore your complete smile in Tirupati with premium denture solutions — BPS precision dentures, flexible partials, and implant-supported options for maximum comfort and a natural appearance.",
    stats: [
      { icon: 'bi-calendar', label: 'Treatment Visits', value: '4–5 visits' },
      { icon: 'bi-clock-history', label: 'Lifespan', value: '5–8+ years' },
      { icon: 'bi-person-check-fill', label: 'Specialist', value: 'Prosthodontist' },
      { icon: 'bi-list-ul', label: 'Types Available', value: '5 types' },
    ],
  },
  'full-mouth-rehab': {
    heroImage: '/services/fmr-before-after-1.jpg',
    titleBefore: 'Full Mouth',
    titleHighlight: 'Rehabilitation',
    titleAfter: ' in Tirupati',
    description: "Complete smile reconstruction for patients with multiple damaged, decayed, or missing teeth. Our multi-specialist team in Tirupati restores your oral health, function, and confidence — all under one roof.",
    stats: [
      { icon: 'bi-calendar2-range', label: 'Duration', value: '3–4 Months' },
      { icon: 'bi-people-fill', label: 'Specialists', value: 'Full Team On-Site' },
      { icon: 'bi-laptop', label: 'Smile Preview', value: 'Digital Design' },
      { icon: 'bi-credit-card', label: 'Payment', value: 'EMI Available' },
    ],
  },
  'gum-treatment': {
    heroImage: '/services/Gum-Treatment.jpg',
    titleBefore: 'Gum',
    titleHighlight: 'Treatment',
    titleAfter: ' in Tirupati',
    description: "Stop bleeding gums and protect your smile. Our MDS periodontist in Tirupati provides complete periodontal care — from professional scaling to advanced laser gum surgery and bone grafting.",
    stats: [
      { icon: 'bi-activity', label: 'Scaling Session', value: '30–60 min' },
      { icon: 'bi-calendar2', label: 'Deep Cleaning', value: '1–2 sessions' },
      { icon: 'bi-calendar-check', label: 'Maintenance', value: 'Every 3–6 months' },
      { icon: 'bi-lightning', label: 'Laser Therapy', value: 'Available' },
    ],
  },
  'laser-dentistry': {
    heroImage: '/images/about-clinic.png',
    titleBefore: 'Laser',
    titleHighlight: 'Dentistry',
    titleAfter: ' in Tirupati',
    description: "Painless, drill-free dental treatments using advanced Diode laser technology. Gum contouring, cavity treatment, ulcer healing, and more — all with minimal discomfort and faster healing.",
    stats: [
      { icon: 'bi-lightning-charge', label: 'Technology', value: 'Diode Laser' },
      { icon: 'bi-clock', label: 'Procedure Time', value: '5–60 min' },
      { icon: 'bi-house-check', label: 'Recovery', value: 'Same Day' },
      { icon: 'bi-droplet-half', label: 'Bleeding', value: 'Minimal to None' },
    ],
  },
  'microscope-dentistry': {
    heroImage: '/images/microscope-use.jpg',
    titleBefore: 'Microscope',
    titleHighlight: 'Dentistry',
    titleAfter: ' in Tirupati',
    description: "Tirupati's most precise dental care — powered by dental operating microscope with 25× magnification. See more, treat better, heal faster. Available only at Meghana Dental Hospital.",
    stats: [
      { icon: 'bi-search', label: 'Magnification', value: 'Up to 25×' },
      { icon: 'bi-patch-check', label: 'Technology', value: 'Operating Microscope' },
      { icon: 'bi-geo-alt-fill', label: 'Availability', value: 'Only in Tirupati' },
      { icon: 'bi-award', label: 'Experience', value: '17+ Years' },
    ],
  },
  'orthodontics': {
    heroImage: '/images/ortho-metal-braces.jpg',
    titleBefore: 'Orthodontic',
    titleHighlight: 'Treatment',
    titleAfter: ' in Tirupati',
    description: "Tirupati's trusted orthodontist for braces and teeth alignment. We deliver the right treatment after precise evaluation using advanced 3D oral scanners — for a confident, balanced smile.",
    stats: [
      { icon: 'bi-calendar-range', label: 'Treatment Duration', value: '12–24 months' },
      { icon: 'bi-arrow-repeat', label: 'Visit Frequency', value: 'Every 4–6 wks' },
      { icon: 'bi-person-fill', label: 'Minimum Age', value: '7 years' },
      { icon: 'bi-shield-check', label: 'Technology', value: '3D Oral Scanner' },
    ],
  },
  'pediatric-dentistry': {
    heroImage: '/services/Pediatric-Dentistry.jpg',
    titleBefore: 'Pediatric',
    titleHighlight: 'Dentistry',
    titleAfter: ' in Tirupati',
    description: "Tirupati's most loved children's dental clinic — gentle, compassionate, and fun. From baby teeth to braces, we make every dental visit a positive experience for your little ones.",
    stats: [
      { icon: 'bi-calendar-heart', label: 'First Visit Age', value: 'By age 1' },
      { icon: 'bi-arrow-repeat', label: 'Check-up Frequency', value: 'Every 6 months' },
      { icon: 'bi-shield-fill-check', label: 'Fluoride Varnish', value: '2–4 times/year' },
      { icon: 'bi-clock-fill', label: 'Sealant Age', value: 'Age 6 & 12' },
    ],
  },
  'root-canal': {
    heroImage: '/services/Root-Canal-Treatment.jpg',
    titleBefore: 'Root Canal',
    titleHighlight: 'Treatment',
    titleAfter: ' in Tirupati',
    description: "Save your natural teeth with Tirupati's most advanced root canal therapy — single-sitting, painless, and microscope-guided for precision results you can count on.",
    stats: [
      { icon: 'bi-clock', label: 'Duration', value: '30–60 min' },
      { icon: 'bi-calendar-check', label: 'Sittings', value: '1–2 visits' },
      { icon: 'bi-search', label: 'Microscope', value: '25× Magnification' },
      { icon: 'bi-activity', label: 'Recovery', value: 'Same day' },
    ],
  },
  'smile-makeover': {
    heroImage: '/services/smile-makeover-cover.jpg',
    titleBefore: 'Smile',
    titleHighlight: 'Makeover',
    titleAfter: ' in Tirupati',
    description: "Transform your smile with our personalised smile makeover programme in Tirupati. Digital Smile Design, porcelain veneers, whitening, and more — see your perfect smile before treatment starts.",
    stats: [
      { icon: 'bi-laptop', label: 'Digital Design', value: 'Included' },
      { icon: 'bi-gem', label: 'Veneers', value: 'Porcelain & Composite' },
      { icon: 'bi-calendar2-range', label: 'Duration', value: '1 Visit – 9 Months' },
      { icon: 'bi-clock-history', label: 'Veneer Lifespan', value: '10–15+ Years' },
    ],
  },
  'teeth-whitening': {
    heroImage: '/services/Teeth-Whitening01.jpg',
    titleBefore: 'Teeth Whitening &',
    titleHighlight: 'Cosmetic Dentistry',
    titleAfter: ' in Tirupati',
    description: "Unlock a brighter, more confident smile in Tirupati — professional laser whitening, smile makeovers, veneers, and complete cosmetic dental transformations at Meghana Dental Hospital.",
    stats: [
      { icon: 'bi-clock', label: 'In-Office Duration', value: '45–60 min' },
      { icon: 'bi-brightness-high-fill', label: 'Shade Improvement', value: 'Up to 8 shades' },
      { icon: 'bi-calendar-check', label: 'Results Last', value: '1–3 years' },
      { icon: 'bi-house-fill', label: 'Take-Home Kit', value: '2–3 weeks' },
    ],
  },
  'tooth-extraction': {
    heroImage: '/images/microscope-treatment.jpg',
    titleBefore: 'Tooth',
    titleHighlight: 'Extraction',
    titleAfter: ' in Tirupati',
    description: "Safe, painless tooth extraction and wisdom tooth removal in Tirupati. Our experienced oral surgeons use OPG X-ray planning for comfortable, precise procedures with minimal recovery time.",
    stats: [
      { icon: 'bi-clock', label: 'Simple Extraction', value: '10–20 min' },
      { icon: 'bi-clock-fill', label: 'Surgical Extraction', value: '30–45 min' },
      { icon: 'bi-house-check', label: 'Recovery', value: '1–3 days' },
      { icon: 'bi-file-earmark-image', label: 'X-Ray Planning', value: 'OPG Included' },
    ],
  },
};

/** Dynamic import map — only loads the module for the requested slug */
const CONTENT_MODULES = {
  'aligners':            () => import('@/components/ServicePages/AlignersContent'),
  'dental-crowns':       () => import('@/components/ServicePages/DentalCrownsContent'),
  'dental-implants':     () => import('@/components/ServicePages/DentalImplantsContent'),
  'dentures':            () => import('@/components/ServicePages/DenturesContent'),
  'full-mouth-rehab':    () => import('@/components/ServicePages/FullMouthRehabContent'),
  'gum-treatment':       () => import('@/components/ServicePages/GumTreatmentContent'),
  'laser-dentistry':     () => import('@/components/ServicePages/LaserDentistryContent'),
  'microscope-dentistry':() => import('@/components/ServicePages/MicroscopeContent'),
  'orthodontics':        () => import('@/components/ServicePages/OrthodonticsContent'),
  'pediatric-dentistry': () => import('@/components/ServicePages/PediatricContent'),
  'root-canal':          () => import('@/components/ServicePages/RootCanalContent'),
  'smile-makeover':      () => import('@/components/ServicePages/SmileMakeoverContent'),
  'teeth-whitening':     () => import('@/components/ServicePages/TeethWhiteningContent'),
  'tooth-extraction':    () => import('@/components/ServicePages/ToothExtractionContent'),
};

export async function GET(request, { params }) {
  const { slug } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const heroDefaults = HERO_DEFAULTS[slug];
  if (!heroDefaults) return NextResponse.json({ error: 'Service not found' }, { status: 404 });

  let contentData = {};
  const loadModule = CONTENT_MODULES[slug];
  if (loadModule) {
    try {
      const mod = await loadModule();
      // serviceData is exported as named export from each content component
      contentData = mod.serviceData || {};
    } catch { /* fall back to empty */ }
  }

  // Merge: content data first, then hero defaults (hero fields take precedence)
  return NextResponse.json({
    ...contentData,
    ...heroDefaults,
  });
}
