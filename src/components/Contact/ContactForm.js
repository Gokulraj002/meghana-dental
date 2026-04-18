'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', type: 'in-person', message: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Hello! I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Date: ${formData.date}\nTime: ${formData.time}\nConsultation: ${formData.type}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  return (
    <div className="cf-card">
      {/* Header */}
      <div className="cf-header">
        <div className="cf-header-icon">
          <i className="bi bi-calendar2-check-fill" />
        </div>
        <div>
          <h3 className="cf-title">Book an Appointment</h3>
          <p className="cf-subtitle">Fill in your details and we'll confirm via WhatsApp or call.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="cf-form">
        <div className="row g-3">

          {/* Name */}
          <div className="col-md-6">
            <label className="cf-label">Full Name <span className="cf-required">*</span></label>
            <div className="cf-input-wrap">
              <i className="bi bi-person cf-input-icon" />
              <input
                type="text" name="name" value={formData.name} onChange={handleChange}
                required placeholder="Your full name" className="cf-input"
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="cf-label">Email Address</label>
            <div className="cf-input-wrap">
              <i className="bi bi-envelope cf-input-icon" />
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="your@email.com" className="cf-input"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className="cf-label">Phone Number <span className="cf-required">*</span></label>
            <div className="cf-input-wrap">
              <i className="bi bi-telephone cf-input-icon" />
              <input
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                required placeholder="+91 98765 43210" className="cf-input"
              />
            </div>
          </div>

          {/* Date */}
          <div className="col-md-6">
            <label className="cf-label">Preferred Date</label>
            <div className="cf-input-wrap">
              <i className="bi bi-calendar3 cf-input-icon" />
              <input
                type="date" name="date" value={formData.date} onChange={handleChange}
                className="cf-input"
              />
            </div>
          </div>

          {/* Time */}
          <div className="col-md-6">
            <label className="cf-label">Preferred Time</label>
            <div className="cf-input-wrap">
              <i className="bi bi-clock cf-input-icon" />
              <select name="time" value={formData.time} onChange={handleChange} className="cf-input cf-select">
                <option value="">Select time slot</option>
                {['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Consultation Type */}
          <div className="col-md-6">
            <label className="cf-label">Consultation Type</label>
            <div className="cf-toggle-row">
              {[
                { value: 'in-person', icon: 'bi-hospital', label: 'In Person' },
                { value: 'virtual',   icon: 'bi-camera-video', label: 'Virtual' },
              ].map((opt) => (
                <button
                  key={opt.value} type="button"
                  onClick={() => setFormData({ ...formData, type: opt.value })}
                  className={`cf-toggle ${formData.type === opt.value ? 'active' : ''}`}
                >
                  <i className={`bi ${opt.icon}`} /> {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="col-12">
            <label className="cf-label">Message <span className="cf-optional">(Optional)</span></label>
            <textarea
              name="message" value={formData.message} onChange={handleChange}
              rows={4} placeholder="Describe your dental concern or the treatment you're looking for..."
              className="cf-input cf-textarea"
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button type="submit" className="cf-submit">
              <i className="bi bi-whatsapp" />
              Confirm Appointment via WhatsApp
              <i className="bi bi-arrow-right-short cf-submit-arrow" />
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
