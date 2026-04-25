'use client';
import { useEffect, useState } from 'react';

export default function AdminFAQs() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ question: '', answer: '', sortOrder: 0, isActive: true });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  const load = () => {
    fetch('/api/admin/faqs').then(r => r.json()).then(data => {
      setItems(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  };

  useEffect(load, []);

  function openAdd() { setEditing(null); setForm({ question: '', answer: '', sortOrder: items.length + 1, isActive: true }); setShowForm(true); }
  function openEdit(item) { setEditing(item); setForm({ question: item.question, answer: item.answer, sortOrder: item.sortOrder, isActive: item.isActive }); setShowForm(true); }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    const url = editing ? `/api/admin/faqs/${editing.id}` : '/api/admin/faqs';
    const method = editing ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) }) });
      const data = await res.json();
      if (!res.ok) { setSaveError(data.error || `Save failed (${res.status})`); setSaving(false); return; }
      setSaving(false);
      setShowForm(false);
      load();
    } catch { setSaveError('Network error — please try again.'); setSaving(false); }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this FAQ?')) return;
    await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE' });
    load();
  }

  async function toggleActive(item) {
    await fetch(`/api/admin/faqs/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    load();
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">FAQs</h4>
          <p className="text-muted small mb-0">{items.length} questions</p>
        </div>
        <button onClick={openAdd} className="btn" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }}>
          <i className="bi bi-plus-lg me-1" /> Add FAQ
        </button>
      </div>

      {showForm && (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 12 }}>
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">{editing ? 'Edit FAQ' : 'Add FAQ'}</h6>
            {saveError && <div className="alert alert-danger py-2 small mb-3"><i className="bi bi-exclamation-circle me-1" />{saveError}</div>}
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Question *</label>
                <input className="form-control" value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Answer *</label>
                <textarea className="form-control" rows={4} value={form.answer} onChange={e => setForm(f => ({ ...f, answer: e.target.value }))} required />
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Sort Order</label>
                  <input type="number" className="form-control" value={form.sortOrder} onChange={e => setForm(f => ({ ...f, sortOrder: e.target.value }))} />
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} />
                    <label className="form-check-label">Active</label>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }} disabled={saving}>
                  {saving ? 'Saving…' : 'Save FAQ'}
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
            items.length === 0 ? <div className="text-center py-5 text-muted">No FAQs yet.</div> : (
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="px-4 py-3">#</th>
                      <th className="py-3">Question</th>
                      <th className="py-3">Status</th>
                      <th className="py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 text-muted">{item.sortOrder || i + 1}</td>
                        <td className="py-3">
                          <div className="fw-semibold">{item.question}</div>
                          <div className="text-muted small" style={{ maxWidth: 400 }}>{item.answer.substring(0, 80)}…</div>
                        </td>
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
