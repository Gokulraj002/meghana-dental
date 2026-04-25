'use client';
import { useEffect, useState } from 'react';


const DEFAULTS = {
  clinic_name: 'Meghana Dental Hospital',
  phone: '+91-98765-43210',
  email: 'info@meghanadental.in',
  address: 'No. 18-2-91B, Ashok Nagar, Tirupati, AP 517501',
  whatsapp: '+91-98765-43210',
  primary_color: '#0ea5e9',
  secondary_color: '#10b981',
  facebook_url: 'https://www.facebook.com/meghanadental',
  instagram_url: 'https://www.instagram.com/meghanadental',
  youtube_url: 'https://www.youtube.com/@meghanadental',
};

export default function AdminSettings() {
  const [settings, setSettings] = useState(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(data => {
      setSettings(s => ({ ...s, ...data }));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  function handle(key, value) { setSettings(s => ({ ...s, [key]: value })); }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (!res.ok) {
        setSaveError(data.error || `Save failed (${res.status})`);
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {
      setSaveError('Network error — please try again.');
    }
    setSaving(false);
  }

  const tabs = [
    { id: 'general', label: 'General', icon: 'bi-building' },
    { id: 'colors', label: 'Colors & Theme', icon: 'bi-palette' },
    { id: 'contact', label: 'Contact Info', icon: 'bi-telephone' },
    { id: 'social', label: 'Social Media', icon: 'bi-share' },
  ];

  if (loading) return <div className="text-center py-5">Loading…</div>;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Site Settings</h4>
          <p className="text-muted small mb-0">Customize your website settings</p>
        </div>
        {saved && <div className="alert alert-success py-2 px-3 mb-0 small"><i className="bi bi-check-circle me-1" /> Settings saved!</div>}
        {saveError && <div className="alert alert-danger py-2 px-3 mb-0 small"><i className="bi bi-exclamation-circle me-1" />{saveError}</div>}
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
            {activeTab === 'general' && (
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">Clinic Name</label>
                  <input className="form-control" value={settings.clinic_name} onChange={e => handle('clinic_name', e.target.value)} />
                </div>
              </div>
            )}
            {activeTab === 'colors' && (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Primary Color</label>
                  <div className="input-group">
                    <input type="color" className="form-control form-control-color" value={settings.primary_color} onChange={e => handle('primary_color', e.target.value)} style={{ width: 50 }} />
                    <input type="text" className="form-control" value={settings.primary_color} onChange={e => handle('primary_color', e.target.value)} />
                  </div>
                  <small className="text-muted">Used for buttons, highlights, accents</small>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Secondary Color</label>
                  <div className="input-group">
                    <input type="color" className="form-control form-control-color" value={settings.secondary_color} onChange={e => handle('secondary_color', e.target.value)} style={{ width: 50 }} />
                    <input type="text" className="form-control" value={settings.secondary_color} onChange={e => handle('secondary_color', e.target.value)} />
                  </div>
                  <small className="text-muted">Used for success states, badges</small>
                </div>
                <div className="col-12">
                  <div className="p-3 rounded" style={{ background: '#f8fafc' }}>
                    <p className="fw-semibold small mb-2">Preview</p>
                    <div className="d-flex gap-2">
                      <span className="badge" style={{ background: settings.primary_color }}>Primary</span>
                      <span className="badge" style={{ background: settings.secondary_color }}>Secondary</span>
                      <button type="button" className="btn btn-sm" style={{ background: settings.primary_color, color: '#fff', borderRadius: 6 }}>Button</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'contact' && (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input className="form-control" value={settings.phone} onChange={e => handle('phone', e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">WhatsApp Number</label>
                  <input className="form-control" value={settings.whatsapp} onChange={e => handle('whatsapp', e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" value={settings.email} onChange={e => handle('email', e.target.value)} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Address</label>
                  <textarea className="form-control" rows={2} value={settings.address} onChange={e => handle('address', e.target.value)} />
                </div>
              </div>
            )}
            {activeTab === 'social' && (
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold"><i className="bi bi-facebook me-1 text-primary" />Facebook URL</label>
                  <input type="url" className="form-control" value={settings.facebook_url} onChange={e => handle('facebook_url', e.target.value)} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold"><i className="bi bi-instagram me-1" style={{ color: '#e1306c' }} />Instagram URL</label>
                  <input type="url" className="form-control" value={settings.instagram_url} onChange={e => handle('instagram_url', e.target.value)} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold"><i className="bi bi-youtube me-1 text-danger" />YouTube URL</label>
                  <input type="url" className="form-control" value={settings.youtube_url} onChange={e => handle('youtube_url', e.target.value)} />
                </div>
              </div>
            )}
          </div>
          <div className="card-footer bg-white border-top px-4 py-3" style={{ borderRadius: '0 0 12px 12px' }}>
            <button type="submit" className="btn" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }} disabled={saving}>
              <i className="bi bi-check-lg me-1" />{saving ? 'Saving\u2026' : 'Save Settings'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
