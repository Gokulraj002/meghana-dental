import { SERVICES } from '@/lib/services';

export const dynamic = 'force-static';

const BASE = 'https://meghanadental.in';

export default function sitemap() {
  const now = new Date();

  const mainPages = [
    { url: `${BASE}/`,             priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/about`,        priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/doctors`,      priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services`,     priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/testimonials`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE}/contact`,      priority: 0.9, changeFrequency: 'monthly' },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  const fillingSubPages = [
    { url: `${BASE}/services/tooth-colored-fillings`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/services/inlays-onlays`,          priority: 0.7, changeFrequency: 'monthly' },
  ];

  const legalPages = [
    { url: `${BASE}/privacy-policy`,   priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE}/terms-conditions`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [...mainPages, ...servicePages, ...fillingSubPages, ...legalPages].map((p) => ({
    ...p,
    lastModified: now,
  }));
}
