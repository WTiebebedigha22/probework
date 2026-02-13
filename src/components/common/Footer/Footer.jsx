import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Column 1: Brand Authority */}
          <div className="footer-column brand-col">
            <img src="/Logo.png" alt="ProbeWork Logo" className="footer-logo" />
            <p className="brand-pitch">
              Delivering high-precision inspection and asset integrity solutions
              across Africa’s most critical energy sectors. Certified for excellence, 
              engineered for safety.
            </p>
            <div className="accreditation-row">
              <span className="cert-tag">API Certified</span>
              <span className="cert-tag">NACE</span>
              <span className="cert-tag">ISO 9001</span>
            </div>
          </div>

          {/* Column 2: Specialized Sectors */}
          <div className="footer-column">
            <h4 className="footer-heading">Sectors</h4>
            <ul className="footer-links">
              <li><Link to="/services">Oil & Gas (Upstream)</Link></li>
              <li><Link to="/services">Subsea & Offshore</Link></li>
              <li><Link to="/services">Marine Logistics</Link></li>
              <li><Link to="/services">Renewable Infrastructure</Link></li>
              <li><Link to="/services">Refinery & Downstream</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About ProbeWork</Link></li>
              <li><Link to="/safety">Safety & QHSE</Link></li>
              <li><Link to="/contact">Technical Offices</Link></li>
              <li><Link to="/verify">Verify Certification</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Liaison */}
          <div className="footer-column contact-col">
            <h4 className="footer-heading">Global Headquarters</h4>
            <div className="contact-details">
              <div className="contact-line">
                <MapPin size={16} className="text-blue" />
                <span>Maritime Hub, Victoria Island, Lagos</span>
              </div>
              <a href="tel:+2348134635548" className="contact-line link">
                <Phone size={16} className="text-blue" />
                <span>+234 813 463 5548</span>
              </a>
              <a href="mailto:info@probeworks.com" className="contact-line link">
                <Mail size={16} className="text-blue" />
                <span>info@probeworks.com</span>
              </a>
            </div>
            <Link to="/contact" className="footer-cta-btn">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p className="copyright">
            &copy; {currentYear} ProbeWork Resources Limited. All Rights Reserved. Designed by WTiebebedigha
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms</Link>
            <span className="dot">•</span>
            <Link to="/hse-policy">HSE Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;