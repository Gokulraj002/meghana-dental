'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetch('/api/admin/doctors').then(r => r.json()).then(data => {
      setDoctors(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(load, []);

  async function handleDelete(id) {
    if (!confirm('Delete this doctor?')) return;
    await fetch(`/api/admin/doctors/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Doctors</h4>
          <p className="text-muted small mb-0">{doctors.length} doctors</p>
        </div>
        <Link href="/admin/doctors/new" className="btn" style={{ background: '#10b981', color: '#fff', borderRadius: 8 }}>
          <i className="bi bi-plus-lg me-1" /> Add Doctor
        </Link>
      </div>
      <div className="row g-3">
        {loading ? (
          <div className="text-center py-5 text-muted">Loading…</div>
        ) : doctors.length === 0 ? (
          <div className="col-12 text-center py-5 text-muted">
            <i className="bi bi-person-badge fs-1 d-block mb-2" />
            No doctors yet. <Link href="/admin/doctors/new">Add one</Link>
          </div>
        ) : doctors.map(d => (
          <div key={d.id} className="col-md-4">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 12 }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  {d.photo ? (
                    <Image src={d.photo} alt={d.name} width={52} height={52} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="bi bi-person text-muted fs-4" />
                    </div>
                  )}
                  <div>
                    <div className="fw-semibold">{d.name}</div>
                    <div className="text-muted small">{d.qualification}</div>
                  </div>
                </div>
                <p className="text-muted small mb-2"><i className="bi bi-star me-1" />{d.speciality}</p>
                {d.experience && <p className="text-muted small mb-3"><i className="bi bi-clock me-1" />{d.experience}</p>}
                <span className={`badge ${d.isActive ? 'bg-success' : 'bg-secondary'} mb-3`}>{d.isActive ? 'Active' : 'Inactive'}</span>
                <div className="d-flex gap-1">
                  <Link href={`/admin/doctors/${d.id}`} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6, flex: 1 }}>
                    <i className="bi bi-pencil me-1" /> Edit
                  </Link>
                  <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }}>
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
