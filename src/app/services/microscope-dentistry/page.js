import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePages/ServicePageHero';
import MicroscopeContent from '@/components/ServicePages/MicroscopeContent';

export const metadata = {
  title: 'Microscope-Guided Dentistry Only Available in Tirupati',
  description:
    'Our 25x-magnification dental microscope, the only one of its kind in Tirupati, enables precise root canals, microsurgery and early crack detection.',
  keywords:
    'microscope dentistry Tirupati, dental microscope Tirupati, microscope root canal Tirupati, precision dentist Tirupati, microscopic root canal Andhra Pradesh, operating microscope dentist Tirupati, dental microscope dentist India',
  alternates: { canonical: 'https://meghanadental.in/services/microscope-dentistry' },
  openGraph: {
    title: 'Microscope Dentistry in Tirupati | Microscope Precision — Meghana Multi Speciality Dental Hospital',
    description:
      'Tirupati\'s only dental operating microscope. 25x magnification for precision root canals, microsurgery, and crack detection. See more, treat better.',
    url: 'https://meghanadental.in/services/microscope-dentistry',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/microscope-equipment.jpg', width: 1200, height: 630, alt: 'Dental Operating Microscope (25× Magnification) — Meghana Multi Speciality Dental Hospital Tirupati' }],
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
        text: 'Microscope dentistry uses a dental operating microscope providing up to 25× magnification. This allows the dentist to see tiny canals, hairline cracks, and infected tissue invisible to the naked eye, resulting in more precise, conservative, and successful treatments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is the only clinic with dental microscope with 25× magnification in Tirupati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meghana Multi Speciality Dental Hospital is one of the very few dental clinics in Tirupati and Andhra Pradesh equipped with a dental operating microscope with 25× magnification. This technology is standard in leading dental institutions worldwide and is now available in Tirupati at Meghana Dental.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which dental treatments benefit from microscope dentistry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microscope-enhanced treatment at Meghana Multi Speciality Dental Hospital benefits: root canal treatment (endodontics), apicectomy (root-end microsurgery), cavity detection, crack finding, implant placement, and complex restorations. Any treatment requiring high precision gains significantly from microscope guidance.',
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
        description="Tirupati's most precise dental care — powered by dental operating microscope with 25× magnification. See more, treat better, heal faster. Available only at Meghana Multi Speciality Dental Hospital."
        crumbs={[{ label: 'Our Services', href: '/services' }, { label: 'Microscope Dentistry' }]}
        image="/images/microscope-use.jpg"
        gradient="linear-gradient(135deg, #0EA5A0 0%, #12C4BE 100%)"
        accent="#0EA5A0"
        stats={[
          { icon: 'bi-search', label: 'Magnification', value: 'Up to 25×' },
          { icon: 'bi-patch-check', label: 'Technology', value: 'Operating Microscope' },
          { icon: 'bi-geo-alt-fill', label: 'Availability', value: 'Only in Tirupati' },
          { icon: 'bi-award', label: 'Experience', value: '17+ Years' },
        ]}
      />
      <MicroscopeContent />
      <Footer />
    </>
  );
}
