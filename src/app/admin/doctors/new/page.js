import DoctorForm from '@/components/Admin/DoctorForm';

export default function NewDoctor() {
  return (
    <div>
      <h4 className="fw-bold mb-1">Add Doctor</h4>
      <p className="text-muted small mb-4">Add a new doctor to the team</p>
      <div className="card border-0 shadow-sm" style={{ borderRadius: 12 }}>
        <div className="card-body p-4"><DoctorForm /></div>
      </div>
    </div>
  );
}
