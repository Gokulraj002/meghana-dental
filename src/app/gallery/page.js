import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/Gallery/GalleryHero';
import GalleryGrid from '@/components/Gallery/GalleryGrid';

export const metadata = {
  title: 'Browse Clinic Photos and Patient Smiles from Tirupati',
  description:
    'Step inside our Tirupati dental hospital — modern treatment rooms, advanced microscope equipment, and real before-and-after smile transformations.',
  keywords:
    'Meghana Multi Speciality Dental Hospital gallery Tirupati, dental clinic photos Tirupati, smile makeover gallery, dental hospital interior Tirupati, ' +
    'Meghana Multi Speciality Dental Hospital, ' +
    'Meghana Multi Speciality Dental Hospital, ' +
    'Meghana Multi Speciality Dental Hospital',
  alternates: { canonical: 'https://meghanadental.in/gallery' },
  openGraph: {
    title: 'Photo Gallery — Meghana Multi Speciality Dental Hospital, Tirupati',
    description:
      'See our state-of-the-art dental clinic, advanced microscope equipment, and real patient smile results at Meghana Multi Speciality Dental Hospital, Tirupati.',
    url: 'https://meghanadental.in/gallery',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Meghana Multi Speciality Dental Hospital Gallery' }],
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </>
  );
}
