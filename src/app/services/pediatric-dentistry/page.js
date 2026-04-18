import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import PediatricContent from '@/components/ServicePages/PediatricContent';

export const metadata = {
  title: "Children's Dentist in Tirupati",
  description:
    'Tirupati’s most loved children’s dentist. Gentle, fun, fear-free dental care for kids — baby teeth care, fluoride, sealants, first visit by age 1.',
  keywords:
    "pediatric dentist Tirupati, children's dentist Tirupati, kids dental clinic Tirupati, milk teeth treatment Tirupati, baby teeth care Tirupati, pedodontist Tirupati, children dental care Andhra Pradesh, kids dentist Tirupati",
  alternates: { canonical: 'https://meghanadental.com/services/pediatric-dentistry' },
  openGraph: {
    title: "Best Children's Dentist in Tirupati | Pediatric Dentistry — Meghana Dental",
    description:
      'Our child-friendly pedodontist in Tirupati makes every dental visit fun and fear-free. Baby teeth care, fluoride treatments, sealants & more for kids.',
    url: 'https://meghanadental.com/services/pediatric-dentistry',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/children-dentist.jpg', width: 1200, height: 630, alt: "Best Children's Dentist in Tirupati — Meghana Dental" }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best children\'s dentist in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital has an MDS-qualified pedodontist (children\'s dental specialist) in Tirupati, experienced in treating children from infancy to teens. Our child-friendly environment with gentle techniques makes every visit comfortable and anxiety-free.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what age should a child first visit the dentist in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paediatric dental guidelines recommend a child\'s first dental visit within 6 months of the first tooth appearing or by age 1. Early visits at Meghana Dental Hospital in Tirupati help monitor development and prevent future dental problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dental treatments are available for children in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital Tirupati offers children: dental check-ups, fluoride treatments, dental sealants, milk teeth (baby teeth) fillings and extractions, space maintainers, interceptive orthodontics, and habit-breaking appliances. All treatments are gentle and child-friendly.',
      },
    },
  ],
};

export default function PediatricDentistryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Pediatric"
        titleHighlight="Dentistry"
        description="Tirupati's most loved children's dental clinic — gentle, compassionate, and fun. From baby teeth to braces, we make every dental visit a positive experience for your little ones."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Pediatric Dentistry' }]}
        image="/services/Pediatric-Dentistry.jpg"
        gradient="linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)"
        accent="#ec4899"
        stats={[
          { icon: 'bi-calendar-heart', label: 'First Visit Age', value: 'By age 1' },
          { icon: 'bi-arrow-repeat', label: 'Check-up Frequency', value: 'Every 6 months' },
          { icon: 'bi-shield-fill-check', label: 'Fluoride Varnish', value: '2–4 times/year' },
          { icon: 'bi-clock-fill', label: 'Sealant Age', value: 'Age 6 & 12' },
        ]}
      />
      <PediatricContent />
      <Footer />
    </>
  );
}
