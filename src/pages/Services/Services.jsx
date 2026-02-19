import React from 'react';
import './Services.css';

const Services = () => {
  const serviceData = [
  {
    title: "Inspection, Maintenance & Integrity",
    description: "Comprehensive structural assessments, NDT inspections, and preventive maintenance programs designed to extend asset life cycles and ensure regulatory compliance.",
    // Image: Focused on technical NDT/Industrial inspection
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    tags: ['Non-Destructive Testing (NDT)', 'Pressure Vessel Inspection', 'Corrosion Management', 'Risk-Based Inspection (RBI)']
  },
  {
    title: "Subsea & Diving Services",
    description: "Precision underwater engineering including ROV surveys, pipeline integrity checks, and cathodic protection systems for deep-water offshore installations.",
    // Image: Professional ROV/Underwater engineering focus
    image: "/src/assets/Services/subsea.jpg",
    tags: ['ROV Operations', 'Pipeline SURF', 'Underwater NDT', 'Subsea Maintenance']
  },
  {
    title: "Marine Logistics & Vessel Management",
    description: "Strategic maritime supply chain solutions, technical vessel management, and offshore support vessel (OSV) chartering for complex offshore operations.",
    // Image: Offshore supply vessel (OSV) in action
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
    tags: ['Vessel Chartering', 'Offshore Support', 'Port Agency', 'Marine Consultancy']
  },
  {
    title: "OCTG & Drilling Support",
    description: "Technical services for Oil Country Tubular Goods (OCTG), including threading, inspection, and inventory management to optimize drilling efficiency.",
    // Image: Industrial drilling pipes/OCTG yard
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    tags: ['Casing & Tubing Inspection', 'Drill Pipe Services', 'Hardbanding', 'Thread Gauging']
  },
  {
    title: "Ship Class & Statutory Inspection",
    description: "Certified hull and machinery surveys conducted in accordance with major Classification Societies. We ensure vessels maintain class status and comply with international maritime safety conventions.",
    // Image: Large vessel in dry dock for hull inspection
    image: "/src/assets/Services/subseas.jpg",
    tags: ['Hull & Machinery Surveys', 'IWS (In-Water Surveys)', 'UTM (Ultrasonic Thickness Measurement)', 'Class Renewal Support']
  }
  ];

  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <div className="service-badge">Operational Excellence</div>
          <h1>World-Class <br />Technical Capabilities</h1>
          <p>
            Probeworks Resources provides integrated asset integrity and engineering solutions 
            designed to minimize risk and maximize productivity in the world's most 
            demanding environments.
          </p>
        </div>
      </section>

      <div className="body-wrapper">
        <section className="services-grid-section">
          <div className="section-intro">
            <div className="blue-anchor-bar"></div>
            <h2>Core Competencies</h2>
            <p>Our multidisciplinary approach ensures every phase of your asset's lifecycle is managed with precision.</p>
          </div>

          <div className="services-grid">
            {serviceData.map((service, index) => (
              <div className="service-card" key={index}>
                <div 
                  className="card-image" 
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${service.image})` }}
                >
                  <div className="card-image-overlay">
                    <span className="service-number">0{index + 1}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tech-tags">
                    {service.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Consultancy Banner */}
        <section className="featured-solution-section">
          <div className="featured-solution-box">
            <div className="featured-text">
              <p className="overline">Expert Advisory</p>
              <h3>Strategic Technical Consultancy</h3>
              <p>
                From feasibility studies to EPCIC project management, we provide 
                the specialized insights required for high-capital energy investments.
              </p>
              <button className="cta-button-light"><a></a>Request Capability Statement</button>
            </div>
            <div className="featured-image"></div>
          </div>
        </section>

        {/* Quality & Safety Sub-Section */}
        <div className="compliance-grid">
            <div className="compliance-item">
                <div className="blue-anchor-bar"></div>
                <h4>HSE & Regulatory Compliance</h4>
                <p>Ensuring all operations align with API, ISO, and local safety standards to achieve zero-incident performance.</p>
            </div>
            <div className="compliance-item">
                <div className="blue-anchor-bar"></div>
                <h4>QA/QC Verification</h4>
                <p>Rigorous third-party auditing and quality control frameworks to guarantee technical reliability across the supply chain.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;