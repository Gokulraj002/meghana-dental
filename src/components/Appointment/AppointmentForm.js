'use client';

import { useState } from 'react';

const SERVICES = [
  'Root Canal Treatment',
  'Dental Implants',
  'Orthodontics & Braces',
  'Clear Aligners',
  'Teeth Whitening',
  'Dentures & Prosthetics',
  'Pediatric Dentistry',
  'Microscope Dentistry',
  'Laser Dentistry',
  'Teeth Cleaning / Scaling',
  'Dental Crowns & Bridges',
  'Smile Makeover',
  'Full Mouth Rehabilitation',
  'Other / General Checkup',
];

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    type: 'inperson',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello! I'd like to book an appointment at Meghana Dental Hospital.\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `🦷 Service: ${form.service || 'Not specified'}\n` +
      `📅 Date: ${form.date || 'Flexible'}\n` +
      `🕐 Time: ${form.time || 'Flexible'}\n` +
      `🏥 Type: ${form.type === 'inperson' ? 'In Person' : 'Virtual'}\n` +
      (form.message ? `💬 Message: ${form.message}` : '');
    window.open(`https://wa.me/917893327036?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="appointment-form-wrapper">
        <div className="appt-success">
          <div className="appt-success-icon">✅</div>
          <h4>Redirecting to WhatsApp!</h4>
          <p>Your appointment details have been sent. We&apos;ll confirm your slot shortly.</p>
        </div>
        <style>{`
          .appt-success {
            text-align: center;
            padding: 60px 40px;
            background: var(--primary-50);
            border-radius: var(--radius-lg);
            border: 2px solid var(--primary-light);
          }
          .appt-success-icon { font-size: 3rem; margin-bottom: 16px; }
          .appt-success h4 { color: var(--primary-dark); font-size: 1.4rem; margin-bottom: 10px; }
          .appt-success p { color: var(--text-body); font-size: 0.95rem; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="appointment-form-wrapper">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name *</label>
            <input
              type="text" name="name" value={form.name}
              onChange={handleChange} required
              className="form-control" placeholder="Your full name"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel" name="phone" value={form.phone}
              onChange={handleChange} required
              className="form-control" placeholder="08772248330"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Service Required</label>
            <select
              name="service" value={form.service}
              onChange={handleChange} className="form-select"
            >
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Preferred Date</label>
            <input
              type="date" name="date" value={form.date}
              onChange={handleChange} className="form-control"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Time Slot</label>
            <select name="time" value={form.time} onChange={handleChange} className="form-select">
              <option value="">Select time</option>
              <option>09:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>02:00 PM - 03:00 PM</option>
              <option>03:00 PM - 04:00 PM</option>
              <option>04:00 PM - 05:00 PM</option>
              <option>06:00 PM - 07:00 PM</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Consultation Type</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn btn-sm flex-fill ${form.type === 'inperson' ? 'btn-appointment' : 'btn-hero-secondary'}`}
                onClick={() => setForm({ ...form, type: 'inperson' })}
                style={{ padding: '10px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
              >
                🏥 In Person
              </button>
              <button
                type="button"
                className={`btn btn-sm flex-fill ${form.type === 'virtual' ? 'btn-appointment' : 'btn-hero-secondary'}`}
                onClick={() => setForm({ ...form, type: 'virtual' })}
                style={{ padding: '10px 16px', fontSize: '0.85rem', borderRadius: '8px' }}
              >
                💻 Virtual
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end">
            <div style={{ width: '100%' }}>
              <label className="form-label">Message (Optional)</label>
              <input
                type="text" name="message" value={form.message}
                onChange={handleChange}
                className="form-control" placeholder="Any specific concern?"
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn-submit w-100">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book via WhatsApp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
