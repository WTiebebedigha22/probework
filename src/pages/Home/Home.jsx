import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__overlay">
          <h1>Reliable Offshore & <br />Maritime Logistics</h1>

          <div className="hero__search-container">
            <div className="hero__search">
              <select className="search-select">
                <option>Project Type</option>
                <option>Consultancy</option>
                <option>Operations</option>
              </select>
              <input
                type="text"
                placeholder="Search by vessel, service, or region..."
                className="search-input"
              />
              <button className="hero__searchBtn">Search</button>
            </div>

            <div className="hero__filters">
              <button className="filter-link">Technical Engineering</button>
              <button className="filter-link">Vessel Management</button>
              <button className="filter-link">Offshore Supply</button>
            </div>
          </div>
        </div>
      </section>

      <div className="body-wrapper">
        <section className="hero-section">
          <div className="hero-text">
            <h2>Your Operations in <br />Expert Hands</h2>
            <p>
              Moving in the offshore sector requires precision, local insight, and 
              unwavering safety standards. Probework delivers exceptional technical 
              service—every step of the way.
            <a href="#" className="editorial-link">Explore Capability Statement →</a>
            </p>
          </div>
          <div className="hero-image-bg"></div> 
        </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-image-container">
              <div className="blue-anchor-bar"></div>
              <div className="img-team-bg"></div>
              <div className="overlay-text-box">
                <span className="years">OVER <strong>25</strong></span>
                <span className="subtitle">YEARS OF MARITIME ADVICE</span>
              </div>
            </div>

            <div className="feature-text">
              <h3>If it matters to your fleet, it matters to us</h3>
              <p>
                With a global network of specialized professionals, we build trusted 
                relationships that are the heart of our business.
              </p>
              <a href="#" className="editorial-link">Find a Technical Expert →</a>
            </div>
          </div>

          <div className="features-grid reverse">
             <div className="feature-text">
              <h3>Empowering you with world-class logistics</h3>
              <p>
                Our in-depth market insights and maritime research help guide clients 
                to make informed decisions.
              </p>
              <a href="#" className="editorial-link">Read Market Insights →</a>
            </div>
            <div className="feature-image-container">
              <div className="blue-anchor-bar"></div>
              <div className="img-analysis-bg"></div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-image-container">
              <div className="blue-anchor-bar"></div>
              <div className="img-experts-bg"></div>
            </div>

            <div className="feature-text">
              <h3>Making your safety our priority</h3>
              <p>
                We are open and honest, constructively challenging ourselves to achieve 
                the best safety results globally.
              </p>
              <a href="#" className="editorial-link">Learn about our HSE culture →</a>
            </div>
          </div>
        </section>

        <section className="full-bg-section">
          <div className="full-bg-overlay">
            <h3>Wondering what your fleet efficiency is?</h3>
            <p>Get specialist advice grounded in international market knowledge.<br />
            <a href="#" className="cta-button-light">Get an Audit</a></p>
          </div>
        </section>

        <section className="cta-banner">
          <h2>Ready to move with confidence?</h2>
          <p>Whether managing assets or engineering, we’re here to help.</p>
          <a href="#" className="cta-button">Contact Probework Today</a>
        </section>
      </div>
    </div>
  );
};

export default Home;