import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogListClient from './client';
import blogsData from '@/data/blogs.json';

export const metadata = {
  title: 'Dental Health Blog | Tips & Guides | Meghana Multi Speciality Dental, Tirupati',
  description:
    'Read expert dental health articles, treatment guides, and oral care tips from Meghana Multi Speciality Dental Hospital MDS specialists in Tirupati.',
  keywords:
    'dental health blog Tirupati, dental tips, oral care guide, root canal guide, teeth whitening tips, dental implants Tirupati, braces guide, dentist advice Tirupati',
  alternates: { canonical: 'https://meghanadental.in/blogs' },
  openGraph: {
    title: 'Dental Health Blog | Meghana Multi Speciality Dental Hospital, Tirupati',
    description:
      'Expert dental advice, treatment guides, and oral health tips from MDS specialists at Meghana Multi Speciality Dental Hospital, Tirupati.',
    url: 'https://meghanadental.in/blogs',
    siteName: 'Meghana Multi Speciality Dental Hospital',
    images: [
      {
        url: '/images/about-clinic.png',
        width: 1200,
        height: 630,
        alt: 'Meghana Multi Speciality Dental Hospital — Dental Health Blog, Tirupati',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Health Blog | Meghana Multi Speciality Dental Hospital, Tirupati',
    description:
      'Expert dental advice, treatment guides, and oral health tips from MDS specialists at Meghana Multi Speciality Dental Hospital, Tirupati.',
    images: ['/images/about-clinic.png'],
  },
  robots: 'index, follow',
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <BlogListClient initialBlogs={blogsData} />
      <Footer />
    </>
  );
}
