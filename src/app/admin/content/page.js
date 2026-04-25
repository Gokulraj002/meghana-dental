'use client';
import { useEffect, useState } from 'react';

export default function AdminContent() {
  const [settings, setSettings] = useState({
    hero_title: 'Your Smile Deserves the Best Care',
    hero_subtitle: "Tirupati's most trusted Dental center with 17+ years of excellence.",
    patients_count: '50,000+',
    years_experience: '17+',
    google_rating: '4.9★',
    reviews_count: '850+',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(data => {
      setSettings(s => ({ ...s, ...data }));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  function handle(key, val) { setSettings(s => ({ ...s, [key]: val })); }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    await fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  if (loading) return <div className="text-center py-5">Loading…</div>;

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: 'bi-house' },
    { id: 'stats', label: 'Stats & Numbers', icon: 'bi-graph-up' },
  ];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Page Content</h4>
          <p className="text-muted small mb-0">Edit homepage hero text and key statistics</p>
        </div>
        {saved && <div className="alert alert-success py-2 px-3 mb-0 small"><i className="bi bi-check-circle me-1" /> Saved!</div>}
      </div>
      <form onSubmit={handleSave}>
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
            {activeTab === 'hero' && (
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">Hero Title</label>
                  <input className="form-control" value={settings.hero_title || ''} onChange={e => handle('hero_title', e.target.value)} />
                  <small className="text-muted">Main headline on the homepage</small>
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Hero Subtitle</label>
                  <textarea className="form-control" rows={3} value={settings.hero_subtitle || ''} onChange={e => handle('hero_subtitle', e.target.value)} />
                  <small className="text-muted">Tagline below the main headline</small>
                </div>
              </div>
            )}
            {activeTab === 'stats' && (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Patients Served</label>
                  <input className="form-control" value={settings.patients_count || ''} onChange={e => handle('patients_count', e.target.value)} placeholder="50,000+" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Years Experience</label>
                  <input className="form-control" value={settings.years_experience || ''} onChange={e => handle('years_experience', e.target.value)} placeholder="17+" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Google Rating</label>
                  <input className="form-control" value={settings.google_rating || ''} onChange={e => handle('google_rating', e.target.value)} placeholder="4.9★" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Reviews Count</label>
                  <input className="form-control" value={settings.reviews_count || ''} onChange={e => handle('reviews_count', e.target.value)} placeholder="850+" />
                </div>
              </div>
            )}
          </div>
          <div className="card-footer bg-white border-top px-4 py-3" style={{ borderRadius: '0 0 12px 12px' }}>
            <button type="submit" className="btn" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }} disabled={saving}>
              <i className="bi bi-check-lg me-1" />{saving ? 'Saving…' : 'Save Content'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
