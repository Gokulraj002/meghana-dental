import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { getServices } from '@/lib/content';

const STATIC_SERVICES = [
  { id: 1, title: 'Dental Implants', shortDesc: 'Permanent titanium tooth roots for a natural-looking, lifelong smile.', tag: 'Most Popular', image: '/services/dental-implants.jpg', slug: 'dental-implants', accentColor: '#0ea5e9', icon: 'bi-tooth' },
  { id: 2, title: 'Root Canal Treatment', shortDesc: 'Painless, microscope-guided RCT — single-sitting available.', tag: 'Painless', image: '/services/Root-Canal-Treatment.jpg', slug: 'root-canal', accentColor: '#10b981', icon: 'bi-activity' },
  { id: 3, title: 'Orthodontic Treatment', shortDesc: 'Ceramic, metal & self-ligating braces for perfectly aligned teeth.', tag: 'All Ages', image: '/services/ortho-img-p5-1.jpg', slug: 'orthodontics', accentColor: '#8b5cf6', icon: 'bi-align-center' },
  { id: 4, title: 'Clear Aligners', shortDesc: 'Invisible, removable trays custom-fitted using 3D scanning.', tag: 'Invisible', image: '/images/aligners-trays.jpg', slug: 'aligners', accentColor: '#06b6d4', icon: 'bi-circle' },
  { id: 5, title: 'Teeth Whitening', shortDesc: 'Professional in-office laser whitening for a brighter smile.', tag: 'Same Day', image: '/services/Teeth-Whitening.jpg', slug: 'teeth-whitening', accentColor: '#f59e0b', icon: 'bi-brightness-high' },
  { id: 6, title: 'Dentures & Prosthetics', shortDesc: 'Premium BPS dentures, flexible partials & implant-supported dentures.', tag: 'Premium', image: '/services/Dentures-Prosthetics.jpg', slug: 'dentures', accentColor: '#ec4899', icon: 'bi-circle-half' },
  { id: 7, title: 'Pediatric Dentistry', shortDesc: 'Gentle, fun, fear-free dental care in a kid-friendly environment.', tag: 'Kids Friendly', image: '/services/Pediatric-Dentistry.jpg', slug: 'pediatric-dentistry', accentColor: '#f97316', icon: 'bi-emoji-smile' },
  { id: 8, title: 'Microscope Dentistry', shortDesc: '25× magnification precision — only clinic in Tirupati with this.', tag: 'Advanced', image: '/images/microscope-use.jpg', slug: 'microscope-dentistry', accentColor: '#3b82f6', icon: 'bi-zoom-in' },
  { id: 9, title: 'Laser Dentistry', shortDesc: 'Minimally invasive laser treatments for gum surgery & cavity removal.', tag: 'Minimally Invasive', image: '/images/microscope-equipment.jpg', slug: 'laser-dentistry', accentColor: '#ef4444', icon: 'bi-lightning' },
  { id: 10, title: 'Gum Treatment', shortDesc: 'Advanced periodontal therapy for healthy gums and lasting oral health.', tag: null, image: '/services/dental-implants.jpg', slug: 'gum-treatment', accentColor: '#14b8a6', icon: 'bi-heart-pulse' },
  { id: 11, title: 'Tooth Extraction', shortDesc: 'Painless extractions including wisdom teeth and impacted teeth.', tag: null, image: '/services/dental-implants.jpg', slug: 'tooth-extraction', accentColor: '#64748b', icon: 'bi-x-circle' },
  { id: 12, title: 'Smile Makeover', shortDesc: 'Complete smile transformation combining multiple cosmetic procedures.', tag: null, image: '/services/Teeth-Whitening.jpg', slug: 'smile-makeover', accentColor: '#a855f7', icon: 'bi-stars' },
  { id: 13, title: 'Dental Crowns & Bridges', shortDesc: 'Premium zirconia, e.max & PFM crowns & bridges — natural-looking restorations.', tag: null, image: '/images/dental-clinic-interior.jpg', slug: 'dental-crowns', accentColor: '#64748b', icon: 'bi-award' },
  { id: 14, title: 'Full Mouth Rehabilitation', shortDesc: 'Complete smile reconstruction with implants, crowns & orthodontics. EMI available.', tag: null, image: '/images/about-clinic.png', slug: 'full-mouth-rehab', accentColor: '#a855f7', icon: 'bi-heart' },
];

// Normalize DB row → component shape
function normalize(s) {
  return {
    id: s.id,
    title: s.title,
    desc: s.shortDesc || s.description || '',
    tag: null,
    image: s.image || null,
    link: `/services/${s.slug}`,
    accentColor: s.accentColor || '#0ea5e9',
    icon: s.icon || 'bi-heart-pulse',
  };
}

export default async function ServicesSection() {
  const rows = await getServices();
  let services = rows.length > 0 ? rows.map(normalize) : [];

  if (services.length === 0) {
    services = STATIC_SERVICES.map(s => ({
      ...s, desc: s.shortDesc, link: `/services/${s.slug}`,
    }));
  }

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR SERVICES</span>
          <h2>Comprehensive Dental Solutions</h2>
          <p>Advanced dental treatments using the latest technology to ensure the best outcomes for every patient.</p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} />
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link href="/services" className="btn-hero-primary" style={{ textDecoration: 'none' }}>
            View All 12+ Services <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
