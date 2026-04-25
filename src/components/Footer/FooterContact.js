import { getSettings } from '@/lib/settings';

export default async function FooterContact() {
  const s = await getSettings();
  const address = s.address || 'No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501';
  const phone = s.phone || '+91 98765 43210';
  const email = s.email || 'info@meghanadental.in';
  const phoneTel = phone.replace(/\s|-/g, '');

  return (
    <div className="col-lg-3 col-md-4">
      <h5>Contact Us</h5>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-geo-alt-fill"></i>
        </div>
        <p>{address}</p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <p><a href={`tel:${phoneTel}`}>{phone}</a></p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-envelope-fill"></i>
        </div>
        <p><a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </div>
  );
}
