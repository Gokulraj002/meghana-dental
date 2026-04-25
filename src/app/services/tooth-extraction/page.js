import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import ToothExtractionContent from '@/components/ServicePages/ToothExtractionContent';
import { getSeo, buildMetadata } from '@/lib/seo';
import { getServicePageOverrides } from '@/lib/servicePage';

export async function generateMetadata() {
  const seo = await getSeo('service:tooth-extraction');
  return buildMetadata(seo, {
  title: 'Painless Tooth Extraction Tirupati | Wisdom Tooth Removal',
  description:
    'Safe, painless tooth extraction & wisdom tooth removal in Tirupati. Experienced oral surgeons, OPG X-ray planning, minimal recovery. Same-day option.',
  keywords:
    'tooth extraction Tirupati, wisdom tooth removal Tirupati, dental extraction Tirupati, painless tooth removal Tirupati, surgical extraction Tirupati, wisdom tooth surgery Tirupati, oral surgeon Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/tooth-extraction' },
  openGraph: {
    title: 'Tooth Extraction & Wisdom Tooth Removal in Tirupati — Meghana Dental',
    description: 'Safe, comfortable tooth extractions including impacted wisdom tooth surgery in Tirupati. Experienced oral surgeons, minimal discomfort, and same-day appointments.',
    url: 'https://meghanadental.in/services/tooth-extraction',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dental-chair.jpg', width: 1200, height: 630, alt: 'Tooth Extraction in Tirupati' }],
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
      name: 'Is tooth extraction painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'No — the area is fully numbed with local anaesthesia before extraction. You may feel pressure but not pain. Post-extraction discomfort is manageable with over-the-counter pain relief and typically resolves within 2–3 days.' },
    },
    {
      '@type': 'Question',
      name: 'How long does wisdom tooth removal take?',
      acceptedAnswer: { '@type': 'Answer', text: 'A simple wisdom tooth extraction takes 15–20 minutes. A surgical extraction for a deeply impacted tooth may take 30–45 minutes. We use OPG X-rays to plan the safest, quickest approach.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of tooth extraction in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simple extractions start from ₹500. Surgical extractions and wisdom tooth removal range from ₹2,000–5,000 depending on complexity at Meghana Dental Hospital, Tirupati.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to heal after tooth extraction?',
      acceptedAnswer: { '@type': 'Answer', text: 'Initial healing takes 1–2 weeks. Full bone healing takes 3–6 months. With proper care, most patients resume normal activities the next day.' },
    },
  ],
};

export default async function ToothExtractionPage() {
  const ov = await getServicePageOverrides('tooth-extraction');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore={ov.titleBefore || 'Tooth'}
        titleHighlight={ov.titleHighlight || 'Extraction'}
        description={ov.description || "Safe, painless tooth extraction and wisdom tooth removal in Tirupati. Our experienced oral surgeons use OPG X-ray planning for comfortable, precise procedures with minimal recovery time."}
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Tooth Extraction' }]}
        titleAfter={ov.titleAfter || ' in Tirupati'}
        image={ov.heroImage || '/images/microscope-treatment.jpg'}
        gradient="linear-gradient(135deg, #64748b 0%, #334155 100%)"
        accent="#64748b"
        stats={Array.isArray(ov.stats) && ov.stats.length > 0 ? ov.stats : [
          { icon: 'bi-clock', label: 'Simple Extraction', value: '10–20 min' },
          { icon: 'bi-clock-fill', label: 'Surgical Extraction', value: '30–45 min' },
          { icon: 'bi-house-check', label: 'Recovery', value: '1–3 days' },
          { icon: 'bi-file-earmark-image', label: 'X-Ray Planning', value: 'OPG Included' },
        ]}
      />
      <ToothExtractionContent overrides={ov} />
      <Footer />
    </>
  );
}
