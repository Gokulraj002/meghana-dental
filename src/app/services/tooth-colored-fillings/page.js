import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import ToothColoredFillingsContent from '@/components/ServicePages/ToothColoredFillingsContent';

export const metadata = {
  title: 'Tooth Coloured Fillings in Tirupati | Composite Fillings | Meghana Dental',
  description:
    'Restore cavities with tooth-coloured composite fillings in Tirupati. Single-visit, BPA-free, shade-matched to your tooth — placed under 25× dental microscope for precision. Meghana Dental Hospital.',
  keywords:
    'tooth coloured filling Tirupati, composite filling Tirupati, cavity filling Tirupati, white filling Tirupati, tooth decay treatment Tirupati, dental filling Tirupati, composite resin filling Tirupati',
  alternates: { canonical: 'https://meghanadental.in/services/tooth-colored-fillings' },
  openGraph: {
    title: 'Tooth Coloured Fillings in Tirupati | Composite Fillings — Meghana Dental',
    description:
      'Single-visit composite fillings in Tirupati, shade-matched to your tooth and placed under 25× dental microscope. Restore cavities invisibly at Meghana Dental Hospital.',
    url: 'https://meghanadental.in/services/tooth-colored-fillings',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/services/fillings-before-after-1.jpg', width: 1200, height: 630, alt: 'Tooth Coloured Composite Fillings in Tirupati' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do composite fillings last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tooth-coloured composite fillings typically last 5–10 years depending on cavity size, location, and oral hygiene. Regular 6-monthly check-ups allow us to monitor fillings and replace them before they fail.' },
    },
    {
      '@type': 'Question',
      name: 'Does getting a composite filling hurt?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Local anaesthesia makes the procedure completely pain-free. Some mild sensitivity after the filling is normal for a few days and resolves on its own.' },
    },
    {
      '@type': 'Question',
      name: 'Can I eat immediately after a composite filling?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — composite fillings are fully hardened by the curing lamp during placement. You can eat as soon as the anaesthetic wears off (1–2 hours). Avoid very hard or sticky foods on the day of treatment.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a composite filling in Tirupati?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Meghana Dental Hospital composite fillings start from ₹800 per tooth for a small cavity and range up to ₹2,500 for a larger restoration, depending on size and surfaces involved.' },
    },
  ],
};

export default function ToothColoredFillingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Tooth Coloured"
        titleHighlight="Fillings"
        description="Restore decayed or damaged teeth with perfectly shade-matched composite resin. Single visit, pain-free, and placed under 25× microscope precision at Meghana Dental Hospital, Tirupati."
        crumbs={[
          { label: 'Our Services', href: '/services' },
          { label: 'Dental Fillings', href: '/services/dental-fillings' },
          { label: 'Tooth Coloured Fillings' },
        ]}
        image="/services/fillings-before-after-1.jpg"
        accent="#16a34a"
        stats={[
          { icon: 'bi-calendar-check', label: 'Visits Required', value: '1 Visit' },
          { icon: 'bi-clock', label: 'Chair Time', value: '45–60 min' },
          { icon: 'bi-clock-history', label: 'Lifespan', value: '5–10 Years' },
          { icon: 'bi-search', label: 'Precision', value: '25× Microscope' },
        ]}
      />
      <ToothColoredFillingsContent />
      <Footer />
    </>
  );
}
