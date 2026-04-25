import { getHeroStats } from '@/lib/content';

const FALLBACK = [
  { value: '50K+', label: 'Happy Patients' },
  { value: '17+', label: 'Years Experience' },
  { value: '6', label: 'Expert Doctors' },
  { value: '4.9', label: 'Google Rating' },
];

export default async function AboutStats() {
  const rows = await getHeroStats();
  const stats = rows.length > 0 ? rows : FALLBACK;

  return (
    <div className="row g-4 mb-5">
      {stats.map((s, i) => (
        <div className="col-6 col-md-3" key={s.id || i}>
          <div className="service-cta-card">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '4px' }}>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
