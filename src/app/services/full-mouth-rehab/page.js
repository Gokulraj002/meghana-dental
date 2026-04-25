import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import FullMouthRehabContent from '@/components/ServicePages/FullMouthRehabContent';
import { getSeo, buildMetadata } from '@/lib/seo';
import { getServicePageOverrides } from '@/lib/servicePage';

export async function generateMetadata() {
  const seo = await getSeo('service:full-mouth-rehab');
  return buildMetadata(seo, {
  title: 'Full Mouth Rehabilitation Tirupati | Complete Smile Restore',
  description:
    'Complete smile reconstruction in Tirupati with multi-specialist team — implants, crowns, orthodontics, phased treatment plan. EMI available.',
  keywords:
    'full mouth rehabilitation Tirupati, full mouth reconstruction Tirupati, teeth restoration Tirupati, bite correction Tirupati, comprehensive dental treatment Tirupati, dental reconstruction Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/services/full-mouth-rehab' },
  openGraph: {
    title: 'Full Mouth Rehabilitation in Tirupati | Meghana Dental Hospital',
    description: 'Rebuild your complete smile with our multi-specialist full mouth rehabilitation programme in Tirupati. Digital smile design, phased treatment, and long-lasting results.',
    url: 'https://meghanadental.in/services/full-mouth-rehab',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Full Mouth Rehabilitation in Tirupati' }],
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
      name: 'What is full mouth rehabilitation?',
      acceptedAnswer: { '@type': 'Answer', text: 'Full mouth rehabilitation is a comprehensive treatment programme that restores all teeth in both jaws. It combines implants, crowns, gum treatment, root canals, and orthodontics as needed to rebuild a fully functional, healthy, and beautiful smile.' },
    },
    {
      '@type': 'Question',
      name: 'How long does full mouth rehabilitation take in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most full mouth rehabilitation cases are completed in 3–4 months. We give you a clear timeline at your first consultation at Meghana Dental Hospital, Tirupati.' },
    },
    {
      '@type': 'Question',
      name: 'Will I have teeth throughout full mouth rehabilitation treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Temporary restorations are always provided so you are never without teeth during treatment. Aesthetics and function are maintained at every phase.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between full mouth rehabilitation and smile makeover?',
      acceptedAnswer: { '@type': 'Answer', text: 'Full mouth rehabilitation focuses on restoring function, health, and structure. A smile makeover is primarily aesthetic. Many patients benefit from a combined approach — our specialist team will guide you to the right plan.' },
    },
  ],
};

export default async function FullMouthRehabPage() {
  const ov = await getServicePageOverrides('full-mouth-rehab');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore={ov.titleBefore || 'Full Mouth'}
        titleHighlight={ov.titleHighlight || 'Rehabilitation'}
        description={ov.description || "Complete smile reconstruction for patients with multiple damaged, decayed, or missing teeth. Our multi-specialist team in Tirupati restores your oral health, function, and confidence — all under one roof."}
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Full Mouth Rehab' }]}
        titleAfter={ov.titleAfter || ' in Tirupati'}
        image={ov.heroImage || '/services/fmr-before-after-1.jpg'}
        gradient="linear-gradient(135deg, #0f766e 0%, #1e3a5f 100%)"
        accent="#0f766e"
        stats={Array.isArray(ov.stats) && ov.stats.length > 0 ? ov.stats : [
          { icon: 'bi-calendar2-range', label: 'Duration', value: '3–4 Months' },
          { icon: 'bi-people-fill', label: 'Specialists', value: 'Full Team On-Site' },
          { icon: 'bi-laptop', label: 'Smile Preview', value: 'Digital Design' },
          { icon: 'bi-credit-card', label: 'Payment', value: 'EMI Available' },
        ]}
      />
      <FullMouthRehabContent overrides={ov} />
      <Footer />
    </>
  );
}
