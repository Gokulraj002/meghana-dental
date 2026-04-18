import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorsHero from '@/components/Doctors/DoctorsHero';
import DoctorsProfiles from '@/components/Doctors/DoctorsProfiles';
import DoctorsCTASection from '@/components/Doctors/DoctorsCTASection';

export const metadata = {
  title: 'Best Dentists in Tirupati | MDS Specialists — Meghana Dental Hospital',
  description:
    'Meet our team of MDS-qualified dental specialists in Tirupati — oral surgeons, orthodontists, prosthodontists, endodontists, periodontists & pediatric dentists. Expert, experienced, compassionate.',
  keywords:
    'best dentist in Tirupati, MDS specialist Tirupati, orthodontist Tirupati, endodontist Tirupati, pediatric dentist Tirupati, implant specialist Tirupati, Meghana Dental doctors, dental specialist Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/doctors' },
  openGraph: {
    title: 'Best Dentists in Tirupati | Meet Our MDS Specialist Team — Meghana Dental',
    description:
      'Our team of 6 MDS-qualified specialists brings expertise across every major dental field in Tirupati. Personalised, compassionate care for every patient.',
    url: 'https://meghanadental.com/doctors',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dr-hemu.jpg', width: 1200, height: 630, alt: 'MDS Dental Specialists at Meghana Dental Hospital, Tirupati' }],
    type: 'website',
  },
};

export default function DoctorsPage() {
  return (
    <>
      <Navbar />
      <DoctorsHero />
      <section className="service-detail-section">
        <div className="container">
          <DoctorsProfiles />
          <DoctorsCTASection />
        </div>
      </section>
      <Footer />
    </>
  );
}
