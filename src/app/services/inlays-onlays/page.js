import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import InlaysOnlaysContent from '@/components/ServicePages/InlaysOnlaysContent';

export const metadata = {
  title: 'Ceramic Inlays & Onlays in Tirupati | Precision Tooth Restoration | Meghana Dental',
  description:
    'Restore large cavities with solid ceramic inlays and onlays in Tirupati. Lab-fabricated e.max porcelain, 15–20+ year lifespan, placed under 25× dental microscope. Meghana Dental Hospital.',
  keywords:
    'ceramic inlay Tirupati, onlay Tirupati, inlay onlay Tirupati, porcelain inlay Tirupati, emax inlay Tirupati, large cavity restoration Tirupati, dental inlay Tirupati, tooth restoration Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/inlays-onlays' },
  openGraph: {
    title: 'Ceramic Inlays & Onlays in Tirupati | 15–20+ Year Restorations — Meghana Dental',
    description:
      'Lab-fabricated ceramic inlays and onlays in Tirupati for large cavities and cracked cusps. Precision e.max porcelain bonded under 25× microscope for a lifetime of strength.',
    url: 'https://meghanadental.in/services/inlays-onlays',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/services/fillings-inlay-onlay.png', width: 1200, height: 630, alt: 'Ceramic Inlays and Onlays in Tirupati' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between an inlay and an onlay?',
      acceptedAnswer: { '@type': 'Answer', text: 'An inlay fits within the cusps of the tooth for cavities that do not involve cusp tips. An onlay extends over one or more cusps for larger cavities or cracked cusps. Both are lab-fabricated solid ceramic and permanently bonded.' },
    },
    {
      '@type': 'Question',
      name: 'How many visits does an inlay or onlay require?',
      acceptedAnswer: { '@type': 'Answer', text: 'Two visits: Visit 1 (tooth preparation and impression, temporary placed) and Visit 2 (permanent ceramic bonded in) with a 3–5 day laboratory gap. You leave both appointments with a tooth in place.' },
    },
    {
      '@type': 'Question',
      name: 'How long do ceramic inlays and onlays last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ceramic inlays and onlays routinely last 15–20+ years with good oral hygiene and regular check-ups. They last 2–3× longer than composite fillings.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of an inlay or onlay in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Meghana Dental Hospital ceramic inlays start from ₹6,000 per tooth and onlays from ₹8,000, depending on size and ceramic material (porcelain or e.max). A written cost estimate is provided before treatment.' },
    },
  ],
};

export default function InlaysOnlaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Ceramic Inlays &"
        titleHighlight="Onlays"
        description="The gold standard for restoring large cavities and cracked cusps. Lab-milled solid ceramic, bonded under 25× microscope precision — lasting 15–20+ years at Meghana Dental Hospital, Tirupati."
        crumbs={[
          { label: 'Our Services', href: '/services' },
          { label: 'Dental Fillings', href: '/services/dental-fillings' },
          { label: 'Inlays & Onlays' },
        ]}
        image="/services/fillings-inlay-onlay.png"
        accent="#7c3aed"
        stats={[
          { icon: 'bi-calendar-event', label: 'Visits Required', value: '2 Visits' },
          { icon: 'bi-clock', label: 'Lab Fabrication', value: '3–5 Days' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '15–20+ Years' },
          { icon: 'bi-gem', label: 'Material', value: 'Ceramic / e.max' },
        ]}
      />
      <InlaysOnlaysContent />
      <Footer />
    </>
  );
}
