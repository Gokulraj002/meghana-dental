import Image from 'next/image';

export default function FacilityCard({ facility }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="facility-card">
        <div className="facility-image">
          <Image
            src={facility.image}
            alt={facility.title}
            width={400}
            height={300}
            style={{ width: '100%', height: '220px', objectFit: 'cover' }}
          />
          <div className="facility-overlay">
            <h5>{facility.title}</h5>
            <p>{facility.desc}</p>
          </div>
        </div>
      </div>

      <style>{`
        .facility-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        .facility-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }
        .facility-image {
          position: relative;
          overflow: hidden;
        }
        .facility-image img {
          display: block;
          transition: transform 0.5s ease;
        }
        .facility-card:hover .facility-image img {
          transform: scale(1.08);
        }
        .facility-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(15, 40, 55, 0.82) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px 16px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .facility-card:hover .facility-overlay {
          opacity: 1;
        }
        .facility-overlay h5 {
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .facility-overlay p {
          color: rgba(255,255,255,0.85);
          font-size: 0.78rem;
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
