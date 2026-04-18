import Image from 'next/image';
import Link from 'next/link';

const techPoints = [
  { icon: 'bi-search', label: '25× Magnification', desc: 'See what is invisible to the naked eye' },
  { icon: 'bi-shield-fill-check', label: 'Zero Margin for Error', desc: 'Micron-level precision in every procedure' },
  { icon: 'bi-lightning-fill', label: 'Faster Healing', desc: 'Minimally invasive — less trauma, less pain' },
  { icon: 'bi-patch-check-fill', label: 'Only Clinic in Tirupati', desc: 'Carl Zeiss operating microscope technology' },
];

export default function TechnologyShowcase() {
  return (
    <section className="tech-showcase-section section-padding">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left — Image */}
          <div className="col-lg-5 order-lg-1 order-2">
            <div className="tech-img-wrap">
              <Image
                src="/images/microscope-treatment.jpg"
                alt="Carl Zeiss microscope dental treatment at Meghana Dental Hospital Tirupati"
                width={540}
                height={480}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
              />
              <div className="tech-img-badge">
                <i className="bi bi-award-fill"></i>
                <div>
                  <strong>Only Clinic</strong>
                  <span>in Tirupati</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="col-lg-7 order-lg-2 order-1">
            <span className="subtitle">OUR TECHNOLOGY</span>
            <h2 style={{ marginBottom: '16px' }}>
              Tirupati's Only Clinic with<br />
              <span>Carl Zeiss Operating Microscope</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              While most clinics rely on naked-eye procedures, Meghana Dental Hospital uses a
              Carl Zeiss surgical microscope with 25× magnification — the same technology used
              in neurosurgery. Every root canal, restoration, and implant placement is
              performed with unmatched clarity and precision.
            </p>

            <div className="row g-3 mb-4">
              {techPoints.map((pt, i) => (
                <div className="col-sm-6" key={i}>
                  <div className="tech-point">
                    <div className="tech-point-icon">
                      <i className={`bi ${pt.icon}`} />
                    </div>
                    <div>
                      <strong>{pt.label}</strong>
                      <span>{pt.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/microscope-dentistry"
              className="btn-hero-primary"
              style={{ textDecoration: 'none' }}
            >
              Explore Microscope Dentistry <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
