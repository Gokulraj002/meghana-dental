'use client';
import { useEffect, useState } from 'react';

const GOOGLE_FONTS = [
  'Inter', 'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Nunito',
  'Montserrat', 'Raleway', 'Source Sans 3', 'Playfair Display',
  'Merriweather', 'DM Sans', 'Outfit', 'Sora',
];

const DEFAULTS = {
  clinic_name: 'Meghana Dental Hospital',
  phone: '+91-98491-58195',
  email: 'info@meghanadental.in',
  address: 'No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501',
  whatsapp: '+919849158195',
  opening_hours: 'Mon–Sat: 9:30 AM – 9:00 PM | Sun: 10:00 AM – 2:00 PM',
  google_maps_link: 'https://maps.google.com/?q=Meghana+Dental+Hospital+Tirupati',
  primary_color: '#0EA5A0',
  secondary_color: '#10b981',
  accent_color: '#F97066',
  gold_color: '#F59E0B',
  dark_bg_color: '#0F2837',
  heading_font: 'Inter',
  body_font: 'Inter',
  facebook_url: 'https://www.facebook.com/meghanadental',
  instagram_url: 'https://www.instagram.com/meghanadental',
  youtube_url: 'https://www.youtube.com/@meghanadental',
  site_tagline: 'Best Dental Clinic in Tirupati',
  footer_about: "Tirupati's most trusted multi-speciality dental hospital.",
  footer_copyright: '© 2025 Meghana Dental Hospital. All rights reserved.',
};

function ColorField({ label, settingKey, value, onChange, hint }) {
  return (
    <div className="col-md-6">
      <label className="form-label fw-semibold" style={{ fontSize: 13 }}>{label}</label>
      <div className="input-group">
        <input type="color" className="form-control form-control-color" value={value || '#000000'}
          onChange={e => onChange(settingKey, e.target.value)} style={{ width: 48, padding: '2px 4px' }} />
        <input type="text" className="form-control font-monospace" value={value || ''}
          onChange={e => onChange(settingKey, e.target.value)} placeholder="#000000" />
      </div>
      {hint && <small className="text-muted">{hint}</small>}
    </div>
  );
}

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
    { id: 'general',  label: 'General',       icon: 'bi-building' },
    { id: 'colors',   label: 'Colors',         icon: 'bi-palette' },
    { id: 'fonts',    label: 'Fonts',          icon: 'bi-type' },
    { id: 'contact',  label: 'Contact',        icon: 'bi-telephone' },
    { id: 'social',   label: 'Social Media',   icon: 'bi-share' },
    { id: 'footer',   label: 'Footer',         icon: 'bi-layout-bottom' },
  ];

  if (loading) return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="spinner-border text-primary me-2" style={{ width: 20, height: 20 }} />
      <span className="text-muted">Loading settings…</span>
    </div>
  );

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-1">Site Settings</h4>
          <p className="text-muted small mb-0">Control your clinic website — colors, fonts, contact details & more</p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          {saved && (
            <div className="alert alert-success py-2 px-3 mb-0 small d-flex align-items-center gap-1">
              <i className="bi bi-check-circle-fill" /> Settings saved!
            </div>
          )}
          {saveError && (
            <div className="alert alert-danger py-2 px-3 mb-0 small">
              <i className="bi bi-exclamation-circle me-1" />{saveError}
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSave}>
        <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
          {/* Tabs */}
          <div className="card-header bg-white border-bottom px-4 pt-3 pb-0" style={{ borderRadius: '12px 12px 0 0' }}>
            <ul className="nav nav-tabs border-0 flex-wrap">
              {tabs.map(t => (
                <li key={t.id} className="nav-item">
                  <button type="button" onClick={() => setActiveTab(t.id)}
                    className={`nav-link border-0 ${activeTab === t.id ? 'active fw-semibold' : 'text-muted'}`}
                    style={{ fontSize: 13 }}>
                    <i className={`bi ${t.icon} me-1`} />{t.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-body p-4">

            {/* ── GENERAL ─────────────────────────────── */}
            {activeTab === 'general' && (
              <div className="row g-3">
                <div className="col-md-8">
                  <label className="form-label fw-semibold">Clinic Name</label>
                  <input className="form-control" value={settings.clinic_name || ''} onChange={e => handle('clinic_name', e.target.value)} />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Site Tagline</label>
                  <input className="form-control" value={settings.site_tagline || ''} onChange={e => handle('site_tagline', e.target.value)} />
                </div>
              </div>
            )}

            {/* ── COLORS ──────────────────────────────── */}
            {activeTab === 'colors' && (
              <div>
                <p className="text-muted small mb-3">
                  These colors control the look of the entire website. Use the color picker or type a hex code.
                </p>
                <div className="row g-3 mb-4">
                  <ColorField label="Primary Color" settingKey="primary_color" value={settings.primary_color} onChange={handle}
                    hint="Main brand color — buttons, navbar, highlights" />
                  <ColorField label="Secondary / Green" settingKey="secondary_color" value={settings.secondary_color} onChange={handle}
                    hint="Success states, badges, active items" />
                  <ColorField label="Accent / Coral" settingKey="accent_color" value={settings.accent_color} onChange={handle}
                    hint="Warm accent — CTAs, hero elements" />
                  <ColorField label="Gold / Star Color" settingKey="gold_color" value={settings.gold_color} onChange={handle}
                    hint="Star ratings, gold highlights" />
                  <ColorField label="Dark Background" settingKey="dark_bg_color" value={settings.dark_bg_color} onChange={handle}
                    hint="Section backgrounds, footer, dark cards" />
                </div>

                {/* Live Preview */}
                <div className="p-4 rounded-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <p className="fw-semibold small mb-3 text-muted text-uppercase" style={{ letterSpacing: '0.05em' }}>Live Preview</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {[
                      { label: 'Primary', key: 'primary_color' },
                      { label: 'Secondary', key: 'secondary_color' },
                      { label: 'Accent', key: 'accent_color' },
                      { label: 'Gold', key: 'gold_color' },
                    ].map(c => (
                      <span key={c.key} className="badge px-3 py-2" style={{ background: settings[c.key], fontSize: 13 }}>
                        {c.label}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mb-3">
                    <button type="button" className="btn btn-sm px-3 py-2 fw-semibold"
                      style={{ background: settings.primary_color, color: '#fff', borderRadius: 8 }}>
                      Book Appointment
                    </button>
                    <button type="button" className="btn btn-sm px-3 py-2 fw-semibold"
                      style={{ background: settings.accent_color, color: '#fff', borderRadius: 8 }}>
                      Contact Us
                    </button>
                  </div>
                  <div className="p-3 rounded-2 d-flex align-items-center gap-2" style={{ background: settings.dark_bg_color }}>
                    <i className="bi bi-star-fill" style={{ color: settings.gold_color }} />
                    <span style={{ color: '#fff', fontSize: 13 }}>4.9 — Dark section preview</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── FONTS ───────────────────────────────── */}
            {activeTab === 'fonts' && (
              <div>
                <div className="alert alert-info d-flex align-items-start gap-2 py-2 mb-4" style={{ borderRadius: 8, fontSize: 13 }}>
                  <i className="bi bi-info-circle-fill mt-1" />
                  <div>
                    After changing fonts, save and then rebuild & redeploy the site for changes to appear.
                    <br />Fonts are loaded from Google Fonts.
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Heading Font</label>
                    <select className="form-select" value={settings.heading_font || 'Inter'} onChange={e => handle('heading_font', e.target.value)}>
                      {GOOGLE_FONTS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <small className="text-muted">Used for all titles, section headings, card headers</small>
                    <div className="mt-3 p-3 rounded-2" style={{ background: '#f8fafc', fontFamily: `'${settings.heading_font}', sans-serif` }}>
                      <div style={{ fontSize: 22, fontWeight: 700, color: '#0f172a' }}>Best Dental Clinic</div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: '#334155' }}>in Tirupati</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Body Font</label>
                    <select className="form-select" value={settings.body_font || 'Inter'} onChange={e => handle('body_font', e.target.value)}>
                      {GOOGLE_FONTS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <small className="text-muted">Used for paragraphs, descriptions, form text</small>
                    <div className="mt-3 p-3 rounded-2" style={{ background: '#f8fafc', fontFamily: `'${settings.body_font}', sans-serif` }}>
                      <p className="mb-0" style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
                        Meghana Dental Hospital is a super speciality dental centre with 17+ years of excellence.
                        We provide advanced dental care using microscope technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── CONTACT ─────────────────────────────── */}
            {activeTab === 'contact' && (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold"><i className="bi bi-telephone me-1 text-primary" />Phone Number</label>
                  <input className="form-control" value={settings.phone || ''} onChange={e => handle('phone', e.target.value)} placeholder="+91-98491-58195" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold"><i className="bi bi-whatsapp me-1 text-success" />WhatsApp Number</label>
                  <input className="form-control" value={settings.whatsapp || ''} onChange={e => handle('whatsapp', e.target.value)} placeholder="+919849158195 (no spaces or dashes)" />
                  <small className="text-muted">Format: +91XXXXXXXXXX (used for wa.me link)</small>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold"><i className="bi bi-envelope me-1 text-warning" />Email Address</label>
                  <input type="email" className="form-control" value={settings.email || ''} onChange={e => handle('email', e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold"><i className="bi bi-clock me-1" />Opening Hours</label>
                  <input className="form-control" value={settings.opening_hours || ''} onChange={e => handle('opening_hours', e.target.value)} placeholder="Mon–Sat: 9:30 AM – 9:00 PM" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold"><i className="bi bi-geo-alt me-1 text-danger" />Clinic Address</label>
                  <textarea className="form-control" rows={2} value={settings.address || ''} onChange={e => handle('address', e.target.value)} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold"><i className="bi bi-map me-1" />Google Maps Link</label>
                  <input type="url" className="form-control" value={settings.google_maps_link || ''} onChange={e => handle('google_maps_link', e.target.value)} placeholder="https://maps.google.com/..." />
                </div>
              </div>
            )}

            {/* ── SOCIAL ──────────────────────────────── */}
            {activeTab === 'social' && (
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-facebook me-1" style={{ color: '#1877f2' }} />Facebook Page URL
                  </label>
                  <input type="url" className="form-control" value={settings.facebook_url || ''}
                    onChange={e => handle('facebook_url', e.target.value)} placeholder="https://facebook.com/yourpage" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-instagram me-1" style={{ color: '#e1306c' }} />Instagram Profile URL
                  </label>
                  <input type="url" className="form-control" value={settings.instagram_url || ''}
                    onChange={e => handle('instagram_url', e.target.value)} placeholder="https://instagram.com/yourhandle" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-youtube me-1 text-danger" />YouTube Channel URL
                  </label>
                  <input type="url" className="form-control" value={settings.youtube_url || ''}
                    onChange={e => handle('youtube_url', e.target.value)} placeholder="https://youtube.com/@yourchannel" />
                </div>
              </div>
            )}

            {/* ── FOOTER ──────────────────────────────── */}
            {activeTab === 'footer' && (
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">Footer About Text</label>
                  <textarea className="form-control" rows={3} value={settings.footer_about || ''}
                    onChange={e => handle('footer_about', e.target.value)}
                    placeholder="Short tagline shown in footer..." />
                  <small className="text-muted">Shown in the footer below the logo</small>
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Copyright Text</label>
                  <input className="form-control" value={settings.footer_copyright || ''}
                    onChange={e => handle('footer_copyright', e.target.value)}
                    placeholder="© 2025 Meghana Dental Hospital. All rights reserved." />
                </div>
              </div>
            )}

          </div>

          {/* Save Footer */}
          <div className="card-footer bg-white border-top px-4 py-3 d-flex align-items-center gap-3" style={{ borderRadius: '0 0 12px 12px' }}>
            <button type="submit" className="btn fw-semibold px-4" style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }} disabled={saving}>
              {saving ? (
                <><span className="spinner-border spinner-border-sm me-2" />Saving…</>
              ) : (
                <><i className="bi bi-check-lg me-1" />Save Settings</>
              )}
            </button>
            {saved && <span className="text-success small fw-semibold"><i className="bi bi-check-circle me-1" />Saved successfully!</span>}
          </div>
        </div>
      </form>
    </div>
  );
}
