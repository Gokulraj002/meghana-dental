import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import FullMouthRehabContent from '@/components/ServicePages/FullMouthRehabContent';

export const metadata = {
  title: 'Full Mouth Rehabilitation in Tirupati | Complete Smile Reconstruction — Meghana Dental',
  description:
    'Comprehensive full mouth rehabilitation in Tirupati — restore all teeth, correct bite, and rebuild your smile. Multi-specialist team with 17+ years experience at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'full mouth rehabilitation Tirupati, full mouth reconstruction Tirupati, teeth restoration Tirupati, bite correction Tirupati, comprehensive dental treatment Tirupati, dental reconstruction Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services/full-mouth-rehab' },
  openGraph: {
    title: 'Full Mouth Rehabilitation in Tirupati | Meghana Dental Hospital',
    description: 'Rebuild your complete smile with our multi-specialist full mouth rehabilitation programme in Tirupati. Digital smile design, phased treatment, and long-lasting results.',
    url: 'https://meghanadental.com/services/full-mouth-rehab',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dental-team.jpg', width: 1200, height: 630, alt: 'Full Mouth Rehabilitation in Tirupati' }],
    type: 'website',
  },
};

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
      acceptedAnswer: { '@type': 'Answer', text: 'Treatment time varies from 3 months for simpler cases to 12–18 months for complex rehabilitation. We give you a clear timeline at your first consultation at Meghana Dental Hospital, Tirupati.' },
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

export default function FullMouthRehabPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Full Mouth"
        titleHighlight="Rehabilitation"
        description="Complete smile reconstruction for patients with multiple damaged, decayed, or missing teeth. Our multi-specialist team in Tirupati restores your oral health, function, and confidence — all under one roof."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Full Mouth Rehab' }]}
        image="/images/ortho-self-ligating-braces.jpg"
        gradient="linear-gradient(135deg, #0f766e 0%, #1e3a5f 100%)"
        accent="#0f766e"
        stats={[
          { icon: 'bi-calendar2-range', label: 'Duration', value: '3–18 Months' },
          { icon: 'bi-people-fill', label: 'Specialists', value: 'Full Team On-Site' },
          { icon: 'bi-laptop', label: 'Smile Preview', value: 'Digital Design' },
          { icon: 'bi-credit-card', label: 'Payment', value: 'EMI Available' },
        ]}
      />
      <FullMouthRehabContent />
      <Footer />
    </>
  );
}
