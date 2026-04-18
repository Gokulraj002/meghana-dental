import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / About Us</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1>About <span>Meghana Dental</span> Hospital, Tirupati</h1>
            <p>
              Trusted by 50,000+ patients, Meghana Dental Hospital delivers world-class
              dental care with compassion, expertise, and state-of-the-art technology in
              Tirupati, Andhra Pradesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
