'use client';

import { useState } from 'react';

const inputStyle = {
  width: '100%', padding: '12px 16px', border: '1px solid var(--border)',
  borderRadius: 'var(--radius)', fontSize: '0.9rem', outline: 'none',
  transition: 'border-color 0.3s',
};

const labelStyle = {
  fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heading)',
  marginBottom: '6px', display: 'block',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', type: 'in-person', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `Hello! I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Date: ${formData.date}\nTime: ${formData.time}\nConsultation: ${formData.type}\nMessage: ${formData.message}`;
    const waURL = `https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`;
    window.open(waURL, '_blank');
  };

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--primary)'; };
  const handleBlur  = (e) => { e.target.style.borderColor = 'var(--border)'; };

  return (
    <div className="service-info-card">
      <h3><i className="bi bi-calendar-check-fill"></i> Book Your Appointment</h3>
      <p style={{ marginBottom: '28px' }}>Fill out the form below and we&apos;ll confirm your appointment via WhatsApp or phone call.</p>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text" name="name" value={formData.name} onChange={handleChange}
              required placeholder="Your full name"
              style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Email Address</label>
            <input
              type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="your@email.com"
              style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Phone Number *</label>
            <input
              type="tel" name="phone" value={formData.phone} onChange={handleChange}
              required placeholder="+91 98765 43210"
              style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Preferred Date</label>
            <input
              type="date" name="date" value={formData.date} onChange={handleChange}
              style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Preferred Time</label>
            <select
              name="time" value={formData.time} onChange={handleChange}
              style={{ ...inputStyle, background: '#fff' }}
              onFocus={handleFocus} onBlur={handleBlur}
            >
              <option value="">Select time</option>
              {['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label style={labelStyle}>Consultation Type</label>
            <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
              {[
                { value: 'in-person', label: '🏥 In Person' },
                { value: 'virtual',   label: '💻 Virtual' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: opt.value })}
                  style={{
                    flex: 1, padding: '12px', borderRadius: 'var(--radius)',
                    border: formData.type === opt.value ? '2px solid var(--primary)' : '1px solid var(--border)',
                    background: formData.type === opt.value ? 'var(--primary-50)' : '#fff',
                    color: formData.type === opt.value ? 'var(--primary)' : 'var(--text-body)',
                    fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="col-12">
            <label style={labelStyle}>Message (Optional)</label>
            <textarea
              name="message" value={formData.message} onChange={handleChange}
              rows={4} placeholder="Describe your concern or any specific treatment you're looking for..."
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={handleFocus} onBlur={handleBlur}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn-submit" style={{ width: '100%', justifyContent: 'center' }}>
              📅 Confirm Appointment via WhatsApp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
