import Image from 'next/image';

export default function AboutImage() {
  return (
    <div className="col-lg-6 animate-fade-left">
      <div className="about-image-wrapper">
        <Image
          src="/images/about-clinic.png"
          alt="Modern Dental Clinic"
          width={560}
          height={480}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
        <div className="about-experience-badge">
          <span className="number">17+</span>
          <span className="label">Years of Excellence</span>
        </div>
      </div>
    </div>
  );
}
