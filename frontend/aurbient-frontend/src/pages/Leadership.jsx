import { useState } from "react";
import { Link } from "react-router-dom";

export default function Leadership() {
  const images = {
    hero: "/@fs/C:/Users/shlok/.gemini/antigravity/brain/237ae5d4-2088-4c38-86d9-21b74545b555/aurbient_leadership_1779955103169.png",
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
              <i className="fas fa-chess-knight" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Executive Overview
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: "1.1", marginBottom: "24px", color: "#FFFFFF", letterSpacing: "-0.02em", fontWeight: "700" }}>Leadership</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.85", color: "#E4F1F3", marginBottom: "0", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Aurbient Technologies is guided by operational discipline, strategic systems thinking, and a commitment to engineering intelligent solutions. Our leadership approach focuses on solving real business challenges through scalable digital architecture.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Leadership Philosophy</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Architecting Transformation</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              Leadership at Aurbient Technologies is not about traditional management—it is about orchestrating complex enterprise transformations. We position ourselves as operational systems architects and digital transformation partners.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "20px", borderTop: "4px solid var(--color-primary)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Strategic Systems Thinking</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
                We analyze the entire business operational lifecycle to architect solutions that integrate seamlessly, removing operational blind spots rather than creating isolated technological silos.
              </p>
            </div>
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "20px", borderTop: "4px solid var(--color-accent)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Disciplined Innovation</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
                Innovation must be tethered to execution. Our leadership prioritizes scalable execution and calm technological precision over chasing disconnected trends.
              </p>
            </div>
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "40px", borderRadius: "20px", borderTop: "4px solid #85D4D9" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Transformational Partnership</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>
                We partner with executive teams across industries to implement AI-driven systems and automation infrastructure, acting as the intelligent technical bridge for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
