'use client';
import { useEffect, useState } from 'react';
import CrudManager from '@/components/Admin/CrudManager';

const ABOUT_KEYS = [
  'about_subtitle',
  'about_title',
  'about_story',
  'about_image',
  'mission_text',
  'vision_text',
];

const ABOUT_FIELDS = [
  { key: 'about_subtitle', label: 'Eyebrow / Subtitle', type: 'text', placeholder: 'ABOUT MEGHANA DENTAL' },
  { key: 'about_title', label: 'Section Title', type: 'text', placeholder: '17+ Years of Trusted Dental Care' },
  { key: 'about_story', label: 'About Story (paragraph)', type: 'textarea' },
  { key: 'about_image', label: 'About Image Path', type: 'text', placeholder: '/images/about-clinic.png' },
  { key: 'mission_text', label: 'Mission Statement', type: 'textarea' },
  { key: 'vision_text', label: 'Vision Statement', type: 'textarea' },
];

export default function AdminAbout() {
  const [tab, setTab] = useState('story');

  // Settings state
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedFlag, setSavedFlag] = useState(false);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((r) => r.json())
      .then((data) => {
        const filtered = {};
        ABOUT_KEYS.forEach((k) => {
          filtered[k] = data?.[k] || '';
        });
        setSettings(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function saveSettings(e) {
    e.preventDefault();
    setSaving(true);
    setSavedFlag(false);
    await fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSavedFlag(true);
    setTimeout(() => setSavedFlag(false), 2500);
  }

  return (
    <div>
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4" style={{ borderBottom: '2px solid #e2e8f0' }}>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${tab === 'story' ? 'active fw-semibold' : ''}`}
            onClick={() => setTab('story')}
            style={{ border: 'none', borderBottom: tab === 'story' ? '2px solid #0ea5e9' : '2px solid transparent', color: tab === 'story' ? '#0ea5e9' : '#475569' }}
          >
            <i className="bi bi-file-text me-1" /> About Copy
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${tab === 'features' ? 'active fw-semibold' : ''}`}
            onClick={() => setTab('features')}
            style={{ border: 'none', borderBottom: tab === 'features' ? '2px solid #0ea5e9' : '2px solid transparent', color: tab === 'features' ? '#0ea5e9' : '#475569' }}
          >
            <i className="bi bi-list-check me-1" /> Feature Cards
          </button>
        </li>
      </ul>

      {tab === 'story' && (
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h4 className="fw-bold mb-1">About Section Copy</h4>
              <p className="text-muted small mb-0">Editorial text shown in the About section, mission & vision blocks.</p>
            </div>
          </div>

          <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
            <div className="card-body p-4">
              {loading ? (
                <div className="text-center py-4 text-muted">Loading…</div>
              ) : (
                <form onSubmit={saveSettings}>
                  <div className="row g-3">
                    {ABOUT_FIELDS.map((f) => (
                      <div key={f.key} className="col-12">
                        <label className="form-label fw-semibold">{f.label}</label>
                        {f.type === 'textarea' ? (
                          <textarea
                            className="form-control"
                            rows={3}
                            value={settings[f.key] ?? ''}
                            placeholder={f.placeholder}
                            onChange={(e) => setSettings((s) => ({ ...s, [f.key]: e.target.value }))}
                          />
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            value={settings[f.key] ?? ''}
                            placeholder={f.placeholder}
                            onChange={(e) => setSettings((s) => ({ ...s, [f.key]: e.target.value }))}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-3 mt-4">
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }}
                      disabled={saving}
                    >
                      {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                    {savedFlag && <span className="text-success small"><i className="bi bi-check-circle me-1" />Saved</span>}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'features' && (
        <CrudManager
          title="About Feature Cards"
          subtitle="Highlights shown beside the About story (e.g. 17+ Years, MDS Team)"
          endpoint="/api/admin/about-features"
          accent="#0ea5e9"
          emptyForm={{ icon: 'bi-award', title: '', desc: '', sortOrder: 0, isActive: true }}
          fields={[
            { key: 'icon', label: 'Bootstrap Icon Class', type: 'text', required: true, width: 6, placeholder: 'bi-award' },
            { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 6 },
            { key: 'title', label: 'Title', type: 'text', required: true, width: 12, placeholder: '17+ Years Experience' },
            { key: 'desc', label: 'Description', type: 'textarea', width: 12, rows: 2 },
            { key: 'isActive', label: 'Active', type: 'checkbox', width: 6 },
          ]}
          columns={[
            { key: 'icon', label: 'Icon', render: (i) => <i className={`bi ${i.icon}`} style={{ fontSize: 20, color: '#0ea5e9' }} /> },
            { key: 'title', label: 'Title' },
            { key: 'desc', label: 'Description' },
          ]}
        />
      )}
    </div>
  );
}
