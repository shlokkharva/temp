import { useState } from "react";
import { Link } from "react-router-dom";

export default function EngineeringCulture() {
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
              <i className="fas fa-code" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Engineering Culture
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Execution & Precision</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Our culture combines modern technological thinking, operational intelligence, and execution-focused development. We build the operational intelligence layer for modern businesses.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Cultural Foundations</span>
              <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "var(--color-primary)", lineHeight: "1.2" }}>
                Continuous Evolution
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#395568", lineHeight: "1.8", marginBottom: "30px" }}>
                Aurbient Technologies is built around innovation, strategic thinking, operational discipline, and continuous evolution. We encourage problem-solving, systems thinking, technological exploration, and long-term business impact.
              </p>
              
              <div style={{ background: "rgba(19, 170, 179, 0.05)", padding: "30px", borderRadius: "20px", border: "1px dashed rgba(19, 170, 179, 0.3)" }}>
                <p style={{ margin: "0 0 16px 0", fontWeight: "700", color: "var(--color-primary)", fontSize: "1.1rem" }}>The strongest teams are built through:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {["Ownership", "Responsibility", "Collaboration", "Learning", "Disciplined Execution"].map((tag, i) => (
                    <span key={i} style={{ background: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "0.95rem", fontWeight: "600", color: "var(--color-accent)", border: "1px solid #E2EBE7", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="eco-card" style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-primary)", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "64px", height: "64px", background: "white", color: "var(--color-primary)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <i className="fas fa-layer-group"></i>
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>Our Approach</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                <li>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>Understand Operations First</h4>
                  <p style={{ color: "#58798C", margin: 0, lineHeight: "1.6" }}>We begin by understanding workflows, communication gaps, and process inefficiencies.</p>
                </li>
                <li>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>Design Intelligent Ecosystems</h4>
                  <p style={{ color: "#58798C", margin: 0, lineHeight: "1.6" }}>Creating connected systems to improve visibility, coordination, automation, and scalability.</p>
                </li>
                <li>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>Build for Scalability</h4>
                  <p style={{ color: "#58798C", margin: 0, lineHeight: "1.6" }}>Every infrastructure layer is designed with long-term operational growth in mind.</p>
                </li>
                <li>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "6px" }}>Focus on Transformation</h4>
                  <p style={{ color: "#58798C", margin: 0, lineHeight: "1.6" }}>We focus on improving how businesses operate, not just delivering isolated software.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
