import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import RootCanalContent from '@/components/ServicePages/RootCanalContent';

export const metadata = {
  title: 'Painless Root Canal Treatment Tirupati | Single Sitting',
  description:
    'Painless, microscope-guided root canal treatment in Tirupati. Single-sitting RCT available. Dental microscope with 25× magnification, MDS endodontists. Book now.',
  keywords:
    'root canal treatment Tirupati, painless root canal Tirupati, single sitting root canal Tirupati, root canal cost Tirupati, microscope root canal Tirupati, endodontist Tirupati, RCT specialist Tirupati, root canal Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/services/root-canal' },
  openGraph: {
    title: 'Painless Root Canal Treatment in Tirupati | Single-Sitting RCT — Meghana Dental',
    description:
      'Save your natural teeth with microscope-guided, single-sitting root canal in Tirupati. Dental microscope precision, experienced endodontist. No pain, no multiple visits.',
    url: 'https://meghanadental.in/services/root-canal',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/microscope-treatment.jpg', width: 1200, height: 630, alt: 'Microscope-Guided Root Canal Treatment in Tirupati' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does root canal treatment cost in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Root canal treatment cost in Tirupati at Meghana Dental Hospital depends on the tooth and complexity. Front teeth RCT starts from ₹2,500 and molar RCT from ₹4,000. Microscope-assisted RCT may cost slightly more due to advanced equipment used. Contact us for an exact quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can root canal be done in a single sitting in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Meghana Dental Hospital offers single-sitting root canal treatment in Tirupati using advanced rotary endodontic technology and dental microscope with 25× magnification guidance. Most cases can be completed in one visit, saving you time and multiple trips to the clinic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is root canal treatment painful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. At Meghana Dental Hospital in Tirupati, root canal treatment is performed under local anaesthesia, making the procedure completely painless. Our microscope-guided technique ensures precision and minimal tissue disturbance, reducing post-treatment discomfort significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose microscope-guided root canal in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital is one of the very few clinics in Tirupati with a dental operating microscope providing 25× magnification. This allows the endodontist to see tiny canals, cracks, and infected tissue invisible to the naked eye — resulting in higher success rates and better long-term outcomes.',
      },
    },
  ],
};

export default function RootCanalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Root Canal"
        titleHighlight="Treatment"
        description="Save your natural teeth with Tirupati's most advanced root canal therapy — single-sitting, painless, and microscope-guided for precision results you can count on."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Root Canal Treatment' }]}
        image="/services/Root-Canal-Treatment.jpg"
        gradient="linear-gradient(135deg, #0EA5A0 0%, #12C4BE 100%)"
        accent="#0EA5A0"
        stats={[
          { icon: 'bi-clock', label: 'Duration', value: '30–60 min' },
          { icon: 'bi-calendar-check', label: 'Sittings', value: '1–2 visits' },
          { icon: 'bi-search', label: 'Microscope', value: '25× Magnification' },
          { icon: 'bi-activity', label: 'Recovery', value: 'Same day' },
        ]}
      />
      <RootCanalContent />
      <Footer />
    </>
  );
}
