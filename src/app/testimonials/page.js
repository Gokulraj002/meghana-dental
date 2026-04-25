import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsHero from '@/components/Testimonials/TestimonialsHero';
import TestimonialsStatsBanner from '@/components/Testimonials/TestimonialsStatsBanner';
import TestimonialsGrid from '@/components/Testimonials/TestimonialsGrid';
import TestimonialsCTASection from '@/components/Testimonials/TestimonialsCTASection';
import { getSeo, buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const seo = await getSeo('testimonials');
  return buildMetadata(seo, {
  title: 'Dental Patient Reviews Tirupati | 4.9★ Google Rating',
  description:
    'Read real patient reviews & testimonials for Meghana Dental Hospital Tirupati. 4.9★ Google rating from 850+ verified reviews. 50,000+ happy patients served.',
  keywords:
    'Meghana Dental reviews Tirupati, dental hospital reviews Tirupati, best dentist Tirupati reviews, dental testimonials Tirupati, patient feedback dental Tirupati, 4.9 star dental Tirupati',
  alternates: { canonical: 'https://meghanadental.in/testimonials' },
  openGraph: {
    title: 'Patient Testimonials — 4.9★ Rated Dental Hospital in Tirupati | Meghana Dental',
    description:
      '850+ Google reviews, 98% patient satisfaction. See what real patients in Tirupati say about their experience at Meghana Dental Hospital.',
    url: 'https://meghanadental.in/testimonials',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Patient Testimonials — Meghana Dental Hospital Tirupati' }],
    type: 'website',
  },
});
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Meghana Dental Hospital',
  url: 'https://meghanadental.in',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '850',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ravi Kumar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Best dental clinic in Tirupati. Dr. Hemu is very professional and the staff is caring. My root canal was completely painless. Highly recommended!',
      datePublished: '2024-11-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Lakshmi Priya' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Excellent experience with dental implants at Meghana Dental. The microscope technology they use is amazing. Very hygienic and modern clinic.',
      datePublished: '2024-12-02',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Venkat Reddy' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Got braces for my daughter here. The orthodontist is very experienced and explains everything clearly. The clinic atmosphere is very child-friendly.',
      datePublished: '2025-01-10',
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
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
