'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch('/api/admin/services').then(r => r.json()).then(data => {
      setServices(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(load, []);

  async function handleDelete(id) {
    if (!confirm('Delete this service?')) return;
    await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
    load();
  }

  async function toggleActive(s) {
    await fetch(`/api/admin/services/${s.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isActive: !s.isActive }),
    });
    load();
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Services</h4>
          <p className="text-muted small mb-0">{services.length} total services</p>
        </div>
        <Link href="/admin/services/new" className="btn" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }}>
          <i className="bi bi-plus-lg me-1" /> Add Service
        </Link>
      </div>
      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5 text-muted">Loading…</div>
          ) : services.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <i className="bi bi-gear fs-1 d-block mb-2" />
              No services yet. <Link href="/admin/services/new">Add one</Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr>
                    <th className="px-4 py-3">Service</th>
                    <th className="py-3">Slug</th>
                    <th className="py-3">Color</th>
                    <th className="py-3">Status</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(s => (
                    <tr key={s.id}>
                      <td className="px-4 py-3">
                        <div className="d-flex align-items-center gap-2">
                          {s.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={s.image} alt={s.title}
                              style={{ width: 36, height: 36, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }}
                              onError={e => { e.currentTarget.style.display = 'none'; }} />
                          )}
                          <div>
                            <div className="fw-semibold">{s.title}</div>
                            <div className="text-muted" style={{ fontSize: 12 }}>{s.icon}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-muted">{s.slug}</td>
                      <td className="py-3">
                        <span style={{ display: 'inline-block', width: 20, height: 20, borderRadius: 4, background: s.accentColor, border: '1px solid #e2e8f0' }} />
                      </td>
                      <td className="py-3">
                        <button onClick={() => toggleActive(s)} className={`badge border-0 ${s.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ cursor: 'pointer' }}>
                          {s.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="py-3">
                        <div className="d-flex gap-1 flex-wrap">
                          <Link href={`/admin/services/${s.id}`} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }} title="Edit service details">
                            <i className="bi bi-pencil" />
                          </Link>
                          <Link href={`/admin/services/${s.id}/landing`} className="btn btn-sm btn-outline-info" style={{ borderRadius: 6 }} title="Edit landing page content">
                            <i className="bi bi-layout-text-window" />
                          </Link>
                          <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }} title="Delete">
                            <i className="bi bi-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
