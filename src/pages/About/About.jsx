import React from 'react';
import './About.css';

const AboutUs = () => {
  const projects = [
    { year: "2023", client: "ABO FPSO", task: "Specialized pressure testing operations on critical vessels." },
    { year: "2023", client: "Offshore Platform", task: "PEC inspection of coated risers utilizing IRATA Rope Access." },
    { year: "2022", client: "Bonga FPSO", task: "Advanced internal vessel inspection via remote borescope." },
    { year: "2022", client: "PHRC Refinery", task: "Statutory pressure vessel and piping integrity assessments." },
    { year: "2021", client: "ExxonMobil", task: "Onshore storage tank roof NDT and structural analysis." },
    { year: "2020", client: "SNEPCO", task: "Pulsed Eddy Current (PEC) inspection of insulated piping." }
  ];

  return (
    <div className="about-page">
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="service-badge">Corporate Identity</div>
          <h1 className="hero-title">
            Engineering Excellence <br />
            <span className="text-highlight">Since Inception.</span>
          </h1>
          <p className="hero-description">
            ProbeWork Resources is a multidisciplinary technical service provider dedicated to 
            the integrity of Africa’s energy infrastructure. We bridge the gap between complex 
            engineering data and operational safety.
          </p>
        </div>
      </section>

      <div className="body-wrapper">
        {/* --- CORE VALUES / VISION --- */}
        <section className="vision-section">
          <div className="vision-content">
            <div className="blue-anchor-bar"></div>
            <h2>Our Mission & Vision</h2>
            <p>
              To be the preferred technical partner for asset integrity in the Oil & Gas sector 
              by delivering innovative, cost-effective, and safe inspection solutions. We are 
              committed to the "Zero-Harm" philosophy while maximizing asset uptime.
            </p>
          </div>
          <div className="vision-image">
            <img src="https://images.unsplash.com/photo-1541976591-fe45ca647637?auto=format&fit=crop&q=80&w=1000" alt="Industrial Engineering" />
          </div>
        </section>

        {/* --- LEADERSHIP (EXECUTIVE PROFILE) --- */}
        <section className="leadership-section">
          <div className="leadership-card">
            <div className="leader-image-container">
              <img 
                src="/src/assets/About/Ceo.png" 
                className="leader-image"
                alt="Lucky Ochuko Idjenughwa"
              />
              <div className="leader-experience-badge">5+ Years Experience</div>
            </div>
            <div className="leader-content">
              <p className="overline">Executive Leadership</p>
              <h2 className="leader-name">Lucky Ochuko Idjenughwa</h2>
              <p className="leader-title">Managing Director</p>
              
              <p className="leader-bio">
                A Production Engineering graduate from the University of Benin, Lucky has 
                orchestrated high-stakes technical audits for global energy leaders including 
                ExxonMobil, Shell (SNEPCO), and BW Offshore. 
                <br /><br />
                Under his leadership, ProbeWork has become synonymous with precision, 
                leveraging his deep expertise in statutory inspections and advanced 
                NDT methodologies to secure critical assets across the Gulf of Guinea.
              </p>

              <div className="cert-grid">
                {['API 510 Pressure Vessels', 'API 570 Piping', 'API 653 Aboveground Tanks', 'NACE Corrosion'].map(cert => (
                  <div key={cert} className="cert-item">
                    <span className="cert-check">✓</span> {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECT PORTFOLIO --- */}
        <section className="portfolio-section">
          <div className="section-intro">
            <div className="blue-anchor-bar"></div>
            <h2>Project Excellence</h2>
            <p>A proven track record of delivering technical reliability in high-risk environments.</p>
          </div>
          
          <div className="project-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <span className="project-year">{proj.year}</span>
                  <h4 className="project-client">{proj.client}</h4>
                </div>
                <p className="project-task">{proj.task}</p>
                <div className="project-footer-bar"></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- CORPORATE CTA --- */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Secure Your Asset's Future Today</h2>
          <p>Consult with our lead engineers to develop a risk-based inspection strategy tailored to your facility.</p>
          <div className="cta-actions">
            <button className="cta-button-white">Request Capability Statement</button>
            <a href="/contact" className="cta-link-light">Contact Our Technical Office →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;