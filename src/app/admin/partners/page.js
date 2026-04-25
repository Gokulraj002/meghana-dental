'use client';
import CrudManager from '@/components/Admin/CrudManager';

export default function AdminPartners() {
  return (
    <CrudManager
      title="Empanelled Partners"
      subtitle="Logos shown in the empanelled / partners strip"
      endpoint="/api/admin/partners"
      accent="#0ea5e9"
      emptyForm={{ name: '', logo: '', url: '', sortOrder: 0, isActive: true }}
      fields={[
        { key: 'name', label: 'Name', type: 'text', required: true, width: 8, placeholder: 'e.g. NABH, BSNL' },
        { key: 'logo', label: 'Logo URL / Path', type: 'image', width: 8, placeholder: '/images/partners/logo.png', help: 'Relative path inside /public or full URL' },
        { key: 'url', label: 'Website URL (optional)', type: 'url', width: 8, placeholder: 'https://example.com' },
        { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 4 },
        { key: 'isActive', label: 'Active', type: 'checkbox', width: 4 },
      ]}
      columns={[
        {
          key: 'logo',
          label: 'Logo',
          render: (i) =>
            i.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={i.logo} alt={i.name} style={{ height: 32, maxWidth: 80, objectFit: 'contain' }} />
            ) : (
              '—'
            ),
        },
        { key: 'name', label: 'Name' },
        {
          key: 'url',
          label: 'URL',
          render: (i) => (i.url ? <a href={i.url} target="_blank" rel="noreferrer">{i.url.replace(/^https?:\/\//, '').slice(0, 30)}</a> : '—'),
        },
      ]}
    />
  );
}
