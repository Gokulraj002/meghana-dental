import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import SmileMakeoverContent from '@/components/ServicePages/SmileMakeoverContent';
import { getSeo, buildMetadata } from '@/lib/seo';
import { getServicePageOverrides } from '@/lib/servicePage';

export async function generateMetadata() {
  const seo = await getSeo('service:smile-makeover');
  return buildMetadata(seo, {
  title: 'Smile Makeover Tirupati | Cosmetic Dentistry Specialist',
  description:
    'Transform your smile in Tirupati with Digital Smile Design — veneers, whitening, aligners, gum contouring. See your new smile before treatment.',
  keywords:
    'smile makeover Tirupati, cosmetic dentistry Tirupati, dental veneers Tirupati, smile design Tirupati, teeth makeover Tirupati, smile transformation Tirupati, cosmetic dentist Tirupati Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/services/smile-makeover' },
  openGraph: {
    title: 'Smile Makeover in Tirupati | Digital Smile Design — Meghana Dental',
    description: 'Get your dream smile with a personalised smile makeover in Tirupati. Veneers, whitening, aligners, gum contouring — see your new smile before treatment with digital design.',
    url: 'https://meghanadental.in/services/smile-makeover',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/services/smile-makeover-cover.jpg', width: 1200, height: 630, alt: 'Smile Makeover in Tirupati' }],
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
      name: 'How much does a smile makeover cost in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Simple smile makeovers (whitening + bonding) start from ₹8,000. Comprehensive makeovers with veneers, aligners, and gum contouring can range from ₹50,000–2,00,000+ at Meghana Dental Hospital, Tirupati. We provide a detailed, transparent quote at your consultation.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a smile makeover take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Quick makeovers (whitening + bonding) can be completed in 1–2 visits. Full smile makeovers with veneers and aligners typically take 3–9 months. We give you a clear timeline at your initial consultation.' },
    },
    {
      '@type': 'Question',
      name: 'Are smile makeover results permanent?',
      acceptedAnswer: { '@type': 'Answer', text: 'Veneers last 10–17+ years. Crowns last 15–25+ years. Teeth whitening lasts 1–2 years with touch-ups. Dental bonding lasts 5–7 years. Results are long-lasting with proper maintenance.' },
    },
    {
      '@type': 'Question',
      name: 'Can I see my new smile before treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! At Meghana Dental Hospital we offer digital smile design — you see a digital preview of your expected results before any treatment begins. This ensures complete clarity and satisfaction.' },
    },
  ],
};

export default async function SmileMakeoverPage() {
  const ov = await getServicePageOverrides('smile-makeover');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore={ov.titleBefore || 'Smile'}
        titleHighlight={ov.titleHighlight || 'Makeover'}
        description={ov.description || "Transform your smile with our personalised smile makeover programme in Tirupati. Digital Smile Design, porcelain veneers, whitening, and more — see your perfect smile before treatment starts."}
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Smile Makeover' }]}
        titleAfter={ov.titleAfter || ' in Tirupati'}
        image={ov.heroImage || '/services/smile-makeover-cover.jpg'}
        gradient="linear-gradient(135deg, #a21caf 0%, #7c3aed 100%)"
        accent="#a21caf"
        stats={Array.isArray(ov.stats) && ov.stats.length > 0 ? ov.stats : [
          { icon: 'bi-laptop', label: 'Digital Design', value: 'Included' },
          { icon: 'bi-gem', label: 'Veneers', value: 'Porcelain & Composite' },
          { icon: 'bi-calendar2-range', label: 'Duration', value: '1 Visit – 9 Months' },
          { icon: 'bi-clock-history', label: 'Veneer Lifespan', value: '10–15+ Years' },
        ]}
      />
      <SmileMakeoverContent overrides={ov} />
      <Footer />
    </>
  );
}
