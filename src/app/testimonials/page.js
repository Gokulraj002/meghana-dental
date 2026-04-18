import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsHero from '@/components/Testimonials/TestimonialsHero';
import TestimonialsStatsBanner from '@/components/Testimonials/TestimonialsStatsBanner';
import TestimonialsGrid from '@/components/Testimonials/TestimonialsGrid';
import TestimonialsCTASection from '@/components/Testimonials/TestimonialsCTASection';

export const metadata = {
  title: 'Patient Reviews | 4.9★ in Tirupati',
  description:
    'Read real patient reviews & testimonials for Meghana Dental Hospital Tirupati. 4.9★ Google rating from 850+ reviews. 50,000+ happy patients.',
  keywords:
    'Meghana Dental reviews Tirupati, dental hospital reviews Tirupati, best dentist Tirupati reviews, dental testimonials Tirupati, patient feedback dental Tirupati, 4.9 star dental Tirupati',
  alternates: { canonical: 'https://meghanadental.com/testimonials' },
  openGraph: {
    title: 'Patient Testimonials — 4.9★ Rated Dental Hospital in Tirupati | Meghana Dental',
    description:
      '850+ Google reviews, 98% patient satisfaction. See what real patients in Tirupati say about their experience at Meghana Dental Hospital.',
    url: 'https://meghanadental.com/testimonials',
    siteName: 'Meghana Dental Hospital',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <TestimonialsHero />
      <TestimonialsStatsBanner />
      <section className="service-detail-section">
        <div className="container">
          <TestimonialsGrid />
          <TestimonialsCTASection />
        </div>
      </section>
      <Footer />
    </>
  );
}
