import Link from 'next/link';

const serviceLinks = [
  { label: 'Dental Implants',          href: '/services/dental-implants' },
  { label: 'Root Canal Treatment',     href: '/services/root-canal' },
  { label: 'Orthodontic Treatment',    href: '/services/orthodontics' },
  { label: 'Clear Aligners',           href: '/services/aligners' },
  { label: 'Teeth Whitening',          href: '/services/teeth-whitening' },
  { label: 'Dental Crowns & Bridges',  href: '/services/dental-crowns' },
  { label: 'Dentures & Prosthetics',   href: '/services/dentures' },
  { label: 'Gum Treatment',            href: '/services/gum-treatment' },
  { label: 'Tooth Extraction',         href: '/services/tooth-extraction' },
  { label: 'Laser Dentistry',          href: '/services/laser-dentistry' },
  { label: 'Smile Makeover',           href: '/services/smile-makeover' },
  { label: 'Full Mouth Rehab',         href: '/services/full-mouth-rehab' },
  { label: 'Microscope Dentistry',     href: '/services/microscope-dentistry' },
  { label: 'Pediatric Dentistry',      href: '/services/pediatric-dentistry' },
];

export default function FooterServices() {
  return (
    <div className="col-lg-3 col-md-4">
      <h5>Our Services</h5>
      <ul className="footer-links">
        {serviceLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
