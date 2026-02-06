import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand and Intro */}
        <div className="footer-column brand-col">
            <img src="/public/Logo.png" alt="Logo" />
        </div>

        {/* Column 2: Sectors */}
        <div className="footer-column">
          <h3>Sectors</h3>
          <ul>
            <li><a href="#">Oil & Gas</a></li>
            <li><a href="#">Renewable Energy</a></li>
            <li><a href="#">Marine Logistics</a></li>
            <li><a href="#">Subsea Engineering</a></li>
            <li><a href="#">Technical Consultancy</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Safety & HSE</a></li>
            <li><a href="#">Global Offices</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Insights</a></li>
          </ul>
        </div>

        {/* Column 4: Contact/Newsletter */}
        <div className="footer-column contact-col">
          <h3>Global Headquarters</h3>
          <p>12 Maritime Way, Offshore Hub</p>
          <p>Victoria Island, Lagos</p>
          <p className="footer-phone">+23481453612260</p>
          <button className="footer-cta">Get in Touch</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; {new Date().getFullYear()} ProbeWork Resources Limited.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;