import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/Gallery/GalleryHero';
import GalleryGrid from '@/components/Gallery/GalleryGrid';

export const metadata = {
  title: 'Photo Gallery | Meghana Dental Hospital Tirupati',
  description:
    'Explore the Meghana Dental Hospital gallery — our modern clinic, advanced equipment, expert team, and real patient smile transformations in Tirupati.',
  keywords:
    'Meghana Dental gallery Tirupati, dental clinic photos Tirupati, smile makeover gallery, dental hospital interior Tirupati',
  alternates: { canonical: 'https://meghanadental.in/gallery' },
  openGraph: {
    title: 'Photo Gallery — Meghana Dental Hospital Tirupati',
    description:
      'See our state-of-the-art dental clinic, advanced microscope equipment, and real patient smile results at Meghana Dental Hospital, Tirupati.',
    url: 'https://meghanadental.in/gallery',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Meghana Dental Hospital Gallery' }],
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
