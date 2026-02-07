import React from 'react';
import './About.css';

const AboutUs = () => {
  const projects = [
    { year: "2023", client: "ABO FPSO", task: "Pressure testing operations on vessels" },
    { year: "2023", client: "Offshore Platform", task: "PEC inspection of coated risers via Rope Access" },
    { year: "2022", client: "Bonga FPSO", task: "Internal vessel inspection with borescope" },
    { year: "2022", client: "PHRC Refinery", task: "Pressure vessel and piping inspections" },
    { year: "2021", client: "ExxonMobil", task: "NDT inspection on onshore tank roofs" },
    { year: "2020", client: "SNEPCO", task: "PEC inspection of insulated pipes" }
  ];

  return (
    <div className="about-page">
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="hero-badge">Next-Gen Inspection Services</div>
        <h1 className="hero-title">
          Maximizing Asset <br />
          <span className="text-gradient">Performance & Safety.</span>
        </h1>
        <p className="hero-description">
          ProbeWorks delivers data-driven engineering and inspection solutions to 
          Africa's most critical onshore and offshore infrastructure.
        </p>
        <div className="flex gap-4">
          <button className="btn-pill btn-primary">Our Solutions</button>
          <button className="btn-pill btn-outline">Meet the Team</button>
        </div>
      </section>

      {/* --- LEADERSHIP (LOOPIN CARD) --- */}
      <section className="leadership-section">
        <div className="leadership-card">
          <div className="leader-image-container">
            <img 
              src="/src/assets/About/Ceo.png" 
              className="leader-image"
              alt="Lucky Ochuko Idjenughwa"
            />
          </div>
          <div className="leader-content">
            <span className="hero-badge">Leadership</span>
            <h2 className="leader-name">Lucky Ochuko Idjenughwa</h2>
            <p className="leader-bio">
              A Production Engineering graduate from the University of Benin, Lucky has 
              delivered high-stakes technical auditing for global leaders including 
              ExxonMobil, Shell, and BW Offshore. He specializes in bridging complex 
              engineering data with zero-LTI safety standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['API 510 Certified', 'API 570 Certified', 'API 653 Certified', 'Advanced NDT'].map(cert => (
                <div key={cert} className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO (MODERN GRID) --- */}
      <section className="portfolio-section">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Project Excellence</h2>
          <p className="text-slate-500 mt-2">A track record of safety and precision across Africa.</p>
        </div>
        <div className="project-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <span className="project-year">{proj.year}</span>
              <h4 className="text-xl font-bold mb-3">{proj.client}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{proj.task}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA (SAAS STYLE) --- */}
      <section className="about-cta">
        <div className="cta-circle"></div>
        <h2 className="text-4xl font-bold mb-6">Ready to secure your assets?</h2>
        <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
          Contact our specialized engineering team to discuss customized inspection 
          and maintenance strategies for your facility.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-pill bg-white text-slate-900 border-none">Get a Quote</button>
          <a href="mailto:info@probeworkresources.com" className="btn-pill btn-outline border-white/20 text-white">
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;