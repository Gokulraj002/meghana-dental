import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import DentalCrownsContent from '@/components/ServicePages/DentalCrownsContent';

export const metadata = {
  title: 'Dental Crowns & Bridges in Tirupati | Zirconia Crowns — Meghana Dental',
  description:
    'Premium dental crowns and bridges in Tirupati — zirconia, e.max, PFM and metal crowns. Protect damaged teeth and replace missing teeth with expert prosthodontists at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'dental crowns Tirupati, dental bridges Tirupati, zirconia crown Tirupati, tooth cap Tirupati, crown cost Tirupati, dental cap Tirupati, broken tooth crown Tirupati, prosthodontist Tirupati',
  alternates: { canonical: 'https://meghanadental.com/services/dental-crowns' },
  openGraph: {
    title: 'Dental Crowns & Bridges in Tirupati | Zirconia & e.max — Meghana Dental',
    description: 'Restore damaged and missing teeth with premium zirconia, e.max & PFM crowns in Tirupati. Expert prosthodontists, natural-looking results, transparent pricing.',
    url: 'https://meghanadental.com/services/dental-crowns',
    siteName: 'Meghana Dental Hospital',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do dental crowns last in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zirconia and e.max crowns can last 15–25 years or more with good oral hygiene. PFM crowns typically last 10–15 years. We use premium lab-fabricated crowns for maximum longevity.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a dental crown in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Crown costs at Meghana Dental Hospital start from ₹4,000 for PFM, ₹7,000 for zirconia, and ₹10,000+ for e.max. Exact pricing depends on tooth location and material selected.' },
    },
    {
      '@type': 'Question',
      name: 'Is getting a dental crown painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. The tooth is numbed with local anaesthesia. A temporary crown is provided while your permanent crown is being fabricated in 5–7 working days.' },
    },
    {
      '@type': 'Question',
      name: 'Which is better — crown or dental implant for a missing tooth?',
      acceptedAnswer: { '@type': 'Answer', text: 'For a single missing tooth with healthy adjacent teeth, an implant is the gold standard. A bridge is faster and less expensive but requires crowning of neighbouring teeth. Our team will advise the best option for your case.' },
    },
  ],
};

export default function DentalCrownsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Dental Crowns"
        titleHighlight="& Bridges"
        description="Protect damaged teeth and replace missing ones with premium zirconia, e.max, and PFM crowns. Natural-looking, long-lasting restorations crafted by specialist prosthodontists in Tirupati."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Crowns & Bridges' }]}
        image="/images/about-clinic.png"
        gradient="linear-gradient(135deg, #d97706 0%, #b45309 100%)"
        accent="#d97706"
        stats={[
          { icon: 'bi-gem', label: 'Crown Types', value: 'Zirconia, e.max, PFM' },
          { icon: 'bi-calendar-event', label: 'Appointments', value: '2 Visits' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '15–25+ Years' },
          { icon: 'bi-clock', label: 'Lab Time', value: '5–7 Working Days' },
        ]}
      />
      <DentalCrownsContent />
      <Footer />
    </>
  );
}
