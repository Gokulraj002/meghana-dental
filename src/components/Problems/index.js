import Link from 'next/link';

const problems = [
  { icon: 'bi-patch-exclamation-fill', problem: 'Missing Teeth',        solution: 'Dental Implants',       href: '/services/dental-implants',   color: '#0ea5e9' },
  { icon: 'bi-align-center',           problem: 'Crooked Teeth',         solution: 'Braces / Aligners',     href: '/services/orthodontics',      color: '#8b5cf6' },
  { icon: 'bi-activity',               problem: 'Tooth Pain',            solution: 'Root Canal Treatment',  href: '/services/root-canal',        color: '#3b82f6' },
  { icon: 'bi-brightness-high-fill',   problem: 'Stained / Yellow Teeth',solution: 'Teeth Whitening',       href: '/services/teeth-whitening',   color: '#f59e0b' },
  { icon: 'bi-heart-pulse-fill',       problem: 'Bleeding Gums',         solution: 'Gum Treatment',         href: '/services/gum-treatment',     color: '#10b981' },
  { icon: 'bi-gem',                    problem: 'Misaligned Bite',        solution: 'Clear Aligners',        href: '/services/aligners',          color: '#06b6d4' },
  { icon: 'bi-person-fill',            problem: 'Loose / No Teeth',      solution: 'Dentures & Implants',   href: '/services/dentures',          color: '#059669' },
  { icon: 'bi-stars',                  problem: 'Smile You Hate',         solution: 'Smile Makeover',        href: '/services/smile-makeover',    color: '#ec4899' },
];

export default function ProblemsSection() {
  return (
    <section className="problems-section section-padding">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">WE CAN HELP</span>
          <h2>Common Problems We Solve</h2>
          <p>
            Whatever dental concern is holding you back — we have the specialist and the
            technology to fix it. Find your problem below.
          </p>
        </div>

        <div className="row g-3">
          {problems.map((item, i) => (
            <div className="col-lg-3 col-md-6 col-6" key={i}>
              <Link href={item.href} className="prob-card-link">
                <div className="prob-card">
                  <div className="prob-icon" style={{ color: item.color, background: `${item.color}18` }}>
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <div className="prob-body">
                    <p className="prob-problem">{item.problem}</p>
                    <p className="prob-solution" style={{ color: item.color }}>
                      <i className="bi bi-arrow-right-short" />{item.solution}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
