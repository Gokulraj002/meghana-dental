import Link from 'next/link';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Dental Implants',
    desc: 'Permanent titanium tooth roots for a natural-looking, lifelong smile that functions like real teeth.',
    tag: 'Most Popular',
    image: '/services/dental-implants.jpg',
    link: '/services/dental-implants',
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Painless, microscope-guided root canal therapy — single-sitting RCT available for quick recovery.',
    tag: 'Painless',
    image: '/services/Root-Canal-Treatment.jpg',
    link: '/services/root-canal',
  },
  {
    title: 'Orthodontic Treatment',
    desc: 'Ceramic, metal & self-ligating braces for perfectly aligned teeth and confident jaw correction.',
    tag: 'All Ages',
    image: '/images/ortho-self-ligating-braces.jpg',
    link: '/services/orthodontics',
  },
  {
    title: 'Clear Aligners',
    desc: 'Invisible, removable transparent trays custom-fitted using 3D scanning — discreet smile correction.',
    tag: 'Invisible',
    image: '/images/aligners-trays.jpg',
    link: '/services/aligners',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional in-office laser whitening for a dramatically brighter, more confident smile.',
    tag: 'Same Day',
    image: '/services/Teeth-Whitening.jpg',
    link: '/services/teeth-whitening',
  },
  {
    title: 'Dentures & Prosthetics',
    desc: 'Premium BPS dentures, flexible partials & implant-supported dentures crafted for a perfect fit.',
    tag: 'Premium',
    image: '/services/Dentures-Prosthetics.jpg',
    link: '/services/dentures',
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, fun, fear-free dental care in a kid-friendly environment for confident young smiles.',
    tag: 'Kids Friendly',
    image: '/services/Pediatric-Dentistry.jpg',
    link: '/services/pediatric-dentistry',
  },
  {
    title: 'Microscope Dentistry',
    desc: 'Carl Zeiss 25× microscope-enhanced precision — the only clinic in Tirupati with this technology.',
    tag: 'Advanced',
    image: '/images/microscope-use.jpg',
    link: '/services/microscope-dentistry',
  },
  {
    title: 'Laser Dentistry',
    desc: 'Minimally invasive laser treatments for gum surgery, cavity removal & pain-free dental care.',
    tag: 'Minimally Invasive',
    image: '/images/microscope-equipment.jpg',
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
            <ServiceCard key={index} service={service} />
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
