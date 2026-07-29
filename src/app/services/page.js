import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesListing from '@/components/Services/ServicesListing';
import ServicesListingCTA from '@/components/Services/ServicesListingCTA';

export const metadata = {
  title: 'Explore Dental Treatments and Services in Tirupati',
  description:
    'Explore 15+ specialist dental treatments at Meghana Dental, Tirupati — implants, root canal, braces, whitening, pediatric and microscope-guided care.',
  keywords:
    'dental services Tirupati, dental treatments Tirupati, dental implants Tirupati, root canal Tirupati, braces Tirupati, teeth whitening Tirupati, pediatric dentist Tirupati, microscope dentistry Tirupati, dental hospital Andhra Pradesh, ' +
    'Meghana Multi Speciality Dental Hospital, ' +
    'Meghana Multi Speciality Dental Hospital, ' +
    'Meghana Multi Speciality Dental Hospital',
  alternates: { canonical: 'https://meghanadental.in/services' },
  openGraph: {
    title: 'All Dental Services in Tirupati | Meghana Multi Speciality Dental Hospital',
    description:
      '14 specialist dental treatments under one roof at Meghana Multi Speciality Dental Hospital in Tirupati. From implants to aligners, root canals to smile makeovers — expert MDS team, state-of-the-art technology.',
    url: 'https://meghanadental.in/services',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Dental Services in Tirupati — Meghana Multi Speciality Dental Hospital' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Dental Services in Tirupati | Meghana Multi Speciality Dental Hospital',
    description:
      '14 specialist dental treatments under one roof — Meghana Multi Speciality Dental Hospital offers implants, root canals, braces, aligners & more in Tirupati.',
    images: ['/images/about-clinic.png'],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <section className="service-detail-section">
        <div className="container">
          <ServicesListing />
          <ServicesListingCTA />
        </div>
      </section>
      <Footer />
    </>
  );
}
