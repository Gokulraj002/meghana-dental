const infoCards = [
  {
    icon: '📍',
    title: 'Visit Us',
    content: <>No. 18-2-91B, Ashok Nagar,<br />Tirupati, Andhra Pradesh 517501</>,
  },
  {
    icon: '📞',
    title: 'Call Us',
    content: (
      <>
        <a href="tel:+919876543210" style={{ color: 'var(--primary)', fontWeight: '600' }}>+91 98765 43210</a>
        <br />
        <a href="tel:+919876543211" style={{ color: 'var(--primary)', fontWeight: '600' }}>+91 98765 43211</a>
      </>
    ),
  },
  {
    icon: '✉️',
    title: 'Email Us',
    content: (
      <a href="mailto:info@meghanadental.com" style={{ color: 'var(--primary)', fontWeight: '600' }}>
        info@meghanadental.com
      </a>
    ),
  },
  {
    icon: '🕐',
    title: 'Working Hours',
    content: <>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 2:00 PM</>,
  },
];

export default function ContactInfoCards() {
  return (
    <div className="row g-4 mb-5">
      {infoCards.map((card, i) => (
        <div className="col-md-3" key={i}>
          <div className="service-info-card" style={{ height: '100%', textAlign: 'center' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '16px',
              background: 'var(--primary-gradient)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
              margin: '0 auto 16px', color: '#fff',
            }}>
              {card.icon}
            </div>
            <h3 style={{ fontSize: '1.1rem' }}>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
