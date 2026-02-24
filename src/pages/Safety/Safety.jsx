import React from 'react';
import './Safety.css';

const Safety = () => {
  const pillars = [
    {
      title: "Operational Integrity",
      desc: "Our QHSE management system ensures the reliability and peak efficiency of all physical assets throughout their lifecycle, minimizing environmental impact.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Certified Technical Competence",
      desc: "Operations are executed by specialists certified in API 510, 570, 653, and NACE, ensuring full compliance with international engineering codes.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Preventive Process Safety",
      desc: "Implementing the NO-LEAK AIM solution and composite repair strategies to mitigate structural risks before they escalate into incidents.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="hse-page">
      {/* --- HERO SECTION --- */}
      <section className="hse-hero">
        <div className="hse-hero-overlay">
          <div className="service-badge">QHSE Excellence</div>
          <h1 className="hse-title">
            Engineering a <br />
            <span className="text-highlight">Zero-Harm Future</span>
          </h1>
          <p className="hse-subtitle">
            At ProbeWork, QHSE is not a secondary objective—it is the governing framework 
            for every technical inspection and engineering solution we deliver globally.
          </p>
        </div>
      </section>

      <div className="body-wrapper">
        {/* --- PERFORMANCE METRICS --- */}
        <section className="hse-stats-container">
          <div className="hse-stats-grid">
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Lost Time Injuries (LTI)</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-label">Environmental Incidents</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Regulatory Compliance</span>
            </div>
          </div>
        </section>

        {/* --- CORE QHSE PILLARS --- */}
        <section className="pillars-section">
          <div className="section-intro">
            <div className="blue-anchor-bar"></div>
            <h2>The Pillars of Our Commitment</h2>
            <p>A structured approach to maintaining the highest safety standards across onshore and offshore platforms.</p>
          </div>
          
          <div className="pillar-grid">
            {pillars.map((pillar, i) => (
              <div key={i} className="pillar-card">
                <div 
                  className="pillar-image" 
                  style={{ backgroundImage: `url(${pillar.image})` }}
                ></div>
                <div className="pillar-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- QUALITY ASSURANCE & COMPLIANCE --- */}
        <section className="compliance-feature">
          <div className="compliance-content">
            <div className="blue-anchor-bar"></div>
            <h2>Data-Driven Integrity & Compliance</h2>
            <p className="main-p">
              Our risk-based approach includes robust <strong>RBI assessments</strong> and third-party 
              verification. We ensure all assets operate within the strict guidelines of 
              international regulatory bodies.
            </p>
            
            <div className="compliance-list">
              <div className="check-item"><span>✓</span> API Standards (510, 570, 653)</div>
              <div className="check-item"><span>✓</span> IADC Regulations & Maritime Law</div>
              <div className="check-item"><span>✓</span> LOLER & PUWER Compliance</div>
              <div className="check-item"><span>✓</span> ISO 9001:2015 Quality Management</div>
            </div>
          </div>
          <div className="compliance-visual">
            <img 
              src="/src/assets/Home/img_experts_bg.jpg" 
              alt="Technician performing NDT inspection" 
            />
            <div className="floating-badge">QA/QC Certified</div>
          </div>
        </section>

        {/* --- DOCUMENTATION CTA --- */}
        <section className="hse-footer-cta">
          <div className="cta-inner">
            <h3>Rigorous Standards. Transparent Results.</h3>
            <p>Access our comprehensive Safety Management System (SMS) and QHSE policies.</p>
            <a href="/Contact" className="cta-button">Request Safety Documentation</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Safety;