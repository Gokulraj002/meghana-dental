export default function ContactMapSection() {
  return (
    <div className="cms-wrap">

      {/* Map Card */}
      <div className="cms-map-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.12!2d79.41920!3d13.62880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sMeghana+Dental+Hospital+Tirupati!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%" height="240"
          style={{ border: 0, display: 'block' }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Meghana Dental Hospital Location"
        />
        <div className="cms-map-footer">
          <div className="cms-map-address">
            <i className="bi bi-geo-alt-fill" style={{ color: '#0ea5e9' }} />
            <div>
              <strong>Meghana Multispeciality Dental Hospital</strong>
              <span>No. 18-2-91B, Ashok Nagar, Tirupati, AP 517501</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Ashok+Nagar+Tirupati+Andhra+Pradesh"
            target="_blank" rel="noopener noreferrer"
            className="cms-directions-btn"
          >
            <i className="bi bi-compass-fill" /> Get Directions
          </a>
        </div>
      </div>

      {/* Quick Contact Strips */}
      <div className="cms-quick-row">
        <a href="tel:08772248330" className="cms-quick-item">
          <div className="cms-quick-icon" style={{ background: '#10b98120', color: '#10b981' }}>
            <i className="bi bi-telephone-fill" />
          </div>
          <div>
            <span className="cms-quick-label">Call Now</span>
            <span className="cms-quick-val">08772248330</span>
          </div>
        </a>
        <a
          href="https://wa.me/917893327036?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Meghana%20Dental%20Hospital%20Tirupati."
          target="_blank" rel="noopener noreferrer"
          className="cms-quick-item"
        >
          <div className="cms-quick-icon" style={{ background: '#25D36620', color: '#25D366' }}>
            <i className="bi bi-whatsapp" />
          </div>
          <div>
            <span className="cms-quick-label">WhatsApp</span>
            <span className="cms-quick-val">Chat with us</span>
          </div>
        </a>
      </div>

      {/* Emergency Banner */}
      <div className="cms-emergency">
        <div className="cms-emergency-icon">
          <i className="bi bi-shield-plus-fill" />
        </div>
        <div className="cms-emergency-body">
          <strong>Dental Emergency?</strong>
          <span>Call us immediately — available Mon–Sat 9 AM–8 PM at our Ashok Nagar clinic.</span>
        </div>
        <a href="tel:08772248330" className="cms-emergency-btn">
          Call Now
        </a>
      </div>

      {/* Hours */}
      <div className="cms-hours-card">
        <h6 className="cms-hours-title">
          <i className="bi bi-clock-fill" style={{ color: '#f59e0b' }} /> Clinic Hours
        </h6>
        <ul className="cms-hours-list">
          <li><span>Monday – Saturday</span><strong>9:00 AM – 8:00 PM</strong></li>
          <li><span>Sunday</span><strong>10:00 AM – 2:00 PM</strong></li>
          <li><span>Public Holidays</span><strong>By Appointment</strong></li>
        </ul>
      </div>

    </div>
  );
}
