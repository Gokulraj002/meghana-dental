import { getHeroStats } from '@/lib/content';

const FALLBACK = [
  { value: '17+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Patients' },
  { value: '6+', label: 'Specialist Doctors' },
  { value: '14+', label: 'Dental Services' },
];

function splitValue(v) {
  const m = String(v || '').match(/^([\d.,]+)(.*)$/);
  return m ? { number: m[1], suffix: m[2] || '' } : { number: v || '', suffix: '' };
}

export default async function HeroStats() {
  const rows = await getHeroStats();
  const stats = rows.length > 0 ? rows : FALLBACK;

  return (
    <div className="hero-stats">
      {stats.map((s, i) => {
        const { number, suffix } = splitValue(s.value);
        return (
          <div className="hero-stat" key={s.id || i}>
            <div className="hero-stat-number">
              {number}<span>{suffix}</span>
            </div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
