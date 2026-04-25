'use client';
import { useEffect, useState, useRef } from 'react';

const CATEGORIES = ['general', 'before-after', 'clinic', 'team', 'equipment'];

export default function AdminGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ imageUrl: '', title: '', category: 'general', sortOrder: 0, isActive: true });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [filterCat, setFilterCat] = useState('');
  const fileRef = useRef();

  const load = () => {
    setLoading(true);
    setLoadError('');
    fetch('/api/admin/gallery')
      .then(r => {
        if (!r.ok) throw new Error(r.status === 401 ? 'Not authorized — please log in.' : `Error ${r.status}`);
        return r.json();
      })
      .then(data => {
        setItems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setLoadError(err.message);
        setLoading(false);
      });
  };

  useEffect(load, []);

  function openAdd() {
    setEditing(null);
    setSaveError('');
    setForm({ imageUrl: '', title: '', category: filterCat || 'general', sortOrder: items.length + 1, isActive: true });
    setShowForm(true);
  }
  function openEdit(item) {
    setEditing(item);
    setSaveError('');
    setForm({ imageUrl: item.imageUrl, title: item.title || '', category: item.category, sortOrder: item.sortOrder, isActive: item.isActive });
    setShowForm(true);
  }

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.url) setForm(f => ({ ...f, imageUrl: data.url }));
      else setSaveError(data.error || 'Upload failed');
    } catch { setSaveError('Upload failed — network error.'); }
    setUploading(false);
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.imageUrl.trim()) { setSaveError('Please upload or paste an image URL.'); return; }
    setSaving(true);
    setSaveError('');
    const url = editing ? `/api/admin/gallery/${editing.id}` : '/api/admin/gallery';
    const method = editing ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) }),
      });
      const data = await res.json();
      if (!res.ok) { setSaveError(data.error || `Save failed (${res.status})`); setSaving(false); return; }
      setSaving(false);
      setShowForm(false);
      load();
    } catch { setSaveError('Network error — please try again.'); setSaving(false); }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this image?')) return;
    try {
      const res = await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
      if (!res.ok) { const d = await res.json().catch(() => ({})); alert(d.error || 'Delete failed'); return; }
      load();
    } catch { alert('Network error'); }
  }

  async function toggleActive(item) {
    try {
      const res = await fetch(`/api/admin/gallery/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !item.isActive }),
      });
      if (!res.ok) { const d = await res.json().catch(() => ({})); alert(d.error || 'Update failed'); return; }
      load();
    } catch { alert('Network error'); }
  }

  const displayed = filterCat ? items.filter(i => i.category === filterCat) : items;

  return (
    <div>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
        <div>
          <h4 className="fw-bold mb-1">Gallery</h4>
          <p className="text-muted small mb-0">{items.length} images total</p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <select
            className="form-select form-select-sm"
            value={filterCat}
            onChange={e => setFilterCat(e.target.value)}
            style={{ width: 160 }}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button onClick={openAdd} className="btn" style={{ background: '#06b6d4', color: '#fff', borderRadius: 8 }}>
            <i className="bi bi-plus-lg me-1" /> Add Image
          </button>
        </div>
      </div>

      {/* Load error */}
      {loadError && (
        <div className="alert alert-danger d-flex align-items-center gap-2 mb-4">
          <i className="bi bi-exclamation-triangle-fill" /> {loadError}
          <button className="ms-auto btn btn-sm btn-outline-danger" onClick={load}>Retry</button>
        </div>
      )}

      {/* Add / Edit Form */}
      {showForm && (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 12 }}>
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">{editing ? 'Edit Image' : 'Add Image'}</h6>
            {saveError && (
              <div className="alert alert-danger py-2 small mb-3">
                <i className="bi bi-exclamation-circle me-1" />{saveError}
              </div>
            )}
            <form onSubmit={handleSave}>
              <div className="row g-3">
                {/* Image upload / URL */}
                <div className="col-12">
                  <label className="form-label fw-semibold">Image *</label>
                  <div className="d-flex align-items-start gap-3 flex-wrap">
                    {form.imageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={form.imageUrl}
                        alt="preview"
                        style={{ width: 100, height: 75, objectFit: 'cover', borderRadius: 8, border: '1px solid #e2e8f0', flexShrink: 0 }}
                      />
                    )}
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm mb-2"
                        onClick={() => fileRef.current.click()}
                        disabled={uploading}
                      >
                        <i className="bi bi-upload me-1" />
                        {uploading ? 'Uploading…' : 'Upload from computer'}
                      </button>
                      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpload} />
                      <input
                        className="form-control form-control-sm"
                        value={form.imageUrl}
                        onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                        placeholder="or paste image URL (https://…)"
                      />
                      <small className="text-muted">Upload saves to /public/uploads/</small>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Title / Caption</label>
                  <input
                    className="form-control"
                    value={form.title}
                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    placeholder="e.g. Reception Area"
                  />
                </div>

                {/* Category */}
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Category</label>
                  <select className="form-select" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Sort order */}
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Sort Order</label>
                  <input
                    type="number"
                    className="form-control"
                    value={form.sortOrder}
                    onChange={e => setForm(f => ({ ...f, sortOrder: e.target.value }))}
                  />
                </div>

                {/* Active toggle */}
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="galleryActive"
                      checked={!!form.isActive}
                      onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))}
                    />
                    <label className="form-check-label" htmlFor="galleryActive">
                      Active (visible on website)
                    </label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="col-12 d-flex gap-2">
                  <button type="submit" className="btn btn-sm" style={{ background: '#06b6d4', color: '#fff', borderRadius: 8 }} disabled={saving}>
                    {saving ? 'Saving…' : editing ? 'Save Changes' : 'Add Image'}
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {loading ? (
        <div className="text-center py-5 text-muted">
          <div className="spinner-border spinner-border-sm me-2" role="status" />
          Loading gallery…
        </div>
      ) : displayed.length === 0 ? (
        <div className="card border-0 shadow-sm text-center py-5" style={{ borderRadius: 12 }}>
          <i className="bi bi-images fs-1 text-muted d-block mb-2" />
          <p className="text-muted mb-3">{filterCat ? `No images in "${filterCat}" category.` : 'No images yet.'}</p>
          <button onClick={openAdd} className="btn btn-sm" style={{ background: '#06b6d4', color: '#fff', borderRadius: 8 }}>
            <i className="bi bi-plus-lg me-1" /> Add First Image
          </button>
        </div>
      ) : (
        <div className="row g-3">
          {displayed.map(item => (
            <div key={item.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: 10, overflow: 'hidden', opacity: item.isActive ? 1 : 0.55 }}
              >
                {/* Image */}
                <div style={{ position: 'relative', paddingTop: '66%', background: '#f1f5f9', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title || 'Gallery'}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                  />
                  {/* Fallback when image fails to load */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'none', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#94a3b8', fontSize: 12, textAlign: 'center', padding: 4 }}>
                    <div><i className="bi bi-image fs-4 d-block mb-1" />Image not found</div>
                  </div>
                  {/* Category badge */}
                  <span className="badge position-absolute top-0 start-0 m-1" style={{ background: '#1e293baa', fontSize: 10 }}>
                    {item.category}
                  </span>
                  {/* Inactive badge */}
                  {!item.isActive && (
                    <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-1" style={{ fontSize: 10 }}>
                      Hidden
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="card-body p-2">
                  <p className="small fw-semibold mb-1 text-truncate" style={{ fontSize: 11 }} title={item.title}>
                    {item.title || <span className="text-muted">No title</span>}
                  </p>
                  <div className="d-flex gap-1 align-items-center">
                    <button
                      onClick={() => openEdit(item)}
                      className="btn btn-sm btn-outline-primary"
                      style={{ borderRadius: 6, fontSize: 11, padding: '2px 8px' }}
                      title="Edit"
                    >
                      <i className="bi bi-pencil" />
                    </button>
                    <button
                      onClick={() => toggleActive(item)}
                      className={`btn btn-sm ${item.isActive ? 'btn-outline-secondary' : 'btn-outline-success'}`}
                      style={{ borderRadius: 6, fontSize: 11, padding: '2px 8px' }}
                      title={item.isActive ? 'Hide from website' : 'Show on website'}
                    >
                      <i className={`bi ${item.isActive ? 'bi-eye-slash' : 'bi-eye'}`} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-sm btn-outline-danger ms-auto"
                      style={{ borderRadius: 6, fontSize: 11, padding: '2px 8px' }}
                      title="Delete"
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary bar */}
      {!loading && items.length > 0 && (
        <div className="mt-3 text-muted small">
          Showing {displayed.length} of {items.length} images
          {' · '}{items.filter(i => i.isActive).length} active
          {' · '}{items.filter(i => !i.isActive).length} hidden
        </div>
      )}
    </div>
  );
}
