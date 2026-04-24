const quotes = [
  { icon: 'bi-house-heart-fill', text: 'For you and your family.' },
  { icon: 'bi-credit-card-fill', text: 'A range of easy to manage payment options.' },
  { icon: 'bi-stars', text: 'Rejuvenate your smile. Rejuvenate your look.' },
  { icon: 'bi-heart-pulse-fill', text: 'Your pain free life starts from here.' },
  { icon: 'bi-person-check-fill', text: 'Individual personalized care.' },
];

export default function QuoteStrip() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #0d5c63) 100%)',
      padding: '48px 0',
    }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {quotes.map((q, i) => (
            <div className="col-lg col-md-4 col-sm-6" key={i}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
                padding: '8px 12px',
              }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={`bi ${q.icon}`} style={{ fontSize: '1.3rem', color: '#fff' }} />
                </div>
                <p style={{
                  margin: 0,
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  lineHeight: 1.5,
                }}>
                  {q.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
