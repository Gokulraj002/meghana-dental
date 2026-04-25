import { NextResponse } from 'next/server';

const COOKIE_NAME = 'admin_token';
const JWT_SECRET = process.env.JWT_SECRET || 'meghana-dental-admin-secret-key-2024';

/**
 * Lightweight JWT verification without Node.js crypto — safe for Edge runtime.
 * Checks signature using Web Crypto API.
 */
async function verifyJWT(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const [headerB64, payloadB64, sigB64] = parts;

    // Decode payload to check expiry
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')));
    if (payload.exp && payload.exp < Date.now() / 1000) return false;

    // Verify signature using Web Crypto
    const keyData = new TextEncoder().encode(JWT_SECRET);
    const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    const sigData = Uint8Array.from(atob(sigB64.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const msgData = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    return await crypto.subtle.verify('HMAC', key, sigData, msgData);
  } catch {
    return false;
  }
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // ── Public routes — always allow ─────────────────────────
  if (
    pathname === '/admin/login' ||
    pathname === '/admin/setup' ||
    pathname.startsWith('/api/admin/auth/')
  ) {
    return NextResponse.next();
  }

  // ── Protect /admin/* pages ───────────────────────────────
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    const valid = await verifyJWT(token);
    if (!valid) {
      const res = NextResponse.redirect(new URL('/admin/login', request.url));
      res.cookies.delete(COOKIE_NAME);
      return res;
    }
    return NextResponse.next();
  }

  // ── Protect /api/admin/* routes ──────────────────────────
  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth')) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const valid = await verifyJWT(token);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
