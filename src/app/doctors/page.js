import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorsHero from '@/components/Doctors/DoctorsHero';
import DoctorsProfiles from '@/components/Doctors/DoctorsProfiles';
import DoctorsCTASection from '@/components/Doctors/DoctorsCTASection';
import { getSeo, buildMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const seo = await getSeo('doctors');
  return buildMetadata(seo, {
  title: 'Best MDS Dentist Specialists in Tirupati | Expert Team',
  description:
    'Meet the MDS-qualified dental specialists at Meghana Dental Hospital Tirupati — expert team with decades of combined experience in every speciality.',
  keywords:
    'best dentist in Tirupati, MDS specialist Tirupati, orthodontist Tirupati, endodontist Tirupati, pediatric dentist Tirupati, implant specialist Tirupati, Meghana Dental doctors, dental specialist Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/doctors' },
  openGraph: {
    title: 'Best Dentists in Tirupati | Meet Our MDS Specialist Team — Meghana Dental',
    description:
      'Our team of 6 MDS-qualified specialists brings expertise across every major dental field in Tirupati. Personalised, compassionate care for every patient.',
    url: 'https://meghanadental.in/doctors',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/dr-hemu.jpg', width: 1200, height: 630, alt: 'MDS Dental Specialists at Meghana Dental Hospital, Tirupati' }],
    type: 'website',
  },
});
}

const doctorsSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://meghanadental.in/#doctors',
  name: 'Meghana Dental Hospital',
  url: 'https://meghanadental.in/doctors',
  employee: [
    {
      '@type': 'Physician',
      name: 'Dr. Hema Latha',
      jobTitle: 'Chief Dental Surgeon & Prosthodontist',
      description: 'MDS Prosthodontist with 17+ years of experience. Specialises in dental implants, full mouth rehabilitation, and digital smile design at Meghana Dental Hospital, Tirupati.',
      image: 'https://meghanadental.in/images/dr-hemu.jpg',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Dental Hospital' },
      medicalSpecialty: 'Prosthodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Prosthodontics' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tirupati',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Meghana Dental Specialist',
      jobTitle: 'Orthodontist — Braces & Aligners',
      description: 'MDS Orthodontist specialising in metal braces, ceramic braces, self-ligating braces, and clear aligners for all ages at Meghana Dental Hospital, Tirupati.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Dental Hospital' },
      medicalSpecialty: 'Orthodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Orthodontics' },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Meghana Endodontist',
      jobTitle: 'Endodontist — Root Canal Specialist',
      description: 'MDS Endodontist performing microscope-guided root canal treatments and single-sitting RCT at Meghana Dental Hospital, Tirupati.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Dental Hospital' },
      medicalSpecialty: 'Endodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Endodontics' },
    },
  ],
};

export default function DoctorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }} />
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
