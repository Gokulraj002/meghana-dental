'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function DoctorForm({ initial = {} }) {
  const router = useRouter();
  const fileRef = useRef();
  const [form, setForm] = useState({
    name: initial.name || '',
    qualification: initial.qualification || '',
    speciality: initial.speciality || '',
    experience: initial.experience || '',
    photo: initial.photo || '',
    bio: initial.bio || '',
    isActive: initial.isActive !== false,
    sortOrder: initial.sortOrder || 0,
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const isEdit = !!initial.id;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.url) setForm(f => ({ ...f, photo: data.url }));
      else setError(data.error || 'Upload failed');
    } catch { setError('Upload failed — network error.'); }
    setUploading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const url = isEdit ? `/api/admin/doctors/${initial.id}` : '/api/admin/doctors';
    const method = isEdit ? 'PUT' : 'POST';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) }),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/admin/doctors');
    } else {
      setError(data.error || 'Save failed');
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Doctor Name *</label>
          <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Qualification</label>
          <input name="qualification" className="form-control" value={form.qualification} onChange={handleChange} placeholder="MDS Prosthodontics" />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Speciality</label>
          <input name="speciality" className="form-control" value={form.speciality} onChange={handleChange} placeholder="Prosthodontist" />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Experience</label>
          <input name="experience" className="form-control" value={form.experience} onChange={handleChange} placeholder="17+ Years" />
        </div>
        <div className="col-md-2">
          <label className="form-label fw-semibold">Sort Order</label>
          <input type="number" name="sortOrder" className="form-control" value={form.sortOrder} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Bio</label>
          <textarea name="bio" className="form-control" rows={4} value={form.bio} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Photo</label>
          <div className="d-flex align-items-center gap-3">
            {form.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={form.photo} alt="preview" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%', border: '2px solid #e2e8f0' }} onError={e => { e.currentTarget.style.opacity='0.3'; }} />
            )}
            <div>
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => fileRef.current.click()} disabled={uploading}>
                <i className="bi bi-upload me-1" />{uploading ? 'Uploading\u2026' : 'Upload Photo'}
              </button>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoUpload} />
              <input className="form-control form-control-sm mt-2" value={form.photo} onChange={e => setForm(f => ({ ...f, photo: e.target.value }))} placeholder="or paste photo URL" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input" name="isActive" id="doctorActive" checked={form.isActive} onChange={handleChange} />
            <label className="form-check-label" htmlFor="doctorActive">Active (visible on website)</label>
          </div>
        </div>
        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn" style={{ background: '#10b981', color: '#fff', borderRadius: 8 }} disabled={saving}>
            {saving ? 'Saving\u2026' : isEdit ? 'Save Changes' : 'Add Doctor'}
          </button>
          <button type="button" className="btn btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => router.push('/admin/doctors')}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
