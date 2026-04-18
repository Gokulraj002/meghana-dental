import Link from 'next/link';

const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'About',        href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Doctors',      href: '/doctors' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact',      href: '/contact' },
];

export default function NavLinks({ pathname }) {
  return (
    <ul className="navbar-nav mx-auto">
      {navLinks.map((link) => {
        const isActive =
          link.href === '/'
            ? pathname === '/'
            : pathname === link.href || pathname.startsWith(link.href + '/');
        return (
          <li className="nav-item" key={link.href}>
            <Link
              className={`nav-link nav-link-custom ${isActive ? 'active' : ''}`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
