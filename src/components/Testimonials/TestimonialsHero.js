import Link from 'next/link';

export default function TestimonialsHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Testimonials</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>Patient <span>Testimonials</span></h1>
            <p>
              Real stories from real patients who trust us with their dental care.
              Read what our patients have to say about their experience at Meghana Dental Hospital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
