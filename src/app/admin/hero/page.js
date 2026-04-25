'use client';
import { useEffect, useState } from 'react';

const HERO_SETTINGS_KEYS = [
  'hero_title', 'hero_subtitle', 'hero_image', 'hero_badge_text',
  'hero_cta_primary_text', 'hero_cta_primary_link', 'hero_cta_secondary_text',
  'hero_floating_badge_1', 'hero_floating_badge_2',
];

export default function AdminHero() {
  const [activeTab, setActiveTab] = useState('stats');

  // Stats state
  const [stats, setStats] = useState([]);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsForm, setStatsForm] = useState(null);
  const [statsEditing, setStatsEditing] = useState(null);
  const [statsSaving, setStatsSaving] = useState(false);

  // Marquee state
  const [marquee, setMarquee] = useState([]);
  const [marqueeLoading, setMarqueeLoading] = useState(true);
  const [marqueeForm, setMarqueeForm] = useState(null);
  const [marqueeEditing, setMarqueeEditing] = useState(null);
  const [marqueeSaving, setMarqueeSaving] = useState(false);

  // Settings state
  const [settings, setSettings] = useState({});
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [settingsSaved, setSettingsSaved] = useState(false);

  const loadStats = () => {
    setStatsLoading(true);
    fetch('/api/admin/hero-stats').then(r => r.json()).then(data => {
      setStats(Array.isArray(data) ? data : []);
      setStatsLoading(false);
    });
  };
  const loadMarquee = () => {
    setMarqueeLoading(true);
    fetch('/api/admin/marquee-items').then(r => r.json()).then(data => {
      setMarquee(Array.isArray(data) ? data : []);
      setMarqueeLoading(false);
    });
  };
  const loadSettings = () => {
    fetch('/api/admin/settings').then(r => r.json()).then(data => {
      const filtered = {};
      HERO_SETTINGS_KEYS.forEach(k => { filtered[k] = data?.[k] || ''; });
      setSettings(filtered);
      setSettingsLoading(false);
    }).catch(() => setSettingsLoading(false));
  };

  useEffect(() => { loadStats(); loadMarquee(); loadSettings(); }, []);

  // Stats handlers
  function openStatsAdd() { setStatsEditing(null); setStatsForm({ value: '', label: '', sortOrder: stats.length + 1, isActive: true }); }
  function openStatsEdit(item) { setStatsEditing(item); setStatsForm({ value: item.value, label: item.label, sortOrder: item.sortOrder, isActive: item.isActive }); }
  async function saveStats(e) {
    e.preventDefault();
    setStatsSaving(true);
    const url = statsEditing ? `/api/admin/hero-stats/${statsEditing.id}` : '/api/admin/hero-stats';
    const method = statsEditing ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...statsForm, sortOrder: Number(statsForm.sortOrder) }) });
    setStatsSaving(false); setStatsForm(null); loadStats();
  }
  async function deleteStats(id) {
    if (!confirm('Delete this stat?')) return;
    await fetch(`/api/admin/hero-stats/${id}`, { method: 'DELETE' });
    loadStats();
  }
  async function toggleStatsActive(item) {
    await fetch(`/api/admin/hero-stats/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    loadStats();
  }

  // Marquee handlers
  function openMarqueeAdd() { setMarqueeEditing(null); setMarqueeForm({ text: '', sortOrder: marquee.length + 1, isActive: true }); }
  function openMarqueeEdit(item) { setMarqueeEditing(item); setMarqueeForm({ text: item.text, sortOrder: item.sortOrder, isActive: item.isActive }); }
  async function saveMarquee(e) {
    e.preventDefault();
    setMarqueeSaving(true);
    const url = marqueeEditing ? `/api/admin/marquee-items/${marqueeEditing.id}` : '/api/admin/marquee-items';
    const method = marqueeEditing ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...marqueeForm, sortOrder: Number(marqueeForm.sortOrder) }) });
    setMarqueeSaving(false); setMarqueeForm(null); loadMarquee();
  }
  async function deleteMarquee(id) {
    if (!confirm('Delete this item?')) return;
    await fetch(`/api/admin/marquee-items/${id}`, { method: 'DELETE' });
    loadMarquee();
  }
  async function toggleMarqueeActive(item) {
    await fetch(`/api/admin/marquee-items/${item.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !item.isActive }) });
    loadMarquee();
  }

  // Settings handler
  async function saveSettings(e) {
    e.preventDefault();
    setSettingsSaving(true);
    await fetch('/api/admin/settings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(settings) });
    setSettingsSaving(false);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  }

  const tabs = [
    { id: 'stats', label: 'Stats', icon: 'bi-bar-chart' },
    { id: 'marquee', label: 'Marquee', icon: 'bi-megaphone' },
    { id: 'settings', label: 'Settings', icon: 'bi-sliders' },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Hero Section</h4>
          <p className="text-muted small mb-0">Manage homepage hero content</p>
        </div>
      </div>

      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-header bg-white border-bottom px-4 pt-3 pb-0" style={{ borderRadius: '12px 12px 0 0' }}>
          <ul className="nav nav-tabs border-0">
            {tabs.map(t => (
              <li key={t.id} className="nav-item">
                <button type="button" onClick={() => setActiveTab(t.id)}
                  className={`nav-link border-0 ${activeTab === t.id ? 'active fw-semibold' : 'text-muted'}`}>
                  <i className={`bi ${t.icon} me-1`} />{t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body p-4">
          {activeTab === 'stats' && (
            <div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0">Hero Stats</h6>
                <button onClick={openStatsAdd} className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }}>
                  <i className="bi bi-plus-lg me-1" /> Add Stat
                </button>
              </div>
              {statsForm && (
                <div className="border rounded p-3 mb-3" style={{ background: '#f8fafc' }}>
                  <form onSubmit={saveStats}>
                    <div className="row g-2 mb-2">
                      <div className="col-md-3">
                        <label className="form-label small fw-semibold">Value *</label>
                        <input className="form-control form-control-sm" value={statsForm.value} onChange={e => setStatsForm(f => ({ ...f, value: e.target.value }))} required placeholder="10K+" />
                      </div>
                      <div className="col-md-5">
                        <label className="form-label small fw-semibold">Label *</label>
                        <input className="form-control form-control-sm" value={statsForm.label} onChange={e => setStatsForm(f => ({ ...f, label: e.target.value }))} required placeholder="Happy Patients" />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label small fw-semibold">Sort</label>
                        <input type="number" className="form-control form-control-sm" value={statsForm.sortOrder} onChange={e => setStatsForm(f => ({ ...f, sortOrder: e.target.value }))} />
                      </div>
                      <div className="col-md-2 d-flex align-items-end">
                        <div className="form-check form-switch">
                          <input type="checkbox" className="form-check-input" checked={statsForm.isActive} onChange={e => setStatsForm(f => ({ ...f, isActive: e.target.checked }))} />
                          <label className="form-check-label small">Active</label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }} disabled={statsSaving}>{statsSaving ? 'Saving…' : 'Save'}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => setStatsForm(null)}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}
              {statsLoading ? <div className="text-center py-4 text-muted">Loading…</div> :
                stats.length === 0 ? <div className="text-center py-4 text-muted">No stats yet.</div> : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                      <thead style={{ background: '#f8fafc' }}>
                        <tr>
                          <th className="px-3 py-2">#</th>
                          <th className="py-2">Value</th>
                          <th className="py-2">Label</th>
                          <th className="py-2">Status</th>
                          <th className="py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stats.map((item, i) => (
                          <tr key={item.id}>
                            <td className="px-3 py-2 text-muted">{item.sortOrder || i + 1}</td>
                            <td className="py-2 fw-bold">{item.value}</td>
                            <td className="py-2">{item.label}</td>
                            <td className="py-2">
                              <button onClick={() => toggleStatsActive(item)} className={`badge border-0 ${item.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ cursor: 'pointer' }}>
                                {item.isActive ? 'Active' : 'Inactive'}
                              </button>
                            </td>
                            <td className="py-2">
                              <div className="d-flex gap-1">
                                <button onClick={() => openStatsEdit(item)} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }}><i className="bi bi-pencil" /></button>
                                <button onClick={() => deleteStats(item.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }}><i className="bi bi-trash" /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
            </div>
          )}

          {activeTab === 'marquee' && (
            <div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0">Marquee Items</h6>
                <button onClick={openMarqueeAdd} className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }}>
                  <i className="bi bi-plus-lg me-1" /> Add Item
                </button>
              </div>
              {marqueeForm && (
                <div className="border rounded p-3 mb-3" style={{ background: '#f8fafc' }}>
                  <form onSubmit={saveMarquee}>
                    <div className="row g-2 mb-2">
                      <div className="col-md-7">
                        <label className="form-label small fw-semibold">Text *</label>
                        <input className="form-control form-control-sm" value={marqueeForm.text} onChange={e => setMarqueeForm(f => ({ ...f, text: e.target.value }))} required />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label small fw-semibold">Sort</label>
                        <input type="number" className="form-control form-control-sm" value={marqueeForm.sortOrder} onChange={e => setMarqueeForm(f => ({ ...f, sortOrder: e.target.value }))} />
                      </div>
                      <div className="col-md-3 d-flex align-items-end">
                        <div className="form-check form-switch">
                          <input type="checkbox" className="form-check-input" checked={marqueeForm.isActive} onChange={e => setMarqueeForm(f => ({ ...f, isActive: e.target.checked }))} />
                          <label className="form-check-label small">Active</label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-sm" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 8 }} disabled={marqueeSaving}>{marqueeSaving ? 'Saving…' : 'Save'}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }} onClick={() => setMarqueeForm(null)}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}
              {marqueeLoading ? <div className="text-center py-4 text-muted">Loading…</div> :
                marquee.length === 0 ? <div className="text-center py-4 text-muted">No marquee items yet.</div> : (
                  <div className="table-responsive">
                    <table className="table table-hover mb-0" style={{ fontSize: 14 }}>
                      <thead style={{ background: '#f8fafc' }}>
                        <tr>
                          <th className="px-3 py-2">#</th>
                          <th className="py-2">Text</th>
                          <th className="py-2">Status</th>
                          <th className="py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marquee.map((item, i) => (
                          <tr key={item.id}>
                            <td className="px-3 py-2 text-muted">{item.sortOrder || i + 1}</td>
                            <td className="py-2">{item.text}</td>
                            <td className="py-2">
                              <button onClick={() => toggleMarqueeActive(item)} className={`badge border-0 ${item.isActive ? 'bg-success' : 'bg-secondary'}`} style={{ cursor: 'pointer' }}>
                                {item.isActive ? 'Active' : 'Inactive'}
                              </button>
                            </td>
                            <td className="py-2">
                              <div className="d-flex gap-1">
                                <button onClick={() => openMarqueeEdit(item)} className="btn btn-sm btn-outline-primary" style={{ borderRadius: 6 }}><i className="bi bi-pencil" /></button>
                                <button onClick={() => deleteMarquee(item.id)} className="btn btn-sm btn-outline-danger" style={{ borderRadius: 6 }}><i className="bi bi-trash" /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0">Hero Settings</h6>
                {settingsSaved && <div className="alert alert-success py-1 px-3 mb-0 small"><i className="bi bi-check-circle me-1" /> Saved!</div>}
              </div>
              {settingsLoading ? <div className="text-center py-4 text-muted">Loading…</div> : (
                <form onSubmit={saveSettings}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label fw-semibold">Hero Title</label>
                      <input className="form-control" value={settings.hero_title || ''} onChange={e => setSettings(s => ({ ...s, hero_title: e.target.value }))} />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Hero Subtitle</label>
                      <textarea className="form-control" rows={2} value={settings.hero_subtitle || ''} onChange={e => setSettings(s => ({ ...s, hero_subtitle: e.target.value }))} />
                    </div>
                    <div className="col-md-8">
                      <label className="form-label fw-semibold">Hero Image URL</label>
                      <input className="form-control" value={settings.hero_image || ''} onChange={e => setSettings(s => ({ ...s, hero_image: e.target.value }))} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Hero Badge Text</label>
                      <input className="form-control" value={settings.hero_badge_text || ''} onChange={e => setSettings(s => ({ ...s, hero_badge_text: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Primary CTA Text</label>
                      <input className="form-control" value={settings.hero_cta_primary_text || ''} onChange={e => setSettings(s => ({ ...s, hero_cta_primary_text: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Primary CTA Link</label>
                      <input className="form-control" value={settings.hero_cta_primary_link || ''} onChange={e => setSettings(s => ({ ...s, hero_cta_primary_link: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Secondary CTA Text</label>
                      <input className="form-control" value={settings.hero_cta_secondary_text || ''} onChange={e => setSettings(s => ({ ...s, hero_cta_secondary_text: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Floating Badge 1</label>
                      <input className="form-control" value={settings.hero_floating_badge_1 || ''} onChange={e => setSettings(s => ({ ...s, hero_floating_badge_1: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Floating Badge 2</label>
                      <input className="form-control" value={settings.hero_floating_badge_2 || ''} onChange={e => setSettings(s => ({ ...s, hero_floating_badge_2: e.target.value }))} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }} disabled={settingsSaving}>
                      <i className="bi bi-check-lg me-1" />{settingsSaving ? 'Saving…' : 'Save Settings'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
