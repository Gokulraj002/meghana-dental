import dynamic from 'next/dynamic';
import SchemaMarkup  from '@/components/shared/SchemaMarkup';
import Navbar        from '@/components/Navbar';
import HeroSection   from '@/components/Hero';   // above-fold — eager

// Below-fold sections — lazy loaded to reduce initial JS bundle
const AboutSection        = dynamic(() => import('@/components/About'));
const WhyChooseUs         = dynamic(() => import('@/components/WhyChooseUs'));
const ServicesSection     = dynamic(() => import('@/components/Services'));
const ProblemsSection     = dynamic(() => import('@/components/Problems'));
const TechnologyShowcase  = dynamic(() => import('@/components/Technology'));
const FacilitiesGallery   = dynamic(() => import('@/components/Facilities'));
const DoctorsSection      = dynamic(() => import('@/components/Doctors'));
const TestimonialsSection = dynamic(() => import('@/components/Testimonials'));
const VideoTestimonial    = dynamic(() => import('@/components/VideoTestimonial'));
const FAQSection          = dynamic(() => import('@/components/FAQ'));
const AppointmentSection  = dynamic(() => import('@/components/Appointment'));
const Footer              = dynamic(() => import('@/components/Footer'));

export const metadata = {
  title: { absolute: 'Best Dental Clinic in Tirupati | Meghana Dental' },
  description:
    'Best dental clinic in Tirupati — 17+ years, MDS specialists, Carl Zeiss microscope, implants, root canal, braces, aligners. 50,000+ happy patients.',
  keywords:
    'best dental clinic in Tirupati, dentist in Tirupati, dental hospital Tirupati, dental implants Tirupati, root canal treatment Tirupati, braces Tirupati, orthodontist Tirupati, MDS specialist Tirupati, microscope dentistry Tirupati, best dentist Tirupati Andhra Pradesh',
  alternates: { canonical: 'https://meghanadental.in/' },
  openGraph: {
    title: 'Best Dental Clinic in Tirupati | Meghana Dental Hospital — 4.9★ Rated',
    description:
      'Trusted by 50,000+ patients in Tirupati. Super speciality dental care — dental implants, microscope root canal, braces, aligners & more. MDS specialists. Book your appointment today.',
    url: 'https://meghanadental.in/',
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

      {/* 1. Hero — instant hook + primary CTA */}
      <HeroSection />

          {/* 5. About — who we are, 17+ years, expertise */}
      <AboutSection />

      {/* 2. Why Choose Us — stats bar + 6 key differentiators (trust right after hero) */}
      <WhyChooseUs />

      {/* 3. Services — what treatments we offer */}
      <ServicesSection />

      {/* 4. Problems — "we solve YOUR problem" (emotional connection) */}
      <ProblemsSection />

  

      {/* 6. Technology — Carl Zeiss microscope showcase (credibility) */}
      <TechnologyShowcase />

      {/* 7. Facilities — photo gallery of clinic */}
      <FacilitiesGallery />

      {/* 8. Doctors — meet our lead specialist */}
      <DoctorsSection />

      {/* 9. Testimonials — patient reviews (social proof) */}
      <TestimonialsSection />

      {/* 10. Video Testimonial — real patient story (deeper social proof) */}
      <VideoTestimonial />

      {/* 11. FAQ — answer questions, remove objections */}
      <FAQSection />

      {/* 12. Appointment — final booking CTA */}
      <AppointmentSection />

      <Footer />
    </>
  );
}
