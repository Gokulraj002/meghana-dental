import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import OrthodonticsContent from '@/components/ServicePages/OrthodonticsContent';

export const metadata = {
  title: 'Best Orthodontist in Tirupati | Braces & Teeth Alignment',
  description:
    'Tirupati’s trusted orthodontist for dental braces & teeth alignment. Metal, ceramic & self-ligating braces. 3D oral scanning. Free assessment.',
  keywords:
    'orthodontist Tirupati, braces in Tirupati, metal braces Tirupati, ceramic braces Tirupati, teeth straightening Tirupati, self ligating braces Tirupati, braces cost Tirupati, orthodontic treatment Andhra Pradesh, best orthodontist Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/orthodontics' },
  openGraph: {
    title: 'Best Orthodontist in Tirupati | Braces & Smile Correction — Meghana Dental',
    description:
      'Expert MDS orthodontist in Tirupati with 3D oral scanner. Metal, ceramic & self-ligating braces for all ages. Confident smile in 12–24 months.',
    url: 'https://meghanadental.in/services/orthodontics',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/ortho-metal-braces.jpg', width: 1200, height: 630, alt: 'Orthodontic Braces Treatment in Tirupati — Meghana Dental' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of braces in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Braces cost in Tirupati at Meghana Dental Hospital: Metal braces start from ₹18,000, ceramic braces from ₹25,000, and self-ligating braces from ₹30,000. The exact cost depends on severity of misalignment and treatment duration. Book a free consultation for a personalised quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do braces take to straighten teeth in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orthodontic treatment duration at Meghana Dental Hospital in Tirupati typically ranges from 12 to 24 months depending on the complexity of your case. Mild cases may complete in under a year. Our 3D oral scanner helps plan the most efficient treatment path.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can adults get braces in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Meghana Dental Hospital in Tirupati treats both children and adults. Ceramic and self-ligating braces are especially popular with adult patients for their discreet appearance. Age is no barrier to a straighter smile.',
      },
    },
  ],
};

export default function OrthodonticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Orthodontic"
        titleHighlight="Treatment"
        description="Tirupati's trusted orthodontist for braces and teeth alignment. We deliver the right treatment after precise evaluation using advanced 3D oral scanners — for a confident, balanced smile."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Orthodontic Treatment' }]}
        image="/images/ortho-metal-braces.jpg"
        gradient="linear-gradient(135deg, #0EA5A0 0%, #12C4BE 100%)"
        accent="#0EA5A0"
        stats={[
          { icon: 'bi-calendar-range', label: 'Treatment Duration', value: '12–24 months' },
          { icon: 'bi-arrow-repeat', label: 'Visit Frequency', value: 'Every 4–6 wks' },
          { icon: 'bi-person-fill', label: 'Minimum Age', value: '7 years' },
          { icon: 'bi-shield-check', label: 'Technology', value: '3D Oral Scanner' },
        ]}
      />
      <OrthodonticsContent />
      <Footer />
    </>
  );
}
