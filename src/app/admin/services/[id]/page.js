'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ServiceForm from '@/components/Admin/ServiceForm';

export default function EditService() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/admin/services/${id}`)
      .then(r => {
        if (!r.ok) throw new Error(r.status === 404 ? 'Service not found.' : r.status === 401 ? 'Not authorized — please log in.' : `Error ${r.status}`);
        return r.json();
      })
      .then(data => {
        setService(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="text-center py-5 text-muted">
      <div className="spinner-border spinner-border-sm me-2" role="status" />
      Loading service…
    </div>
  );

  if (error) return (
    <div className="alert alert-danger d-flex align-items-center gap-2">
      <i className="bi bi-exclamation-triangle-fill" />
      <span>{error}</span>
      <Link href="/admin/services" className="ms-auto btn btn-sm btn-outline-danger">← Back</Link>
    </div>
  );

  if (!service) return (
    <div className="alert alert-warning">
      Service not found. <Link href="/admin/services">← Back to Services</Link>
    </div>
  );

  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-1">
        <Link href="/admin/services" className="text-muted text-decoration-none small">
          <i className="bi bi-arrow-left me-1" />Services
        </Link>
        <span className="text-muted small">/</span>
        <span className="small fw-semibold">Edit</span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h4 className="fw-bold mb-1">Edit Service</h4>
          <p className="text-muted small mb-0">
            Editing: <strong>{service.title}</strong>
            <span className="ms-2 badge" style={{ background: service.accentColor || '#0ea5e9', fontSize: 11 }}>
              /{service.slug}
            </span>
          </p>
        </div>
        <Link
          href={`/admin/services/${id}/landing`}
          className="btn btn-sm btn-outline-info"
          style={{ borderRadius: 8 }}
        >
          <i className="bi bi-layout-text-window me-1" />Edit Landing Page
        </Link>
      </div>
      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-4">
          <ServiceForm initial={service} />
        </div>
      </div>
    </div>
  );
}
