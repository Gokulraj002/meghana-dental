/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output — bundles only the files needed to run the server.
  // Creates .next/standalone/ which is the self-contained deployment package.
  output: 'standalone',

  // Server mode — required for API routes, admin panel, and database access.
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true, // gzip responses (default true, kept explicit)

  // Image optimization — `unoptimized: true` shipped untouched <img> via next/image,
  // which means no resizing, no AVIF/WebP, no lazy-loading hints. Turn it back on so
  // browsers receive properly-sized, modern-format images.
  // (next/image will use Sharp if installed; falls back to a JS pipeline otherwise.)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Tree-shake commonly-imported icon/utility packages so we don't ship the
  // whole library when only a handful of exports are used.
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'bootstrap',
      'bootstrap-icons',
    ],
  },

  // Cache headers for static assets under /public/images.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(doctors|services|empanelled)/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
