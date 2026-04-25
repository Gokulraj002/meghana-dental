'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import DoctorForm from '@/components/Admin/DoctorForm';

export default function EditDoctor() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/admin/doctors/${id}`)
      .then(r => {
        if (!r.ok) throw new Error(r.status === 404 ? 'Doctor not found.' : r.status === 401 ? 'Not authorized — please log in.' : `Error ${r.status}`);
        return r.json();
      })
      .then(data => {
        setDoctor(data);
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
      Loading doctor…
    </div>
  );

  if (error) return (
    <div className="alert alert-danger d-flex align-items-center gap-2">
      <i className="bi bi-exclamation-triangle-fill" />
      <span>{error}</span>
      <Link href="/admin/doctors" className="ms-auto btn btn-sm btn-outline-danger">← Back</Link>
    </div>
  );

  if (!doctor) return (
    <div className="alert alert-warning">
      Doctor not found. <Link href="/admin/doctors">← Back to Doctors</Link>
    </div>
  );

  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-1">
        <Link href="/admin/doctors" className="text-muted text-decoration-none small">
          <i className="bi bi-arrow-left me-1" />Doctors
        </Link>
        <span className="text-muted small">/</span>
        <span className="small fw-semibold">Edit</span>
      </div>
      <h4 className="fw-bold mb-1">Edit Doctor</h4>
      <p className="text-muted small mb-4">Editing: <strong>{doctor.name}</strong></p>
      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-4">
          <DoctorForm initial={doctor} />
        </div>
      </div>
    </div>
  );
}
