export { getSeo } from './content';

export function buildMetadata(seo, fallback = {}) {
  if (!seo) return fallback;
  const title = seo.metaTitle || fallback.title;
  const description = seo.metaDescription || fallback.description;
  const out = {
    title,
    description,
    keywords: seo.metaKeywords || fallback.keywords,
  };
  if (seo.canonical || fallback.alternates?.canonical) {
    out.alternates = { canonical: seo.canonical || fallback.alternates?.canonical };
  }
  out.openGraph = {
    title: seo.ogTitle || title,
    description: seo.ogDescription || description,
    url: seo.canonical || fallback.alternates?.canonical,
    siteName: 'Meghana Dental Hospital',
    type: 'website',
    locale: 'en_IN',
    ...(seo.ogImage
      ? { images: [{ url: seo.ogImage, width: 1200, height: 630, alt: title }] }
      : fallback.openGraph?.images
      ? { images: fallback.openGraph.images }
      : {}),
  };
  return out;
}
