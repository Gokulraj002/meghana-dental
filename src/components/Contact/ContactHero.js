import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Contact Us</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>Contact <span>Us</span> — Dental Clinic in Tirupati</h1>
            <p>
              Get in touch with Meghana Dental Hospital. Book an appointment, ask a question,
              or visit us at our clinic in Tirupati, Andhra Pradesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
