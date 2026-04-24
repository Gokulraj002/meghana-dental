/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — generates /out folder ready for any static host
  output: 'export',

  // Enable gzip/brotli compression
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Image optimization requires a server — use unoptimized for static export
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        // Cache static images for 1 year
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache static service images for 1 year
        source: '/services/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Security + performance headers for all pages
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
