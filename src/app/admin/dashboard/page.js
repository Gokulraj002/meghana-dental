'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState({ services: [], doctors: [], testimonials: [], faqs: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/services').then(r => r.json()).catch(() => []),
      fetch('/api/admin/doctors').then(r => r.json()).catch(() => []),
      fetch('/api/admin/testimonials').then(r => r.json()).catch(() => []),
      fetch('/api/admin/faqs').then(r => r.json()).catch(() => []),
    ]).then(([services, doctors, testimonials, faqs]) => {
      setData({
        services: Array.isArray(services) ? services : [],
        doctors: Array.isArray(doctors) ? doctors : [],
        testimonials: Array.isArray(testimonials) ? testimonials : [],
        faqs: Array.isArray(faqs) ? faqs : [],
      });
      setLoading(false);
    });
  }, []);

  const stats = [
    { label: 'Services', count: data.services.length, active: data.services.filter(s => s.isActive).length, icon: 'bi-gear-fill', color: '#0ea5e9', href: '/admin/services' },
    { label: 'Doctors', count: data.doctors.length, active: data.doctors.filter(d => d.isActive).length, icon: 'bi-person-badge-fill', color: '#10b981', href: '/admin/doctors' },
    { label: 'Testimonials', count: data.testimonials.length, active: data.testimonials.filter(t => t.isActive).length, icon: 'bi-chat-quote-fill', color: '#f59e0b', href: '/admin/testimonials' },
    { label: 'FAQs', count: data.faqs.length, active: data.faqs.filter(f => f.isActive).length, icon: 'bi-question-circle-fill', color: '#8b5cf6', href: '/admin/faqs' },
  ];

  const quickActions = [
    { label: 'Add Service', href: '/admin/services/new', color: '#0ea5e9', icon: 'bi-plus-circle' },
    { label: 'Add Doctor', href: '/admin/doctors/new', color: '#10b981', icon: 'bi-person-plus' },
    { label: 'Add FAQ', href: '/admin/faqs', color: '#8b5cf6', icon: 'bi-question-circle' },
    { label: 'Add Gallery', href: '/admin/gallery', color: '#06b6d4', icon: 'bi-images' },
    { label: 'Edit Content', href: '/admin/content', color: '#f59e0b', icon: 'bi-file-text' },
    { label: 'Site Settings', href: '/admin/settings', color: '#64748b', icon: 'bi-sliders' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1" style={{ color: '#1e293b' }}>Dashboard</h4>
          <p className="text-muted small mb-0">Welcome to Meghana Dental Admin Panel</p>
        </div>
        <a href="/" target="_blank" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }}>
          <i className="bi bi-globe me-1" /> View Site
        </a>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        {stats.map(s => (
          <div key={s.label} className="col-md-3 col-sm-6">
            <Link href={s.href} style={{ textDecoration: 'none' }}>
              <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 12, transition: 'transform 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-start justify-content-between">
                    <div>
                      <p className="text-muted small mb-1 fw-semibold" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
                      <h2 className="fw-bold mb-0" style={{ color: '#1e293b', fontSize: 28 }}>
                        {loading ? '—' : s.count}
                      </h2>
                      {!loading && (
                        <p className="text-muted mb-0" style={{ fontSize: 11 }}>
                          {s.active} active
                        </p>
                      )}
                    </div>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`bi ${s.icon}`} style={{ fontSize: 20, color: s.color }} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Quick Actions + Recent Testimonials */}
      <div className="row g-3">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3">Quick Actions</h6>
              <div className="row g-2">
                {quickActions.map(a => (
                  <div key={a.label} className="col-6">
                    <Link href={a.href} style={{ textDecoration: 'none' }}>
                      <div style={{
                        padding: '12px 14px', borderRadius: 10, border: `1px solid ${a.color}20`,
                        background: a.color + '08', display: 'flex', alignItems: 'center', gap: 8,
                        fontSize: 12, fontWeight: 600, color: '#1e293b',
                        transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = a.color + '18'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = a.color + '08'; }}>
                        <i className={`bi ${a.icon}`} style={{ color: a.color, fontSize: 15 }} />
                        {a.label}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="fw-bold mb-0">Recent Testimonials</h6>
                <Link href="/admin/testimonials" style={{ fontSize: 12, color: '#0ea5e9' }}>View all</Link>
              </div>
              {loading ? (
                <div className="text-muted small">Loading…</div>
              ) : data.testimonials.slice(0, 3).map(t => (
                <div key={t.id} style={{ padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fw-semibold" style={{ fontSize: 13 }}>{t.patientName}</span>
                    <span style={{ color: '#f59e0b', fontSize: 12 }}>{'★'.repeat(t.rating)}</span>
                  </div>
                  <p className="text-muted mb-0" style={{ fontSize: 12, lineHeight: 1.5 }}>
                    {t.review.substring(0, 90)}…
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
