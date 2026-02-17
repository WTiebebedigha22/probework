import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`header-wrapper ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar__content">
          <div className="contact-info">
            <a href="mailto:info@probework.com" className="contact-item">
              <Mail size={12} strokeWidth={3} /> <span>info@probework.com</span>
            </a>
            <a href="tel:+2348134635548" className="contact-item">
              <Phone size={12} strokeWidth={3} /> <span>+2348134635548</span>
            </a>
          </div>
          <div className="top-bar__right">
            <span>Rigorous Inspection. Global Standards.</span>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container navbar__container">
          <Link to="/" className="navbar__logo">
            <img src="/Logo.png" alt="Probework Resources Logo" />
          </Link>

          <button 
            className="navbar__toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`navbar__menu-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

          <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link></li>
            <li><Link to="/services" className={location.pathname === "/services" ? "active-link" : ""}>Services</Link></li>
            <li><Link to="/safety" className={location.pathname === "/safety" ? "active-link" : ""}>Safety & QHSE</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>About Us</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>Contact</Link></li>
            <li className="nav-cta">
              <Link to="/verify">
                <ShieldCheck size={14} />
                <span>Verify Certification</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;