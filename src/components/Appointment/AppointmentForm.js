'use client';

import { useState } from 'react';

export default function AppointmentForm() {
  const [consultationType, setConsultationType] = useState('inperson');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, date, timeSlot, message } = formData;
    const subject = `New Appointment Request — ${fullName}`;
    const body =
      `Hello Meghana Dental Team,\n\n` +
      `I'd like to book an appointment with the following details:\n\n` +
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Preferred Date: ${date}\n` +
      `Time Slot: ${timeSlot}\n` +
      `Consultation Type: ${consultationType === 'inperson' ? 'In Person' : 'Virtual'}\n\n` +
      `Message:\n${message || '(none)'}\n\nThank you.`;
    window.location.href =
      `mailto:info@meghanadental.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="appointment-form-wrapper">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName}
              onChange={handleChange} required className="form-control"
              placeholder="Your full name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" value={formData.email}
              onChange={handleChange} required className="form-control"
              placeholder="your@email.com" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone}
              onChange={handleChange} required className="form-control"
              placeholder="+91 98765 43210" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Preferred Date</label>
            <input type="date" name="date" value={formData.date}
              onChange={handleChange} required className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Time Slot</label>
            <select name="timeSlot" value={formData.timeSlot}
              onChange={handleChange} required className="form-select">
              <option value="">Select time</option>
              <option>09:00 AM - 10:00 AM</option>
              <option>10:00 AM - 11:00 AM</option>
              <option>11:00 AM - 12:00 PM</option>
              <option>02:00 PM - 03:00 PM</option>
              <option>03:00 PM - 04:00 PM</option>
              <option>04:00 PM - 05:00 PM</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Consultation Type</label>
            <div className="d-flex gap-2">
              <button type="button"
                className={`btn btn-sm flex-fill ${consultationType === 'inperson' ? 'btn-appointment' : 'btn-hero-secondary'}`}
                onClick={() => setConsultationType('inperson')}
                style={{ padding: '10px 16px', fontSize: '0.85rem', borderRadius: '8px' }}>
                🏥 In Person
              </button>
              <button type="button"
                className={`btn btn-sm flex-fill ${consultationType === 'virtual' ? 'btn-appointment' : 'btn-hero-secondary'}`}
                onClick={() => setConsultationType('virtual')}
                style={{ padding: '10px 16px', fontSize: '0.85rem', borderRadius: '8px' }}>
                💻 Virtual
              </button>
            </div>
          </div>
          <div className="col-12">
            <label className="form-label">Message (Optional)</label>
            <textarea name="message" value={formData.message}
              onChange={handleChange} className="form-control"
              rows="3" placeholder="Describe your concern..."></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn-submit w-100">
              <i className="bi bi-calendar-check-fill"></i>
              Confirm Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
