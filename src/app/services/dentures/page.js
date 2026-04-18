import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import DenturesContent from '@/components/ServicePages/DenturesContent';

export const metadata = {
  title: 'Dentures in Tirupati | BPS & Flexible Dentures — Meghana Dental',
  description:
    'Premium BPS dentures, flexible partial dentures, and full denture solutions in Tirupati. Comfortable, natural-looking tooth replacement by expert prosthodontist at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'dentures Tirupati, BPS dentures Tirupati, flexible dentures Tirupati, full dentures Tirupati, partial dentures Tirupati, denture specialist Tirupati, dental prosthetics Tirupati, full mouth dentures Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services/dentures' },
  openGraph: {
    title: 'Dentures in Tirupati | BPS & Flexible Dentures — Meghana Dental Hospital',
    description:
      'Premium BPS dentures and flexible partial dentures in Tirupati. Natural-looking, comfortable tooth replacement crafted by expert prosthodontists.',
    url: 'https://meghanadental.com/services/dentures',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/bps-dentures.jpg', width: 1200, height: 630, alt: 'BPS Precision Dentures in Tirupati — Meghana Dental' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of dentures are available in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital in Tirupati offers: BPS (Bio-Functional Prosthetic System) complete dentures, flexible partial dentures (Valplast), conventional acrylic dentures, implant-retained dentures, and immediate dentures. Our prosthodontist recommends the best option based on your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a BPS denture and why is it better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BPS (Bio-Functional Prosthetic System) dentures are precision-crafted dentures that provide superior fit, function, and aesthetics compared to conventional dentures. Available in Tirupati at Meghana Dental Hospital, BPS dentures use advanced materials and functional bite registration for a more natural feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do dentures cost in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denture costs in Tirupati at Meghana Dental Hospital vary by type: conventional acrylic dentures start from ₹8,000, flexible partial dentures from ₹12,000, and BPS precision dentures from ₹25,000. Contact us for an exact quote after consultation.',
      },
    },
  ],
};

export default function DenturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Dentures &"
        titleHighlight="Prosthetics"
        description="Restore your complete smile in Tirupati with premium denture solutions — BPS precision dentures, flexible partials, and implant-supported options for maximum comfort and a natural appearance."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Dentures' }]}
        image="/services/Dentures-Prosthetics.jpg"
        gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
        accent="#10b981"
        stats={[
          { icon: 'bi-calendar', label: 'Treatment Visits', value: '4–5 visits' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '5–8+ years' },
          { icon: 'bi-person-check-fill', label: 'Specialist', value: 'Prosthodontist' },
          { icon: 'bi-list-ul', label: 'Types Available', value: '5 types' },
        ]}
      />
      <DenturesContent />
      <Footer />
    </>
  );
}
