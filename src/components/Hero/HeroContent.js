import Link from 'next/link';
import HeroBadge from './HeroBadge';
import HeroStats from './HeroStats';
import { getSettings } from '@/lib/settings';

export default async function HeroContent() {
  const s = await getSettings();
  const title = s.hero_title || 'Your Smile Deserves the Best Care';
  const subtitle = s.hero_subtitle || "Meghana Multispeciality Dental Hospital — Tirupati's most trusted Dental center with 17+ years of excellence. Advanced microscopic guided treatments, Laser assisted painless procedures, Advanced Implant procedures and a team of MDS specialists dedicated to your perfect smile.";
  const ctaPrimary = s.hero_cta_primary_text || 'Book Appointment';
  const ctaPrimaryLink = s.hero_cta_primary_link || '/contact';
  const phone = s.phone || '+919876543210';
  // Render title — split last 3 words into colored span
  const words = title.split(' ');
  const headTxt = words.slice(0, -3).join(' ');
  const tailTxt = words.slice(-3).join(' ');

  return (
    <div className="col-lg-6 animate-fade-up">
      <HeroBadge />
      <h1 className="hero-title">
        {headTxt} <br />
        <span>{tailTxt}</span>
      </h1>
      <p className="hero-text">{subtitle}</p>
      <div className="hero-buttons">
        <Link href={ctaPrimaryLink} className="btn-hero-primary pulse-btn">
          <i className="bi bi-calendar-check"></i>
          {ctaPrimary}
        </Link>
        <a href={`tel:${phone.replace(/\s|-/g, '')}`} className="btn-hero-secondary">
          <i className="bi bi-telephone-fill"></i>
          Call Now
        </a>
      </div>
      <HeroStats />
    </div>
  );
}
