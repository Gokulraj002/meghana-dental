import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import AlignersContent from '@/components/ServicePages/AlignersContent';

export const metadata = {
  title: 'Clear Aligners Tirupati | Invisible Teeth Straightening',
  description:
    'Invisible teeth straightening in Tirupati with custom clear aligners. 3D intra-oral scanning, removable trays, no metal braces. Book free 3D scan.',
  keywords:
    'clear aligners Tirupati, invisible braces Tirupati, Invisalign Tirupati, transparent aligners Tirupati, teeth straightening without braces Tirupati, aligner cost Tirupati, clear braces Tirupati, aligners Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services/aligners' },
  openGraph: {
    title: 'Clear Aligners in Tirupati | Invisible Teeth Straightening — Meghana Dental',
    description:
      'Straighten your teeth without anyone noticing. Custom 3D-scanned clear aligners in Tirupati — removable, invisible, comfortable. 6–18 month treatment.',
    url: 'https://meghanadental.com/services/aligners',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/aligners-trays.jpg', width: 1200, height: 630, alt: 'Clear Aligners in Tirupati — Meghana Dental Hospital' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cost of clear aligners in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clear aligner cost in Tirupati at Meghana Dental Hospital starts from ₹35,000 for mild cases and varies by treatment complexity. Contact us for a personalised quote after a free 3D scan evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are clear aligners better than braces in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clear aligners are ideal for mild to moderate misalignment — invisible, removable, and comfortable. Braces are better for complex cases. Our orthodontist in Tirupati will guide you to the best option after clinical evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does clear aligner treatment take in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clear aligner treatment at Meghana Dental Hospital in Tirupati typically takes 6 to 18 months depending on severity. Each set of trays is worn for about 2 weeks. Visible results usually appear within a few months.',
      },
    },
  ],
};

export default function AlignersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Clear"
        titleHighlight="Aligners"
        description="Straighten your teeth discreetly in Tirupati with custom-fitted, transparent clear aligners — no metal braces, no wires, just a confident smile at your own pace."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Clear Aligners' }]}
        image="/images/aligners-wearing.jpg"
        gradient="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
        accent="#0891b2"
        stats={[
          { icon: 'bi-layers-fill', label: 'Aligner Sets', value: '14–26 trays' },
          { icon: 'bi-clock-fill', label: 'Daily Wear', value: '20–22 hrs/day' },
          { icon: 'bi-arrow-repeat', label: 'Change Every', value: '1–2 weeks' },
          { icon: 'bi-calendar-range', label: 'Total Duration', value: '6–18 months' },
        ]}
      />
      <AlignersContent />
      <Footer />
    </>
  );
}
