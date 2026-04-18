import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import TeethWhiteningContent from '@/components/ServicePages/TeethWhiteningContent';

export const metadata = {
  title: 'Teeth Whitening in Tirupati | Smile Makeover — Meghana Dental',
  description:
    'Professional teeth whitening & smile makeover in Tirupati. Laser whitening, veneers, cosmetic dentistry in one visit at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'teeth whitening Tirupati, laser teeth whitening Tirupati, smile makeover Tirupati, dental veneers Tirupati, cosmetic dentistry Tirupati, smile designing Tirupati, teeth whitening cost Tirupati, smile makeover Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services/teeth-whitening' },
  openGraph: {
    title: 'Teeth Whitening & Smile Makeover in Tirupati | Meghana Dental',
    description:
      'Transform your smile in one visit with professional laser teeth whitening and cosmetic dentistry in Tirupati. Veneers, smile designing & more.',
    url: 'https://meghanadental.com/services/teeth-whitening',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dental-chair.jpg', width: 1200, height: 630, alt: 'Teeth Whitening Treatment in Tirupati — Meghana Dental' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of teeth whitening in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional teeth whitening cost in Tirupati at Meghana Dental Hospital starts from ₹5,000 for in-office laser whitening. The exact cost depends on the degree of discoloration and the whitening method recommended. Results are immediate and visible after just one visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does teeth whitening last in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional teeth whitening results at Meghana Dental Hospital in Tirupati typically last 1–3 years with proper dental hygiene. Avoiding staining foods/drinks (tea, coffee, tobacco) and regular dental check-ups help maintain the brightness for longer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is teeth whitening safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Professional teeth whitening at Meghana Dental Hospital in Tirupati is completely safe. We use clinically approved bleaching agents and protect your gums during the procedure. It is significantly safer and more effective than over-the-counter whitening products.',
      },
    },
  ],
};

export default function TeethWhiteningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Teeth Whitening &"
        titleHighlight="Cosmetic Dentistry"
        description="Unlock a brighter, more confident smile in Tirupati — professional laser whitening, smile makeovers, veneers, and complete cosmetic dental transformations at Meghana Dental Hospital."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Teeth Whitening' }]}
        image="/services/Teeth-Whitening01.jpg"
        gradient="linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
        accent="#f59e0b"
        stats={[
          { icon: 'bi-clock', label: 'In-Office Duration', value: '45–60 min' },
          { icon: 'bi-brightness-high-fill', label: 'Shade Improvement', value: 'Up to 8 shades' },
          { icon: 'bi-calendar-check', label: 'Results Last', value: '1–3 years' },
          { icon: 'bi-house-fill', label: 'Take-Home Kit', value: '2–3 weeks' },
        ]}
      />
      <TeethWhiteningContent />
      <Footer />
    </>
  );
}
