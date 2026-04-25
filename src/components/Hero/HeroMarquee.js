import { getMarqueeItems } from '@/lib/content';

const FALLBACK = [
  'Dental Implants', 'Root Canal Treatment', 'Orthodontic Treatment', 'Clear Aligners',
  'Teeth Whitening', 'Pediatric Dentistry', 'Microscope Dentistry', 'Dentures & Prosthetics',
  'Laser Dentistry', 'Full Mouth Rehab', 'Dental Crowns',
];

export default async function HeroMarquee() {
  const rows = await getMarqueeItems();
  const items = rows.length > 0 ? rows.map(r => r.text) : FALLBACK;

  return (
    <div className="hero-marquee-wrapper">
      <div className="hero-marquee">
        <div className="marquee-content">
          {items.map((item, i) => (
            <span key={i}>✦ {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
