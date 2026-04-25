'use client';

export default function TestimonialsClient({ testimonials }) {
  return (
    <>
      <div className="section-header animate-fade-up">
        <span className="subtitle">PATIENT STORIES</span>
        <h2>What Our Patients Say</h2>
        <p>Each review reflects our commitment to providing exceptional dental care and patient satisfaction.</p>
      </div>

      <div className="row g-4">
        {testimonials.map((t, index) => (
          <div className="col-lg-4 col-md-6" key={t.id || index}>
            <div className="testimonial-card" style={{ height: '100%' }}>
              <div style={{
                display: 'inline-block', padding: '4px 12px', borderRadius: 'var(--radius-full)',
                background: 'var(--primary-50)', border: '1px solid var(--primary-light)',
                fontSize: '0.75rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '14px',
              }}>
                {t.service || t.treatment}
              </div>
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text || t.review}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{(t.name || t.patientName || 'P').charAt(0)}</div>
                <div>
                  <h5>{t.name || t.patientName}</h5>
                  <p>{t.occupation || 'Google Review'}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
