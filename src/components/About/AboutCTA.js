import Link from 'next/link';

export default function AboutCTA() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="service-cta-card">
          <h3>Ready to Experience the Difference?</h3>
          <p>Visit Meghana Dental Hospital for a comprehensive dental check-up and consultation with our expert team.</p>
          <Link href="/contact" className="btn">Book Your Appointment</Link>
        </div>
      </div>
    </div>
  );
}
