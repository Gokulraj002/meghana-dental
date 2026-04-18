import Link from 'next/link';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Dental Implants',
    desc: 'Permanent titanium tooth roots for a natural-looking, lifelong smile that functions like real teeth.',
    icon: 'bi-hospital-fill',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0d9488 100%)',
    accent: '#0ea5e9',
    image: '/services/dental-implants.jpg',
    link: '/services/dental-implants',
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Painless, microscope-guided root canal therapy — single-sitting RCT available for quick recovery.',
    icon: 'bi-activity',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
    accent: '#3b82f6',
    image: '/services/Root-Canal-Treatment.jpg',
    link: '/services/root-canal',
  },
  {
    title: 'Orthodontic Treatment',
    desc: 'Ceramic, metal & self-ligating braces for perfectly aligned teeth and confident jaw correction.',
    icon: 'bi-emoji-smile',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #db2777 100%)',
    accent: '#8b5cf6',
    image: '/images/ortho-self-ligating-braces.jpg',
    link: '/services/orthodontics',
  },
  {
    title: 'Clear Aligners',
    desc: 'Invisible, removable transparent trays custom-fitted using 3D scanning — discreet smile correction.',
    icon: 'bi-gem',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    accent: '#0891b2',
    image: '/images/aligners-trays.jpg',
    link: '/services/aligners',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional in-office laser whitening for a dramatically brighter, more confident smile.',
    icon: 'bi-brightness-high-fill',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
    accent: '#ea580c',
    image: '/services/Teeth-Whitening.jpg',
    link: '/services/teeth-whitening',
  },
  {
    title: 'Dentures & Prosthetics',
    desc: 'Premium BPS dentures, flexible partials & implant-supported dentures crafted for a perfect fit.',
    icon: 'bi-person-fill',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accent: '#10b981',
    image: '/services/Dentures-Prosthetics.jpg',
    link: '/services/dentures',
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, fun, fear-free dental care in a kid-friendly environment for confident young smiles.',
    icon: 'bi-heart-fill',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    accent: '#ec4899',
    image: '/services/Pediatric-Dentistry.jpg',
    link: '/services/pediatric-dentistry',
  },
  {
    title: 'Microscope Dentistry',
    desc: 'Carl Zeiss 25× microscope-enhanced precision — the only clinic in Tirupati with this technology.',
    icon: 'bi-search',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #0f766e 100%)',
    accent: '#4f46e5',
    image: '/images/microscope-use.jpg',
    link: '/services/microscope-dentistry',
  },
  {
    title: 'Laser Dentistry',
    desc: 'Minimally invasive laser treatments for gum surgery, cavity removal & pain-free dental care.',
    icon: 'bi-lightning-fill',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    accent: '#f97316',
    image: '/images/dental-equipment.jpg',
    link: '/services/laser-dentistry',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR SERVICES</span>
          <h2>Comprehensive Dental Solutions</h2>
          <p>
            Advanced dental treatments using the latest technology to ensure the
            best outcomes for every patient.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
