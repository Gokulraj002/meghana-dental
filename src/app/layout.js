import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { Inter } from 'next/font/google';
import BootstrapProvider from '@/components/shared/BootstrapProvider';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import ScrollToTop from '@/components/shared/ScrollToTop';

// Single font — Inter covers all weights used across the site
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://meghanadental.com'),
  title: {
    default: 'Best Dental Clinic in Tirupati | Meghana Dental',
    template: '%s | Meghana Dental',
  },
  description:
    'Meghana Dental Hospital — best dental clinic in Tirupati. 17+ years, MDS specialists, microscope dentistry, implants, root canal, braces, whitening & more.',
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
    description: 'Super speciality dental care in Tirupati. 17+ years, 50,000+ patients, 4.9★ Google rating.',
    images: ['/images/about-clinic.png'],
  },
  alternates: {
    canonical: 'https://meghanadental.com',
  },
  // verification: { google: 'ADD_GSC_ID_HERE' },  // Uncomment and add ID once Google Search Console is set up
  // To add Google Analytics, install 'next/third-parties' and add <GoogleAnalytics gaId="G-XXXXXXXXXX" /> in RootLayout
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>
        <BootstrapProvider>
          {children}
          <FloatingWhatsApp />
          <ScrollToTop />
        </BootstrapProvider>
      </body>
    </html>
  );
}
