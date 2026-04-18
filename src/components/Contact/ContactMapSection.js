export default function ContactMapSection() {
  return (
    <>
      {/* Map */}
      <div className="service-info-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.12!2d79.41920!3d13.62880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sMeghana+Dental+Hospital+Tirupati!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Meghana Dental Hospital Location — Tirupati"
        />
        <div style={{ padding: '14px 18px', borderTop: '1px solid var(--border)', fontSize: '0.88rem' }}>
          <strong>Meghana Dental Hospital</strong><br />
          No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501<br />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Ashok+Nagar+Tirupati+Andhra+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', fontWeight: 600 }}
          >
            <i className="bi bi-geo-alt-fill"></i> Open in Google Maps
          </a>
        </div>
      </div>

      {/* Emergency */}
      <div className="service-cta-card" style={{ marginBottom: '20px' }}>
        <h3>📞 Dental Emergency in Tirupati?</h3>
        <p>For dental emergencies, call us immediately or visit our clinic at Ashok Nagar, Tirupati. We are available during working hours — Mon–Sat 9 AM–8 PM.</p>
        <a href="tel:+919876543210" className="btn" style={{ textDecoration: 'none' }}>Call Now</a>
      </div>

      {/* WhatsApp */}
      <div className="service-info-card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💬</div>
        <h3>Chat on WhatsApp</h3>
        <p style={{ marginBottom: '20px' }}>Quick questions? Send us a WhatsApp message for instant replies from our Tirupati clinic.</p>
        <a
          href="https://wa.me/919876543210?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Meghana%20Dental%20Hospital%20Tirupati."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#25D366', color: '#fff', padding: '12px 28px',
            borderRadius: 'var(--radius-full)', fontWeight: '700',
            fontSize: '0.95rem', textDecoration: 'none',
            transition: 'var(--transition)',
          }}
        >
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
