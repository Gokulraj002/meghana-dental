import NavbarClient from './NavbarClient';
import { getSettings } from '@/lib/settings';
import { getMenu } from '@/lib/menu';

const FALLBACK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default async function Navbar() {
  const [s, menuRows] = await Promise.all([getSettings(), getMenu('navbar')]);
  const navLinks = menuRows.length > 0 ? menuRows : FALLBACK_LINKS;
  const brand = {
    name: s.clinic_name || 'Meghana Dental',
    logo: s.logo_url || '/images/meghana-mascot.jpg',
  };
  return (
    <NavbarClient
      navLinks={navLinks}
      brand={brand}
      ctaText={s.hero_cta_primary_text || 'Book Appointment'}
      ctaLink={s.hero_cta_primary_link || '/contact'}
    />
  );
}
