'use client';
import CrudManager from '@/components/Admin/CrudManager';

export default function AdminProblems() {
  return (
    <CrudManager
      title="Problems We Solve"
      subtitle="Cards in the &quot;We solve YOUR problem&quot; section"
      endpoint="/api/admin/problems"
      accent="#ef4444"
      emptyForm={{ icon: 'bi-emoji-frown', title: '', desc: '', color: '#ef4444', sortOrder: 0, isActive: true }}
      fields={[
        { key: 'icon', label: 'Bootstrap Icon Class', type: 'text', required: true, width: 6, placeholder: 'bi-emoji-frown', help: 'See https://icons.getbootstrap.com/' },
        { key: 'color', label: 'Accent Color', type: 'color', width: 6 },
        { key: 'title', label: 'Problem Title', type: 'text', required: true, width: 12, placeholder: 'Tooth Pain' },
        { key: 'desc', label: 'Description', type: 'textarea', required: true, width: 12, rows: 2 },
        { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 4 },
        { key: 'isActive', label: 'Active', type: 'checkbox', width: 4 },
      ]}
      columns={[
        {
          key: 'icon',
          label: 'Icon',
          render: (i) => <i className={`bi ${i.icon}`} style={{ fontSize: 20, color: i.color || '#ef4444' }} />,
        },
        { key: 'title', label: 'Problem' },
        { key: 'desc', label: 'Description' },
      ]}
    />
  );
}
