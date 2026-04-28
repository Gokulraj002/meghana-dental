import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/Contact/ContactHero';
import ContactInfoCards from '@/components/Contact/ContactInfoCards';
import ContactForm from '@/components/Contact/ContactForm';
import ContactMapSection from '@/components/Contact/ContactMapSection';

export const metadata = {
  title: 'Book Dental Appointment in Tirupati | Call & WhatsApp',
  description:
    'Contact Meghana Dental Hospital Tirupati. Book a dental appointment via WhatsApp, call, or visit our clinic at Ashok Nagar, Tirupati, Andhra Pradesh.',
  keywords:
    'contact Meghana Dental Tirupati, book dental appointment Tirupati, dentist appointment Tirupati, dental clinic address Tirupati, dental hospital Ashok Nagar Tirupati, dental clinic near me Tirupati',
  alternates: { canonical: 'https://meghanadental.in/contact' },
  openGraph: {
    title: 'Contact Meghana Dental Hospital | Book Your Appointment in Tirupati',
    description:
      'Get in touch or book a dental appointment easily. Call, WhatsApp, or visit our clinic at Ashok Nagar, Tirupati, Andhra Pradesh.',
    url: 'https://meghanadental.in/contact',
    siteName: 'Meghana Dental Hospital',
    images: [{ url: '/images/about-clinic.png', width: 1200, height: 630, alt: 'Contact Meghana Dental Hospital Tirupati' }],
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <section className="service-detail-section">
        <div className="container">
          <ContactInfoCards />
          <div className="row g-5">
            <div className="col-lg-7">
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <ContactMapSection />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
