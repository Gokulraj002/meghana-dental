import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import LaserDentistryContent from '@/components/ServicePages/LaserDentistryContent';
import { getSeo, buildMetadata } from '@/lib/seo';
import { getServicePageOverrides } from '@/lib/servicePage';

export async function generateMetadata() {
  const seo = await getSeo('service:laser-dentistry');
  return buildMetadata(seo, {
  title: 'Laser Dentistry Tirupati | Painless Drill-Free Treatment',
  description:
    'Drill-free, painless dental treatments in Tirupati with advanced Diode laser. Gum contouring, cavity treatment, ulcer healing. Same-day recovery.',
  keywords:
    'laser dentistry Tirupati, painless dentist Tirupati, laser gum treatment Tirupati, gum contouring Tirupati, laser teeth whitening Tirupati, no drill dentist Tirupati, dental laser treatment Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/services/laser-dentistry' },
  openGraph: {
    title: 'Laser Dentistry in Tirupati | Painless Treatment — Meghana Dental',
    description: 'Experience drill-free, needle-free dental care with advanced laser technology in Tirupati. Gum contouring, cavity treatment, ulcer healing & more.',
    url: 'https://meghanadental.in/services/laser-dentistry',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dental-equipment.jpg', width: 1200, height: 630, alt: 'Laser Dentistry in Tirupati' }],
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
      name: 'Is laser dentistry painful?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most laser procedures are virtually painless and require no injections. For more extensive treatments, a topical or local anaesthetic may be used for complete comfort.' },
    },
    {
      '@type': 'Question',
      name: 'What does laser dentistry treat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Laser dentistry treats gum disease, cavities, mouth ulcers, gum reshaping, tooth sensitivity, frenectomy (tongue-tie), teeth whitening, and oral lesion biopsy.' },
    },
    {
      '@type': 'Question',
      name: 'Is laser dentistry safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dental lasers are FDA-cleared and have been used safely for over 30 years worldwide. Our team follows all safety protocols including protective eyewear for patients and staff.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of laser dentistry in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'Laser ulcer treatment starts from ₹500, gum contouring from ₹3,000, and gum disease treatment from ₹5,000 at Meghana Dental Hospital, Tirupati. Contact us for a personalised quote.' },
    },
  ],
};

export default async function LaserDentistryPage() {
  const ov = await getServicePageOverrides('laser-dentistry');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore={ov.titleBefore || 'Laser'}
        titleHighlight={ov.titleHighlight || 'Dentistry'}
        description={ov.description || "Painless, drill-free dental treatments using advanced Diode laser technology. Gum contouring, cavity treatment, ulcer healing, and more — all with minimal discomfort and faster healing."}
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Laser Dentistry' }]}
        titleAfter={ov.titleAfter || ' in Tirupati'}
        image={ov.heroImage || '/images/about-clinic.png'}
        gradient="linear-gradient(135deg, #f97316 0%, #dc2626 100%)"
        accent="#f97316"
        stats={Array.isArray(ov.stats) && ov.stats.length > 0 ? ov.stats : [
          { icon: 'bi-lightning-charge', label: 'Technology', value: 'Diode Laser' },
          { icon: 'bi-clock', label: 'Procedure Time', value: '5–60 min' },
          { icon: 'bi-house-check', label: 'Recovery', value: 'Same Day' },
          { icon: 'bi-droplet-half', label: 'Bleeding', value: 'Minimal to None' },
        ]}
      />
      <LaserDentistryContent overrides={ov} />
      <Footer />
    </>
  );
}
