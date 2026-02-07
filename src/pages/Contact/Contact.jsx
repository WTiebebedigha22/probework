import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-badge">Connect With Us</div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          How can we help?
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          Whether you have a technical inquiry or need a comprehensive asset 
          integrity audit, our experts are ready to assist.
        </p>
      </header>

      <div className="contact-container">
        {/* Sidebar Info */}
        <div className="contact-info-sidebar">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <span className="info-label">Phone Support</span>
            <div className="info-value">+234 813 463 5548</div>
            <div className="info-value">+234 902 810 0161</div>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <span className="info-label">Email Inquiries</span>
            <div className="info-value">info@probeworks.com</div>
            <div className="info-value">lucky-ochuko@probeworks.com</div>
          </div>

          <div className="info-card">
            <div className="info-icon">🌍</div>
            <span className="info-label">Headquarters</span>
            <div className="info-value">Serving Onshore & Offshore Assets across Africa</div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Lucky Ochuko" />
              </div>
              <div className="form-group">
                <label className="form-label">Work Email</label>
                <input type="email" className="form-input" placeholder="name@company.com" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Service Interest</label>
              <select className="form-input">
                <option>Asset Integrity Management</option>
                <option>Crane Inspection</option>
                <option>Drilling Support</option>
                <option>NDT & Risk Analysis</option>
                <option>Other Engineering Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input form-textarea" placeholder="Tell us about your project or asset needs..."></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
            <p className="text-center text-xs text-slate-400 mt-6">
              By submitting this form, you agree to our privacy policy and 
              HSE compliance standards.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;