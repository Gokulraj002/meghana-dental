import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="col-lg-6 d-none d-lg-block">
      <div className="hero-right-col animate-fade-right">
        <div className="hero-image-wrapper">
          <Image
            src="/images/microscope-treatment.jpg"
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
            <strong>Microscope Dentistry</strong>
            <span>Microscope Precision</span>
          </div>
        </div>
        <div className="hero-floating-badge hero-badge-bottom">
          <div className="hfb-icon">🏥</div>
          <div>
            <strong>Super Speciality</strong>
            <span>All Dental Treatments</span>
          </div>
        </div>
        <div className="hero-google-float">
          <div className="hgf-stars">★★★★★</div>
          <div className="hgf-rating">4.9</div>
          <div className="hgf-label">Google Reviews</div>
        </div>
      </div>
    </div>
  );
}
