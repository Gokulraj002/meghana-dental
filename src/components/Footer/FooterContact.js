import { SITE } from '@/lib/siteConfig';

export default function FooterContact() {
  return (
    <div className="col-lg-3 col-md-4">
      <h5>Contact Us</h5>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-geo-alt-fill"></i>
        </div>
        <p>{SITE.address.street},<br />{SITE.address.city}, {SITE.address.state} {SITE.address.pincode}</p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <p>
          <a href={`tel:${SITE.phone.landlineTel}`}>{SITE.phone.landline}</a><br />
          <a href={`tel:${SITE.phone.primaryTel}`}>{SITE.phone.primaryFormatted}</a>
        </p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-envelope-fill"></i>
        </div>
        <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      </div>
    </div>
  );
}
