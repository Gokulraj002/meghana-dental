import Image from 'next/image';

const features = [
  { icon: '🏥', title: 'Modern Facility', desc: 'State-of-the-art equipment and sterilization' },
  { icon: '👨‍⚕️', title: 'Expert Team', desc: 'MDS qualified specialists in every field' },
  { icon: '💡', title: 'Latest Technology', desc: 'Microscope-guided precision treatments' },
  { icon: '❤️', title: 'Patient First', desc: 'Compassionate, pain-free dental care' },
];

export default function AboutStory() {
  return (
    <div className="row g-5 align-items-center mb-5">
      <div className="col-lg-6">
        <div className="about-image-wrapper">
          <Image
            src="/images/about-clinic.png"
            alt="Meghana Dental Hospital Clinic"
            width={600} height={480}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
          <div className="about-experience-badge">
            <span className="number">17+</span>
            <span className="label">Years Experience</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <span className="about-subtitle">OUR STORY</span>
        <h2 className="about-title">Your Trusted Partner in <span>Oral Healthcare</span></h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-body)', marginBottom: '24px' }}>
          Meghana Dental Hospital was founded with a vision to provide comprehensive,
          affordable, and pain-free dental care to the people of Tirupati and surrounding areas.
          Over 15 years, we have grown into one of the most trusted dental hospitals in
          Andhra Pradesh, serving over 50,000 happy patients.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-body)', marginBottom: '24px' }}>
          Our hospital is equipped with the latest dental technology including dental operating
          microscopes, digital X-rays, and advanced sterilization systems. We believe in
          providing personalized care, where every patient is treated like family.
        </p>
        <div className="about-features">
          {features.map((f, i) => (
            <div className="about-feature" key={i}>
              <div className="about-feature-icon">{f.icon}</div>
              <div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
