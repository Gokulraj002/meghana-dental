import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorsHero from '@/components/Doctors/DoctorsHero';
import DoctorsProfiles from '@/components/Doctors/DoctorsProfiles';
import DoctorsCTASection from '@/components/Doctors/DoctorsCTASection';

export const metadata = {
  title: 'Meet Our Expert MDS Dental Specialists in Tirupati',
  description:
    'Our Tirupati dental specialists hold MDS degrees in endodontics, prosthodontics, orthodontics and oral surgery, with decades of combined experience.',
  keywords:
    'best dentist in Tirupati, MDS specialist Tirupati, orthodontist Tirupati, endodontist Tirupati, pediatric dentist Tirupati, implant specialist Tirupati, Meghana Dental doctors, dental specialist Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/doctors' },
  openGraph: {
    title: 'Best Dentists in Tirupati | MDS Specialist Team — Meghana Multi Speciality Dental Hospital',
    description:
      'Our team of 6 MDS-qualified specialists brings expertise across every major dental field in Tirupati. Personalised, compassionate care for every patient.',
    url: 'https://meghanadental.in/doctors',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/dr-hemu.jpg', width: 1200, height: 630, alt: 'MDS Dental Specialists at Meghana Multi Speciality Dental Hospital, Tirupati' }],
    type: 'website',
  },
};

const doctorsSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  '@id': 'https://meghanadental.in/#doctors',
  name: 'Meghana Multi Speciality Dental Hospital',
  url: 'https://meghanadental.in/doctors',
  employee: [
    {
      '@type': 'Physician',
      name: 'Dr. M. Hemadri',
      jobTitle: 'Founder & Director — Conservative Dentistry & Endodontist',
      description: 'MDS Endodontist with 17+ years of experience. Founder of Meghana Multi Speciality Dental Hospital, Tirupati. Expert in single-visit root canal, complex re-treatment, and clinical implantology. ICOI Fellowship in Implant Dentistry.',
      image: 'https://meghanadental.in/images/dr-hemu.jpg',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Multi Speciality Dental Hospital' },
      medicalSpecialty: 'Endodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Conservative Dentistry & Endodontics' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tirupati',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'Physician',
      name: 'Dr. O.G. Lakshmikar Reddy',
      jobTitle: 'Orthodontist — Braces & Aligners',
      description: 'MDS Orthodontist with 9+ years of experience at Meghana Multi Speciality Dental Hospital, Tirupati. Specialises in metal braces, ceramic braces, self-ligating brackets, Invisalign, clear aligners, and interceptive orthodontics for children.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Multi Speciality Dental Hospital' },
      medicalSpecialty: 'Orthodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Orthodontics' },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Eswar',
      jobTitle: 'Oral & Maxillofacial Surgeon',
      description: 'Oral & Maxillofacial Surgeon with 15+ years of experience at Meghana Multi Speciality Dental Hospital, Tirupati. Expert in wisdom tooth extractions, impacted tooth surgery, and jaw fracture management.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Multi Speciality Dental Hospital' },
      medicalSpecialty: 'Oral Surgery',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Oral & Maxillofacial Surgery' },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Sandeep Narahari',
      jobTitle: 'Periodontist & Implantologist',
      description: 'Periodontist & Implantologist with 8+ years of experience at Meghana Multi Speciality Dental Hospital, Tirupati. Specialises in periodontal flap surgeries, guided bone grafting, All-on-4 and All-on-6 implants.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Multi Speciality Dental Hospital' },
      medicalSpecialty: 'Periodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Periodontics' },
    },
    {
      '@type': 'Physician',
      name: 'Dr. Dinakar Reddy',
      jobTitle: 'Prosthodontist',
      description: 'Prosthodontist with 10+ years of experience at Meghana Multi Speciality Dental Hospital, Tirupati. Specialist in complete & partial dentures, BPS precision dentures, zirconia crowns, fixed bridges, and full mouth rehabilitation.',
      worksFor: { '@type': 'MedicalOrganization', name: 'Meghana Multi Speciality Dental Hospital' },
      medicalSpecialty: 'Prosthodontics',
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MDS Prosthodontics' },
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
