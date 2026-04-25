'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', type: 'in-person', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const data = new FormData();
    data.append('access_key', '59f91b22-58d0-456a-a517-e3200e18d713');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('preferred_date', formData.date);
    data.append('preferred_time', formData.time);
    data.append('consultation_type', formData.type);
    data.append('message', formData.message || 'No message provided');
    data.append('subject', `New Appointment Request — ${formData.name}`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', type: 'in-person', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="cf-card cf-success-card">
        <div className="cf-success-icon"><i className="bi bi-check-circle-fill" /></div>
        <h3 className="cf-success-title">Appointment Request Sent!</h3>
        <p className="cf-success-msg">Thank you! We've received your request and will confirm your appointment shortly via call or WhatsApp.</p>
        <button className="cf-submit" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>
          Book Another Appointment
        </button>
        <style>{`
          .cf-success-card { text-align: center; padding: 60px 32px; }
          .cf-success-icon { font-size: 4rem; color: #0ea5a0; margin-bottom: 16px; }
          .cf-success-title { font-size: 1.5rem; font-weight: 700; color: var(--text-heading); margin-bottom: 12px; }
          .cf-success-msg { color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; max-width: 380px; margin: 0 auto; }
        `}</style>
      </div>
    );
  }

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

      {status === 'error' && (
        <div className="cf-error-banner">
          <i className="bi bi-exclamation-triangle-fill" /> Something went wrong. Please try again or call us directly.
        </div>
      )}

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
            <button type="submit" className="cf-submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <><i className="bi bi-hourglass-split" /> Sending...</>
              ) : (
                <><i className="bi bi-send-fill" /> Send Appointment Request <i className="bi bi-arrow-right-short cf-submit-arrow" /></>
              )}
            </button>
          </div>

        </div>
      </form>

      <style>{`
        .cf-error-banner {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.875rem;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cf-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
