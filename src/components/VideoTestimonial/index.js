'use client';

import { useState, useRef } from 'react';

export default function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="video-testimonial-section section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left — Video */}
          <div className="col-lg-6">
            <div className="vt-video-wrapper" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="vt-video"
                playsInline
                onEnded={() => setPlaying(false)}
                preload="none"
              >
                <source src="/images/patient-testimonial.mp4" type="video/mp4" />
              </video>
              {!playing && (
                <div className="vt-play-overlay">
                  <div className="vt-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="vt-play-label">Watch Patient Story</div>
                </div>
              )}
              {playing && (
                <div className="vt-pause-overlay" onClick={togglePlay}>
                  <div className="vt-pause-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="vt-badge">
                <span>⭐ Real Patient</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="col-lg-6">
            <div className="vt-content">
              <span className="subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '14px', padding: '6px 18px', background: 'var(--primary-50)', borderRadius: '9999px', border: '1px solid var(--primary-light)' }}>
                🎬 PATIENT STORY
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '20px', lineHeight: '1.2' }}>
                Real Results, <span style={{ background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Smiles</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.85', marginBottom: '28px' }}>
                Hear directly from our patients about their experience at Meghana Dental Hospital.
                From root canals to full smile makeovers — every story is a testament to our
                commitment to pain-free, world-class dental care.
              </p>

              <div className="vt-stats">
                <div className="vt-stat">
                  <span className="vt-stat-number">850+</span>
                  <span className="vt-stat-label">Google Reviews</span>
                </div>
                <div className="vt-stat-divider"></div>
                <div className="vt-stat">
                  <span className="vt-stat-number">4.9★</span>
                  <span className="vt-stat-label">Average Rating</span>
                </div>
                <div className="vt-stat-divider"></div>
                <div className="vt-stat">
                  <span className="vt-stat-number">50K+</span>
                  <span className="vt-stat-label">Patients Treated</span>
                </div>
              </div>

              <a
                href="https://wa.me/917893327036?text=Hello!%20I%27d%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .video-testimonial-section {
          background: var(--bg-soft);
        }

        .vt-video-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 20px 60px rgba(15, 40, 55, 0.15);
          aspect-ratio: 16/10;
          background: var(--bg-dark);
        }

        .vt-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .vt-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(15, 40, 55, 0.45);
          backdrop-filter: blur(2px);
          gap: 14px;
          transition: background 0.3s;
        }

        .vt-video-wrapper:hover .vt-play-overlay {
          background: rgba(15, 40, 55, 0.3);
        }

        .vt-play-btn {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--primary-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 8px 32px rgba(14, 165, 160, 0.5);
          transition: all 0.3s;
          padding-left: 4px;
        }

        .vt-video-wrapper:hover .vt-play-btn {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(14, 165, 160, 0.7);
        }

        .vt-play-label {
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .vt-pause-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .vt-video-wrapper:hover .vt-pause-overlay {
          opacity: 1;
        }

        .vt-pause-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .vt-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
        }

        .vt-stats {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px 24px;
          background: var(--bg-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          margin-bottom: 8px;
        }

        .vt-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .vt-stat-number {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
        }

        .vt-stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 4px;
          font-weight: 500;
        }

        .vt-stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }
      `}</style>
    </section>
  );
}
