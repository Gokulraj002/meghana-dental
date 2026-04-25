'use client';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

/* ─── Small reusable helpers ──────────────────────────────────────────────── */

function ImageField({ label, value, onChange, hint }) {
  const ref = useRef();
  const [uploading, setUploading] = useState(false);
  async function pick(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      const r = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const d = await r.json();
      if (d.url) onChange(d.url);
    } catch { /* ignore */ }
    setUploading(false);
  }
  return (
    <div className="mb-4">
      {label && <label className="form-label fw-semibold">{label}</label>}
      <div className="d-flex align-items-start gap-3 flex-wrap">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="preview"
            style={{ width: 160, height: 100, objectFit: 'cover', borderRadius: 8, border: '2px solid #e2e8f0', flexShrink: 0 }}
            onError={e => { e.currentTarget.style.opacity = '0.3'; }}
          />
        )}
        <div style={{ flex: 1, minWidth: 200 }}>
          <button type="button" className="btn btn-outline-secondary btn-sm mb-2"
            onClick={() => ref.current.click()} disabled={uploading}>
            <i className="bi bi-upload me-1" />{uploading ? 'Uploading…' : 'Upload Image'}
          </button>
          <input ref={ref} type="file" accept="image/*" style={{ display: 'none' }} onChange={pick} />
          <input className="form-control form-control-sm" value={value}
            onChange={e => onChange(e.target.value)} placeholder="/images/photo.jpg or https://…" />
          {hint && <small className="text-muted">{hint}</small>}
        </div>
      </div>
    </div>
  );
}

function Row({ onUp, onDown, onDelete, first, last, children }) {
  return (
    <div className="border rounded-2 p-3 mb-2" style={{ background: '#f9fafb' }}>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <button type="button" className="btn btn-sm btn-outline-secondary" style={{ padding: '2px 7px' }}
          onClick={onUp} disabled={first} title="Move up"><i className="bi bi-chevron-up" /></button>
        <button type="button" className="btn btn-sm btn-outline-secondary" style={{ padding: '2px 7px' }}
          onClick={onDown} disabled={last} title="Move down"><i className="bi bi-chevron-down" /></button>
        <button type="button" className="btn btn-sm btn-outline-danger" style={{ padding: '2px 7px' }}
          onClick={onDelete} title="Remove"><i className="bi bi-trash" /></button>
      </div>
      {children}
    </div>
  );
}

function AddBtn({ onClick, label }) {
  return (
    <button type="button" className="btn btn-outline-secondary btn-sm mt-1"
      style={{ borderRadius: 6 }} onClick={onClick}>
      <i className="bi bi-plus-lg me-1" />{label || 'Add Item'}
    </button>
  );
}

/* ─── Tab definitions ─────────────────────────────────────────────────────── */
const TABS = [
  { id: 'hero',     label: 'Hero',           icon: 'bi-image-fill' },
  { id: 'overview', label: 'Overview',        icon: 'bi-file-text-fill' },
  { id: 'benefits', label: 'Benefits',        icon: 'bi-stars' },
  { id: 'process',  label: 'Process',         icon: 'bi-list-ol' },
  { id: 'faqs',     label: 'FAQs',            icon: 'bi-question-circle-fill' },
  { id: 'gallery',  label: 'Gallery',         icon: 'bi-images' },
  { id: 'cta',      label: 'CTA / Sidebar',   icon: 'bi-megaphone-fill' },
];

/* ─── Default empty items ─────────────────────────────────────────────────── */
const E_STAT      = { icon: 'bi-clock', label: '', value: '' };
const E_HIGHLIGHT = { icon: 'bi-check-circle', text: '' };
const E_CONDITION = { icon: 'bi-circle', label: '' };
const E_BENEFIT   = { icon: 'bi-star', title: '', desc: '' };
const E_STEP      = { title: '', desc: '' };
const E_FAQ       = { q: '', a: '' };
const E_GALLERY   = { src: '', caption: '' };

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function ServiceLandingEditor() {
  const { id } = useParams();

  const [service,   setService]   = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [loadError, setLoadError] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  const [saving,    setSaving]    = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saveOk,    setSaveOk]    = useState(false);

  const [form, setForm] = useState({
    heroImage: '', titleBefore: '', titleHighlight: '', titleAfter: ' in Tirupati',
    description: '',
    stats: [{ ...E_STAT }, { ...E_STAT }, { ...E_STAT }, { ...E_STAT }],
    contentImage: '', overview: '',
    highlights: [], conditions: [],
    benefits: [], process: [], faqs: [], gallery: [],
    ctaTitle: '', ctaDesc: '',
  });

  /* ── load service + defaults + saved overrides ── */
  useEffect(() => {
    (async () => {
      try {
        const svcRes = await fetch(`/api/admin/services/${id}`);
        if (!svcRes.ok) throw new Error(`Error ${svcRes.status}`);
        const svc = await svcRes.json();
        setService(svc);

        // fetch hardcoded defaults for this slug
        let defaults = {};
        try {
          const dr = await fetch(`/api/admin/service-defaults/${svc.slug}`);
          if (dr.ok) defaults = await dr.json();
        } catch { /* use empty */ }

        // fetch any previously saved admin overrides
        let saved = {};
        try {
          const sr = await fetch('/api/admin/settings');
          if (sr.ok) {
            const sd = await sr.json();
            const raw = sd[`svc:${svc.slug}`];
            if (raw) saved = JSON.parse(raw);
          }
        } catch { /* use empty */ }

        // saved overrides win; fall back to defaults
        const m = { ...defaults, ...saved };

        setForm({
          heroImage:     m.heroImage     ?? '',
          titleBefore:   m.titleBefore   ?? '',
          titleHighlight:m.titleHighlight?? '',
          titleAfter:    m.titleAfter    ?? ' in Tirupati',
          description:   m.description   ?? '',
          stats:         (Array.isArray(m.stats) && m.stats.length > 0) ? m.stats
                         : [{ ...E_STAT }, { ...E_STAT }, { ...E_STAT }, { ...E_STAT }],
          contentImage:  m.contentImage  ?? '',
          overview:      m.overview      ?? '',
          highlights:    Array.isArray(m.highlights)  ? m.highlights  : [],
          conditions:    Array.isArray(m.conditions)  ? m.conditions  : [],
          benefits:      Array.isArray(m.benefits)    ? m.benefits    : [],
          process:       Array.isArray(m.process)     ? m.process     : [],
          faqs:          Array.isArray(m.faqs)        ? m.faqs        : [],
          gallery:       Array.isArray(m.gallery)     ? m.gallery     : [],
          ctaTitle:      m.ctaTitle ?? '',
          ctaDesc:       m.ctaDesc  ?? '',
        });
      } catch (err) {
        setLoadError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  /* ── form helpers ── */
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const setStat = (i, k, v) =>
    setForm(f => ({ ...f, stats: f.stats.map((s, j) => j === i ? { ...s, [k]: v } : s) }));

  const upd = (field, i, patch) =>
    setForm(f => ({ ...f, [field]: f[field].map((x, j) => j === i ? { ...x, ...patch } : x) }));

  const add = (field, empty) =>
    setForm(f => ({ ...f, [field]: [...f[field], { ...empty }] }));

  const del = (field, i) =>
    setForm(f => ({ ...f, [field]: f[field].filter((_, j) => j !== i) }));

  const move = (field, i, dir) =>
    setForm(f => {
      const a = [...f[field]], j = i + (dir === 'up' ? -1 : 1);
      if (j < 0 || j >= a.length) return f;
      [a[i], a[j]] = [a[j], a[i]];
      return { ...f, [field]: a };
    });

  /* ── save ── */
  async function save(e) {
    if (e) e.preventDefault();
    setSaving(true); setSaveError(''); setSaveOk(false);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [`svc:${service.slug}`]: JSON.stringify(form) }),
      });
      const d = await res.json();
      if (!res.ok) { setSaveError(d.error || `Save failed (${res.status})`); setSaving(false); return; }
      setSaveOk(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch { setSaveError('Network error — please try again.'); }
    setSaving(false);
  }

  /* ── reset ── */
  async function reset() {
    if (!confirm('Reset all changes and restore built-in defaults?')) return;
    setSaving(true);
    try {
      await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [`svc:${service.slug}`]: '' }),
      });
      // reload defaults
      const dr = await fetch(`/api/admin/service-defaults/${service.slug}`);
      if (dr.ok) {
        const defaults = await dr.json();
        setForm({
          heroImage:      defaults.heroImage      ?? '',
          titleBefore:    defaults.titleBefore    ?? '',
          titleHighlight: defaults.titleHighlight ?? '',
          titleAfter:     defaults.titleAfter     ?? ' in Tirupati',
          description:    defaults.description    ?? '',
          stats:          (Array.isArray(defaults.stats) && defaults.stats.length > 0) ? defaults.stats
                          : [{ ...E_STAT }, { ...E_STAT }, { ...E_STAT }, { ...E_STAT }],
          contentImage:   defaults.contentImage   ?? '',
          overview:       defaults.overview       ?? '',
          highlights:     Array.isArray(defaults.highlights)  ? defaults.highlights  : [],
          conditions:     Array.isArray(defaults.conditions)  ? defaults.conditions  : [],
          benefits:       Array.isArray(defaults.benefits)    ? defaults.benefits    : [],
          process:        Array.isArray(defaults.process)     ? defaults.process     : [],
          faqs:           Array.isArray(defaults.faqs)        ? defaults.faqs        : [],
          gallery:        Array.isArray(defaults.gallery)     ? defaults.gallery     : [],
          ctaTitle:       defaults.ctaTitle ?? '',
          ctaDesc:        defaults.ctaDesc  ?? '',
        });
      }
      setSaveOk(true);
    } catch { setSaveError('Reset failed'); }
    setSaving(false);
  }

  /* ── loading / error states ── */
  if (loading) return (
    <div className="text-center py-5 text-muted">
      <div className="spinner-border spinner-border-sm me-2" role="status" />
      Loading landing page content…
    </div>
  );
  if (loadError) return (
    <div className="alert alert-danger d-flex align-items-center gap-2">
      <i className="bi bi-exclamation-triangle-fill" />
      <span>{loadError}</span>
      <Link href="/admin/services" className="ms-auto btn btn-sm btn-outline-danger">← Back</Link>
    </div>
  );

  const accent = service?.accentColor || '#0ea5e9';

  /* ════════════════════════════════════════════════════════════════════════ */
  return (
    <div>
      {/* Breadcrumb */}
      <div className="d-flex align-items-center gap-2 mb-1 small text-muted">
        <Link href="/admin/services" className="text-muted text-decoration-none">Services</Link>
        <i className="bi bi-chevron-right" style={{ fontSize: 10 }} />
        <Link href={`/admin/services/${id}`} className="text-muted text-decoration-none">{service?.title}</Link>
        <i className="bi bi-chevron-right" style={{ fontSize: 10 }} />
        <span className="fw-semibold text-dark">Landing Page</span>
      </div>

      {/* Header */}
      <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap gap-2">
        <div>
          <h4 className="fw-bold mb-0">Edit Landing Page</h4>
          <p className="text-muted small mb-0">
            All fields are pre-filled with the current live content. Edit and save.
          </p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <a href={`/services/${service?.slug}`} target="_blank" rel="noreferrer"
            className="btn btn-sm btn-outline-secondary" style={{ borderRadius: 8 }}>
            <i className="bi bi-box-arrow-up-right me-1" />Preview Page
          </a>
          <button type="button" className="btn btn-sm btn-outline-warning"
            style={{ borderRadius: 8 }} onClick={reset} disabled={saving}>
            <i className="bi bi-arrow-counterclockwise me-1" />Reset to Defaults
          </button>
        </div>
      </div>

      {/* Alerts */}
      {saveError && (
        <div className="alert alert-danger d-flex align-items-center gap-2 mb-3 py-2">
          <i className="bi bi-exclamation-circle-fill" />{saveError}
        </div>
      )}
      {saveOk && (
        <div className="alert alert-success d-flex align-items-center gap-2 mb-3 py-2">
          <i className="bi bi-check-circle-fill" />Landing page saved successfully!
        </div>
      )}

      {/* Tabs */}
      <ul className="nav nav-tabs mb-0" style={{ borderBottom: 'none' }}>
        {TABS.map(t => (
          <li className="nav-item" key={t.id}>
            <button
              type="button"
              className={`nav-link ${activeTab === t.id ? 'active fw-semibold' : 'text-muted'}`}
              style={{ fontSize: 13, padding: '8px 14px', borderBottomColor: activeTab === t.id ? '#fff' : 'transparent' }}
              onClick={() => setActiveTab(t.id)}
            >
              <i className={`bi ${t.icon} me-1`} style={{ color: activeTab === t.id ? accent : undefined }} />
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={save}>
        <div className="card border-0 shadow-sm" style={{ borderRadius: '0 8px 8px 8px', borderTop: `3px solid ${accent}` }}>
          <div className="card-body p-4">

            {/* ══════ TAB: HERO ══════ */}
            {activeTab === 'hero' && (
              <div>
                <h6 className="fw-bold mb-4" style={{ color: accent }}>
                  <i className="bi bi-image-fill me-2" />Hero Section
                </h6>

                <ImageField label="Background Image"
                  value={form.heroImage} onChange={v => set('heroImage', v)}
                  hint="Recommended: 1920×1080px JPG/WebP — shown as full-width hero backdrop" />

                <div className="row g-3 mb-4">
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Title — Before Highlight</label>
                    <input className="form-control" value={form.titleBefore}
                      onChange={e => set('titleBefore', e.target.value)} placeholder="e.g. Dental" />
                    <small className="text-muted">Text before the coloured word</small>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Highlighted Word</label>
                    <input className="form-control" value={form.titleHighlight}
                      onChange={e => set('titleHighlight', e.target.value)} placeholder="e.g. Implants" />
                    <small className="text-muted">Shown in accent colour</small>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label fw-semibold">Title Suffix</label>
                    <input className="form-control" value={form.titleAfter}
                      onChange={e => set('titleAfter', e.target.value)} placeholder=" in Tirupati" />
                    <small className="text-muted">After highlight (e.g. " in Tirupati")</small>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label fw-semibold">Preview</label>
                    <div className="p-2 rounded-2 text-center"
                      style={{ background: '#1e293b', color: '#fff', fontSize: 11, minHeight: 38, lineHeight: 1.4 }}>
                      {form.titleBefore} <span style={{ color: accent }}>{form.titleHighlight}</span>{form.titleAfter}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Hero Description</label>
                  <textarea className="form-control" rows={3} value={form.description}
                    onChange={e => set('description', e.target.value)}
                    placeholder="Tagline shown below the title in the hero banner" />
                </div>

                <div>
                  <label className="form-label fw-semibold">Stats Strip — 4 items</label>
                  <p className="text-muted small mb-3">Shown at the bottom of the hero and in the sidebar Treatment Details box.</p>
                  <div className="row g-2">
                    {form.stats.map((s, i) => (
                      <div className="col-xl-3 col-md-6" key={i}>
                        <div className="border rounded-2 p-3" style={{ background: '#f8fafc' }}>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <i className={`bi ${s.icon || 'bi-star'}`} style={{ color: accent }} />
                            <span className="fw-semibold small text-muted">Stat {i + 1}</span>
                          </div>
                          <div className="mb-2">
                            <label className="form-label form-label-sm mb-1">
                              Icon <a href="https://icons.getbootstrap.com" target="_blank" rel="noreferrer" className="text-muted" style={{ fontSize: 10 }}>(browse)</a>
                            </label>
                            <input className="form-control form-control-sm" value={s.icon}
                              onChange={e => setStat(i, 'icon', e.target.value)} placeholder="bi-clock" />
                          </div>
                          <div className="mb-2">
                            <label className="form-label form-label-sm mb-1">Label</label>
                            <input className="form-control form-control-sm" value={s.label}
                              onChange={e => setStat(i, 'label', e.target.value)} placeholder="Duration" />
                          </div>
                          <div>
                            <label className="form-label form-label-sm mb-1">Value</label>
                            <input className="form-control form-control-sm" value={s.value}
                              onChange={e => setStat(i, 'value', e.target.value)} placeholder="30–90 min" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ══════ TAB: OVERVIEW ══════ */}
            {activeTab === 'overview' && (
              <div>
                <h6 className="fw-bold mb-4" style={{ color: accent }}>
                  <i className="bi bi-file-text-fill me-2" />Overview, Highlights & Conditions
                </h6>

                <ImageField label="Content Image"
                  value={form.contentImage} onChange={v => set('contentImage', v)}
                  hint="Shown beside the overview text. Recommended: 800×600px" />

                <div className="mb-4">
                  <label className="form-label fw-semibold">Overview Paragraph</label>
                  <textarea className="form-control" rows={5} value={form.overview}
                    onChange={e => set('overview', e.target.value)}
                    placeholder="Introduction paragraph in the main content area" />
                  <small className="text-muted">{form.overview.length} characters</small>
                </div>

                <hr className="my-4" />
                <div className="mb-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <label className="form-label fw-semibold mb-0">Highlight Chips <span className="badge bg-secondary ms-1">{form.highlights.length}</span></label>
                    <AddBtn onClick={() => add('highlights', E_HIGHLIGHT)} label="Add Highlight" />
                  </div>
                  <p className="text-muted small mb-2">Short keyword pills shown below the overview text.</p>
                  {form.highlights.map((h, i) => (
                    <Row key={i} first={i === 0} last={i === form.highlights.length - 1}
                      onUp={() => move('highlights', i, 'up')}
                      onDown={() => move('highlights', i, 'down')}
                      onDelete={() => del('highlights', i)}>
                      <div className="row g-2">
                        <div className="col-md-3">
                          <label className="form-label form-label-sm mb-1">Icon</label>
                          <div className="input-group input-group-sm">
                            <span className="input-group-text"><i className={`bi ${h.icon || 'bi-star'}`} /></span>
                            <input className="form-control" value={h.icon}
                              onChange={e => upd('highlights', i, { icon: e.target.value })} placeholder="bi-check-circle" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <label className="form-label form-label-sm mb-1">Text</label>
                          <input className="form-control form-control-sm" value={h.text}
                            onChange={e => upd('highlights', i, { text: e.target.value })} placeholder="95%+ Success Rate" />
                        </div>
                      </div>
                    </Row>
                  ))}
                  {form.highlights.length === 0 && <p className="text-muted small">No highlights yet. Click Add Highlight.</p>}
                </div>

                <hr className="my-4" />
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <label className="form-label fw-semibold mb-0">Conditions / Who Needs This <span className="badge bg-secondary ms-1">{form.conditions.length}</span></label>
                    <AddBtn onClick={() => add('conditions', E_CONDITION)} label="Add Condition" />
                  </div>
                  <p className="text-muted small mb-2">Items in the "Who Needs This Treatment?" section.</p>
                  {form.conditions.map((c, i) => (
                    <Row key={i} first={i === 0} last={i === form.conditions.length - 1}
                      onUp={() => move('conditions', i, 'up')}
                      onDown={() => move('conditions', i, 'down')}
                      onDelete={() => del('conditions', i)}>
                      <div className="row g-2">
                        <div className="col-md-3">
                          <label className="form-label form-label-sm mb-1">Icon</label>
                          <div className="input-group input-group-sm">
                            <span className="input-group-text"><i className={`bi ${c.icon || 'bi-circle'}`} /></span>
                            <input className="form-control" value={c.icon}
                              onChange={e => upd('conditions', i, { icon: e.target.value })} placeholder="bi-circle" />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <label className="form-label form-label-sm mb-1">Label</label>
                          <input className="form-control form-control-sm" value={c.label}
                            onChange={e => upd('conditions', i, { label: e.target.value })} placeholder="Single missing tooth" />
                        </div>
                      </div>
                    </Row>
                  ))}
                  {form.conditions.length === 0 && <p className="text-muted small">No conditions yet. Click Add Condition.</p>}
                </div>
              </div>
            )}

            {/* ══════ TAB: BENEFITS ══════ */}
            {activeTab === 'benefits' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h6 className="fw-bold mb-0" style={{ color: accent }}>
                    <i className="bi bi-stars me-2" />Benefits — Why Choose This Treatment
                  </h6>
                  <AddBtn onClick={() => add('benefits', E_BENEFIT)} label="Add Benefit" />
                </div>
                <p className="text-muted small mb-4">
                  Shown as cards in the "Why Choose This Treatment?" grid. {form.benefits.length} item{form.benefits.length !== 1 ? 's' : ''}.
                </p>
                {form.benefits.map((b, i) => (
                  <Row key={i} first={i === 0} last={i === form.benefits.length - 1}
                    onUp={() => move('benefits', i, 'up')}
                    onDown={() => move('benefits', i, 'down')}
                    onDelete={() => del('benefits', i)}>
                    <div className="row g-2">
                      <div className="col-md-2">
                        <label className="form-label form-label-sm mb-1">Icon</label>
                        <div className="input-group input-group-sm">
                          <span className="input-group-text"><i className={`bi ${b.icon || 'bi-star'}`} style={{ color: accent }} /></span>
                          <input className="form-control" value={b.icon}
                            onChange={e => upd('benefits', i, { icon: e.target.value })} placeholder="bi-star" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label form-label-sm mb-1">Title</label>
                        <input className="form-control form-control-sm" value={b.title}
                          onChange={e => upd('benefits', i, { title: e.target.value })} placeholder="Benefit title" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label form-label-sm mb-1">Description</label>
                        <input className="form-control form-control-sm" value={b.desc}
                          onChange={e => upd('benefits', i, { desc: e.target.value })} placeholder="Short description…" />
                      </div>
                    </div>
                  </Row>
                ))}
                {form.benefits.length === 0 && <p className="text-muted small">No benefits yet. Click Add Benefit.</p>}
              </div>
            )}

            {/* ══════ TAB: PROCESS ══════ */}
            {activeTab === 'process' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h6 className="fw-bold mb-0" style={{ color: accent }}>
                    <i className="bi bi-list-ol me-2" />Treatment Process Steps
                  </h6>
                  <AddBtn onClick={() => add('process', E_STEP)} label="Add Step" />
                </div>
                <p className="text-muted small mb-4">
                  Numbered steps in the "How the Treatment Works" section. {form.process.length} step{form.process.length !== 1 ? 's' : ''}.
                </p>
                {form.process.map((p, i) => (
                  <Row key={i} first={i === 0} last={i === form.process.length - 1}
                    onUp={() => move('process', i, 'up')}
                    onDown={() => move('process', i, 'down')}
                    onDelete={() => del('process', i)}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="fw-bold text-muted" style={{ fontSize: 22, lineHeight: 1, minWidth: 32 }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="mb-2">
                          <label className="form-label form-label-sm mb-1">Step Title</label>
                          <input className="form-control form-control-sm" value={p.title}
                            onChange={e => upd('process', i, { title: e.target.value })} placeholder="Step title" />
                        </div>
                        <div>
                          <label className="form-label form-label-sm mb-1">Description</label>
                          <textarea className="form-control form-control-sm" rows={2} value={p.desc}
                            onChange={e => upd('process', i, { desc: e.target.value })} placeholder="What happens in this step…" />
                        </div>
                      </div>
                    </div>
                  </Row>
                ))}
                {form.process.length === 0 && <p className="text-muted small">No steps yet. Click Add Step.</p>}
              </div>
            )}

            {/* ══════ TAB: FAQs ══════ */}
            {activeTab === 'faqs' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h6 className="fw-bold mb-0" style={{ color: accent }}>
                    <i className="bi bi-question-circle-fill me-2" />Frequently Asked Questions
                  </h6>
                  <AddBtn onClick={() => add('faqs', E_FAQ)} label="Add FAQ" />
                </div>
                <p className="text-muted small mb-4">
                  Shown as accordion in the FAQ section. {form.faqs.length} question{form.faqs.length !== 1 ? 's' : ''}.
                </p>
                {form.faqs.map((f, i) => (
                  <Row key={i} first={i === 0} last={i === form.faqs.length - 1}
                    onUp={() => move('faqs', i, 'up')}
                    onDown={() => move('faqs', i, 'down')}
                    onDelete={() => del('faqs', i)}>
                    <div className="mb-2">
                      <label className="form-label form-label-sm mb-1 fw-semibold">Question</label>
                      <input className="form-control form-control-sm" value={f.q}
                        onChange={e => upd('faqs', i, { q: e.target.value })} placeholder="How much does it cost?" />
                    </div>
                    <div>
                      <label className="form-label form-label-sm mb-1 fw-semibold">Answer</label>
                      <textarea className="form-control form-control-sm" rows={3} value={f.a}
                        onChange={e => upd('faqs', i, { a: e.target.value })} placeholder="Detailed answer to this question…" />
                    </div>
                  </Row>
                ))}
                {form.faqs.length === 0 && <p className="text-muted small">No FAQs yet. Click Add FAQ.</p>}
              </div>
            )}

            {/* ══════ TAB: GALLERY ══════ */}
            {activeTab === 'gallery' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <h6 className="fw-bold mb-0" style={{ color: accent }}>
                    <i className="bi bi-images me-2" />Treatment Gallery
                  </h6>
                  <AddBtn onClick={() => add('gallery', E_GALLERY)} label="Add Image" />
                </div>
                <p className="text-muted small mb-4">
                  Before/after and reference images in the "Treatment Gallery" grid. {form.gallery.length} image{form.gallery.length !== 1 ? 's' : ''}.
                </p>
                {form.gallery.map((g, i) => (
                  <Row key={i} first={i === 0} last={i === form.gallery.length - 1}
                    onUp={() => move('gallery', i, 'up')}
                    onDown={() => move('gallery', i, 'down')}
                    onDelete={() => del('gallery', i)}>
                    <div className="row g-3 align-items-start">
                      <div className="col-md-4">
                        <label className="form-label form-label-sm mb-1">Image</label>
                        <ImageField value={g.src} onChange={v => upd('gallery', i, { src: v })} />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label form-label-sm mb-1">Caption</label>
                        <input className="form-control form-control-sm" value={g.caption}
                          onChange={e => upd('gallery', i, { caption: e.target.value })} placeholder="Before/after caption" />
                        <div className="form-check mt-2">
                          <input type="checkbox" className="form-check-input" id={`g-contain-${i}`}
                            checked={!!g.contain}
                            onChange={e => upd('gallery', i, { contain: e.target.checked })} />
                          <label className="form-check-label small" htmlFor={`g-contain-${i}`}>
                            Use contain (show full image, no crop)
                          </label>
                        </div>
                      </div>
                    </div>
                  </Row>
                ))}
                {form.gallery.length === 0 && <p className="text-muted small">No images yet. Click Add Image.</p>}
              </div>
            )}

            {/* ══════ TAB: CTA ══════ */}
            {activeTab === 'cta' && (
              <div>
                <h6 className="fw-bold mb-4" style={{ color: accent }}>
                  <i className="bi bi-megaphone-fill me-2" />Call-to-Action Card (Sidebar)
                </h6>
                <p className="text-muted small mb-4">
                  Shown in the sidebar as the booking prompt card.
                </p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">CTA Title</label>
                  <input className="form-control" value={form.ctaTitle}
                    onChange={e => set('ctaTitle', e.target.value)} placeholder="Book a Free Consultation" />
                </div>
                <div>
                  <label className="form-label fw-semibold">CTA Description</label>
                  <textarea className="form-control" rows={3} value={form.ctaDesc}
                    onChange={e => set('ctaDesc', e.target.value)}
                    placeholder="Get expert advice tailored to your needs." />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── Sticky save bar ── */}
        <div className="d-flex align-items-center gap-2 py-3 mt-2 flex-wrap"
          style={{ position: 'sticky', bottom: 0, background: '#f0f4f8', zIndex: 10, borderTop: '1px solid #e2e8f0' }}>
          <button type="submit" className="btn fw-semibold"
            style={{ background: accent, color: '#fff', borderRadius: 8, minWidth: 150 }} disabled={saving}>
            {saving
              ? <><span className="spinner-border spinner-border-sm me-2" role="status" />Saving…</>
              : <><i className="bi bi-check-lg me-1" />Save Landing Page</>}
          </button>
          <Link href={`/admin/services/${id}`} className="btn btn-outline-secondary" style={{ borderRadius: 8 }}>
            Cancel
          </Link>
          <div className="ms-auto d-flex gap-2">
            {TABS.map(t => (
              <button key={t.id} type="button"
                className={`btn btn-sm ${activeTab === t.id ? 'btn-secondary' : 'btn-outline-secondary'}`}
                style={{ borderRadius: 6, fontSize: 12 }}
                onClick={() => setActiveTab(t.id)}>
                <i className={`bi ${t.icon} me-1`} />{t.label}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
