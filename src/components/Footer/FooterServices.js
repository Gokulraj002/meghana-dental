import Link from 'next/link';
import { getMenu } from '@/lib/menu';

const FALLBACK = [
  { label: 'Dental Implants', href: '/services/dental-implants' },
  { label: 'Root Canal', href: '/services/root-canal' },
  { label: 'Orthodontics', href: '/services/orthodontics' },
  { label: 'Clear Aligners', href: '/services/aligners' },
  { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
  { label: 'Dental Crowns', href: '/services/dental-crowns' },
  { label: 'Dentures', href: '/services/dentures' },
  { label: 'Gum Treatment', href: '/services/gum-treatment' },
  { label: 'Tooth Extraction', href: '/services/tooth-extraction' },
  { label: 'Laser Dentistry', href: '/services/laser-dentistry' },
  { label: 'Smile Makeover', href: '/services/smile-makeover' },
  { label: 'Full Mouth Rehab', href: '/services/full-mouth-rehab' },
  { label: 'Microscope', href: '/services/microscope-dentistry' },
  { label: 'Pediatric', href: '/services/pediatric-dentistry' },
];

export default async function FooterServices() {
  const rows = await getMenu('footer_services');
  const serviceLinks = rows.length > 0 ? rows : FALLBACK;
  const mid = Math.ceil(serviceLinks.length / 2);
  const col1 = serviceLinks.slice(0, mid);
  const col2 = serviceLinks.slice(mid);

  return (
    <div className="col-lg-3 col-md-4">
      <h5>Our Services</h5>
      <div className="row g-0">
        <div className="col-6">
          <ul className="footer-links">
            {col1.map((link) => (
              <li key={link.id || link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <ul className="footer-links">
            {col2.map((link) => (
              <li key={link.id || link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
