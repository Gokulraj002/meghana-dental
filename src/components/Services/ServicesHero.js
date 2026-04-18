import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Our Services</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>Our Dental <span>Services</span> in Tirupati</h1>
            <p>
              From routine check-ups to advanced dental surgeries, we offer a complete range of
              dental treatments using the latest technology and techniques. Explore our specialised
              services below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
