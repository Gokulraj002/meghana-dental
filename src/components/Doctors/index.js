import Image from 'next/image';
import Link from 'next/link';

const specialties = [
  { icon: 'bi-shield-plus', title: 'Oral Surgery', desc: 'Complex extractions, jaw surgeries, and oral pathology' },
  { icon: 'bi-emoji-smile', title: 'Orthodontics', desc: 'Metal braces, ceramic braces & clear aligners' },
  { icon: 'bi-patch-check', title: 'Prosthodontics', desc: 'Implants, crowns, bridges and BPS dentures' },
  { icon: 'bi-heart-pulse', title: 'Endodontics', desc: 'Painless root canal therapy under microscope' },
  { icon: 'bi-star', title: 'Cosmetic Dentistry', desc: 'Smile makeovers, whitening & veneers' },
  { icon: 'bi-balloon-heart', title: 'Pediatric Dentistry', desc: 'Gentle, fear-free dental care for children' },
];

export default function DoctorsSection() {
  return (
    <section className="doctors-section section-padding" id="doctors">
      <div className="container position-relative">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR EXPERTS</span>
          <h2>Meet Our Lead Specialist</h2>
          <p>
            Our team of MDS-qualified dental specialists brings years of expertise and
            a passion for perfection to every treatment.
          </p>
        </div>

        {/* Lead Doctor — Dr. M. Hemadri */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="lead-doctor-card">
              <div className="row g-0 align-items-center">
                <div className="col-md-5">
                  <div className="lead-doctor-image">
                    <Image
                      src="/images/dr-hemu.jpg"
                      alt="Dr. M. Hemadri — Founder & Chief Endodontist"
                      width={480}
                      height={560}
                      style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'top center' }}
                    />
                    <div className="doc-badge">Founder & Director</div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="lead-doctor-info">
                    <div className="doc-tag">Lead Specialist</div>
                    <h3>Dr. M. Hemadri</h3>
                    <p className="doc-specialty">Endodontist &amp; Implantologist</p>
                    <p className="doc-qual">MDS (Conservative Dentistry &amp; Endodontics), ICOI Fellow</p>
                    <p className="doc-desc">
                      Founder and Director of Meghana Multi-Speciality Dental Hospital. A distinguished
                      endodontist with 17 years of experience, Dr. Hemadri is widely acclaimed for
                      single-visit root canal treatment, microscope-guided endodontics, LASER dentistry,
                      and full-mouth rehabilitation. He holds an ICOI Fellowship in Implant Dentistry.
                    </p>
                    <div className="doc-stats">
                      <div className="doc-stat">
                        <strong>17+</strong>
                        <span>Years Exp.</span>
                      </div>
                      <div className="doc-stat">
                        <strong>50,000+</strong>
                        <span>Patients</span>
                      </div>
                      <div className="doc-stat">
                        <strong>4.9★</strong>
                        <span>Rating</span>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/917893327036?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation%20with%20Dr.%20M.%20Hemadri."
                      className="doc-wa-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="specialties-header">
          <h4>Our Dental Specialties</h4>
          <p>Expert care across all branches of dentistry</p>
        </div>
        <div className="row g-3">
          {specialties.map((sp, i) => (
            <div className="col-lg-2 col-md-4 col-6" key={i}>
              <div className="specialty-chip">
                <i className={`bi ${sp.icon}`}></i>
                <strong>{sp.title}</strong>
                <small>{sp.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lead-doctor-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(14, 165, 160, 0.1);
        }

        .lead-doctor-image {
          position: relative;
          height: 100%;
          min-height: 360px;
        }

        .doc-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: var(--primary-gradient);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 50px;
          letter-spacing: 0.5px;
        }

        .lead-doctor-info {
          padding: 32px;
        }

        .doc-tag {
          display: inline-block;
          background: rgba(14, 165, 160, 0.1);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .lead-doctor-info h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-heading);
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .doc-specialty {
          font-size: 0.95rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .doc-qual {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 14px;
        }

        .doc-desc {
          font-size: 0.87rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .doc-stats {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
        }

        .doc-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .doc-stat strong {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary);
        }

        .doc-stat span {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .doc-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #fff;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 0.87rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
        }

        .doc-wa-btn:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
        }

        .specialties-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .specialties-header h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-heading);
          margin-bottom: 6px;
        }

        .specialties-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .specialty-chip {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 20px 14px;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .specialty-chip:hover {
          border-color: var(--primary-light);
          box-shadow: 0 6px 20px rgba(14, 165, 160, 0.12);
          transform: translateY(-4px);
        }

        .specialty-chip i {
          font-size: 1.6rem;
          color: var(--primary);
        }

        .specialty-chip strong {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-heading);
          display: block;
        }

        .specialty-chip small {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: block;
        }

        @media (max-width: 767px) {
          .lead-doctor-image {
            min-height: 260px;
          }

          .lead-doctor-info {
            padding: 24px;
          }

          .lead-doctor-info h3 {
            font-size: 1.35rem;
          }

          .doc-stats {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
