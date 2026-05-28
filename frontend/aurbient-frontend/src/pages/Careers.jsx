import { useState } from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const images = {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  };

  return (
    <main style={{ background: "#F4F9FB" }}>
      <section className="hero" style={{ 
        position: "relative", padding: "180px 0 160px", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${images.hero})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,25,33,0.85) 0%, rgba(14,25,33,0.95) 100%)", zIndex: 1 }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ display: "inline-block", marginBottom: "24px", background: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#E4F1F3", backdropFilter: "blur(10px)", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
              <i className="fas fa-rocket" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Join Aurbient
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Build The Future</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Engineer intelligent operational systems. We are always looking for systems thinkers, infrastructure engineers, and problem solvers to join our team.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Open Roles</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Current Opportunities</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              While we do not have any immediate open roles, Aurbient Technologies is always open to connecting with exceptional talent. If you specialize in systems architecture, AI automation, or scalable digital infrastructure, we encourage you to introduce yourself.
            </p>
          </div>

          <div style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", textAlign: "center", border: "1px solid #E2EBE7", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ width: "60px", height: "60px", background: "white", color: "var(--color-accent)", borderRadius: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Submit Your Profile</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "30px" }}>
              Send your resume and a brief introduction about your technical background and systems thinking approach.
            </p>
            <a href="mailto:rajthakur.aurbient@gmail.com" className="btn-premium" style={{ background: "var(--color-primary)", color: "white", padding: "16px 40px", fontSize: "1.1rem", borderRadius: "100px", display: "inline-block", textDecoration: "none" }}>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
