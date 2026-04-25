'use client';
import { useEffect, useState } from 'react';

export default function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ patientName: '', rating: 5, review: '', service: '', isActive: true });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  const load = () => {
    fetch('/api/admin/testimonials').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(load, []);

  function openAdd() { setEditing(null); setForm({ patientName: '', rating: 5, review: '', service: '', isActive: true }); setShowForm(true); }
  function openEdit(t) { setEditing(t); setForm({ patientName: t.patientName, rating: t.rating, review: t.review, service: t.service || '', isActive: t.isActive }); setShowForm(true); }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    const url = editing ? `/api/admin/testimonials/${editing.id}` : '/api/admin/testimonials';
    const method = editing ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setSaveError(data.error || `Save failed (${res.status})`); setSaving(false); return; }
      setSaving(false);
      setShowForm(false);
      load();
    } catch { setSaveError('Network error — please try again.'); setSaving(false); }
  }

  async function handleDelete(id) {
    if (!confirm('Delete?')) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Testimonials</h4>
          <p className="text-muted small mb-0">{items.length} reviews</p>
        </div>
        <button onClick={openAdd} className="btn" style={{ background: '#f59e0b', color: '#fff', borderRadius: 8 }}>
          <i className="bi bi-plus-lg me-1" /> Add Testimonial
        </button>
      </div>

      {showForm && (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 12 }}>
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">{editing ? 'Edit Testimonial' : 'Add Testimonial'}</h6>
            {saveError && <div className="alert alert-danger py-2 small mb-3"><i className="bi bi-exclamation-circle me-1" />{saveError}</div>}
            <form onSubmit={handleSave}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Patient Name *</label>
                  <input className="form-control" value={form.patientName} onChange={e => setForm(f => ({ ...f, patientName: e.target.value }))} required />
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Rating</label>
                  <select className="form-select" value={form.rating} onChange={e => setForm(f => ({ ...f, rating: Number(e.target.value) }))}>
                    {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Service</label>
                  <input className="form-control" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} placeholder="Dental Implants" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Review *</label>
                  <textarea className="form-control" rows={3} value={form.review} onChange={e => setForm(f => ({ ...f, review: e.target.value }))} required />
                </div>
                <div className="col-12 d-flex gap-2">
                  <button type="submit" className="btn btn-sm" style={{ background: '#f59e0b', color: '#fff', borderRadius: 8 }} disabled={saving}>
                    {saving ? 'Saving\u2026' : 'Save'}
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-0">
          {loading ? <div className="text-center py-5 text-muted">Loading…</div> :
            items.length === 0 ? <div className="text-center py-5 text-muted">No testimonials yet.</div> : (
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="px-4 py-3">Patient</th>
                      <th className="py-3">Rating</th>
                      <th className="py-3">Review</th>
                      <th className="py-3">Service</th>
                      <th className="py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(t => (
                      <tr key={t.id}>
                        <td className="px-4 py-3 fw-semibold">{t.patientName}</td>
                        <td className="py-3">{'\u2605'.repeat(t.rating)}</td>
                        <td className="py-3" style={{ maxWidth: 300 }}><span className="text-truncate d-block">{t.review}</span></td>
                        <td className="py-3 text-muted">{t.service}</td>
                        <td className="py-3">
                          <div className="d-flex gap-1">
                            <button onClick={() => openEdit(t)} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }}><i className="bi bi-pencil" /></button>
                            <button onClick={() => handleDelete(t.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }}><i className="bi bi-trash" /></button>
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
