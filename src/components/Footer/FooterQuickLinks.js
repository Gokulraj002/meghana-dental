import Link from 'next/link';
import { getMenu } from '@/lib/menu';

const FALLBACK = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Doctors', href: '/doctors' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Book Appointment', href: '/contact' },
];

export default async function FooterQuickLinks() {
  const rows = await getMenu('footer_quick');
  const links = rows.length > 0 ? rows : FALLBACK;

  return (
    <div className="col-lg-2 col-md-4">
      <h5>Quick Links</h5>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.id || link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
