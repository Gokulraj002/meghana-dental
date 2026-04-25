import ServiceForm from '@/components/Admin/ServiceForm';

export default function NewService() {
  return (
    <div>
      <h4 className="fw-bold mb-1">Add New Service</h4>
      <p className="text-muted small mb-4">Fill in the details for the new service</p>
      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-4">
          <ServiceForm />
        </div>
      </div>
    </div>
  );
}
