import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesListing from '@/components/Services/ServicesListing';
import ServicesListingCTA from '@/components/Services/ServicesListingCTA';
import { getSeo, buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const seo = await getSeo('services');
  return buildMetadata(seo, {
  title: 'Dental Treatments in Tirupati | 14 Specialist Services',
  description:
    '14 specialist dental treatments in Tirupati — implants, root canal, braces, aligners, whitening, pediatric dentistry, microscope dentistry & more.',
  keywords:
    'dental services Tirupati, dental treatments Tirupati, dental implants Tirupati, root canal Tirupati, braces Tirupati, teeth whitening Tirupati, pediatric dentist Tirupati, microscope dentistry Tirupati, dental hospital Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/services' },
  openGraph: {
    title: 'All Dental Services in Tirupati | Meghana Dental Hospital',
    description:
      '14 specialist dental treatments under one roof in Tirupati. From implants to aligners, root canals to smile makeovers — expert MDS team, state-of-the-art technology.',
    url: 'https://meghanadental.in/services',
    siteName: 'Meghana Dental Hospital',
    type: 'website',
  },
});
}

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
