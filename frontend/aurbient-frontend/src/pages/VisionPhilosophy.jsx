import { useState } from "react";
import { Link } from "react-router-dom";

export default function VisionPhilosophy() {
  const images = {
    hero: "/@fs/C:/Users/shlok/.gemini/antigravity/brain/237ae5d4-2088-4c38-86d9-21b74545b555/aurbient_company_hero_1779954829588.png",
    ecosystem: "/@fs/C:/Users/shlok/.gemini/antigravity/brain/237ae5d4-2088-4c38-86d9-21b74545b555/aurbient_operational_ecosystem_1779954852358.png"
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
              <i className="fas fa-eye" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Company Identity
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Vision & Philosophy</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Aurbient Technologies is an automation company focused on building intelligent operational systems for modern businesses. We envision a future where businesses operate through connected, intelligent, and adaptive operational environments.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Company Philosophy</span>
              <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "var(--color-primary)", lineHeight: "1.2" }}>
                Technology should not exist only as software.
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#395568", lineHeight: "1.8", marginBottom: "30px" }}>
                It should function as an intelligent operational ecosystem capable of improving how businesses communicate, operate, coordinate, and scale. We focus on designing systems that align technology with real operational challenges rather than disconnected digital implementations.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Operational clarity drives better decisions.",
                  "Intelligent systems improve execution.",
                  "Automation should reduce operational friction.",
                  "Scalable infrastructure creates long-term business resilience."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "1.1rem", lineHeight: "1.6", color: "#395568", fontWeight: "500" }}>
                    <span style={{ color: "var(--color-accent)", marginTop: "4px" }}><i className="fas fa-check-circle"></i></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "110%", height: "110%", background: "radial-gradient(circle, rgba(19,170,179,0.2) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 0 }}></div>
              <img src={images.ecosystem} alt="Aurbient Operational Ecosystem" style={{ width: "100%", height: "550px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", position: "relative", zIndex: 1, border: "8px solid white" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Foundational Layers</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", margin: "0 0 20px 0", color: "white" }}>Core Principles</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {[
              { num: "01", title: "Systems Thinking", desc: "We approach businesses as interconnected operational ecosystems rather than isolated processes. Every solution is designed with scalability, visibility, and workflow coordination in mind." },
              { num: "02", title: "Operational Clarity", desc: "We believe operational visibility is essential for intelligent business growth. Our systems are designed to improve reporting accessibility, workflow transparency, and management visibility." },
              { num: "03", title: "Intelligent Automation", desc: "Automation should improve operational efficiency while supporting structured business execution. We focus on creating automation ecosystems that reduce friction and improve workflow consistency." },
              { num: "04", title: "Scalable Infrastructure", desc: "Modern businesses require scalable digital foundations capable of supporting long-term operational growth. We prioritize flexibility, scalability, and future-ready architecture." },
              { num: "05", title: "Business-Oriented Technology", desc: "Technology should solve operational challenges and create measurable business value. We focus on aligning digital systems with practical operational requirements." },
              { num: "06", title: "Precision & Execution", desc: "We value structured execution, strategic planning, and operational discipline in every project environment." }
            ].map((prin, i) => (
              <div key={i} className="eco-card" style={{ background: "rgba(255,255,255,0.05)", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
                <span style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", fontWeight: "800", color: "rgba(255, 255, 255, 0.05)", lineHeight: "1" }}>{prin.num}</span>
                <h4 style={{ fontSize: "1.4rem", fontWeight: "700", color: "white", margin: "0 0 16px 0", paddingRight: "40px" }}>{prin.title}</h4>
                <p style={{ color: "#E4F1F3", fontSize: "1.05rem", lineHeight: "1.7", margin: 0, opacity: 0.85 }}>{prin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
