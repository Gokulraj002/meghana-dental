'use client';
import { useEffect, useState } from 'react';

const EMPTY = {
  pageKey: '',
  pageTitle: '',
  metaTitle: '',
  metaDescription: '',
  metaKeywords: '',
  canonical: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  schemaJson: '',
  isActive: true,
};

function titleColor(len) {
  if (len >= 45 && len <= 60) return '#10b981';
  if (len >= 35 && len < 45) return '#f59e0b';
  if (len > 60 && len <= 70) return '#f59e0b';
  return '#ef4444';
}
function descColor(len) {
  if (len >= 120 && len <= 160) return '#10b981';
  if (len >= 100 && len < 120) return '#f59e0b';
  if (len > 160 && len <= 180) return '#f59e0b';
  return '#ef4444';
}

export default function AdminSEO() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  const load = () => {
    fetch('/api/admin/seo').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(load, []);

  function openAdd() { setEditing(null); setForm(EMPTY); setShowForm(true); }
  function openEdit(item) {
    setEditing(item);
    setForm({
      pageKey: item.pageKey || '',
      pageTitle: item.pageTitle || '',
      metaTitle: item.metaTitle || '',
      metaDescription: item.metaDescription || '',
      metaKeywords: item.metaKeywords || '',
      canonical: item.canonical || '',
      ogTitle: item.ogTitle || '',
      ogDescription: item.ogDescription || '',
      ogImage: item.ogImage || '',
      schemaJson: item.schemaJson || '',
      isActive: item.isActive !== false,
    });
    setShowForm(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const url = editing ? `/api/admin/seo/${editing.id}` : '/api/admin/seo';
    const method = editing ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    setShowForm(false);
    load();
  }

  async function handleDelete(id) {
    if (!confirm('Delete this SEO entry?')) return;
    await fetch(`/api/admin/seo/${id}`, { method: 'DELETE' });
    load();
  }

  async function toggleActive(item) {
    await fetch(`/api/admin/seo/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    load();
  }

  const titleLen = form.metaTitle.length;
  const descLen = form.metaDescription.length;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">SEO Manager</h4>
          <p className="text-muted small mb-0">{items.length} pages</p>
        </div>
        <button onClick={openAdd} className="btn" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }}>
          <i className="bi bi-plus-lg me-1" /> Add Page
        </button>
      </div>

      {showForm && (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 12 }}>
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">{editing ? 'Edit SEO Entry' : 'Add SEO Entry'}</h6>
            <form onSubmit={handleSave}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Page Key *</label>
                  <input className="form-control" value={form.pageKey} onChange={e => setForm(f => ({ ...f, pageKey: e.target.value }))} required placeholder="home, about, services" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Page Title</label>
                  <input className="form-control" value={form.pageTitle} onChange={e => setForm(f => ({ ...f, pageTitle: e.target.value }))} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold d-flex justify-content-between">
                  <span>Meta Title</span>
                  <span className="small fw-normal" style={{ color: titleColor(titleLen) }}>{titleLen} chars (ideal 45-60)</span>
                </label>
                <input className="form-control" value={form.metaTitle} onChange={e => setForm(f => ({ ...f, metaTitle: e.target.value }))} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold d-flex justify-content-between">
                  <span>Meta Description</span>
                  <span className="small fw-normal" style={{ color: descColor(descLen) }}>{descLen} chars (ideal 120-160)</span>
                </label>
                <textarea className="form-control" rows={3} value={form.metaDescription} onChange={e => setForm(f => ({ ...f, metaDescription: e.target.value }))} />
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Meta Keywords</label>
                  <input className="form-control" value={form.metaKeywords} onChange={e => setForm(f => ({ ...f, metaKeywords: e.target.value }))} placeholder="dental, clinic, tirupati" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Canonical URL</label>
                  <input className="form-control" value={form.canonical} onChange={e => setForm(f => ({ ...f, canonical: e.target.value }))} placeholder="https://..." />
                </div>
              </div>
              <hr />
              <h6 className="fw-bold small text-muted mb-3">OPEN GRAPH</h6>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">OG Title</label>
                  <input className="form-control" value={form.ogTitle} onChange={e => setForm(f => ({ ...f, ogTitle: e.target.value }))} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">OG Image</label>
                  <input className="form-control" value={form.ogImage} onChange={e => setForm(f => ({ ...f, ogImage: e.target.value }))} placeholder="/og.jpg" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">OG Description</label>
                  <textarea className="form-control" rows={2} value={form.ogDescription} onChange={e => setForm(f => ({ ...f, ogDescription: e.target.value }))} />
                </div>
              </div>
              <hr />
              <div className="mb-3">
                <label className="form-label fw-semibold">Schema JSON-LD</label>
                <textarea className="form-control font-monospace" rows={5} value={form.schemaJson} onChange={e => setForm(f => ({ ...f, schemaJson: e.target.value }))} placeholder='{"@context":"https://schema.org",...}' style={{ fontSize: 13 }} />
              </div>
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} />
                  <label className="form-check-label">Active</label>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }} disabled={saving}>
                  {saving ? 'Saving…' : 'Save SEO'}
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-0">
          {loading ? <div className="text-center py-5 text-muted">Loading…</div> :
            items.length === 0 ? <div className="text-center py-5 text-muted">No SEO entries yet.</div> : (
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="px-4 py-3">Page Key</th>
                      <th className="py-3">Meta Title</th>
                      <th className="py-3">Title Len</th>
                      <th className="py-3">Desc Len</th>
                      <th className="py-3">Status</th>
                      <th className="py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => {
                      const tLen = (item.metaTitle || '').length;
                      const dLen = (item.metaDescription || '').length;
                      return (
                        <tr key={item.id}>
                          <td className="px-4 py-3"><code>{item.pageKey}</code></td>
                          <td className="py-3" style={{ maxWidth: 320 }}>
                            <div className="fw-semibold text-truncate">{item.metaTitle || <span className="text-muted">—</span>}</div>
                            <div className="text-muted small text-truncate">{(item.metaDescription || '').substring(0, 90)}</div>
                          </td>
                          <td className="py-3"><span className="badge" style={{ background: titleColor(tLen) }}>{tLen}</span></td>
                          <td className="py-3"><span className="badge" style={{ background: descColor(dLen) }}>{dLen}</span></td>
                          <td className="py-3">
                            <button onClick={() => toggleActive(item)} className={`badge border-0 ${item.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ cursor: 'pointer' }}>
                              {item.isActive ? 'Active' : 'Inactive'}
                            </button>
                          </td>
                          <td className="py-3">
                            <div className="d-flex gap-1">
                              <button onClick={() => openEdit(item)} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }}><i className="bi bi-pencil" /></button>
                              <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }}><i className="bi bi-trash" /></button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
