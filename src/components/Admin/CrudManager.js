'use client';
import { useEffect, useState } from 'react';

/**
 * Generic CRUD manager for admin pages.
 *
 * Props:
 *  - title: string
 *  - subtitle?: string
 *  - endpoint: string (e.g. '/api/admin/partners')
 *  - fields: Array<{ key, label, type ('text'|'textarea'|'number'|'color'|'select'|'image'|'checkbox'), required?, options?, placeholder?, width?:1-12 }>
 *  - columns: Array<{ key, label, render?: (item)=>JSX }>
 *  - emptyForm: object  — initial form state
 *  - filterOptions?: { key, label, options:[{value,label}] }   — optional top filter
 *  - accent?: string (color)
 */
export default function CrudManager({
  title, subtitle, endpoint, fields, columns, emptyForm,
  filterOptions, accent = '#0ea5e9',
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState('');
  const [loadError, setLoadError] = useState('');

  const load = () => {
    setLoading(true);
    setLoadError('');
    fetch(endpoint)
      .then(r => {
        if (!r.ok) throw new Error(r.status === 401 ? 'Not authorized — please log in again.' : `Server error (${r.status})`);
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

  useEffect(load, [endpoint]);

  const filtered = filterOptions && filter
    ? items.filter(i => i[filterOptions.key] === filter)
    : items;

  function openAdd() {
    setEditing(null);
    setError('');
    setForm({ ...emptyForm, sortOrder: items.length + 1 });
    setShowForm(true);
  }
  function openEdit(item) {
    setEditing(item);
    setError('');
    const f = { ...emptyForm };
    Object.keys(emptyForm).forEach(k => { f[k] = item[k] !== undefined ? item[k] : emptyForm[k]; });
    setForm(f);
    setShowForm(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const body = { ...form };
    fields.forEach(f => {
      if (f.type === 'number') body[f.key] = Number(body[f.key] || 0);
    });
    const url = editing ? `${endpoint}/${editing.id}` : endpoint;
    const method = editing ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || `Save failed (${res.status}). Check all fields are correct.`);
        setSaving(false);
        return;
      }
      setSaving(false);
      setShowForm(false);
      load();
    } catch {
      setError('Network error — please check your connection and try again.');
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this item?')) return;
    try {
      const res = await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Delete failed (${res.status})`);
        return;
      }
      load();
    } catch {
      alert('Network error — please try again.');
    }
  }

  async function toggleActive(item) {
    try {
      const res = await fetch(`${endpoint}/${item.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !item.isActive }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || `Update failed (${res.status})`);
        return;
      }
      load();
    } catch {
      alert('Network error — please try again.');
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">{title}</h4>
          <p className="text-muted small mb-0">{subtitle || `${items.length} items`}</p>
        </div>
        <div className="d-flex gap-2">
          {filterOptions && (
            <select className="form-select form-select-sm" value={filter} onChange={e => setFilter(e.target.value)} style={{ width: 200 }}>
              <option value="">All {filterOptions.label}</option>
              {filterOptions.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          )}
          <button onClick={openAdd} className="btn" style={{ background: accent, color: '#fff', borderRadius: 8 }}>
            <i className="bi bi-plus-lg me-1" /> Add New
          </button>
        </div>
      </div>

      {loadError && (
        <div className="alert alert-danger d-flex align-items-center gap-2 mb-4">
          <i className="bi bi-exclamation-triangle-fill" />
          {loadError}
        </div>
      )}

      {showForm && (
        <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 12 }}>
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">{editing ? 'Edit' : 'Add'} — {title}</h6>
            {error && (
              <div className="alert alert-danger py-2 small d-flex align-items-start gap-2 mb-3">
                <i className="bi bi-exclamation-circle-fill mt-1 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <form onSubmit={handleSave}>
              <div className="row g-3 mb-3">
                {fields.map(f => (
                  <div key={f.key} className={`col-md-${f.width || 12}`}>
                    {f.type !== 'checkbox' && <label className="form-label fw-semibold">{f.label}{f.required ? ' *' : ''}</label>}
                    {f.type === 'textarea' && (
                      <textarea
                        className="form-control" rows={f.rows || 3}
                        value={form[f.key] ?? ''}
                        placeholder={f.placeholder}
                        onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))}
                        required={f.required}
                      />
                    )}
                    {f.type === 'select' && (
                      <select
                        className="form-select"
                        value={form[f.key] ?? ''}
                        onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))}
                        required={f.required}
                      >
                        {f.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    )}
                    {f.type === 'color' && (
                      <div className="input-group">
                        <input type="color" className="form-control form-control-color" value={form[f.key] || '#0ea5e9'} onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))} style={{ width: 50 }} />
                        <input type="text" className="form-control" value={form[f.key] ?? ''} onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))} />
                      </div>
                    )}
                    {f.type === 'checkbox' && (
                      <div className="form-check form-switch mt-4">
                        <input
                          type="checkbox" className="form-check-input"
                          checked={!!form[f.key]}
                          onChange={e => setForm(s => ({ ...s, [f.key]: e.target.checked }))}
                        />
                        <label className="form-check-label">{f.label}</label>
                      </div>
                    )}
                    {(f.type === 'text' || f.type === 'number' || f.type === 'image' || f.type === 'url' || !f.type) && (
                      <input
                        type={f.type === 'image' || f.type === 'url' ? 'text' : (f.type || 'text')}
                        className="form-control"
                        value={form[f.key] ?? ''}
                        placeholder={f.placeholder}
                        onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))}
                        required={f.required}
                      />
                    )}
                    {f.help && <small className="text-muted d-block mt-1">{f.help}</small>}
                  </div>
                ))}
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-sm" style={{ background: accent, color: '#fff', borderRadius: 8 }} disabled={saving}>
                  {saving ? 'Saving…' : 'Save'}
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
            filtered.length === 0 ? <div className="text-center py-5 text-muted">No items yet.</div> : (
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th className="px-4 py-3" style={{ width: 50 }}>#</th>
                      {columns.map(c => <th key={c.key} className="py-3">{c.label}</th>)}
                      <th className="py-3">Status</th>
                      <th className="py-3" style={{ width: 130 }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((item, i) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 text-muted">{item.sortOrder ?? i + 1}</td>
                        {columns.map(c => (
                          <td key={c.key} className="py-3">{c.render ? c.render(item) : (item[c.key] || '—')}</td>
                        ))}
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
