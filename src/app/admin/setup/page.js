'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AdminSetup() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', confirm: '', setupKey: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) { setError('Passwords do not match'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password, setupKey: form.setupKey }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Setup failed'); setLoading(false); return; }
      setSuccess(true);
      setTimeout(() => router.push('/admin/login'), 2000);
    } catch {
      setError('Network error — please try again');
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ width: '100%', maxWidth: 460 }}>
        {/* Header */}
        <div className="text-center mb-4">
          <Image src="/images/logo.png" alt="Meghana Dental" width={64} height={64} style={{ objectFit: 'contain', borderRadius: 12 }} />
          <h3 className="fw-bold mt-3 mb-1" style={{ color: '#fff' }}>Admin Setup</h3>
          <p style={{ color: '#94a3b8', fontSize: 14 }}>Create your admin account to get started</p>
        </div>

        <div className="card border-0 shadow-lg" style={{ borderRadius: 16 }}>
          <div className="card-body p-4">
            {success ? (
              <div className="text-center py-4">
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className="bi bi-check-lg" style={{ fontSize: 28, color: '#16a34a' }} />
                </div>
                <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>Admin Created!</h5>
                <p className="text-muted small">Redirecting to login…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger d-flex align-items-center gap-2 py-2 mb-3" style={{ borderRadius: 8, fontSize: 13 }}>
                    <i className="bi bi-exclamation-circle-fill" />
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ fontSize: 13 }}>Admin Email *</label>
                  <input
                    type="email" className="form-control" autoFocus required
                    placeholder="admin@meghanadental.in"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{ borderRadius: 8 }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ fontSize: 13 }}>Password *</label>
                  <input
                    type="password" className="form-control" required placeholder="Min. 8 characters"
                    value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    style={{ borderRadius: 8 }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ fontSize: 13 }}>Confirm Password *</label>
                  <input
                    type="password" className="form-control" required
                    value={form.confirm} onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                    style={{ borderRadius: 8 }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{ fontSize: 13 }}>Setup Key *</label>
                  <input
                    type="password" className="form-control" required
                    placeholder="Enter the setup key from .env"
                    value={form.setupKey} onChange={e => setForm(f => ({ ...f, setupKey: e.target.value }))}
                    style={{ borderRadius: 8 }}
                  />
                  <small className="text-muted">Find SETUP_KEY in your .env.local file</small>
                </div>

                <button
                  type="submit" className="btn w-100 fw-semibold py-2" disabled={loading}
                  style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8, fontSize: 15 }}>
                  {loading ? (
                    <><span className="spinner-border spinner-border-sm me-2" />Creating…</>
                  ) : (
                    <><i className="bi bi-shield-check me-2" />Create Admin Account</>
                  )}
                </button>

                <div className="text-center mt-3">
                  <a href="/admin/login" style={{ fontSize: 13, color: '#64748b' }}>Already have an account? Login</a>
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="text-center mt-3" style={{ color: '#475569', fontSize: 12 }}>
          This page is only available once. After setup, it will be disabled.
        </p>
      </div>
    </div>
  );
}
