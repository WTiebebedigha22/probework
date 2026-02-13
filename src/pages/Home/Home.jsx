import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight, BarChart3, ShieldCheck, Ship } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
  const slides = [
    {
      title: "Advancing Asset Integrity",
      subtitle: "Precision engineering and lifecycle management for the global energy sector.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Operational Excellence",
      subtitle: "Driving efficiency through innovative technical solutions and rigorous safety standards.",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Strategic Maritime Insights",
      subtitle: "Empowering offshore stakeholders with data-driven logistics and market intelligence.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="home-page">
      {/* --- ELITE HERO SLIDER --- */}
      <section className="hero-swiper-wrapper">
        <Swiper
          effect={"fade"}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="hero-slide" 
                style={{ backgroundImage: `linear-gradient(rgba(0,30,61,0.6), rgba(0,30,61,0.6)), url(${slide.image})` }}
              >
                <div className="hero-content-box">
                  <div className="accent-line"></div>
                  <span className="hero-tag">ProbeWork Resources</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <div className="hero-actions">
                    <a href="/services" className="pwr-btn pwr-btn-primary">Explore Capability</a>
                    <a href="/contact" className="pwr-btn pwr-btn-outline">Technical Liaison</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="content-container">
        {/* --- INTRODUCTION SECTION --- */}
        <section className="intro-section">
          <div className="intro-grid">
            <div className="intro-main">
              <div className="blue-anchor-bar"></div>
              <h2 className="display-h2">Global Technical <br />Partnership.</h2>
              <p className="lead-text">
                ProbeWork delivers exceptional technical service—every step of the way. 
                Moving in the offshore sector requires precision, local insight, and 
                unwavering safety standards.
              </p>
            </div>
            <div className="intro-side">
              <div className="stat-box">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Operations</span>
              </div>
              <p className="side-p">
                We bridge the gap between complex engineering data and operational 
                safety for Africa's most critical infrastructure.
              </p>
              <a href="/about" className="text-link">Capability Statement <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* --- FEATURE HIGHLIGHTS (Asymmetrical Grid) --- */}
        <section className="highlights-section">
          <div className="highlight-row">
            <div className="highlight-image img-team-bg">
               <div className="image-caption">Operational Rigor</div>
            </div>
            <div className="highlight-text">
              <div className="icon-wrap"><Ship /></div>
              <h3>If it matters to your fleet, it matters to us.</h3>
              <p>
                With a global network of specialized professionals, we build trusted 
                relationships that are the heart of our business.
              </p>
              <a href="/services" className="editorial-link">Find a Technical Expert</a>
            </div>
          </div>

          <div className="highlight-row reverse">
            <div className="highlight-text">
              <div className="icon-wrap"><BarChart3 /></div>
              <h3>Empowering you with world-class logistics.</h3>
              <p>
                Our in-depth market insights and maritime research help guide clients 
                to make informed decisions in volatile energy markets.
              </p>
              <a href="/services" className="editorial-link">Read Market Insights</a>
            </div>
            <div className="highlight-image img-analysis-bg">
               <div className="image-caption">Asset Optimization</div>
            </div>
          </div>
        </section>

        {/* --- QHSE PROMISE SECTION --- */}
        <section className="qhse-banner">
          <div className="qhse-content">
            <ShieldCheck size={48} className="qhse-icon" />
            <h2>Zero-Harm. Zero-Compromise.</h2>
            <p>Our QHSE management system is designed to exceed international standards in the most challenging environments.</p>
            <a href="/safety" className="pwr-btn pwr-btn-outline-white">Our HSE Framework</a>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="final-cta">
          <div className="cta-inner">
            <h2>Ready to move with confidence?</h2>
            <p>Consult with our lead engineers today for a tailored inspection roadmap.</p>
            <div className="cta-buttons">
              <a href="/contact" className="pwr-btn pwr-btn-primary">Get an Audit</a>
              <a href="/contact" className="pwr-btn pwr-btn-ghost">Contact Office</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;