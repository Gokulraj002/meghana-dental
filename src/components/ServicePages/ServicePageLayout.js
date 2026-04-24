import Image from 'next/image';
import Link from 'next/link';

/**
 * Rich layout for service pages.
 * Colour use is kept minimal — neutral greys dominate, accent colour is used
 * sparingly on small highlights (check marks, small buttons, links).
 *
 * data shape:
 * {
 *   accent          {string}   hex accent colour
 *   contentImage    {string}   main image beside the overview text
 *   gallery         {Array}    [{ src, caption, contain? }] – extra related images
 *   overview        {string}   intro paragraph
 *   highlights      {Array}    [{icon, text}]
 *   benefits        {Array}    [{icon, title, desc}]
 *   process         {Array}    [{title, desc, image?}]
 *   conditions      {Array}    [{icon, label}]
 *   faqs            {Array}    [{q, a}]
 *   stats           {Array}    [{icon, label, value}]
 *   ctaTitle        {string}
 *   ctaDesc         {string}
 *   relatedServices {Array}    [{image, href, title, desc}]  ← preferred (cards with image)
 *   relatedLinks    {Array}    [{label, href}]               ← fallback (plain links)
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

  return (
    <section className="sp-layout section-padding">
      <div className="container">
        <div className="row g-5">

          {/* ════════════════════════════════
              MAIN CONTENT — 8 cols
          ════════════════════════════════ */}
          <div className="col-lg-8">

            {/* ── Overview with image beside text ── */}
            <div className="sp-overview-block">
              <div className="row g-4 align-items-center mb-4">
                {contentImage && (
                  <div className="col-md-5">
                    <div className="position-relative rounded-3 overflow-hidden shadow-sm" style={{ aspectRatio: '4 / 3' }}>
                      <Image
                        src={contentImage}
                        alt="Treatment overview"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
                <div className={contentImage ? 'col-md-7' : 'col-12'}>
                  <p className="sp-overview-text">{overview}</p>
                  {highlights.length > 0 && (
                    <div className="sp-highlights">
                      {highlights.map((h, i) => (
                        <span className="sp-highlight-pill" key={i} style={{ borderColor: accent, color: accent }}>
                          <i className={`bi ${h.icon}`} /> {h.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

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
                        <div
                          className="position-relative rounded-3 overflow-hidden shadow-sm bg-light"
                          style={{ aspectRatio: '4 / 3' }}
                        >
                          <Image
                            src={g.src}
                            alt={g.caption || 'Reference image'}
                            fill
                            style={{ objectFit: g.contain ? 'contain' : 'cover', padding: g.contain ? '12px' : 0 }}
                          />
                        </div>
                        {g.caption && (
                          <figcaption className="text-center text-muted mt-2" style={{ fontSize: '0.8125rem' }}>
                            {g.caption}
                          </figcaption>
                        )}
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
                      <i className={`bi ${c.icon}`} style={{ color: accent }} />
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
                      <div className="sp-benefit-card">
                        <div className="sp-benefit-icon-neutral">
                          <i className={`bi ${b.icon}`} style={{ color: accent }} />
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
                      <div className="sp-step-num-neutral" style={{ color: accent, borderColor: accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="sp-step-body">
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                        {step.image && (
                          <div className="position-relative rounded-3 overflow-hidden mt-2 shadow-sm" style={{ maxWidth: '340px', aspectRatio: '4 / 3' }}>
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
                <div className="accordion" id="servicePageFaq">
                  {faqs.map((faq, i) => (
                    <div className="accordion-item border rounded-3 mb-2 shadow-sm overflow-hidden" key={i}>
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button ${i === 0 ? '' : 'collapsed'} fw-semibold`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#sp-faq-${i}`}
                          aria-expanded={i === 0}
                          aria-controls={`sp-faq-${i}`}
                          style={{ fontSize: '0.95rem' }}
                        >
                          <i className="bi bi-question-circle me-2" style={{ color: accent }} />
                          {faq.q}
                        </button>
                      </h3>
                      <div
                        id={`sp-faq-${i}`}
                        className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                        data-bs-parent="#servicePageFaq"
                      >
                        <div className="accordion-body text-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
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

            {/* CTA card */}
            <div className="sp-cta-card-neutral">
              <div className="sp-cta-accent-bar" style={{ background: accent }} />
              <i className="bi bi-calendar-check-fill sp-cta-icon-neutral" style={{ color: accent }} />
              <h4 className="sp-cta-title-neutral">{ctaTitle}</h4>
              <p className="sp-cta-desc-neutral">{ctaDesc}</p>
              <Link
                href="/#appointment"
                className="sp-cta-btn-neutral"
                style={{ background: accent }}
              >
                Book Appointment <i className="bi bi-arrow-right-short" />
              </Link>
              <a href="tel:+919876543210" className="sp-cta-call-neutral">
                <i className="bi bi-telephone-fill" /> Call Us Now
              </a>
            </div>

            {/* Treatment quick-info */}
            {stats.length > 0 && (
              <div className="sp-info-card">
                <h5 className="sp-info-title">
                  <i className="bi bi-clipboard2-pulse-fill" style={{ color: accent }} /> Treatment Details
                </h5>
                <ul className="sp-info-list">
                  {stats.map((s, i) => (
                    <li key={i}>
                      <i className={`bi ${s.icon}`} style={{ color: accent }} />
                      <span className="sp-info-label">{s.label}</span>
                      <span className="sp-info-val">{s.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Meghana Dental */}
            <div className="sp-why-card">
              <h5 className="sp-why-title">
                <i className="bi bi-patch-check-fill" style={{ color: accent }} /> Why Meghana Dental?
              </h5>
              <ul className="sp-why-list">
                {[
                  { icon: 'bi-award', text: 'MDS Qualified Specialists' },
                  { icon: 'bi-search', text: 'Dental Microscope — 25× Magnification' },
                  { icon: 'bi-people-fill', text: '50,000+ Treated Patients' },
                  { icon: 'bi-clock-history', text: '17+ Years of Excellence' },
                  { icon: 'bi-geo-alt-fill', text: 'Only Clinic in Tirupati' },
                ].map((w, i) => (
                  <li key={i}>
                    <i className={`bi ${w.icon}`} style={{ color: accent }} />
                    {w.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related services — cards with image + title + desc */}
            {relatedServices.length > 0 && (
              <div className="sp-related-card">
                <h5 className="sp-why-title">
                  <i className="bi bi-grid-fill" style={{ color: accent }} /> Related Services
                </h5>
                <div className="sp-related-services-list">
                  {relatedServices.map((r, i) => (
                    <Link href={r.href} className="sp-related-service-item" key={i}>
                      <div className="sp-related-service-img">
                        <Image src={r.image} alt={r.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="sp-related-service-body">
                        <span className="sp-related-service-title" style={{ color: accent }}>{r.title}</span>
                        <span className="sp-related-service-desc">{r.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback plain links (used if relatedServices not provided) */}
            {relatedServices.length === 0 && relatedLinks.length > 0 && (
              <div className="sp-related-card">
                <h5 className="sp-why-title">
                  <i className="bi bi-grid-fill" style={{ color: accent }} /> Related Services
                </h5>
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
    </section>
  );
}
