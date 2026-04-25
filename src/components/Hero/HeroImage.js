import Image from 'next/image';
import { getSettings } from '@/lib/settings';

export default async function HeroImage() {
  const s = await getSettings();
  const heroImage = s.hero_image || '/images/microscope-treatment.jpg';
  const badge1 = s.hero_floating_badge_1 || 'Microscope Dentistry';
  const badge2 = s.hero_floating_badge_2 || 'Super Speciality';
  const rating = s.google_rating?.replace('★', '') || '4.9';

  return (
    <div className="col-lg-6 d-none d-lg-block">
      <div className="hero-right-col animate-fade-right">
        <div className="hero-image-wrapper">
          <Image
            src={heroImage}
            alt="Microscope-guided dental treatment at Meghana Dental"
            width={500}
            height={600}
            className="hero-doctor-image"
            priority
          />
          <div className="hero-image-glow"></div>
        </div>
        <div className="hero-floating-badge hero-badge-top">
          <div className="hfb-icon">🔬</div>
          <div>
            <strong>{badge1}</strong>
            <span>Microscope Precision</span>
          </div>
        </div>
        <div className="hero-floating-badge hero-badge-bottom">
          <div className="hfb-icon">🏥</div>
          <div>
            <strong>{badge2}</strong>
            <span>All Dental Treatments</span>
          </div>
        </div>
        <div className="hero-google-float">
          <div className="hgf-stars">★★★★★</div>
          <div className="hgf-rating">{rating}</div>
          <div className="hgf-label">Google Reviews</div>
        </div>
      </div>
    </div>
  );
}
