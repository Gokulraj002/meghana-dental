/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — generates /out folder ready for any static host
  output: 'export',

  // Clean folder-based URLs (/about/index.html instead of /about.html)
  trailingSlash: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Image optimization requires a server — use unoptimized for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
