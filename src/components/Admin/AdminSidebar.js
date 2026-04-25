'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const navGroups = [
  {
    label: 'MAIN',
    items: [
      { href: '/admin/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
    ],
  },
  {
    label: 'CONTENT',
    items: [
      { href: '/admin/services', icon: 'bi-gear', label: 'Services' },
      { href: '/admin/doctors', icon: 'bi-person-badge', label: 'Doctors' },
      { href: '/admin/testimonials', icon: 'bi-chat-quote', label: 'Testimonials' },
      { href: '/admin/faqs', icon: 'bi-question-circle', label: 'FAQs' },
      { href: '/admin/gallery', icon: 'bi-images', label: 'Gallery' },
    ],
  },
  {
    label: 'PAGE SECTIONS',
    items: [
      { href: '/admin/hero', icon: 'bi-stars', label: 'Hero Section' },
      { href: '/admin/about', icon: 'bi-info-circle', label: 'About Section' },
      { href: '/admin/problems', icon: 'bi-question-octagon', label: 'Problems' },
      { href: '/admin/facilities', icon: 'bi-building', label: 'Facilities' },
      { href: '/admin/partners', icon: 'bi-shield-check', label: 'Partners' },
      { href: '/admin/quotes', icon: 'bi-quote', label: 'Quote Strip' },
    ],
  },
  {
    label: 'CUSTOMIZE',
    items: [
      { href: '/admin/seo', icon: 'bi-search', label: 'SEO Manager' },
      { href: '/admin/menu', icon: 'bi-list', label: 'Menu / Links' },
      { href: '/admin/content', icon: 'bi-file-text', label: 'Page Content' },
      { href: '/admin/settings', icon: 'bi-sliders', label: 'Site Settings' },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <aside style={{
      width: 240, background: '#0f172a', color: '#fff', display: 'flex',
      flexDirection: 'column', minHeight: '100vh', position: 'sticky', top: 0,
      borderRight: '1px solid #1e293b',
    }}>
      {/* Brand */}
      <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} style={{ objectFit: 'contain', borderRadius: 8 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Meghana Dental</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>Admin Panel</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
        {navGroups.map(group => (
          <div key={group.label} style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#475569', padding: '8px 12px 4px', letterSpacing: '0.08em' }}>
              {group.label}
            </div>
            {group.items.map(item => {
              const active = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
                  borderRadius: 8, marginBottom: 2, textDecoration: 'none', fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  background: active ? '#0ea5e9' : 'transparent',
                  color: active ? '#fff' : '#94a3b8',
                  transition: 'all 0.15s',
                }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: 15, width: 18, textAlign: 'center' }} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: '12px 10px', borderTop: '1px solid #1e293b' }}>
        <a href="/" target="_blank" style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
          borderRadius: 8, color: '#64748b', fontSize: 12, textDecoration: 'none', marginBottom: 4,
        }}>
          <i className="bi bi-globe" style={{ fontSize: 14 }} /> View Website
        </a>
        <button onClick={handleLogout} style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 10,
          padding: '9px 12px', borderRadius: 8, border: 'none',
          background: 'transparent', color: '#ef4444', fontSize: 13, cursor: 'pointer',
        }}>
          <i className="bi bi-box-arrow-left" style={{ fontSize: 14 }} /> Logout
        </button>
      </div>
    </aside>
  );
}
