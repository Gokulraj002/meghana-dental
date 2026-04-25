'use client';
import CrudManager from '@/components/Admin/CrudManager';

export default function AdminFacilities() {
  return (
    <CrudManager
      title="Clinic Facilities Gallery"
      subtitle="Photos shown in the facilities/gallery strip"
      endpoint="/api/admin/facilities"
      accent="#10b981"
      emptyForm={{ title: '', image: '', desc: '', sortOrder: 0, isActive: true }}
      fields={[
        { key: 'title', label: 'Title', type: 'text', required: true, width: 8, placeholder: 'Operating Theatre' },
        { key: 'image', label: 'Image URL / Path', type: 'image', required: true, width: 8, placeholder: '/images/facilities/ot.jpg' },
        { key: 'desc', label: 'Caption / Description', type: 'textarea', width: 12, rows: 2 },
        { key: 'sortOrder', label: 'Sort Order', type: 'number', width: 4 },
        { key: 'isActive', label: 'Active', type: 'checkbox', width: 4 },
      ]}
      columns={[
        {
          key: 'image',
          label: 'Image',
          render: (i) =>
            i.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={i.image} alt={i.title} style={{ height: 40, width: 60, objectFit: 'cover', borderRadius: 4 }} />
            ) : (
              '—'
            ),
        },
        { key: 'title', label: 'Title' },
        { key: 'desc', label: 'Caption' },
      ]}
    />
  );
}
