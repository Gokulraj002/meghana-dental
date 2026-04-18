import Navbar              from '@/components/Navbar';
import HeroSection         from '@/components/Hero';
import AboutSection        from '@/components/About';
import TechnologyShowcase  from '@/components/Technology';
import ServicesSection     from '@/components/Services';
import ProblemsSection     from '@/components/Problems';
import WhyChooseUs         from '@/components/WhyChooseUs';
import FacilitiesGallery   from '@/components/Facilities';
import ResultsGallery      from '@/components/ResultsGallery';
import DoctorsSection      from '@/components/Doctors';
import TestimonialsSection from '@/components/Testimonials';
import VideoTestimonial    from '@/components/VideoTestimonial';
import FAQSection          from '@/components/FAQSection';
import AppointmentSection  from '@/components/Appointment';
import Footer              from '@/components/Footer';
import SchemaMarkup        from '@/components/shared/SchemaMarkup';

export const metadata = {
  title: { absolute: 'Best Dental Clinic in Tirupati | Meghana Dental' },
  description:
    'Best dental clinic in Tirupati — 17+ years, MDS specialists, Carl Zeiss microscope, implants, root canal, braces, aligners. 50,000+ happy patients.',
  keywords:
    'best dental clinic in Tirupati, dentist in Tirupati, dental hospital Tirupati, dental implants Tirupati, root canal treatment Tirupati, braces Tirupati, orthodontist Tirupati, MDS specialist Tirupati, microscope dentistry Tirupati, best dentist Tirupati Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.com/' },
  openGraph: {
    title: 'Best Dental Clinic in Tirupati | Meghana Dental Hospital — 4.9★ Rated',
    description:
      'Trusted by 50,000+ patients in Tirupati. Super speciality dental care — dental implants, microscope root canal, braces, aligners & more. MDS specialists. Book your appointment today.',
    url: 'https://meghanadental.com/',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Meghana Dental Hospital — Best Dental Clinic in Tirupati' }],
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologyShowcase />
      <ServicesSection />
      <ProblemsSection />
      <WhyChooseUs />
      <FacilitiesGallery />
      <ResultsGallery />
      <DoctorsSection />
      <TestimonialsSection />
      <VideoTestimonial />
      <FAQSection />
      <AppointmentSection />
      <Footer />
    </>
  );
}
