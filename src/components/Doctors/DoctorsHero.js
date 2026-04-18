import Link from 'next/link';

export default function DoctorsHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Our Doctors</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>Meet Our <span>Dental Specialists</span> in Tirupati</h1>
            <p>
              Our team of MDS-qualified dental specialists brings decades of combined experience
              across every major dental specialty. Each doctor is dedicated to providing
              personalised, compassionate care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
