import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/About/AboutHero';
import AboutStory from '@/components/About/AboutStory';
import AboutMissionVision from '@/components/About/AboutMissionVision';
import AboutFacilities from '@/components/About/AboutFacilities';
import AboutStats from '@/components/About/AboutStats';
import AboutCTA from '@/components/About/AboutCTA';

export const metadata = {
  title: 'About Meghana Dental Hospital | 17+ Years in Tirupati',
  description:
    "Discover Meghana Multi Speciality Dental Hospital's 17-year journey in Tirupati — MDS specialist team, advanced technology, and 50,000+ smiles restored.",
  keywords:
    'about Meghana Multi Speciality Dental Hospital, best dental hospital Tirupati, dental specialists Tirupati, MDS dentist Tirupati, Meghana Dental Tirupati, dental hospital Ashok Nagar Tirupati, super speciality dental Andhra Pradesh'
    + ', Meghana Multi Speciality Dental Hospital'
    + ', Meghana Multi Speciality Dental Hospital'
    + ', Meghana Multi Speciality Dental Hospital'
    + ', Meghana Multi Speciality Dental Hospital',
  alternates: { canonical: 'https://meghanadental.in/about' },
  openGraph: {
    title: 'About Meghana Multi Speciality Dental Hospital — Tirupati\'s Most Trusted Dental Centre',
    description:
      '17+ years of dental excellence in Tirupati. Meet our MDS specialist team, explore our dental microscope facility, and discover why 50,000+ patients trust Meghana Multi Speciality Dental Hospital.',
    url: 'https://meghanadental.in/about',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Meghana Multi Speciality Dental Hospital — Tirupati, Andhra Pradesh' }],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <section className="service-detail-section">
        <div className="container">
          <AboutStory />
          <AboutMissionVision />
          <AboutFacilities />
          <AboutStats />
          <AboutCTA />
        </div>
      </section>
      <Footer />
    </>
  );
}
