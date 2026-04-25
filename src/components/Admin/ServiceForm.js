'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ServiceForm({ initial = {} }) {
  const router = useRouter();
  const fileRef = useRef();
  const [form, setForm] = useState({
    title: initial.title || '',
    slug: initial.slug || '',
    description: initial.description || '',
    shortDesc: initial.shortDesc || '',
    icon: initial.icon || 'bi-heart-pulse',
    image: initial.image || '',
    accentColor: initial.accentColor || '#0ea5e9',
    isActive: initial.isActive !== false,
    sortOrder: initial.sortOrder || 0,
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const isEdit = !!initial.id;

  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && !isEdit ? { slug: slugify(value) } : {}),
    }));
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.url) setForm(f => ({ ...f, image: data.url }));
      else setError(data.error || 'Upload failed');
    } catch { setError('Upload failed — network error.'); }
    setUploading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const url = isEdit ? `/api/admin/services/${initial.id}` : '/api/admin/services';
    const method = isEdit ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/admin/services');
      } else {
        setError(data.error || 'Save failed — please check all fields.');
        setSaving(false);
      }
    } catch {
      setError('Network error — please try again.');
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger d-flex align-items-center gap-2 mb-3">
          <i className="bi bi-exclamation-circle-fill" />
          <span>{error}</span>
        </div>
      )}
      <div className="row g-3">
        <div className="col-md-8">
          <label className="form-label fw-semibold">Title *</label>
          <input name="title" className="form-control" value={form.title} onChange={handleChange} required placeholder="e.g. Dental Implants" />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Slug *</label>
          <div className="input-group">
            <span className="input-group-text text-muted" style={{ fontSize: 12 }}>/services/</span>
            <input name="slug" className="form-control" value={form.slug} onChange={handleChange} required placeholder="dental-implants" />
          </div>
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Short Description <span className="text-muted fw-normal">(shown on cards)</span></label>
          <input name="shortDesc" className="form-control" value={form.shortDesc} onChange={handleChange} placeholder="One-line summary shown on the services listing page" />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold">Full Description</label>
          <textarea name="description" className="form-control" rows={4} value={form.description} onChange={handleChange} placeholder="Detailed description of the service" />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Bootstrap Icon</label>
          <div className="input-group">
            <span className="input-group-text" style={{ background: form.accentColor, color: '#fff', minWidth: 42 }}>
              <i className={`bi ${form.icon}`} />
            </span>
            <input name="icon" className="form-control" value={form.icon} onChange={handleChange} placeholder="bi-heart-pulse" />
          </div>
          <small className="text-muted">Browse at <a href="https://icons.getbootstrap.com" target="_blank" rel="noreferrer">icons.getbootstrap.com</a></small>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Accent Color</label>
          <div className="input-group">
            <input type="color" className="form-control form-control-color" name="accentColor" value={form.accentColor} onChange={handleChange} style={{ width: 50 }} />
            <input type="text" className="form-control" name="accentColor" value={form.accentColor} onChange={handleChange} />
          </div>
          <small className="text-muted">Used for icon background and card accent</small>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Sort Order</label>
          <input type="number" name="sortOrder" className="form-control" value={form.sortOrder} onChange={handleChange} min="0" />
          <small className="text-muted">Lower number = shown first</small>
        </div>

        {/* Service Image */}
        <div className="col-12">
          <label className="form-label fw-semibold">Service Image</label>
          <div className="d-flex align-items-start gap-3 flex-wrap">
            {form.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={form.image}
                alt="preview"
                style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid #e2e8f0', flexShrink: 0 }}
                onError={e => { e.currentTarget.style.opacity = '0.3'; }}
              />
            )}
            <div style={{ flex: 1, minWidth: 220 }}>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mb-2"
                onClick={() => fileRef.current.click()}
                disabled={uploading}
              >
                <i className="bi bi-upload me-1" />
                {uploading ? 'Uploading…' : 'Upload Image'}
              </button>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
              <input
                className="form-control form-control-sm"
                value={form.image}
                onChange={e => setForm(f => ({ ...f, image: e.target.value }))}
                placeholder="or paste image URL / path (e.g. /services/implants.jpg)"
              />
              <small className="text-muted">Recommended: 1200×630px, JPG/WebP</small>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input" name="isActive" id="isActive" checked={form.isActive} onChange={handleChange} />
            <label className="form-check-label" htmlFor="isActive">Active (visible on website)</label>
          </div>
        </div>

        <div className="col-12 d-flex gap-2 pt-2 border-top">
          <button type="submit" className="btn" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }} disabled={saving}>
            {saving ? (
              <><span className="spinner-border spinner-border-sm me-2" role="status" />{isEdit ? 'Saving…' : 'Creating…'}</>
            ) : (
              <><i className="bi bi-check-lg me-1" />{isEdit ? 'Save Changes' : 'Create Service'}</>
            )}
          </button>
          <button type="button" className="btn btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => router.push('/admin/services')}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
