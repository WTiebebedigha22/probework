import React from 'react';
import './Safety.css';

const Safety = () => {
  const pillars = [
    {
      title: "Asset Integrity Culture",
      desc: "Our services ensure the safety, reliability, and efficiency of physical assets throughout their entire lifecycle.",
      icon: "🛡️"
    },
    {
      title: "Certified Expertise",
      desc: "Delivered by personnel certified in API 510, 570, 653, NACE, and Rope Access Levels 1–3 to ensure maximum compliance.",
      icon: "📜"
    },
    {
      title: "Process Safety",
      desc: "Utilizing proven maintenance strategies and composite repair solutions to eliminate risks before they occur.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="hse-page">
      {/* --- HERO SECTION --- */}
      <section className="hse-hero">
        <div className="hse-badge">Safety First. Always.</div>
        <h1 className="hse-title">
          Engineering a <br />
          <span className="text-gradient-safe">Zero-Harm Future.</span>
        </h1>
        <p className="max-w-2xl text-xl text-slate-500 mb-10 leading-relaxed">
          At ProbeWorks, safety isn't a checklist—it's the foundation of every inspection, 
          risk assessment, and engineering solution we provide[cite: 4, 21].
        </p>
      </section>

      {/* --- REAL-WORLD STATS --- */}
      <section className="hse-stats">
        <div className="stat-item">
          <h3>0</h3>
          <p>Lost Time Injuries (LTI) </p>
        </div>
        <div className="stat-item">
          <h3>0</h3>
          <p>Near-Miss Incidents </p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Regulatory Compliance </p>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="pillars-section">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Safety Pillars</h2>
          <p className="text-slate-500 mt-2">How we maintain excellence across onshore and offshore platforms.</p>
        </div>
        
        <div className="pillar-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {pillar.desc} [cite: 6, 29]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUALITY ASSURANCE SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Data-Driven Integrity</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We focus on delivering high-quality inspection and integrity solutions 
              that ensure operational efficiency for assets across Africa[cite: 4, 21]. 
              Our risk analysis includes robust RBI assessments using our proprietary 
              <strong> NO-LEAK AIM Solution</strong>.
            </p>
            <div className="space-y-4">
              {['API Standards', 'IADC Regulations', 'LOLER Compliance'].map(check => (
                <div key={check} className="flex items-center gap-3 font-semibold text-slate-700">
                  <span className="text-emerald-500 text-xl">✓</span> {check} 
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
              alt="Industrial Safety Inspection" 
            />
          </div>
        </div>
      </section>

      {/* --- HSE CONTACT --- */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-8">Have questions about our HSE policies?</h2>
        <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-600 transition-colors">
          Download Safety Manual
        </button>
      </section>
    </div>
  );
};

export default Safety;