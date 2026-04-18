const stats = [
  { number: '17', suffix: '+', label: 'Years Experience' },
  { number: '50K', suffix: '+', label: 'Happy Patients' },
  { number: '6',  suffix: '+', label: 'Specialist Doctors' },
  { number: '12', suffix: '+', label: 'Dental Services' },
];

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {stats.map((s, i) => (
        <div className="hero-stat" key={i}>
          <div className="hero-stat-number">
            {s.number}<span>{s.suffix}</span>
          </div>
          <div className="hero-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
