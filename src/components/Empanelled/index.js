import Image from 'next/image';

const panels = [
  { src: '/empanelled/govt-of-india.png',     alt: 'Government of India',               label: 'Govt. of India' },
  { src: '/empanelled/echs.png',              alt: 'ECHS — Ex-servicemen Health Scheme', label: 'ECHS' },
  { src: '/empanelled/ttd.png',               alt: 'Tirumala Tirupati Devasthanams',      label: 'TTD' },
  { src: '/empanelled/ap-police.png',         alt: 'Andhra Pradesh Police',              label: 'AP Police' },
  { src: '/empanelled/apsrtc.png',            alt: 'APSRTC',                             label: 'APSRTC' },
  { src: '/empanelled/southern-power-ap.png', alt: 'Southern Power Distribution AP',     label: 'Southern Power AP' },
  { src: '/empanelled/aptransco.png',         alt: 'APTRANSCO',                          label: 'APTRANSCO' },
  { src: '/empanelled/bsnl.png',              alt: 'BSNL',                               label: 'BSNL' },
  { src: '/empanelled/india-post.png',        alt: 'India Post',                         label: 'India Post' },
  { src: '/empanelled/ntr-vaidyaseva.png',    alt: 'Dr. NTR Vaidya Seva',                label: 'NTR Vaidya Seva' },
  { src: '/empanelled/bank.png',              alt: 'Bank Employees',                     label: 'Bank Employees' },
];

/* Duplicate for seamless infinite loop */
const track = [...panels, ...panels];

export default function EmpanelledSection() {
  return (
    <section className="empanelled-section">

      {/* Header */}
      <div className="container">
        <div className="emp-header">
          <span className="emp-subtitle">RECOGNISED &amp; EMPANELLED</span>
          <h2 className="emp-title">
            Trusted by Government &amp; <span>Public Sector</span>
          </h2>
          <p className="emp-desc">
            Meghana Multispeciality Dental Hospital is an <strong>NABH certified</strong> dental
            hospital, officially empanelled with leading government organisations, defence bodies,
            and public sector undertakings.
          </p>

          {/* Badges */}
          <div className="emp-badges-row">
            <div className="emp-badge-pill emp-badge-nabh">
              <i className="bi bi-patch-check-fill" />
              <span><strong>NABH Certified</strong> — National Accreditation Board for Hospitals</span>
            </div>
            <div className="emp-badge-pill emp-badge-orgs">
              <i className="bi bi-building-fill" />
              <span><strong>11+ Organisations</strong> — Empanelled Govt &amp; PSU Bodies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="emp-ticker-outer">
        <div className="emp-ticker-track">
          {track.map((p, i) => (
            <div className="emp-ticker-card" key={i} aria-label={p.alt}>
              <div className="emp-ticker-img">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={110}
                  height={72}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <span className="emp-ticker-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
