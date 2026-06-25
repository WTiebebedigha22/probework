import React, { useMemo } from 'react';
import './Contact.css';

const Contact = () => {
  const mailToAddress = 'info@probework.com';

  const buildMailto = useMemo(() => {
    return ({ fullName, workEmail, company, serviceInterest, scope }) => {
      const subject = `Technical Consultation Request - ${fullName || 'New Inquiry'}`;

      const body = [
        `Full Name: ${fullName || ''}`,
        `Work Email: ${workEmail || ''}`,
        `Company / Organization: ${company || ''}`,
        `Primary Service Interest: ${serviceInterest || ''}`,
        `Scope of Inquiry:
${scope || ''}`,
      ].join('\n\n');

      const mailto = `mailto:${encodeURIComponent(mailToAddress)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      return mailto;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fullName = form.elements.fullName?.value?.trim();
    const workEmail = form.elements.workEmail?.value?.trim();
    const company = form.elements.company?.value?.trim();
    const serviceInterest = form.elements.serviceInterest?.value?.trim();
    const scope = form.elements.scope?.value?.trim();

    const mailto = buildMailto({ fullName, workEmail, company, serviceInterest, scope });

    // Open user's email client with pre-filled recipient + message
    window.location.href = mailto;
  };

  return (
    <div className="contact-page">
      {/* --- HERO HEADER --- */}
      <header className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="service-badge">Global Liaison</div>
          <h1>
            Strategic Technical <br />Consultation
          </h1>
          <p>
            Engage our engineering team for specialized asset integrity audits, statutory inspections, or
            lifecycle management inquiries.
          </p>
        </div>
      </header>

      <div className="body-wrapper">
        <div className="contact-layout">
          {/* LEFT: Contact Information */}
          <div className="contact-info-panel">
            <div className="blue-anchor-bar"></div>
            <h2>Technical Offices</h2>
            <p className="panel-subtext">Providing comprehensive coverage for onshore and offshore assets across Africa.</p>

            <div className="info-blocks">
              {/* ADDRESS */}
              <div className="info-item">
                <span className="info-icon-small">📍</span>
                <div>
                  <h4>Primary Base</h4>
                  <p>
                    Serving Onshore & Offshore Assets, <br />Lekki Gardens Horizon Heights, Lekki Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* PHONE NUMBERS (Functional tel: links) */}
              <div className="info-item">
                <span className="info-icon-small">📞</span>
                <div>
                  <h4>Direct Engineering Support</h4>
                  <p>
                    <a href="tel:+2348134635548" className="contact-link">
                      +234 813 463 5548
                    </a>
                  </p>
                  <p>
                    <a href="tel:+2349028100161" className="contact-link">
                      +234 902 810 0161
                    </a>
                  </p>
                </div>
              </div>

              {/* EMAILS (Functional mailto: links) */}
              <div className="info-item">
                <span className="info-icon-small">✉️</span>
                <div>
                  <h4>Official Correspondence</h4>
                  <p>
                    <a href="mailto:info@probework.com" className="contact-link">
                      info@probework.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:lucky-ochuko@probework.com" className="contact-link">
                      lucky-ochuko@probework.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="compliance-stamp">
              <p>Certified to API, NACE, & IRATA Standards</p>
            </div>
          </div>

          {/* RIGHT: High-End Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Submit a Technical Inquiry</h3>
            <form onSubmit={handleSubmit} className="pwr-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Full Name</label>
                  <input type="text" name="fullName" placeholder="John Doe" required />
                </div>
                <div className="form-field">
                  <label>Work Email</label>
                  <input type="email" name="workEmail" placeholder="j.doe@company.com" required />
                </div>
              </div>

              <div className="form-field">
                <label>Company / Organization</label>
                <input type="text" name="company" placeholder="Enter company name" required />
              </div>

              <div className="form-field">
                <label>Primary Service Interest</label>
                <select name="serviceInterest" defaultValue="Asset Integrity Management" required>
                  <option>Asset Integrity Management</option>
                  <option>Non-Destructive Testing (NDT)</option>
                  <option>Subsea Engineering & ROV</option>
                  <option>Crane & Lifting Equipment Inspection</option>
                  <option>Statutory Compliance Audit</option>
                </select>
              </div>

              <div className="form-field">
                <label>Scope of Inquiry</label>
                <textarea
                  name="scope"
                  placeholder="Please provide a brief overview of your technical requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="pwr-submit-btn">
                Initiate Consultation
              </button>

              <p className="form-disclaimer">
                All inquiries are handled in accordance with ISO 9001:2015 data protocols and QHSE confidentiality standards.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
