const infoItems = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Visit Us',
    content: 'No. 18-2-91B, Ashok Nagar,\nTirupati, Andhra Pradesh 517501',
  },
  {
    icon: 'bi-telephone-fill',
    title: 'Call Us',
    content: null, // rendered manually below
  },
  {
    icon: 'bi-envelope-fill',
    title: 'Email Us',
    content: null, // rendered manually below
  },
  {
    icon: 'bi-clock-fill',
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 2:00 PM',
  },
];

export default function AppointmentInfo() {
  return (
    <div className="appointment-info">
      <div className="info-card">
        <div className="info-icon"><i className="bi bi-geo-alt-fill"></i></div>
        <div>
          <h5>Visit Us</h5>
          <p>No. 18-2-91B, Ashok Nagar,<br />Tirupati, Andhra Pradesh 517501</p>
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon"><i className="bi bi-telephone-fill"></i></div>
        <div>
          <h5>Call Us</h5>
          <p>
            <a href="tel:08772248330">08772248330</a><br />
            <a href="tel:+917893327036">+91 7893327036</a>
          </p>
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon"><i className="bi bi-envelope-fill"></i></div>
        <div>
          <h5>Email Us</h5>
          <p><a href="mailto:info@meghanadental.in">info@meghanadental.in</a></p>
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon"><i className="bi bi-clock-fill"></i></div>
        <div>
          <h5>Working Hours</h5>
          <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 2:00 PM</p>
        </div>
      </div>
    </div>
  );
}
