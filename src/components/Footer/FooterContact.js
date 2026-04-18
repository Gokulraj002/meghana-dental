export default function FooterContact() {
  return (
    <div className="col-lg-3 col-md-4">
      <h5>Contact Us</h5>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-geo-alt-fill"></i>
        </div>
        <p>No. 18-2-91B, Ashok Nagar,<br />Tirupati, Andhra Pradesh 517501</p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-telephone-fill"></i>
        </div>
        <p><a href="tel:+919876543210">+91 98765 43210</a></p>
      </div>
      <div className="footer-contact-item">
        <div className="footer-contact-icon">
          <i className="bi bi-envelope-fill"></i>
        </div>
        <p><a href="mailto:info@meghanadental.com">info@meghanadental.com</a></p>
      </div>
    </div>
  );
}
