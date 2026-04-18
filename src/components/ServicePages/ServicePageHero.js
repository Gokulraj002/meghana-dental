import Image from 'next/image';
import Link from 'next/link';

/**
 * Service page hero — full-width image background with dark overlay.
 * Cleaner, less colourful than earlier iterations.
 *
 * Props:
 *   titleBefore    {string}  – text before the highlight span
 *   titleHighlight {string}  – text inside the highlight span
 *   description    {string}  – tagline
 *   crumbs         {Array}   – breadcrumbs
 *   image          {string}  – hero background image
 *   accent         {string}  – single accent colour (used only for highlight text + small CTA)
 *   stats          {Array}   – [{ icon, label, value }] stats strip
 */
export default function ServicePageHero({
  titleBefore,
  titleHighlight,
  description,
  crumbs = [],
  image = null,
  accent = '#0ea5e9',
  stats = [],
}) {
  return (
    <section className="sph-section">
      {/* ── Background layer ── */}
      <div className="sph-bg">
        {image ? (
          <>
            <Image
              src={image}
              alt={`${titleBefore} ${titleHighlight}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            <div className="sph-dark-overlay" />
          </>
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: '#1e293b' }} />
        )}
      </div>

      {/* ── Content ── */}
      <div className="sph-content">
        <div className="container">
          <nav className="sph-breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i}>
                <i className="bi bi-chevron-right" />
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>

          <div className="row">
            <div className="col-lg-8">
              <h1 className="sph-title">
                {titleBefore}{' '}
                <span style={{ color: accent }}>{titleHighlight}</span>
              </h1>
              <p className="sph-desc">{description}</p>
              <div className="sph-actions">
                <Link href="/#appointment" className="sph-btn-primary" style={{ background: accent }}>
                  <i className="bi bi-calendar-check" /> Book Appointment
                </Link>
                <Link href="/contact" className="sph-btn-secondary">
                  <i className="bi bi-telephone-fill" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      {stats.length > 0 && (
        <div className="sph-stats-bar">
          <div className="container">
            <div className="sph-stats-grid">
              {stats.map((s, i) => (
                <div className="sph-stat" key={i}>
                  <i className={`bi ${s.icon}`} style={{ color: accent }} />
                  <div>
                    <span className="sph-stat-value">{s.value}</span>
                    <span className="sph-stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
