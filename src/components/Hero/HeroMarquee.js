const marqueeItems = [
  'Dental Implants',
  'Root Canal Treatment',
  'Orthodontic Treatment',
  'Clear Aligners',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Microscope Dentistry',
  'Dentures & Prosthetics',
  'Laser Dentistry',
  'Full Mouth Rehab',
  'Dental Crowns',
];

export default function HeroMarquee() {
  return (
    <div className="hero-marquee-wrapper">
      <div className="hero-marquee">
        <div className="marquee-content">
          {marqueeItems.map((item, i) => (
            <span key={i}>✦ {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
