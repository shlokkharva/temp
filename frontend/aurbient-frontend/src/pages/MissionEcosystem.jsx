import { useState } from "react";
import { Link } from "react-router-dom";

export default function MissionEcosystem() {
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
              <i className="fas fa-bullseye" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Strategic Direction
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Mission & Ecosystem</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              To engineer intelligent operational systems that help businesses improve efficiency, automate workflows, enhance operational visibility, and scale through modern digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Beliefs</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>What We Believe</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              We believe the future belongs to businesses capable of combining strategic thinking, operational clarity, intelligent automation, and scalable digital infrastructure.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "24px", display: "flex", gap: "20px" }}>
              <div style={{ width: "50px", height: "50px", background: "white", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <i className="fas fa-network-wired"></i>
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Intelligent Systems Create Better Businesses</h4>
                <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Businesses grow more effectively when workflows, reporting environments, operational systems, and communication layers function together as connected ecosystems.</p>
              </div>
            </div>

            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "24px", display: "flex", gap: "20px" }}>
              <div style={{ width: "50px", height: "50px", background: "white", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Automation Should Improve Human Efficiency</h4>
                <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Automation should support teams by reducing repetitive operational dependency and improving execution speed.</p>
              </div>
            </div>

            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "24px", display: "flex", gap: "20px" }}>
              <div style={{ width: "50px", height: "50px", background: "white", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <i className="fas fa-brain"></i>
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>AI Should Solve Real Operational Problems</h4>
                <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Artificial Intelligence becomes valuable when integrated into real business operations capable of improving visibility, efficiency, and decision-making.</p>
              </div>
            </div>

            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "24px", display: "flex", gap: "20px" }}>
              <div style={{ width: "50px", height: "50px", background: "white", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <i className="fas fa-server"></i>
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Scalability Requires Structure</h4>
                <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Long-term business growth requires scalable systems, operational clarity, and intelligent digital infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "inline-block", background: "rgba(19, 170, 179, 0.15)", padding: "6px 16px", borderRadius: "20px" }}>The Future We Are Building</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "white" }}>Long-Term Direction</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#E4F1F3", marginBottom: "40px", opacity: 0.9 }}>
              Aurbient Technologies aims to build the operational intelligence layer for modern businesses.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "60px" }}>
              {["AI-driven operational ecosystems", "Intelligent enterprise infrastructure", "Automation architecture", "Business intelligence environments", "Enterprise workflow systems", "Scalable digital transformation ecosystems"].map((item, i) => (
                <span key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "100px", fontSize: "0.95rem", color: "white", fontWeight: "500" }}>{item}</span>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, rgba(19,170,179,0.15) 0%, rgba(19,170,179,0.05) 100%)", padding: "50px", borderRadius: "30px", border: "1px solid rgba(19,170,179,0.3)" }}>
              <p style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "white", margin: 0, fontStyle: "italic", fontWeight: "600" }}>
                "Aurbient Technologies develops intelligent operational ecosystems designed to improve business visibility, workflow coordination, automation efficiency, and scalable enterprise growth through modern technology infrastructure and AI-driven transformation."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
