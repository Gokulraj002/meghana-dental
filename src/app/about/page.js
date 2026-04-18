import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/About/AboutHero';
import AboutStory from '@/components/About/AboutStory';
import AboutMissionVision from '@/components/About/AboutMissionVision';
import AboutFacilities from '@/components/About/AboutFacilities';
import AboutStats from '@/components/About/AboutStats';
import AboutCTA from '@/components/About/AboutCTA';

export const metadata = {
  title: 'About Meghana Dental Hospital | 15+ Years in Tirupati, Andhra Pradesh',
  description:
    'Learn about Meghana Dental Hospital — Tirupati\'s trusted super speciality dental centre for 15+ years. Expert MDS specialists, Carl Zeiss technology, 50,000+ happy patients in Tirupati, Andhra Pradesh.',
  keywords:
    'about Meghana Dental Hospital, best dental hospital Tirupati, dental specialists Tirupati, MDS dentist Tirupati, Meghana Dental Tirupati, dental hospital Ashok Nagar Tirupati, super speciality dental Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/about' },
  openGraph: {
    title: 'About Meghana Dental Hospital — Tirupati\'s Most Trusted Dental Centre',
    description:
      '15+ years of dental excellence in Tirupati. Meet our MDS specialist team, explore our Carl Zeiss facility, and discover why 50,000+ patients trust Meghana Dental Hospital.',
    url: 'https://meghanadental.com/about',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Meghana Dental Hospital — Tirupati, Andhra Pradesh' }],
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
