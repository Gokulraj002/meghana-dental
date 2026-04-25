import Link from 'next/link';
import { getProblems } from '@/lib/content';

const FALLBACK = [
  { title: 'Missing Teeth', desc: 'Dental Implants', icon: 'bi-patch-exclamation-fill', color: '#0ea5e9', href: '/services/dental-implants' },
  { title: 'Crooked Teeth', desc: 'Braces / Aligners', icon: 'bi-align-center', color: '#8b5cf6', href: '/services/orthodontics' },
  { title: 'Tooth Pain', desc: 'Root Canal Treatment', icon: 'bi-activity', color: '#3b82f6', href: '/services/root-canal' },
  { title: 'Stained / Yellow Teeth', desc: 'Teeth Whitening', icon: 'bi-brightness-high-fill', color: '#f59e0b', href: '/services/teeth-whitening' },
  { title: 'Bleeding Gums', desc: 'Gum Treatment', icon: 'bi-heart-pulse-fill', color: '#10b981', href: '/services/gum-treatment' },
  { title: 'Misaligned Bite', desc: 'Clear Aligners', icon: 'bi-gem', color: '#06b6d4', href: '/services/aligners' },
  { title: 'Loose / No Teeth', desc: 'Dentures & Implants', icon: 'bi-person-fill', color: '#059669', href: '/services/dentures' },
  { title: 'Smile You Hate', desc: 'Smile Makeover', icon: 'bi-stars', color: '#ec4899', href: '/services/smile-makeover' },
];

// Map solution text -> service slug
const SOLUTION_TO_SLUG = {
  'dental implants': 'dental-implants',
  'braces': 'orthodontics',
  'aligners': 'aligners',
  'clear aligners': 'aligners',
  'root canal': 'root-canal',
  'teeth whitening': 'teeth-whitening',
  'gum': 'gum-treatment',
  'dentures': 'dentures',
  'smile makeover': 'smile-makeover',
};
function deriveHref(desc) {
  if (!desc) return '/services';
  const d = desc.toLowerCase();
  for (const [kw, slug] of Object.entries(SOLUTION_TO_SLUG)) {
    if (d.includes(kw)) return `/services/${slug}`;
  }
  return '/services';
}

export default async function ProblemsSection() {
  const rows = await getProblems();
  const problems = rows.length > 0
    ? rows.map(r => ({ ...r, href: deriveHref(r.desc) }))
    : FALLBACK;

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
            <div className="col-lg-3 col-md-6 col-6" key={item.id || i}>
              <Link href={item.href || '/services'} className="prob-card-link">
                <div className="prob-card">
                  <div className="prob-icon" style={{ color: item.color, background: `${item.color}18` }}>
                    <i className={`bi ${item.icon || 'bi-question-circle'}`} />
                  </div>
                  <div className="prob-body">
                    <p className="prob-problem">{item.title}</p>
                    <p className="prob-solution" style={{ color: item.color }}>
                      <i className="bi bi-arrow-right-short" />{item.desc}
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
