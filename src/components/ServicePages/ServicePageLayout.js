import Image from 'next/image';
import Link from 'next/link';

/**
 * Rich service-page layout.
 *
 * data shape:
 * {
 *   accent          {string}   hex accent colour
 *   contentImage    {string}   main image beside the overview text
 *   gallery         {Array}    [{ src, caption, contain? }]
 *   overview        {string}   intro paragraph
 *   highlights      {Array}    [{icon, text}]
 *   benefits        {Array}    [{icon, title, desc}]
 *   process         {Array}    [{title, desc, image?}]
 *   conditions      {Array}    [{icon, label}]
 *   faqs            {Array}    [{q, a}]
 *   stats           {Array}    [{icon, label, value}]
 *   ctaTitle        {string}
 *   ctaDesc         {string}
 *   relatedServices {Array}    [{image, href, title, desc}]
 *   relatedLinks    {Array}    [{label, href}]
 * }
 */
export default function ServicePageLayout({ data }) {
  const {
    accent = '#0ea5e9',
    contentImage,
    gallery = [],
    overview,
    highlights = [],
    benefits = [],
    process = [],
    conditions = [],
    faqs = [],
    stats = [],
    ctaTitle = 'Book a Free Consultation',
    ctaDesc = 'Get expert advice tailored to your needs.',
    relatedServices = [],
    relatedLinks = [],
  } = data;

  /* Transparent tint: accent + "18" = ~9 % opacity hex */
  const tint = `${accent}18`;

  return (
    <section className="sp-layout section-padding">
      <div className="container">
        <div className="row g-5">

          {/* ════════════════════════════════
              MAIN CONTENT — 8 cols
          ════════════════════════════════ */}
          <div className="col-lg-8">

            {/* ── Overview ── */}
            <div className="sp-overview-block">
              <div className="row g-4 align-items-center">
                {contentImage && (
                  <div className="col-md-5">
                    <div className="sp-content-img" style={{ aspectRatio: '4 / 3' }}>
                      <Image src={contentImage} alt="" fill className="sp-img-bg" aria-hidden="true" />
                      <Image src={contentImage} alt="Treatment overview" fill className="sp-img-fg" />
                    </div>
                  </div>
                )}
                <div className={contentImage ? 'col-md-7' : 'col-12'}>
                  <p className="sp-overview-text">{overview}</p>
                  {highlights.length > 0 && (
                    <div className="sp-highlights">
                      {highlights.map((h, i) => (
                        <span
                          className="sp-highlight-pill"
                          key={i}
                          style={{ borderColor: accent, color: accent, background: tint }}
                        >
                          <i className={`bi ${h.icon}`} /> {h.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Quick-stats band ── */}
            {stats.length > 0 && (
              <div className="sp-stats-band">
                {stats.map((s, i) => (
                  <div className="sp-stat-item" key={i}>
                    <div className="sp-stat-icon" style={{ background: tint, color: accent }}>
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <div>
                      <div className="sp-stat-value" style={{ color: accent }}>{s.value}</div>
                      <div className="sp-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Image Gallery ── */}
            {gallery.length > 0 && (
              <div className="sp-section">
                <h2 className="sp-section-title">
                  <span className="sp-section-bar" style={{ background: accent }} />
                  Treatment Gallery
                </h2>
                <div className="row g-3">
                  {gallery.map((g, i) => (
                    <div className="col-sm-6" key={i}>
                      <figure className="m-0">
                        <div className="sp-gallery-img" style={{ aspectRatio: '4 / 3' }}>
                          <Image src={g.src} alt="" fill className="sp-img-bg" aria-hidden="true" />
                          <Image src={g.src} alt={g.caption || 'Reference image'} fill className="sp-img-fg" />
                          {g.caption && (
                            <figcaption className="sp-gallery-caption-overlay">
                              {g.caption}
                            </figcaption>
                          )}
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Conditions ── */}
            {conditions.length > 0 && (
              <div className="sp-section">
                <h2 className="sp-section-title">
                  <span className="sp-section-bar" style={{ background: accent }} />
                  Who Needs This Treatment?
                </h2>
                <div className="sp-conditions-grid">
                  {conditions.map((c, i) => (
                    <div className="sp-condition-item" key={i}>
                      <span className="sp-cond-icon" style={{ background: tint, color: accent }}>
                        <i className={`bi ${c.icon}`} />
                      </span>
                      <span>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Benefits ── */}
            {benefits.length > 0 && (
              <div className="sp-section">
                <h2 className="sp-section-title">
                  <span className="sp-section-bar" style={{ background: accent }} />
                  Why Choose This Treatment?
                </h2>
                <div className="row g-3">
                  {benefits.map((b, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="sp-benefit-card" style={{ '--sp-accent': accent }}>
                        <div className="sp-benefit-icon-v2" style={{ background: tint, color: accent }}>
                          <i className={`bi ${b.icon}`} />
                        </div>
                        <div>
                          <h5>{b.title}</h5>
                          <p>{b.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Process ── */}
            {process.length > 0 && (
              <div className="sp-section">
                <h2 className="sp-section-title">
                  <span className="sp-section-bar" style={{ background: accent }} />
                  How the Treatment Works
                </h2>
                <div className="sp-process-list">
                  {process.map((step, i) => (
                    <div className="sp-process-step" key={i}>
                      <div className="sp-step-bubble">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="sp-step-body">
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                        {step.image && (
                          <div className="sp-step-img-wrap">
                            <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── FAQ ── */}
            {faqs.length > 0 && (
              <div className="sp-section">
                <h2 className="sp-section-title">
                  <span className="sp-section-bar" style={{ background: accent }} />
                  Frequently Asked Questions
                </h2>
                <div className="accordion sp-faq-accordion" id="servicePageFaq">
                  {faqs.map((faq, i) => (
                    <div className="sp-faq-card" key={i}>
                      <h3 className="accordion-header m-0">
                        <button
                          className={`accordion-button sp-faq-btn ${i === 0 ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#sp-faq-${i}`}
                          aria-expanded={i === 0}
                          aria-controls={`sp-faq-${i}`}
                        >
                          <span className="sp-faq-num" style={{ background: tint, color: accent }}>
                            {i + 1}
                          </span>
                          {faq.q}
                        </button>
                      </h3>
                      <div
                        id={`sp-faq-${i}`}
                        className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                        data-bs-parent="#servicePageFaq"
                      >
                        <div className="sp-faq-answer">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ════════════════════════════════
              SIDEBAR — 4 cols
          ════════════════════════════════ */}
          <div className="col-lg-4">
            <div className="sp-sidebar-sticky">

              {/* CTA card */}
              <div className="sp-cta-card-v2">
                <div className="sp-cta-head">
                  <i className="bi bi-calendar-check-fill sp-cta-head-icon" />
                  <h4 className="sp-cta-head-title">{ctaTitle}</h4>
                  <p className="sp-cta-head-desc">{ctaDesc}</p>
                </div>
                <div className="sp-cta-body">
                  <Link
                    href="/#appointment"
                    className="sp-cta-btn-v2"
                  >
                    Book Appointment <i className="bi bi-arrow-right-short" />
                  </Link>
                  <a href="tel:+919876543210" className="sp-cta-call-v2">
                    <i className="bi bi-telephone-fill" /> Call Us Now
                  </a>
                </div>
              </div>

              {/* Treatment details */}
              {stats.length > 0 && (
                <div className="sp-side-card">
                  <div className="sp-side-card-head">
                    <i className="bi bi-clipboard2-pulse-fill" style={{ color: accent }} />
                    Treatment Details
                  </div>
                  <ul className="sp-info-list">
                    {stats.map((s, i) => (
                      <li key={i}>
                        <span className="sp-info-icon" style={{ background: tint, color: accent }}>
                          <i className={`bi ${s.icon}`} />
                        </span>
                        <span className="sp-info-label">{s.label}</span>
                        <span className="sp-info-val" style={{ color: accent }}>{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Meghana Dental */}
              <div className="sp-side-card">
                <div className="sp-side-card-head">
                  <i className="bi bi-patch-check-fill" style={{ color: accent }} />
                  Why Meghana Dental?
                </div>
                <ul className="sp-why-list-v2">
                  {[
                    { icon: 'bi-award', text: 'MDS Qualified Specialists' },
                    { icon: 'bi-search', text: 'Dental Microscope — 25× Magnification' },
                    { icon: 'bi-people-fill', text: '50,000+ Treated Patients' },
                    { icon: 'bi-clock-history', text: '17+ Years of Excellence' },
                    { icon: 'bi-geo-alt-fill', text: 'Only Clinic in Tirupati' },
                  ].map((w, i) => (
                    <li key={i}>
                      <span className="sp-why-check" style={{ background: tint, color: accent }}>
                        <i className={`bi ${w.icon}`} />
                      </span>
                      {w.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="sp-side-card">
                  <div className="sp-side-card-head">
                    <i className="bi bi-grid-fill" style={{ color: accent }} />
                    Related Services
                  </div>
                  <div className="sp-related-services-list">
                    {relatedServices.map((r, i) => (
                      <Link href={r.href} className="sp-related-service-item" key={i}>
                        <div className="sp-related-service-img">
                          <Image src={r.image} alt={r.title} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="sp-related-service-body">
                          <span className="sp-related-service-title" style={{ color: accent }}>
                            {r.title}
                          </span>
                          <span className="sp-related-service-desc">{r.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Fallback plain links */}
              {relatedServices.length === 0 && relatedLinks.length > 0 && (
                <div className="sp-side-card">
                  <div className="sp-side-card-head">
                    <i className="bi bi-grid-fill" style={{ color: accent }} />
                    Related Services
                  </div>
                  <ul className="sp-related-list">
                    {relatedLinks.map((r, i) => (
                      <li key={i}>
                        <Link href={r.href} style={{ color: accent }}>
                          <i className="bi bi-arrow-right-short" /> {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
