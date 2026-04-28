import Link from 'next/link';
import { SERVICES } from '@/lib/services';

export default function FooterServices() {
  const mid = Math.ceil(SERVICES.length / 2);
  const col1 = SERVICES.slice(0, mid);
  const col2 = SERVICES.slice(mid);

  return (
    <div className="col-lg-3 col-md-4">
      <h5>Our Services</h5>
      <div className="row g-0">
        <div className="col-6">
          <ul className="footer-links">
            {col1.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.footerLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <ul className="footer-links">
            {col2.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.footerLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
