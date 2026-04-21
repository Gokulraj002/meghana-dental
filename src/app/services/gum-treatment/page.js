import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import GumTreatmentContent from '@/components/ServicePages/GumTreatmentContent';

export const metadata = {
  title: 'Gum Disease Treatment Tirupati | Stop Bleeding Gums',
  description:
    'Stop bleeding gums & protect your smile in Tirupati. Professional scaling, laser gum therapy, flap surgery by MDS periodontist. Book assessment.',
  keywords:
    'gum treatment Tirupati, gum disease Tirupati, bleeding gums treatment Tirupati, periodontal treatment Tirupati, scaling root planing Tirupati, periodontist Tirupati, gum surgery Tirupati, dental cleaning Tirupati',
  alternates: { canonical: 'https://meghanadental.com/services/gum-treatment' },
  openGraph: {
    title: 'Gum Disease Treatment in Tirupati | Expert Periodontist — Meghana Dental',
    description: 'Treat bleeding gums, receding gums & gum disease in Tirupati. Professional scaling, laser gum therapy & periodontal surgery by expert periodontists.',
    url: 'https://meghanadental.com/services/gum-treatment',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/services/Gum-Treatment.jpg', width: 1200, height: 630, alt: 'Gum Disease Treatment in Tirupati' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do my gums bleed when I brush?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bleeding gums are usually the first sign of gingivitis. Bacterial plaque has irritated your gum tissue. A professional cleaning and improved brushing technique typically resolves this within 2–3 weeks.' },
    },
    {
      '@type': 'Question',
      name: 'Can gum disease be cured?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gingivitis is fully reversible with treatment. Advanced periodontitis can be controlled and stabilised, but bone loss cannot always be fully regenerated. Early treatment gives the best outcome.' },
    },
    {
      '@type': 'Question',
      name: 'How much does gum treatment cost in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Scaling and polishing at Meghana Dental Hospital, Tirupati, starts from ₹1,500. Deep cleaning (root planing) ranges from ₹3,000–8,000 depending on severity. Contact us for a personalised estimate.' },
    },
    {
      '@type': 'Question',
      name: 'Is gum treatment painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'Modern gum treatments are performed under local anaesthesia, making them comfortable. Laser-assisted gum therapy significantly reduces post-treatment soreness compared to traditional methods.' },
    },
  ],
};

export default function GumTreatmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Gum"
        titleHighlight="Treatment"
        description="Stop bleeding gums and protect your smile. Our MDS periodontist in Tirupati provides complete periodontal care — from professional scaling to advanced laser gum surgery and bone grafting."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Gum Treatment' }]}
        image="/services/Gum-Treatment.jpg"
        gradient="linear-gradient(135deg, #14b8a6 0%, #0284c7 100%)"
        accent="#14b8a6"
        stats={[
          { icon: 'bi-activity', label: 'Scaling Session', value: '30–60 min' },
          { icon: 'bi-calendar2', label: 'Deep Cleaning', value: '1–2 sessions' },
          { icon: 'bi-calendar-check', label: 'Maintenance', value: 'Every 3–6 months' },
          { icon: 'bi-lightning', label: 'Laser Therapy', value: 'Available' },
        ]}
      />
      <GumTreatmentContent />
      <Footer />
    </>
  );
}
