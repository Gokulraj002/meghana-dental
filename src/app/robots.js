export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://meghanadental.in/sitemap.xml',
    host: 'https://meghanadental.in',
  };
}
