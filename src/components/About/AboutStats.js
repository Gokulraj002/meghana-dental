const stats = [
  { value: '50K+', label: 'Happy Patients' },
  { value: '15+', label: 'Years Experience' },
  { value: '6', label: 'Expert Doctors' },
  { value: '4.9', label: 'Google Rating' },
];

export default function AboutStats() {
  return (
    <div className="row g-4 mb-5">
      {stats.map((s, i) => (
        <div className="col-6 col-md-3" key={i}>
          <div className="service-cta-card">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '4px' }}>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
