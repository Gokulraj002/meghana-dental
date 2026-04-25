import { getAboutFeatures } from '@/lib/content';

const FALLBACK = [
  { icon: 'bi-people-fill', title: 'Expert Doctors', desc: 'Team of specialized dentists with decades of experience' },
  { icon: 'bi-cpu', title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise diagnosis & treatment' },
  { icon: 'bi-heart-pulse-fill', title: 'Comfortable Care', desc: 'Pain-free procedures in a relaxing environment' },
  { icon: 'bi-wallet2', title: 'Affordable Pricing', desc: 'Quality dental care at competitive, transparent prices' },
];

export default async function AboutFeatures() {
  const rows = await getAboutFeatures();
  const features = rows.length > 0 ? rows : FALLBACK;

  return (
    <div className="about-features">
      {features.map((f, i) => (
        <div className="about-feature" key={f.id || i}>
          <div className="about-feature-icon">
            <i className={`bi ${f.icon || 'bi-check-circle'}`}></i>
          </div>
          <div>
            <h5>{f.title}</h5>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
