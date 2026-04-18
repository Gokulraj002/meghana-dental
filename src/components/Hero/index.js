"use client";

import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroMarquee from './HeroMarquee';

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="row align-items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      <HeroMarquee />
    </section>
  );
}
