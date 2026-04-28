import Link from 'next/link';
import HeroBadge from './HeroBadge';
import HeroStats from './HeroStats';

export default function HeroContent() {
  return (
    <div className="col-lg-6 animate-fade-up">
      <HeroBadge />
      <h1 className="hero-title">
        Your Smile <br />
        Deserves the <span>Best Care</span>
      </h1>
      <p className="hero-text">
        Meghana Multispeciality Dental Hospital — Tirupati&apos;s most trusted
        Dental center with 17+ years of excellence. Advanced microscopic guided
        treatments, Laser assisted painless procedures, Advanced Implant
        procedures and a team of MDS specialists dedicated to your perfect smile.
      </p>
      <div className="hero-buttons">
        <Link href="/contact" className="btn-hero-primary pulse-btn">
          <i className="bi bi-calendar-check"></i>
          Book Appointment
        </Link>
        <a href="tel:08772248330" className="btn-hero-secondary">
          <i className="bi bi-telephone-fill"></i>
          Call Now
        </a>
      </div>
      <HeroStats />
    </div>
  );
}
