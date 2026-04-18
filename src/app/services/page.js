import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesListing from '@/components/Services/ServicesListing';
import ServicesListingCTA from '@/components/Services/ServicesListingCTA';

export const metadata = {
  title: 'Dental Services in Tirupati | All Treatments — Meghana Dental Hospital',
  description:
    'Complete dental services in Tirupati — dental implants, root canal, braces, clear aligners, teeth whitening, dentures, pediatric dentistry, microscope dentistry & more. MDS specialists at Meghana Dental Hospital, Tirupati, Andhra Pradesh.',
  keywords:
    'dental services Tirupati, dental treatments Tirupati, dental implants Tirupati, root canal Tirupati, braces Tirupati, teeth whitening Tirupati, pediatric dentist Tirupati, microscope dentistry Tirupati, dental hospital Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/services' },
  openGraph: {
    title: 'All Dental Services in Tirupati | Meghana Dental Hospital',
    description:
      '13+ specialist dental treatments under one roof in Tirupati. From implants to aligners, root canals to smile makeovers — expert MDS team, state-of-the-art technology.',
    url: 'https://meghanadental.com/services',
    siteName: 'Meghana Dental Hospital',
    type: 'website',
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
