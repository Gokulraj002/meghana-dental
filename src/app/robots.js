export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://meghanadental.com/sitemap.xml',
    host: 'https://meghanadental.com',
  };
}
