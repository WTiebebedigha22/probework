import React, { useState } from 'react';
import { Link } from 'react-router';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/public/Logo.png" alt="Logo" />
      </div>

      <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/safety">Safety & HSE</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/">Contact Us</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;