import Image from 'next/image';
import Link from 'next/link';

const transformations = [
  {
    image: '/images/ortho-before-after-1.jpg',
    label: 'Orthodontic Transformation',
    tag: 'Braces Treatment',
    tagIcon: 'bi-award-fill',
  },
  {
    image: '/images/ortho-before-after-2.png',
    label: 'Smile Alignment Result',
    tag: 'Clear Aligners',
    tagIcon: 'bi-gem',
  },
];

const outcomes = [
  { icon: 'bi-people-fill',         value: '50,000+',  label: 'Patients Treated',    gradient: 'linear-gradient(135deg, #0ea5e9, #0d9488)' },
  { icon: 'bi-star-fill',           value: '4.9 ★',    label: 'Google Rating',        gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)' },
  { icon: 'bi-chat-quote-fill',     value: '850+',     label: 'Verified Reviews',     gradient: 'linear-gradient(135deg, #8b5cf6, #db2777)' },
  { icon: 'bi-patch-check-fill',    value: '15+',      label: 'Years of Excellence',  gradient: 'linear-gradient(135deg, #10b981, #059669)' },
];

export default function ResultsGallery() {
  return (
    <section className="results-gallery-section section-padding">
      <div className="container">

        {/* Section header */}
        <div className="section-header animate-fade-up">
          <span className="subtitle">PATIENT RESULTS</span>
          <h2>Real Smiles, Real Transformations</h2>
          <p>
            See the life-changing smile makeovers achieved by our specialist team —
            every result tells a story of confidence restored.
          </p>
        </div>

        {/* Before / After cards */}
        <div className="row g-4 mb-5">
          {transformations.map((item, i) => (
            <div className="col-lg-6" key={i}>
              <div className="result-card">
                <div className="result-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={620}
                    height={380}
                    style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  />
                  <div className="result-overlay">
                    <span className="result-tag">
                      <i className={`bi ${item.tagIcon}`} /> {item.tag}
                    </span>
                    <h5>{item.label}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement stats strip */}
        <div className="row g-3 mb-5">
          {outcomes.map((o, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="outcome-stat">
                <div className="outcome-icon" style={{ background: o.gradient }}>
                  <i className={`bi ${o.icon}`} />
                </div>
                <div className="outcome-value">{o.value}</div>
                <div className="outcome-label">{o.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-hero-primary" style={{ textDecoration: 'none' }}>
            <i className="bi bi-calendar-check"></i> Book Your Smile Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
