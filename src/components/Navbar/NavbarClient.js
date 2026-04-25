'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarClient({ navLinks, brand, ctaText, ctaLink }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandParts = (brand?.name || 'Meghana Dental').split(' ');
  const head = brandParts[0];
  const tail = brandParts.slice(1).join(' ');

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-main ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand-custom" href="/" style={{ cursor: 'pointer' }}>
          <Image
            src={brand?.logo || '/images/meghana-mascot.jpg'}
            alt={brand?.name || 'Meghana Dental'}
            width={82}
            height={62}
            priority
            style={{ borderRadius: '10px', cursor: 'pointer' }}
          />
          <h4>{head} {tail && <span>{tail}</span>}</h4>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
          <Link href={ctaLink || '/contact'} className="btn-appointment pulse-btn">
            <i className="bi bi-calendar-check"></i>
            {ctaText || 'Book Appointment'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
