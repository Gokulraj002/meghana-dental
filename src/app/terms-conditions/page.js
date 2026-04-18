import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Meghana Dental Hospital, Tirupati',
  description: 'Terms and conditions for using the Meghana Dental Hospital website and services in Tirupati, Andhra Pradesh.',
  alternates: { canonical: 'https://meghanadental.com/terms-conditions' },
  robots: { index: true, follow: true },
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <section className="service-page-hero">
        <div className="container position-relative">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span> / Terms &amp; Conditions</span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1>Terms &amp; <span>Conditions</span></h1>
              <p>Please read these terms carefully before using our website or dental services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <strong>Last updated:</strong> January 2025 &nbsp;|&nbsp;
                  <strong>Effective from:</strong> January 2025
                </p>
                <p>
                  Welcome to Meghana Dental Hospital. By accessing and using our website at
                  meghanadental.com or by using our dental services, you agree to be bound by
                  these Terms and Conditions. If you do not agree to these terms, please do
                  not use our website or services.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-building-fill"></i> 1. About Us</h3>
                <p>
                  Meghana Dental Hospital is a multi-speciality dental clinic located at
                  No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501. We provide
                  comprehensive dental care services including but not limited to dental
                  implants, root canal treatment, orthodontics, cosmetic dentistry, and
                  preventive care.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-globe"></i> 2. Website Use</h3>
                <ul>
                  <li>The content on this website is for general informational purposes only and does not constitute professional medical or dental advice</li>
                  <li>Always consult a qualified dental professional for diagnosis and treatment recommendations</li>
                  <li>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website</li>
                  <li>You may not reproduce, distribute, or create derivative works from our website content without prior written permission</li>
                  <li>We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-calendar-check-fill"></i> 3. Appointments & Bookings</h3>
                <ul>
                  <li>Appointment requests made through the website are subject to availability and confirmation from our team</li>
                  <li>We will contact you to confirm your appointment by phone or email within 24 hours of your request</li>
                  <li>Please inform us at least 24 hours in advance if you need to cancel or reschedule an appointment</li>
                  <li>Repeated no-shows without notice may affect our ability to offer future priority bookings</li>
                  <li>We reserve the right to decline appointments at our discretion</li>
                  <li>Emergency dental cases will be seen as a priority — please call us directly</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-currency-rupee"></i> 4. Fees, Payments & Estimates</h3>
                <ul>
                  <li>Treatment fees are determined after clinical examination and may vary from initial estimates</li>
                  <li>We will provide a written treatment plan with estimated costs before commencing any treatment</li>
                  <li>Payment is due at the time of treatment unless prior arrangements have been made</li>
                  <li>We accept cash, UPI, debit cards, and credit cards</li>
                  <li>EMI options may be available for comprehensive treatment plans — ask our team for details</li>
                  <li>Fees are subject to change; current fees will be confirmed at your appointment</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-heart-fill"></i> 5. Medical Information & Consent</h3>
                <ul>
                  <li>Accurate and complete medical history is essential for safe dental treatment — you must disclose all relevant health conditions and medications</li>
                  <li>Failure to disclose relevant medical information may affect the safety of your treatment and releases us from liability for related complications</li>
                  <li>Written informed consent will be obtained before any significant dental procedure</li>
                  <li>You have the right to refuse or withdraw consent for treatment at any time</li>
                  <li>For patients under 18, a parent or legal guardian must provide consent</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-exclamation-triangle-fill"></i> 6. Limitation of Liability</h3>
                <p>
                  While we take every precaution to provide high-quality dental care, dentistry
                  involves inherent risks. Meghana Dental Hospital shall not be liable for:
                </p>
                <ul>
                  <li>Any complications arising from undisclosed medical conditions</li>
                  <li>Treatment outcomes that differ from expectations due to individual patient factors</li>
                  <li>Damage to existing restorations or natural tooth structure that occurs during necessary treatment</li>
                  <li>Any indirect, incidental, or consequential damages arising from the use of our website</li>
                  <li>Inaccuracies in website content — always confirm details by contacting us directly</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-stars"></i> 7. Patient Reviews & Testimonials</h3>
                <ul>
                  <li>Patient reviews displayed on our website are genuine and have been shared with patient consent</li>
                  <li>By submitting a review or testimonial, you grant us permission to display it on our website and marketing materials</li>
                  <li>We reserve the right to remove reviews that contain false, defamatory, or inappropriate content</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-shield-fill"></i> 8. Intellectual Property</h3>
                <p>
                  All content on this website — including text, images, logos, graphics, and
                  design — is the property of Meghana Dental Hospital or its content suppliers
                  and is protected by Indian copyright law. Unauthorised use of any content
                  is strictly prohibited.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-link-45deg"></i> 9. Third-Party Links</h3>
                <p>
                  Our website may contain links to external websites for convenience. We are
                  not responsible for the content, accuracy, or privacy practices of any
                  third-party websites. Links do not imply endorsement.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-geo-alt-fill"></i> 10. Governing Law</h3>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes
                  arising from these terms or our services shall be subject to the exclusive
                  jurisdiction of the courts in Tirupati, Andhra Pradesh, India.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-pencil-fill"></i> 11. Changes to These Terms</h3>
                <p>
                  We reserve the right to update these Terms and Conditions at any time.
                  Changes will be published on this page with an updated effective date.
                  Continued use of our website or services after changes constitutes your
                  acceptance of the revised terms.
                </p>
              </div>

              <div className="service-info-card">
                <h3><i className="bi bi-envelope-fill"></i> 12. Contact Us</h3>
                <p>If you have any questions about these Terms &amp; Conditions, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:info@meghanadental.com">info@meghanadental.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
                  <li><strong>Address:</strong> No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501</li>
                  <li><strong>Hours:</strong> Mon–Sat: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM</li>
                </ul>
                <p style={{ marginTop: '12px' }}>
                  See also: <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
