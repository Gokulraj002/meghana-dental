'use client';
import CrudManager from '@/components/Admin/CrudManager';

const LOCATION_OPTIONS = [
  { value: 'navbar', label: 'Top Navigation' },
  { value: 'footer_quick', label: 'Footer — Quick Links' },
  { value: 'footer_services', label: 'Footer — Services' },
];

export default function AdminMenu() {
  return (
    <CrudManager
      title="Menus & Links"
      subtitle="Navbar and footer links across the site"
      endpoint="/api/admin/menu"
      accent="#0284c7"
      emptyForm={{ location: 'navbar', label: '', href: '', sortOrder: 0, isActive: true }}
      filterOptions={{ key: 'location', label: 'Locations', options: LOCATION_OPTIONS }}
      fields={[
        { key: 'location', label: 'Location', type: 'select', required: true, width: 6, options: LOCATION_OPTIONS },
        { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 6 },
        { key: 'label', label: 'Link Label', type: 'text', required: true, width: 6, placeholder: 'About Us' },
        { key: 'href', label: 'URL / Path', type: 'text', required: true, width: 6, placeholder: '/about or https://...' },
        { key: 'isActive', label: 'Active', type: 'checkbox', width: 6 },
      ]}
      columns={[
        {
          key: 'location',
          label: 'Location',
          render: (i) => {
            const o = LOCATION_OPTIONS.find((x) => x.value === i.location);
            return <span className="badge bg-light text-dark border">{o ? o.label : i.location}</span>;
          },
        },
        { key: 'label', label: 'Label' },
        { key: 'href', label: 'URL', render: (i) => <code style={{ fontSize: 12 }}>{i.href}</code> },
      ]}
    />
  );
}
