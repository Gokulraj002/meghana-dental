'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError(data.error || 'Login failed');
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 420, padding: '0 16px' }}>
        <div className="card shadow-lg border-0" style={{ borderRadius: 16 }}>
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <Image src="/images/logo.png" alt="Meghana Dental" width={80} height={80} style={{ objectFit: 'contain' }} />
              <h4 className="mt-3 fw-bold" style={{ color: '#1e293b' }}>Admin Panel</h4>
              <p className="text-muted small">Meghana Dental Hospital</p>
            </div>
            {error && <div className="alert alert-danger py-2 small">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required autoFocus />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn w-100 fw-semibold py-2" disabled={loading}
                style={{ background: '#0ea5e9', color: '#fff', borderRadius: 8 }}>
                {loading ? 'Signing in\u2026' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
