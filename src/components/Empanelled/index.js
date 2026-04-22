import Image from 'next/image';

const panels = [
  { src: '/empanelled/govt-of-india.png',     alt: 'Government of India',                   label: 'Govt. of India' },
  { src: '/empanelled/echs.png',              alt: 'ECHS — Ex-servicemen Health Scheme',     label: 'ECHS' },
  { src: '/empanelled/ttd.png',               alt: 'Tirumala Tirupati Devasthanams',          label: 'TTD' },
  { src: '/empanelled/ap-police.png',         alt: 'Andhra Pradesh Police',                  label: 'AP Police' },
  { src: '/empanelled/apsrtc.png',            alt: 'APSRTC',                                 label: 'APSRTC' },
  { src: '/empanelled/southern-power-ap.png', alt: 'Southern Power Distribution AP',         label: 'Southern Power AP' },
  { src: '/empanelled/aptransco.png',         alt: 'APTRANSCO',                              label: 'APTRANSCO' },
  { src: '/empanelled/bsnl.png',              alt: 'BSNL',                                   label: 'BSNL' },
  { src: '/empanelled/india-post.png',        alt: 'India Post',                             label: 'India Post' },
  { src: '/empanelled/ntr-vaidyaseva.png',    alt: 'Dr. NTR Vaidya Seva',                    label: 'NTR Vaidya Seva' },
  { src: '/empanelled/bank.png',              alt: 'Bank Employees',                         label: 'Bank Employees' },
];

export default function EmpanelledSection() {
  return (
    <section className="empanelled-section section-padding">
      <div className="container">

        {/* Header */}
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

        {/* NABH badge + empanelment count */}
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
              <strong>11+ Organisations</strong>
              <span>Empanelled Government & PSU Bodies</span>
            </div>
          </div>
        </div>

        {/* Logo grid */}
        <div className="empanelled-grid">
          {panels.map((p, i) => (
            <div className="emp-logo-card" key={i} title={p.alt}>
              <div className="emp-logo-img">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={120}
                  height={80}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <span className="emp-logo-label">{p.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
