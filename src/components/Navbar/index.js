'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavBrand from './NavBrand';
import NavLinks from './NavLinks';
import NavCTA from './NavCTA';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-main ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <NavBrand />
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
          <NavLinks pathname={pathname} />
          <NavCTA />
        </div>
      </div>
    </nav>
  );
}
