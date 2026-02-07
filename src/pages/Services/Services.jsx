import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="service-badge">Our Capabilities</div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Integrated Asset Solutions
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          High-quality inspection, risk, and integrity solutions ensuring operational 
          efficiency for onshore and offshore assets[cite: 1, 2].
        </p>
      </header>

      <div className="services-container">
        {/* Module 1: Asset Integrity */}
        <div className="service-module">
          <div className="module-icon">🛡️</div>
          <h2 className="module-title">Asset Integrity Management</h2>
          <p className="module-description">
            Comprehensive services designed to ensure the safety, reliability, and efficiency 
            of physical assets throughout their entire lifecycle.
          </p>
          <div className="tech-tags">
            {['API 510', 'API 570', 'API 653', 'NACE', 'CSWIP', 'Rope Access L1-3'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Module 2: Crane Inspection */}
        <div className="service-module">
          <div className="module-icon">🏗️</div>
          <h2 className="module-title">Crane Inspection Services</h2>
          <p className="module-description">
            Comprehensive inspection for mobile, offshore, overhead, and tower cranes 
            delivered by internationally certified inspectors.
          </p>
          <div className="tech-tags">
            {['Offshore Cranes', 'Tower Cranes', 'In-Service Inspection', 'Lifting Safety'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Module 3: Drilling Inspection */}
        <div className="service-module">
          <div className="module-icon">🔦</div>
          <h2 className="module-title">Drilling Inspection</h2>
          <p className="module-description">
            Technical inspection for drilling assets ensuring safety and regulatory 
            compliance with API, IADC, and LOLER standards[cite: 7].
          </p>
          <div className="tech-tags">
            {['BOP Inspections', 'OCTG Inspections', 'EMI', 'UT', 'MPI', 'Rig Auditing'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Module 4: Engineering & NDT */}
        <div className="service-module">
          <div className="module-icon">📊</div>
          <h2 className="module-title">Advanced NDT & Analytics</h2>
          <p className="module-description">
            Specialized Pulsed Eddy Current (PEC) inspection and data-driven solutions 
            for optimized asset performance[cite: 4, 9].
          </p>
          <div className="tech-tags">
            {['PEC', 'PAUT', 'TOFD', 'MFL', 'Borescope', 'Digital Risk Analysis'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Featured NO-LEAK Solution */}
        <div className="featured-solution">
          <div>
            <h3 className="text-2xl font-bold mb-2">NO-LEAK AIM Solution</h3>
            <p className="text-slate-400">
              Our proprietary platform for robust RBI assessments and process safety management.
            </p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all">
            Request Demo
          </button>
        </div>

        {/* Additional Professional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 col-span-full">
            <div className="p-8 border border-slate-200 rounded-3xl bg-white">
                <h4 className="font-bold mb-2">Engineering Consultancy</h4>
                <p className="text-sm text-slate-500">Expert engineering advisory for specialized industrial operations.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-3xl bg-white">
                <h4 className="font-bold mb-2">Marine Logistics Services</h4>
                <p className="text-sm text-slate-500">Integrated support services for offshore and maritime environments.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;