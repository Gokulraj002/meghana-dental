import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacement with titanium implants. Our prosthodontists use cutting-edge implant systems for lifelong results.',
    icon: 'bi-hospital-fill',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0d9488 100%)',
    accent: '#0ea5e9',
    image: '/services/dental-implants.jpg',
    link: '/services/dental-implants',
    features: ['Single & Multiple Implants', 'All-on-4 / All-on-6', 'Implant-Supported Dentures', 'Immediate Loading'],
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Advanced, pain-free root canal using microscope-guided precision. Single-sitting RCT with highest success rates in Tirupati.',
    icon: 'bi-activity',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
    accent: '#3b82f6',
    image: '/services/Root-Canal-Treatment.jpg',
    link: '/services/root-canal',
    features: ['Microscope-Guided RCT', 'Single-Sitting Available', 'Rotary Endodontics', 'Re-Root Canal Treatment'],
  },
  {
    title: 'Orthodontic Treatment',
    desc: 'Dental braces to align teeth for better straightening, jaw positioning, aesthetics, and facial symmetry.',
    icon: 'bi-emoji-smile',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #db2777 100%)',
    accent: '#8b5cf6',
    image: '/images/ortho-metal-braces.jpg',
    link: '/services/orthodontics',
    features: ['Metal Braces', 'Ceramic Braces', 'Self-Ligating Braces', '3D Oral Scanner Planning'],
  },
  {
    title: 'Clear Aligners',
    desc: 'Custom-fitted transparent trays that gradually shift teeth into position — invisible, removable, and comfortable.',
    icon: 'bi-gem',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    accent: '#0891b2',
    image: '/images/aligners-wearing.jpg',
    link: '/services/aligners',
    features: ['Invisible Treatment', 'Removable Trays', '3D Intra-Oral Scanning', 'No Food Restrictions'],
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional in-office laser whitening for a brighter, more confident smile in just one visit.',
    icon: 'bi-brightness-high-fill',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
    accent: '#f59e0b',
    image: '/services/Teeth-Whitening.jpg',
    link: '/services/teeth-whitening',
    features: ['In-Office Laser Whitening', 'Take-Home Kits', 'Long-Lasting Results', 'Safe & Painless'],
  },
  {
    title: 'Dentures & Prosthetics',
    desc: 'Premium BPS dentures, flexible partial dentures, and precision-crafted full dentures for a natural look.',
    icon: 'bi-person-fill',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accent: '#10b981',
    image: '/services/Dentures-Prosthetics.jpg',
    link: '/services/dentures',
    features: ['BPS Dentures', 'Flexible Dentures', 'Cast Partial Dentures', 'Implant-Supported Dentures'],
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, child-friendly dental care designed specially for children in a fun, fear-free environment.',
    icon: 'bi-heart-fill',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    accent: '#ec4899',
    image: '/services/Pediatric-Dentistry.jpg',
    link: '/services/pediatric-dentistry',
    features: ['Baby Teeth Care', 'Fluoride Treatment', 'Fissure Sealants', 'Space Maintainers'],
  },
  {
    title: 'Microscope Dentistry',
    desc: 'Experience the highest precision with Carl Zeiss 25× dental operating microscope — only clinic in Tirupati.',
    icon: 'bi-search',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #0f766e 100%)',
    accent: '#4f46e5',
    image: '/images/microscope-use.jpg',
    link: '/services/microscope-dentistry',
    features: ['Precision Root Canals', 'Microsurgery', 'Crack Detection', 'Magnified Restorations'],
  },
  {
    title: 'Laser Dentistry',
    desc: 'Minimally invasive laser treatments for gum surgery, cavity treatment, ulcer healing, and gum contouring.',
    icon: 'bi-lightning-fill',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    accent: '#f97316',
    image: '/images/about-clinic.png',
    link: '/services/laser-dentistry',
    features: ['Laser Gum Surgery', 'Gum Contouring', 'Painless Cavity Prep', 'Ulcer Treatment'],
  },
  {
    title: 'Gum Treatment',
    desc: 'Comprehensive periodontal treatment — scaling, root planing, laser gum therapy, and long-term maintenance.',
    icon: 'bi-heart-pulse-fill',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)',
    accent: '#14b8a6',
    image: '/services/Gum-Treatment.jpg',
    link: '/services/gum-treatment',
    features: ['Scaling & Root Planing', 'Laser Gum Therapy', 'Flap Surgery', 'Periodontal Maintenance'],
  },
  {
    title: 'Tooth Extraction',
    desc: 'Safe and comfortable tooth removal including impacted wisdom tooth surgery with minimal discomfort.',
    icon: 'bi-shield-fill-check',
    gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
    accent: '#64748b',
    image: '/images/microscope-treatment.jpg',
    link: '/services/tooth-extraction',
    features: ['Simple Extractions', 'Surgical Extractions', 'Wisdom Tooth Removal', 'OPG X-ray Planning'],
  },
  {
    title: 'Dental Crowns & Bridges',
    desc: 'Custom-crafted zirconia, e.max, and PFM crowns and bridges for restoring damaged or missing teeth.',
    icon: 'bi-award-fill',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    accent: '#d97706',
    image: null,
    link: '/services/dental-crowns',
    features: ['Zirconia Crowns', 'e.max Crowns', 'PFM Crowns', 'Fixed Dental Bridges'],
  },
  {
    title: 'Smile Makeover',
    desc: 'Personalised combination of cosmetic and restorative treatments to transform your smile completely.',
    icon: 'bi-stars',
    gradient: 'linear-gradient(135deg, #a21caf 0%, #7c3aed 100%)',
    accent: '#a21caf',
    image: '/images/ortho-before-after-1.jpg',
    link: '/services/smile-makeover',
    features: ['Digital Smile Design', 'Porcelain Veneers', 'Gum Contouring', 'Composite Bonding'],
  },
  {
    title: 'Full Mouth Rehabilitation',
    desc: 'Complete smile reconstruction combining multiple specialist treatments for total oral health restoration.',
    icon: 'bi-layout-text-window-reverse',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #1e3a5f 100%)',
    accent: '#0f766e',
    image: '/images/ortho-self-ligating-braces.jpg',
    link: '/services/full-mouth-rehab',
    features: ['Multi-Specialty Approach', 'Digital Treatment Planning', 'Implants + Crowns + Ortho', 'Phased Treatment'],
  },
];

export default function ServicesListing() {
  return (
    <div className="row g-4">
      {services.map((service, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
          <Link href={service.link} className="sl-link">
            <div className="sl-card">

              {/* Card top — image or gradient */}
              {service.image ? (
                <div className="sl-img-wrap">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={480}
                    height={220}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  />
                  {/* dark overlay — preserves natural image colours */}
                  <div className="sl-img-dark" />
                  {/* thin accent bar at bottom edge */}
                  <div className="sl-img-accent" style={{ background: service.gradient }} />
                  <div className="sl-img-meta">
                    <div className="sl-icon" style={{ borderColor: service.accent }}>
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <span className="sl-num">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              ) : (
                <div className="sl-header" style={{ background: service.gradient }}>
                  <div className="sl-icon"><i className={`bi ${service.icon}`} /></div>
                  <span className="sl-num">{String(index + 1).padStart(2, '0')}</span>
                </div>
              )}

              {/* Content body */}
              <div className="sl-body">
                <h3 className="sl-title">{service.title}</h3>
                <p className="sl-desc">{service.desc}</p>
                <ul className="sl-features">
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle-fill" style={{ color: service.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="sl-cta" style={{ color: service.accent }}>
                  Learn More <i className="bi bi-arrow-right-short" />
                </span>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
