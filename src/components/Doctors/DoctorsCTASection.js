import Link from 'next/link';

export default function DoctorsCTASection() {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-lg-8">
        <div className="service-cta-card">
          <h3>Consult Our Specialists</h3>
          <p>Book an appointment with the right specialist for your dental needs. Our team is here to help you.</p>
          <Link href="/contact" className="btn">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}
