import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';

export const metadata = {
  title: 'Dental Fillings in Tirupati | Composite Fillings & Ceramic Inlays | Meghana Dental',
  description:
    'Dental fillings in Tirupati — choose from tooth-coloured composite fillings (single visit) or premium ceramic inlays & onlays (15–20+ years). Placed under 25× dental microscope at Meghana Dental Hospital.',
  keywords:
    'dental fillings Tirupati, tooth filling Tirupati, composite filling Tirupati, ceramic inlay Tirupati, onlay Tirupati, cavity filling Tirupati, tooth decay treatment Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/dental-fillings' },
  openGraph: {
    title: 'Dental Fillings in Tirupati | Composite & Ceramic Inlays — Meghana Dental',
    description:
      'Restore decayed or damaged teeth with tooth-coloured composite fillings or precision ceramic inlays in Tirupati. Microscope-guided, single-visit option available.',
    url: 'https://meghanadental.in/services/dental-fillings',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/services/fillings-before-after-1.jpg', width: 1200, height: 630, alt: 'Dental Fillings in Tirupati' }],
    type: 'website',
  },
};

const options = [
  {
    href: '/services/tooth-colored-fillings',
    image: '/services/fillings-before-after-1.jpg',
    accent: '#16a34a',
    icon: 'bi-palette',
    title: 'Tooth Coloured Fillings',
    subtitle: 'Composite Resin',
    badge: 'Single Visit',
    badgeBg: '#16a34a',
    desc: 'Shade-matched BPA-free composite resin fillings placed and completed chairside in one appointment — ideal for small to medium cavities and chipped teeth.',
    features: [
      { icon: 'bi-calendar-check', text: 'Completed in 1 Visit (45–60 min)' },
      { icon: 'bi-palette', text: 'Perfectly Shade-Matched' },
      { icon: 'bi-link-45deg', text: 'Bonds Chemically to Tooth' },
      { icon: 'bi-clock-history', text: 'Lasts 5–10 Years' },
    ],
    cta: 'View Composite Fillings',
  },
  {
    href: '/services/inlays-onlays',
    image: '/services/fillings-inlay-onlay.png',
    accent: '#7c3aed',
    icon: 'bi-gem',
    title: 'Inlays & Onlays',
    subtitle: 'Ceramic / e.max',
    badge: 'Premium',
    badgeBg: '#7c3aed',
    desc: 'Lab-fabricated solid ceramic or e.max porcelain restorations for large cavities and cracked cusps — stronger than fillings, preserving more healthy tooth than a crown.',
    features: [
      { icon: 'bi-gem', text: 'Solid Ceramic — No Shrinkage' },
      { icon: 'bi-clock-history', text: 'Lasts 15–20+ Years' },
      { icon: 'bi-shield-fill-check', text: 'Stronger Than Composite' },
      { icon: 'bi-calendar-event', text: '2 Visits (3–5 Day Lab)' },
    ],
    cta: 'View Inlays & Onlays',
  },
];

export default function DentalFillingsPage() {
  return (
    <>
      <Navbar />
      <ServicePageHero
        titleBefore="Dental"
        titleHighlight="Fillings"
        description="From single-visit composite fillings to precision ceramic inlays — Meghana Dental Hospital, Tirupati offers the full spectrum of tooth restoration under 25× dental microscope precision."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Dental Fillings' }]}
        image="/services/fillings-before-after-1.jpg"
        accent="#16a34a"
        stats={[
          { icon: 'bi-palette', label: 'Options', value: 'Composite & Ceramic' },
          { icon: 'bi-calendar-check', label: 'Direct Filling', value: '1 Visit' },
          { icon: 'bi-clock-history', label: 'Inlay Lifespan', value: '15–20+ Years' },
          { icon: 'bi-search', label: 'Precision', value: '25× Microscope' },
        ]}
      />

      <section className="section-padding">
        <div className="container">

          <div className="text-center mb-5">
            <p className="text-uppercase fw-semibold mb-2" style={{ color: '#16a34a', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Choose Your Treatment</p>
            <h2 className="fw-bold fs-1">Which Filling Is Right for You?</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
              The right restoration depends on the size of the cavity, tooth location, and how long you want it to last. Our dentist will advise you during your consultation.
            </p>
          </div>

          <div className="row g-4">
            {options.map((opt) => (
              <div className="col-lg-6" key={opt.href}>
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ '--bs-card-cap-bg': 'transparent' }}>

                  <div style={{ position: 'relative', height: 240 }}>
                    <Image src={opt.image} alt={opt.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                    <span
                      className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill text-white fw-semibold"
                      style={{ background: opt.badgeBg, fontSize: '0.78rem' }}
                    >
                      {opt.badge}
                    </span>
                  </div>

                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36, background: `${opt.accent}18`, color: opt.accent }}>
                        <i className={`bi ${opt.icon}`} />
                      </span>
                      <div>
                        <div className="fw-bold fs-5 lh-1">{opt.title}</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>{opt.subtitle}</div>
                      </div>
                    </div>

                    <p className="text-muted mt-3 mb-3" style={{ fontSize: '0.95rem' }}>{opt.desc}</p>

                    <ul className="list-unstyled mb-4">
                      {opt.features.map((f, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: '0.9rem' }}>
                          <i className={`bi ${f.icon}`} style={{ color: opt.accent, flexShrink: 0 }} />
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={opt.href}
                      className="btn w-100 text-white fw-semibold rounded-pill py-2"
                      style={{ background: opt.accent }}
                    >
                      {opt.cta} <i className="bi bi-arrow-right-short" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-4 text-center" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <i className="bi bi-search fs-3 mb-2 d-block" style={{ color: '#16a34a' }} />
            <h5 className="fw-bold mb-1">All Restorations Placed Under 25× Dental Microscope</h5>
            <p className="text-muted mb-0" style={{ maxWidth: 560, margin: '0 auto' }}>
              Whether you choose composite or ceramic, every filling at Meghana Dental Hospital is placed under our dental operating microscope — ensuring complete decay removal and a perfect-fit restoration every time.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
