const stats = [
  { value: '4.9', sub: '★★★★★', label: '850+ Google Reviews', isRating: true },
  { value: '50K+', label: 'Happy Patients' },
  { value: '98%', label: 'Patient Satisfaction' },
];

export default function TestimonialsStatsBanner() {
  return (
    <section style={{ background: 'var(--bg-soft)', padding: '40px 0' }}>
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center text-center">
          {stats.map((s, i) => (
            <div className="col-md-3" key={i}>
              <div style={{
                background: 'var(--bg-white)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: '32px',
              }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: s.isRating ? 'var(--text-heading)' : 'var(--primary)', lineHeight: '1' }}>
                  {s.value}
                </div>
                {s.isRating && (
                  <div style={{ color: 'var(--gold)', fontSize: '1.2rem', margin: '8px 0' }}>{s.sub}</div>
                )}
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: s.isRating ? '0' : '12px' }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
