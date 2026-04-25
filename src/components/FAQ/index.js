'use client';

import { useState } from 'react';

export default function FAQSection({ faqs = [] }) {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left Header */}
          <div className="col-lg-4">
            <div className="faq-header-sticky">
              <span className="subtitle">FAQ</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-heading)', margin: '16px 0 20px', lineHeight: '1.25' }}>
                Got Questions? <br />
                <span style={{ background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We Have Answers.</span>
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '0.97rem', lineHeight: '1.8', marginBottom: '28px' }}>
                Everything you need to know about our treatments, procedures, and what to expect at Meghana Dental Hospital.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hello!%20I%20have%20a%20question%20about%20dental%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-wa"
                style={{ textDecoration: 'none', display: 'inline-flex', fontSize: '0.9rem', padding: '12px 22px' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="col-lg-8">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={faq.id || i}
                  className={`faq-item ${open === i ? 'open' : ''}`}
                  onClick={() => toggle(i)}
                >
                  <div className="faq-question">
                    <span>{faq.q || faq.question}</span>
                    <div className="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                        {open === i
                          ? <path d="M5 12h14" strokeLinecap="round" />
                          : <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        }
                      </svg>
                    </div>
                  </div>
                  {open === i && (
                    <div className="faq-answer">
                      <p>{faq.a || faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: var(--bg-cream);
        }

        .faq-header-sticky {
          position: sticky;
          top: 100px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-sm);
        }

        .faq-item.open {
          border-color: var(--primary);
          box-shadow: 0 4px 20px rgba(14, 165, 160, 0.1);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
        }

        .faq-question span {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.97rem;
          color: var(--text-heading);
          line-height: 1.45;
        }

        .faq-item.open .faq-question span {
          color: var(--primary-dark);
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary-50);
          border: 1px solid var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .faq-item.open .faq-icon {
          background: var(--primary-gradient);
          color: #fff;
          border-color: transparent;
        }

        .faq-answer {
          padding: 0 24px 20px;
          animation: fadeDown 0.25s ease;
        }

        .faq-answer p {
          color: var(--text-body);
          font-size: 0.93rem;
          line-height: 1.8;
          margin: 0;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 991px) {
          .faq-header-sticky { position: static; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
