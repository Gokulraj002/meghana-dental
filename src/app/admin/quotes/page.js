'use client';
import CrudManager from '@/components/Admin/CrudManager';

export default function AdminQuotes() {
  return (
    <CrudManager
      title="Quote Strip"
      subtitle="Brand value statements / pull-quotes"
      endpoint="/api/admin/quotes"
      accent="#8b5cf6"
      emptyForm={{ icon: 'bi-quote', text: '', sortOrder: 0, isActive: true }}
      fields={[
        { key: 'icon', label: 'Bootstrap Icon Class', type: 'text', width: 6, placeholder: 'bi-quote' },
        { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 6 },
        { key: 'text', label: 'Quote Text', type: 'textarea', required: true, width: 12, rows: 3 },
        { key: 'isActive', label: 'Active', type: 'checkbox', width: 4 },
      ]}
      columns={[
        {
          key: 'icon',
          label: 'Icon',
          render: (i) => <i className={`bi ${i.icon || 'bi-quote'}`} style={{ fontSize: 20, color: '#8b5cf6' }} />,
        },
        { key: 'text', label: 'Quote', render: (i) => <span style={{ fontStyle: 'italic' }}>”{i.text}”</span> },
      ]}
    />
  );
}
