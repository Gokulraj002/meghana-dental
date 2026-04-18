import AboutImage from './AboutImage';
import AboutFeatures from './AboutFeatures';

export default function AboutSection() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <AboutImage />
          <div className="col-lg-6 animate-fade-right">
            <div className="about-content">
              <span className="about-subtitle">ABOUT US</span>
              <h2 className="about-title">
                Setting New Standards in <span>Dental Care</span>
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '12px' }}>
                Meghana Dental Hospital is a super speciality dental centre equipped
                with world-class infrastructure and a team of highly skilled dental
                professionals. We are committed to providing comprehensive oral
                healthcare with the perfect blend of expertise, technology, and compassion.
              </p>
              <AboutFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
