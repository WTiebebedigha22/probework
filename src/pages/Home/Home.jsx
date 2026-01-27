import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__overlay">
          <h1>Reliable Offshore & Maritime Logistics</h1>

          <div className="hero__buttons">
            <button>Technical Engineering</button>
            <button>Vessel Management</button>
            <button>Offshore Supply</button>
          </div>

          <div className="hero__search">
            <select>
              <option>Project Type</option>
              <option>Consultancy</option>
              <option>Operations</option>
            </select>
            <input
              type="text"
              placeholder="Search by vessel, service, or regional office..."
            />
            <button className="hero__region">Select Region</button>
            <button className="hero__searchBtn">Inquire</button>
          </div>
          
          <div className="hero__filters">
            <select>
              <option>All Project Scales</option>
              <option>Tier 1 (Major)</option>
              <option>Tier 2 (Support)</option>
            </select>

            <select>
              <option>Service Type</option>
              <option>Subsea</option>
              <option>Logistics</option>
              <option>HSE Auditing</option>
            </select>

            <select>
              <option>Compliance</option>
              <option>IMCA Standard</option>
              <option>ISO 9001</option>
            </select>
          </div>
        </div>
      </section>

      <div className="body-wrapper">
        {/* SECTION 1: INTRODUCTION */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>Your Operations in Expert Hands</h2>
            <p>
              Moving in the offshore sector requires precision, local insight, and 
              unwavering safety standards. Probework delivers exceptional technical 
              service—every step of the way. Let our track record show you why 
              industry leaders trust us with their assets.
            </p>
            <a href="#">Explore Capability Statement →</a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80"
              alt="Offshore Rig Operations"
            />
          </div>
        </section>

        <section className="features-section">
          <h2 className="features-title">Engineering Excellence & Reliability</h2>

          {/* GRID 1: STATS OVERLAY */}
          <div className="features-grid">
            <div className="feature-image overlay">
              <div className="yellow-bar"></div>
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80"
                alt="Offshore Technical Team"
              />
              <div className="overlay-text">
                <span className="years">OVER <strong>25</strong></span>
                <span className="subtitle">YEARS OF MARITIME ADVICE</span>
              </div>
            </div>

            <div className="feature-text">
              <h3>If it matters to your fleet, it matters to us</h3>
              <p>
                With a global network of specialized professionals, we build trusted 
                relationships that are the heart of our business. We listen to your 
                operational needs to create bespoke solutions that bring your vision to life.
              </p>
              <a href="#">Find a Technical Expert →</a>
            </div>
          </div>

          {/* GRID 2: RESEARCH */}
          <div className="features-grid reverse">
            <div className="feature-text">
              <h3>Empowering you with world-class logistics</h3>
              <p>
                Our in-depth market insights and maritime research help guide clients 
                to make informed decisions. With decades of operational data, we empower 
                your offshore journey every step of the way.
              </p>
              <a href="#">Read Market Insights →</a>
            </div>

            <div className="feature-image">
              <div className="yellow-bar"></div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Data Analysis"
              />
            </div>
          </div>

          {/* GRID 3: EXPERTS INSET */}
          <div className="features-grid">
            <div className="feature-image overlay">
              <div className="yellow-bar"></div>
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                alt="Experts at work"
              />
              <div className="overlay-text">
                WE HAVE <br />
                <strong>OVER 1,500</strong> <br />
                SPECIALISTS GLOBALLY
              </div>
              <img
                src="https://images.unsplash.com/photo-1574689049868-e94ed5301745?auto=format&fit=crop&w=400&q=80"
                alt="Inset expert team"
                className="inset-image"
              />
            </div>

            <div className="feature-text">
              <h3>Making your safety our priority</h3>
              <p>
                We are open and honest, constructively challenging ourselves to achieve 
                the best safety results. By collaborating across local and international 
                networks, we ensure you have the right expert for every project stage.
              </p>
              <a href="#">Learn about our HSE culture →</a>
            </div>
          </div>

          {/* FULL WIDTH IMAGE SECTION */}
          <div className="full-bg-section">
            <img
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=1200&q=80"
              alt="Vessel Management"
            />
            <div className="full-bg-overlay">
              <h3>Wondering what your fleet efficiency is?</h3>
              <p>
                Get specialist advice for vessel management and offshore logistics, 
                grounded in our deep international market knowledge.
              </p>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="cta-banner">
            <h2>Ready to move with confidence?</h2>
            <p>
              Whether managing assets, logistics, or engineering, we’re here to help 
              you make the right move in the offshore industry.
            </p>
            <a href="#" className="cta-button">
              Contact Probework Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;