import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import DentalCrownsContent from '@/components/ServicePages/DentalCrownsContent';

export const metadata = {
  title: 'Zirconia Dental Crowns and Bridges Fitted in Tirupati',
  description:
    'Natural-looking zirconia, e.max and PFM crowns are fitted at our Tirupati clinic using digital impressions, with a 15-year-plus expected lifespan.',
  keywords:
    'dental crowns Tirupati, dental bridges Tirupati, zirconia crown Tirupati, tooth cap Tirupati, crown cost Tirupati, dental cap Tirupati, broken tooth crown Tirupati, prosthodontist Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/dental-crowns' },
  openGraph: {
    title: 'Dental Crowns & Bridges in Tirupati | Zirconia & e.max — Meghana Multi Speciality Dental Hospital',
    description: 'Restore damaged and missing teeth with premium zirconia, e.max & PFM crowns at Meghana Multi Speciality Dental Hospital in Tirupati. Expert prosthodontists, natural-looking results, transparent pricing.',
    url: 'https://meghanadental.in/services/dental-crowns',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/dental-clinic-interior.jpg', width: 1200, height: 630, alt: 'Dental Crowns and Bridges in Tirupati' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Crowns & Bridges in Tirupati | Meghana Multi Speciality Dental Hospital',
    description:
      'Premium zirconia, e.max & PFM crowns — Meghana Multi Speciality Dental Hospital offers natural-looking, long-lasting restorations in Tirupati.',
    images: ['/images/dental-clinic-interior.jpg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do dental crowns last in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zirconia and e.max crowns can last 15–25 years or more with good oral hygiene. PFM crowns typically last 10–15 years. We use premium lab-fabricated crowns at Meghana Multi Speciality Dental Hospital for maximum longevity.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a dental crown in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Crown costs at Meghana Multi Speciality Dental Hospital start from ₹4,000 for PFM, ₹7,000 for zirconia, and ₹10,000+ for e.max. Exact pricing depends on tooth location and material selected.' },
    },
    {
      '@type': 'Question',
      name: 'Is getting a dental crown painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. The tooth is numbed with local anaesthesia. A temporary crown is provided while your permanent crown is being fabricated in 3–5 working days.' },
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
        gradient="linear-gradient(135deg, #0EA5A0 0%, #12C4BE 100%)"
        accent="#0EA5A0"
        stats={[
          { icon: 'bi-gem', label: 'Crown Types', value: 'Zirconia, e.max, PFM' },
          { icon: 'bi-calendar-event', label: 'Appointments', value: '2 Visits' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '15–25+ Years' },
          { icon: 'bi-clock', label: 'Lab Time', value: '3–5 Working Days' },
        ]}
      />
      <DentalCrownsContent />
      <Footer />
    </>
  );
}
