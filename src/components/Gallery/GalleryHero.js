import Link from 'next/link';

export default function GalleryHero() {
  return (
    <section className="service-page-hero">
      <div className="container position-relative">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Gallery</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1>Our <span>Gallery</span>  Meghana Dental Hospital</h1>
            <p>
              Take a look inside our state-of-the-art dental clinic — from our modern facility
              and advanced equipment to real patient smile transformations that speak for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
