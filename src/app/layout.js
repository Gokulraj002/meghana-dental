import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import BootstrapProvider from '@/components/BootstrapProvider';

export const metadata = {
  metadataBase: new URL('https://meghanadental.com'),
  title: {
    default: 'Meghana Dental Hospital | Best Dental Clinic in Tirupati, Andhra Pradesh',
    template: '%s | Meghana Dental Hospital, Tirupati',
  },
  description:
    'Meghana Dental Hospital — best dental clinic in Tirupati with 15+ years of excellence. MDS specialists, Carl Zeiss microscope dentistry, dental implants, root canal, braces, clear aligners, teeth whitening & more. Serving Tirupati, Andhra Pradesh.',
  keywords:
    'best dental clinic in Tirupati, dentist in Tirupati, dental hospital Tirupati, dental implants Tirupati, root canal Tirupati, orthodontist Tirupati, braces Tirupati, dental clinic Andhra Pradesh, MDS specialist dentist Tirupati',
  authors: [{ name: 'Meghana Dental Hospital' }],
  creator: 'Meghana Dental Hospital',
  publisher: 'Meghana Dental Hospital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://meghanadental.com',
    siteName: 'Meghana Dental Hospital',
    title: 'Best Dental Clinic in Tirupati | Meghana Dental Hospital',
    description:
      'Trusted by 50,000+ patients. Super speciality dental centre in Tirupati with Carl Zeiss microscope, MDS specialists, dental implants, braces, root canal & more.',
    images: [
      {
        url: '/images/about-clinic.png',
        width: 1200,
        height: 630,
        alt: 'Meghana Dental Hospital — Best Dental Clinic in Tirupati, Andhra Pradesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental Clinic in Tirupati | Meghana Dental Hospital',
    description: 'Super speciality dental care in Tirupati. 15+ years, 50,000+ patients, 4.9★ Google rating.',
    images: ['/images/about-clinic.png'],
  },
  alternates: {
    canonical: 'https://meghanadental.com',
  },
  verification: {
    google: '',   // add Google Search Console verification ID when available
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <BootstrapProvider>
          {children}
        </BootstrapProvider>
      </body>
    </html>
  );
}
