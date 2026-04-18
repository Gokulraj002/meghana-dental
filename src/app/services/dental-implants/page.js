import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import DentalImplantsContent from '@/components/ServicePages/DentalImplantsContent';

export const metadata = {
  title: 'Dental Implants in Tirupati | Best Implant Specialist — Meghana Dental',
  description:
    'Permanent tooth replacement with titanium dental implants in Tirupati. Single implants, All-on-4, implant-retained dentures by expert prosthodontists at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'dental implants Tirupati, dental implants cost Tirupati, best implant dentist Tirupati, all on 4 implants Tirupati, single tooth implant Tirupati, full mouth implants Tirupati, titanium implants Tirupati, implant specialist Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services/dental-implants' },
  openGraph: {
    title: 'Dental Implants in Tirupati | Permanent Tooth Replacement — Meghana Dental',
    description:
      'Restore your smile permanently with expert dental implants in Tirupati. Single implants, All-on-4, same-day implants. Transparent pricing. Book a consultation.',
    url: 'https://meghanadental.com/services/dental-implants',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/implant-denture.jpg', width: 1200, height: 630, alt: 'Dental Implants in Tirupati — Meghana Dental Hospital' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do dental implants cost in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dental implant costs in Tirupati at Meghana Dental Hospital start from ₹25,000 per implant, depending on the brand and case complexity. All-on-4 implants and full-mouth solutions are also available at competitive prices. Contact us for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are dental implants permanent in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dental implants are the most permanent tooth replacement solution available. With proper care, titanium implants at Meghana Dental Hospital can last a lifetime. They fuse with the jawbone (osseointegration) to provide a stable, natural-looking replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dental implant surgery painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Dental implant surgery at Meghana Dental Hospital is performed under local anaesthesia, making it completely painless during the procedure. We use advanced techniques and provide post-operative care to ensure minimal discomfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get dental implants in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The full dental implant process typically takes 3–6 months at Meghana Dental Hospital, Tirupati. This includes healing time for osseointegration. In some cases, same-day or immediate loading implants are possible. We will advise the best approach after your initial consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best dental implant specialist in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital in Tirupati has MDS-qualified prosthodontists and oral surgeons specialising in dental implants, with 17+ years of experience and 50,000+ treated patients. Our team uses advanced implant systems for predictable, long-lasting results.',
      },
    },
  ],
};

export default function DentalImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Dental"
        titleHighlight="Implants"
        description="Restore your smile permanently with world-class dental implants in Tirupati. Our MDS prosthodontists use cutting-edge titanium implant systems for natural-looking, lifelong tooth replacement."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Dental Implants' }]}
        image="/services/dental-implants.jpg"
        accent="#0ea5e9"
        stats={[
          { icon: 'bi-clock', label: 'Surgery Duration', value: '30–90 min' },
          { icon: 'bi-calendar', label: 'Healing Time', value: '3–6 months' },
          { icon: 'bi-shield-check', label: 'Success Rate', value: '95%+' },
          { icon: 'bi-heart-fill', label: 'Lifespan', value: '20+ years' },
        ]}
      />
      <DentalImplantsContent />
      <Footer />
    </>
  );
}
