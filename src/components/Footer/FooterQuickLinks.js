import Link from 'next/link';

const quickLinks = [
  { label: 'Home',          href: '/' },
  { label: 'About Us',      href: '/about' },
  { label: 'Services',      href: '/services' },
  { label: 'Our Doctors',   href: '/doctors' },
  { label: 'Testimonials',  href: '/testimonials' },
  { label: 'Book Appointment', href: '/contact' },
];

export default function FooterQuickLinks() {
  return (
    <div className="col-lg-2 col-md-4">
      <h5>Quick Links</h5>
      <ul className="footer-links">
        {quickLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
