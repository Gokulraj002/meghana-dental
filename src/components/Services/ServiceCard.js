import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link href={service.link} style={{ textDecoration: 'none' }}>
        <div className="service-card-v2">
          {service.image ? (
            <div className="sc-image-wrapper">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={220}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div className="sc-tag">{service.tag}</div>
              <div className="sc-overlay"></div>
            </div>
          ) : (
            <div className="sc-tag sc-tag-top">{service.tag}</div>
          )}
          <div className="sc-body">
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <span className="sc-link">
              Learn More <i className="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
      </Link>

      <style>{`
        .service-card-v2 {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .service-card-v2:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(14, 165, 160, 0.15);
          border-color: var(--primary-light);
        }
        .sc-image-wrapper {
          position: relative;
          overflow: hidden;
        }
        .sc-image-wrapper img {
          transition: transform 0.5s ease;
          display: block;
        }
        .service-card-v2:hover .sc-image-wrapper img {
          transform: scale(1.08);
        }
        .sc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(15, 40, 55, 0.35) 100%);
        }
        .sc-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--primary-gradient);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          z-index: 2;
        }
        .sc-tag-top {
          position: relative;
          top: auto;
          right: auto;
          display: inline-block;
          margin: 16px 16px 0;
        }
        .sc-body {
          padding: 20px;
        }
        .sc-body h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-heading);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .sc-body p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 14px;
        }
        .sc-link {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }
        .service-card-v2:hover .sc-link {
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
