import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';

export default function ServicesListing() {
  return (
    <div className="row g-4">
      {SERVICES.map((service, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6" key={service.slug}>
          <Link href={`/services/${service.slug}`} className="sl-link">
            <div className="sl-card">

              {/* Card top — image or gradient */}
              {service.image ? (
                <div className="sl-img-wrap">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={560}
                    height={340}
                    className="sl-img-cover"
                  />
                  <div className="sl-img-dark" />
                  <div className="sl-img-accent" style={{ background: service.gradient }} />
                  <div className="sl-img-tag" style={{ background: service.gradient }}>
                    <i className={`bi ${service.icon}`} />
                  </div>
                  <span className="sl-num">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ) : (
                <div className="sl-header" style={{ background: service.gradient }}>
                  <div className="sl-icon"><i className={`bi ${service.icon}`} /></div>
                  <span className="sl-num">{String(index + 1).padStart(2, '0')}</span>
                </div>
              )}

              {/* Content body */}
              <div className="sl-body">
                <h3 className="sl-title">{service.title}</h3>
                <p className="sl-desc">{service.desc}</p>
                <ul className="sl-features">
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle-fill" style={{ color: service.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="sl-cta" style={{ color: service.accent }}>
                  Learn More <i className="bi bi-arrow-right-short" />
                </span>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
