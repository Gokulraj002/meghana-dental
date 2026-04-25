import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import DentalCrownsContent from '@/components/ServicePages/DentalCrownsContent';
import { getSeo, buildMetadata } from '@/lib/seo';
import { getServicePageOverrides } from '@/lib/servicePage';

export async function generateMetadata() {
  const seo = await getSeo('service:dental-crowns');
  return buildMetadata(seo, {
  title: 'Best Dental Crowns & Bridges in Tirupati | Zirconia',
  description:
    'Premium zirconia, e.max & PFM crowns & bridges in Tirupati. Natural-looking, long-lasting restorations by MDS prosthodontists. Transparent pricing.',
  keywords:
    'dental crowns Tirupati, dental bridges Tirupati, zirconia crown Tirupati, tooth cap Tirupati, crown cost Tirupati, dental cap Tirupati, broken tooth crown Tirupati, prosthodontist Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/dental-crowns' },
  openGraph: {
    title: 'Dental Crowns & Bridges in Tirupati | Zirconia & e.max — Meghana Dental',
    description: 'Restore damaged and missing teeth with premium zirconia, e.max & PFM crowns in Tirupati. Expert prosthodontists, natural-looking results, transparent pricing.',
    url: 'https://meghanadental.in/services/dental-crowns',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dental-clinic-interior.jpg', width: 1200, height: 630, alt: 'Dental Crowns and Bridges in Tirupati' }],
    type: 'website',
  },
});
}

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
      acceptedAnswer: { '@type': 'Answer', text: 'No. The tooth is numbed with local anaesthesia. A temporary crown is provided while your permanent crown is being fabricated in 3–5 working days.' },
    },
    {
      '@type': 'Question',
      name: 'Which is better — crown or dental implant for a missing tooth?',
      acceptedAnswer: { '@type': 'Answer', text: 'For a single missing tooth with healthy adjacent teeth, an implant is the gold standard. A bridge is faster and less expensive but requires crowning of neighbouring teeth. Our team will advise the best option for your case.' },
    },
  ],
};

export default async function DentalCrownsPage() {
  const ov = await getServicePageOverrides('dental-crowns');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore={ov.titleBefore || 'Dental Crowns'}
        titleHighlight={ov.titleHighlight || '& Bridges'}
        description={ov.description || "Protect damaged teeth and replace missing ones with premium zirconia, e.max, and PFM crowns. Natural-looking, long-lasting restorations crafted by specialist prosthodontists in Tirupati."}
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Crowns & Bridges' }]}
        titleAfter={ov.titleAfter || ' in Tirupati'}
        image={ov.heroImage || '/images/about-clinic.png'}
        gradient="linear-gradient(135deg, #d97706 0%, #b45309 100%)"
        accent="#d97706"
        stats={Array.isArray(ov.stats) && ov.stats.length > 0 ? ov.stats : [
          { icon: 'bi-gem', label: 'Crown Types', value: 'Zirconia, e.max, PFM' },
          { icon: 'bi-calendar-event', label: 'Appointments', value: '2 Visits' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '15–25+ Years' },
          { icon: 'bi-clock', label: 'Lab Time', value: '3–5 Working Days' },
        ]}
      />
      <DentalCrownsContent overrides={ov} />
      <Footer />
    </>
  );
}
