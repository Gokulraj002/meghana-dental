import Link from 'next/link';

export default function ServicesListingCTA() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-8">
        <div className="service-cta-card">
          <h3>Not Sure Which Treatment You Need?</h3>
          <p>Book a consultation with our dental experts. We&apos;ll examine, diagnose, and recommend the best treatment plan for you.</p>
          <Link href="/contact" className="btn">Book Free Consultation</Link>
        </div>
      </div>
    </div>
  );
}
