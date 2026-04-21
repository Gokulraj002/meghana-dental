import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Meghana Dental Tirupati',
  description: 'Read the privacy policy of Meghana Dental Hospital, Tirupati. Learn how we collect, use, and protect your personal data when you use our website or services.',
  keywords: 'Meghana Dental privacy policy, dental hospital data policy Tirupati, patient data protection dental clinic',
  alternates: { canonical: 'https://meghanadental.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="service-page-hero">
        <div className="container position-relative">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span> / Privacy Policy</span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1>Privacy <span>Policy</span></h1>
              <p>How Meghana Dental Hospital collects, uses, and protects your information.</p>
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
                  Meghana Dental Hospital ("we", "our", "us") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, store, and protect
                  your personal information when you visit our website at meghanadental.com or
                  when you use our dental services at our clinic at No. 18-2-91B, Ashok Nagar,
                  Tirupati, Andhra Pradesh 517501.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-collection-fill"></i> 1. Information We Collect</h3>
                <p><strong>Information you provide directly:</strong></p>
                <ul>
                  <li>Name, phone number, and email address when booking an appointment</li>
                  <li>Date of birth and gender for patient records</li>
                  <li>Medical and dental history provided during consultation</li>
                  <li>Messages sent through our contact forms or WhatsApp</li>
                  <li>Feedback, reviews, and testimonials you choose to provide</li>
                </ul>
                <p style={{ marginTop: '16px' }}><strong>Information collected automatically:</strong></p>
                <ul>
                  <li>IP address and browser type when visiting our website</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Device type and operating system</li>
                  <li>Referring website or search query that brought you to our site</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-gear-fill"></i> 2. How We Use Your Information</h3>
                <ul>
                  <li>To schedule and manage your dental appointments</li>
                  <li>To provide personalised dental care and treatment recommendations</li>
                  <li>To send appointment reminders via SMS, WhatsApp, or email</li>
                  <li>To respond to your enquiries and provide customer support</li>
                  <li>To maintain accurate patient dental and medical records</li>
                  <li>To send health tips, promotions, or updates (with your consent)</li>
                  <li>To improve our website, services, and patient experience</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-share-fill"></i> 3. Information Sharing</h3>
                <p>
                  We do not sell, rent, or trade your personal information to third parties.
                  We may share your information only in the following limited circumstances:
                </p>
                <ul>
                  <li><strong>Healthcare providers:</strong> With referring doctors or specialists involved in your care, with your consent</li>
                  <li><strong>Service providers:</strong> With trusted third-party platforms (e.g., appointment booking systems, SMS providers) who process data only on our behalf under strict confidentiality agreements</li>
                  <li><strong>Legal requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Emergency situations:</strong> When disclosure is necessary to protect your life or safety</li>
                </ul>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-shield-lock-fill"></i> 4. Data Security</h3>
                <p>
                  We implement appropriate technical and organisational security measures to
                  protect your personal information against unauthorised access, alteration,
                  disclosure, or destruction. Patient records are stored securely and access
                  is restricted to authorised clinical and administrative staff only.
                </p>
                <p>
                  While we strive to protect your information, no method of transmission
                  over the internet is 100% secure. We encourage you to contact us directly
                  for sensitive communications.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-clock-fill"></i> 5. Data Retention</h3>
                <p>
                  Patient dental records are retained for a minimum of 7 years as required
                  by Indian medical regulations, or longer if legally required. Website
                  analytics data is retained for up to 26 months. Appointment data is
                  retained for 3 years after your last visit.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-person-check-fill"></i> 6. Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of your personal data we hold</li>
                  <li><strong>Correction</strong> — update inaccurate or incomplete information</li>
                  <li><strong>Deletion</strong> — request deletion of your data (subject to legal retention requirements)</li>
                  <li><strong>Opt-out</strong> — unsubscribe from marketing communications at any time</li>
                  <li><strong>Portability</strong> — request your data in a structured, machine-readable format</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:info@meghanadental.com">info@meghanadental.com</a>.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-graph-up"></i> 7. Cookies & Analytics</h3>
                <p>
                  Our website may use cookies and similar technologies to enhance your
                  browsing experience and analyse site traffic. We may use analytics services
                  such as Google Analytics to understand how visitors use our website.
                  You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-link-45deg"></i> 8. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites, such as Google Maps
                  or WhatsApp. We are not responsible for the privacy practices of these
                  external sites and recommend reviewing their privacy policies.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-child-fill"></i> 9. Children's Privacy</h3>
                <p>
                  We provide dental services to children as part of our Pediatric Dentistry
                  programme. For children under 18, we collect personal information only
                  with verified parental or guardian consent. Parental consent is obtained
                  during the registration process.
                </p>
              </div>

              <div className="service-info-card" style={{ marginBottom: '24px' }}>
                <h3><i className="bi bi-pencil-fill"></i> 10. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. Any significant changes
                  will be communicated via our website. We encourage you to review this
                  policy periodically. Continued use of our services after changes constitutes
                  your acceptance of the updated policy.
                </p>
              </div>

              <div className="service-info-card">
                <h3><i className="bi bi-envelope-fill"></i> 11. Contact Us</h3>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:info@meghanadental.com">info@meghanadental.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
                  <li><strong>Address:</strong> Meghana Dental Hospital, No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501</li>
                  <li><strong>Hours:</strong> Mon–Sat: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
