import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import MicroscopeContent from '@/components/ServicePages/MicroscopeContent';

export const metadata = {
  title: 'Microscope Dentistry in Tirupati | Carl Zeiss 25x — Meghana Dental',
  description:
    'Only dental clinic in Tirupati with Carl Zeiss operating microscope — 25x magnification for precision root canals, microsurgery & superior outcomes. Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'microscope dentistry Tirupati, Carl Zeiss dental Tirupati, microscope root canal Tirupati, precision dentist Tirupati, microscopic root canal Andhra Pradesh, operating microscope dentist Tirupati, Carl Zeiss microscope dentist India',
  alternates: { canonical: 'https://meghanadental.com/services/microscope-dentistry' },
  openGraph: {
    title: 'Microscope Dentistry in Tirupati | Carl Zeiss Precision — Meghana Dental',
    description:
      'Tirupati\'s only Carl Zeiss dental operating microscope. 25x magnification for precision root canals, microsurgery, and crack detection. See more, treat better.',
    url: 'https://meghanadental.com/services/microscope-dentistry',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/microscope-equipment.jpg', width: 1200, height: 630, alt: 'Carl Zeiss Dental Operating Microscope — Tirupati' }],
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is microscope dentistry in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microscope dentistry uses a dental operating microscope — at Meghana Dental Hospital a Carl Zeiss OPMI — providing up to 25x magnification. This allows the dentist to see tiny canals, hairline cracks, and infected tissue invisible to the naked eye, resulting in more precise, conservative, and successful treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is the only clinic with Carl Zeiss microscope in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Dental Hospital is one of the very few dental clinics in Tirupati and Andhra Pradesh equipped with a Carl Zeiss operating microscope. This technology is standard in leading dental institutions worldwide and is now available in Tirupati at Meghana Dental.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which dental treatments benefit from microscope dentistry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microscope-enhanced treatment at Meghana Dental Hospital benefits: root canal treatment (endodontics), apicectomy (root-end microsurgery), cavity detection, crack finding, implant placement, and complex restorations. Any treatment requiring high precision gains significantly from microscope guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is microscope root canal better than regular root canal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Studies show microscope-guided root canal has significantly higher success rates compared to conventional RCT. At 25x magnification, the endodontist can locate all canals, remove all infected tissue, and avoid procedural errors — resulting in better long-term outcomes and fewer retreatments.',
      },
    },
  ],
};

export default function MicroscopeDentistryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ServicePageHero
        titleBefore="Microscope"
        titleHighlight="Dentistry"
        description="Tirupati's most precise dental care — powered by Carl Zeiss operating microscope with 25x magnification. See more, treat better, heal faster. Available only at Meghana Dental Hospital."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Microscope Dentistry' }]}
        image="/images/microscope-use.jpg"
        gradient="linear-gradient(135deg, #4f46e5 0%, #0f766e 100%)"
        accent="#4f46e5"
        stats={[
          { icon: 'bi-search', label: 'Magnification', value: 'Up to 25×' },
          { icon: 'bi-patch-check', label: 'Technology', value: 'Carl Zeiss OPMI' },
          { icon: 'bi-geo-alt-fill', label: 'Availability', value: 'Only in Tirupati' },
          { icon: 'bi-award', label: 'Experience', value: '15+ Years' },
        ]}
      />
      <MicroscopeContent />
      <Footer />
    </>
  );
}
