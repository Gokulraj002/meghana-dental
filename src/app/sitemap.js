const BASE = 'https://meghanadental.in';

const services = [
  'dental-implants',
  'root-canal',
  'orthodontics',
  'aligners',
  'teeth-whitening',
  'dentures',
  'pediatric-dentistry',
  'microscope-dentistry',
  'laser-dentistry',
  'gum-treatment',
  'tooth-extraction',
  'dental-crowns',
  'smile-makeover',
  'full-mouth-rehab',
];

export default function sitemap() {
  const now = new Date();

  const mainPages = [
    { url: `${BASE}/`,              priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/about`,         priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/doctors`,       priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services`,      priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/testimonials`,  priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE}/contact`,       priority: 0.9, changeFrequency: 'monthly' },
  ];

  const servicePages = services.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  const legalPages = [
    { url: `${BASE}/privacy-policy`,    priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE}/terms-conditions`,  priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [...mainPages, ...servicePages, ...legalPages].map((p) => ({
    ...p,
    lastModified: now,
  }));
}
