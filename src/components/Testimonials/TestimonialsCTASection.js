import Link from 'next/link';

export default function TestimonialsCTASection() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-8">
        <div className="service-cta-card">
          <h3>Share Your Experience</h3>
          <p>Had a great experience at Meghana Dental? Leave us a review on Google and help others find quality dental care.</p>
          <Link href="/contact" className="btn">Book Your Visit</Link>
        </div>
      </div>
    </div>
  );
}
