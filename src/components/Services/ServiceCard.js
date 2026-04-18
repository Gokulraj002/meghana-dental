import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service, index }) {
  const num = String(index + 1).padStart(2, '0');
  const hasImage = !!service.image;

  return (
    <div className="col-lg-4 col-md-6">
      <Link href={service.link} className="svc-link">
        <article className="svc-card">

          {/* ── TOP AREA: real photo OR gradient icon ── */}
          <div className="svc-top">
            {hasImage ? (
              <>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={440}
                  height={210}
                  style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }}
                />
                {/* Bottom-of-image vignette so badge is readable */}
                <div className="svc-vignette" />
                {/* Number badge */}
                <span className="svc-badge">{num}</span>
                {/* Coloured accent bar at bottom edge of image */}
                <div className="svc-accent-bar" style={{ background: service.gradient }} />
              </>
            ) : (
              <div className="svc-icon-top" style={{ background: service.gradient }}>
                <div className="svc-icon-circle">
                  <i className={`bi ${service.icon}`} />
                </div>
                <span className="svc-icon-num">{num}</span>
              </div>
            )}
          </div>

          {/* ── BOTTOM CONTENT ── */}
          <div className="svc-body">
            <div className="svc-title-row">
              <span className="svc-pill" style={{ background: service.gradient }}>
                <i className={`bi ${service.icon}`} />
              </span>
              <h4 className="svc-title">{service.title}</h4>
            </div>
            <p className="svc-desc">{service.desc}</p>
            <span className="svc-cta" style={{ color: service.accent }}>
              Learn More <i className="bi bi-arrow-right-short" />
            </span>
          </div>

        </article>
      </Link>
    </div>
  );
}
