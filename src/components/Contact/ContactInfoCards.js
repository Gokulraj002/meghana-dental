const infoCards = [
  {
    icon: 'bi-geo-alt-fill',
    accent: '#0ea5e9',
    title: 'Visit Our Clinic',
    lines: ['No. 18-2-91B, Ashok Nagar,', 'Tirupati, Andhra Pradesh 517501'],
  },
  {
    icon: 'bi-telephone-fill',
    accent: '#10b981',
    title: 'Call Us Anytime',
    lines: ['08772248330', '+91 7893327036'],
    hrefs: ['tel:08772248330', 'tel:+917893327036'],
  },
  {
    icon: 'bi-envelope-fill',
    accent: '#8b5cf6',
    title: 'Email Us',
    lines: ['info@meghanadental.in'],
    hrefs: ['mailto:info@meghanadental.in'],
  },
  {
    icon: 'bi-clock-fill',
    accent: '#f59e0b',
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
  },
];

export default function ContactInfoCards() {
  return (
    <div className="row g-4 mb-5">
      {infoCards.map((card, i) => (
        <div className="col-md-3 col-sm-6" key={i}>
          <div className="ci-card">
            <div className="ci-icon-wrap" style={{ background: card.accent + '18', color: card.accent }}>
              <i className={`bi ${card.icon}`} />
            </div>
            <h5 className="ci-title">{card.title}</h5>
            <div className="ci-lines">
              {card.lines.map((line, j) =>
                card.hrefs?.[j] ? (
                  <a key={j} href={card.hrefs[j]} className="ci-link" style={{ color: card.accent }}>
                    {line}
                  </a>
                ) : (
                  <span key={j}>{line}</span>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
