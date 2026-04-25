import Image from 'next/image';
import { getPartners } from '@/lib/content';

const FALLBACK = [
  { name: 'Government of India', logo: '/empanelled/govt-of-india.png' },
  { name: 'ECHS', logo: '/empanelled/echs.png' },
  { name: 'Tirumala Tirupati Devasthanams', logo: '/empanelled/ttd.png' },
  { name: 'Andhra Pradesh Police', logo: '/empanelled/ap-police.png' },
  { name: 'APSRTC', logo: '/empanelled/apsrtc.png' },
  { name: 'Southern Power Distribution AP', logo: '/empanelled/southern-power-ap.png' },
  { name: 'APTRANSCO', logo: '/empanelled/aptransco.png' },
  { name: 'BSNL', logo: '/empanelled/bsnl.png' },
  { name: 'India Post', logo: '/empanelled/india-post.png' },
  { name: 'Dr. NTR Vaidya Seva', logo: '/empanelled/ntr-vaidyaseva.png' },
  { name: 'Bank Employees', logo: '/empanelled/bank.png' },
];

function shortLabel(name) {
  if (!name) return '';
  // Strip parenthetical, take first phrase before " — "
  const trimmed = name.split('—')[0].split('-').slice(0, 2).join('-').trim();
  return trimmed.length > 22 ? trimmed.split(' ').slice(0, 3).join(' ') : trimmed;
}

export default async function EmpanelledSection() {
  const rows = await getPartners();
  const panels = rows.length > 0 ? rows : FALLBACK;

  return (
    <section className="empanelled-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">RECOGNISED & EMPANELLED</span>
          <h2>Trusted by Government & Public Sector</h2>
          <p>
            Meghana Multispeciality Dental Hospital is an <strong>NABH certified</strong> dental
            hospital and is officially empanelled with leading government organisations, defence,
            and public sector undertakings — providing quality dental care to their employees and
            beneficiaries.
          </p>
        </div>

        <div className="empanelled-badges">
          <div className="emp-badge emp-badge--nabh">
            <i className="bi bi-patch-check-fill" />
            <div>
              <strong>NABH Certified</strong>
              <span>National Accreditation Board for Hospitals</span>
            </div>
          </div>
          <div className="emp-badge emp-badge--count">
            <i className="bi bi-building-fill" />
            <div>
              <strong>{panels.length}+ Organisations</strong>
              <span>Empanelled Government & PSU Bodies</span>
            </div>
          </div>
        </div>

        <div className="empanelled-grid">
          {panels.map((p, i) => (
            <div className="emp-logo-card" key={p.id || i} title={p.name}>
              <div className="emp-logo-img">
                {p.logo && (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={80}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                )}
              </div>
              <span className="emp-logo-label">{shortLabel(p.name)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
