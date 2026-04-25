import { cookies } from 'next/headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminSidebar from '@/components/Admin/AdminSidebar';
import { COOKIE_NAME } from '@/lib/auth';

export const metadata = { title: 'Admin \u2014 Meghana Dental' };

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  // No sidebar on login page (when no valid session)
  if (!token) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8' }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f4f8' }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
