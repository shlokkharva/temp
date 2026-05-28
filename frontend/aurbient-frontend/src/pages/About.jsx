import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const images = {
    hero: "/@fs/C:/Users/shlok/.gemini/antigravity/brain/237ae5d4-2088-4c38-86d9-21b74545b555/aurbient_company_hero_1779954829588.png",
    ecosystem: "/@fs/C:/Users/shlok/.gemini/antigravity/brain/237ae5d4-2088-4c38-86d9-21b74545b555/aurbient_operational_ecosystem_1779954852358.png"
  };

  return (
    <main style={{ background: "#F4F9FB" }}>
      {/* Cinematic Brand Foundation Hero */}
      <section className="hero" style={{ 
        position: "relative", 
        padding: "180px 0 160px", 
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Background Image Layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}></div>
        {/* Gradient Overlay for high-end readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.8) 0%, rgba(14,25,33,0.95) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ 
              display: "inline-block", 
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              backdropFilter: "blur(10px)"
            }}>
              <i className="fas fa-building" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Company Overview
            </div>
            <h1 style={{ 
              fontSize: "clamp(3rem, 5vw, 4.5rem)", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              fontWeight: "700",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>Aurbient Technologies</h1>
            <h2 style={{ fontSize: "1.5rem", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "600", marginBottom: "32px" }}>Company Identity & Brand Foundation</h2>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.85", 
              color: "#E4F1F3", 
              marginBottom: "0",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              Aurbient Technologies is a technology and automation company focused on building intelligent operational systems for modern businesses. We develop connected operational environments designed to support long-term business growth and intelligent operational transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Intersection of Operations & Technology */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Paradigm</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Beyond Digital Tools</h2>
            <p style={{ color: "#395568", fontSize: "1.15rem", lineHeight: "1.8" }}>
              The company believes that modern businesses require more than digital tools. They require operational clarity, intelligent systems, scalable infrastructure, and connected workflow ecosystems.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { icon: "fa-brain", title: "Artificial Intelligence" },
              { icon: "fa-magic", title: "Automation" },
              { icon: "fa-chart-pie", title: "Operational Intelligence" },
              { icon: "fa-server", title: "Enterprise Infrastructure" },
              { icon: "fa-sync-alt", title: "Digital Transformation" },
              { icon: "fa-project-diagram", title: "Scalable Business Systems" }
            ].map((item, idx) => (
              <div key={idx} className="eco-card" style={{ background: "white", padding: "30px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", alignItems: "center", gap: "16px", transition: "all 0.3s" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "600", color: "var(--color-primary)", margin: 0 }}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "stretch" }}>
            {/* Vision */}
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-primary)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px" }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Our Vision</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: "0 0 20px 0" }}>
                To become a globally recognized intelligent technology company helping businesses transform operations through AI-driven systems, automation infrastructure, and scalable digital ecosystems.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: 0, fontWeight: "500" }}>
                Aurbient Technologies envisions a future where businesses operate through connected, intelligent, and adaptive operational environments capable of supporting clarity, efficiency, and sustainable growth.
              </p>
            </div>

            {/* Mission */}
            <div className="eco-card" style={{ background: "#F4F9FB", padding: "50px", borderRadius: "24px", borderTop: "4px solid var(--color-accent)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "64px", height: "64px", background: "rgba(19, 170, 179, 0.15)", color: "var(--color-accent)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px" }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Our Mission</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: "0 0 20px 0" }}>
                To engineer intelligent operational systems that help businesses improve efficiency, automate workflows, enhance operational visibility, and scale through modern digital infrastructure.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", margin: 0, fontWeight: "500" }}>
                Our mission is to bridge technology and business operations through intelligent systems designed for long-term transformation and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Generated Ecosystem Image */}
      <section style={{ padding: "100px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Company Philosophy</span>
              <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", lineHeight: "1.2" }}>
                Technology should not exist only as software.
              </h2>
              <p style={{ fontSize: "1.2rem", color: "#E4F1F3", lineHeight: "1.8", marginBottom: "30px", opacity: 0.9 }}>
                It should function as an intelligent operational ecosystem capable of improving how businesses communicate, operate, coordinate, and scale.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Operational clarity drives better decisions.",
                  "Intelligent systems improve execution.",
                  "Automation should reduce operational friction.",
                  "Scalable infrastructure creates long-term business resilience."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    <span style={{ color: "var(--color-accent)", marginTop: "4px" }}><i className="fas fa-check-circle"></i></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "30px", padding: "24px", background: "rgba(255,255,255,0.05)", borderLeft: "3px solid var(--color-accent)", borderRadius: "0 16px 16px 0" }}>
                <p style={{ margin: 0, fontStyle: "italic", fontSize: "1.1rem", lineHeight: "1.6" }}>We focus on designing systems that align technology with real operational challenges rather than disconnected digital implementations.</p>
              </div>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "110%", height: "110%", background: "radial-gradient(circle, rgba(19,170,179,0.2) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 0 }}></div>
              <img 
                src={images.ecosystem} 
                alt="Aurbient Operational Ecosystem" 
                style={{ width: "100%", height: "550px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", position: "relative", zIndex: 1, border: "1px solid rgba(255,255,255,0.1)" }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Foundations</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 20px 0" }}>Core Principles</h2>
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
              <div key={i} className="eco-card" style={{ background: "white", padding: "40px", borderRadius: "24px", border: "1.5px solid #E2EBE7", position: "relative" }}>
                <span style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", fontWeight: "800", color: "rgba(19, 170, 179, 0.08)", lineHeight: "1" }}>{prin.num}</span>
                <h4 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 16px 0", paddingRight: "40px" }}>{prin.title}</h4>
                <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", margin: 0 }}>{prin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe & Our Approach Tabs/Grid */}
      <section style={{ padding: "80px 0", background: "white", borderTop: "1px solid #E2EBE7", borderBottom: "1px solid #E2EBE7" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
            
            {/* What We Believe */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "30px" }}>
                <div style={{ width: "48px", height: "48px", background: "var(--color-primary)", color: "white", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>What We Believe</h2>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>Intelligent Systems Create Better Businesses</h4>
                  <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Businesses grow more effectively when workflows, reporting environments, operational systems, and communication layers function together as connected ecosystems.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>Automation Should Improve Human Efficiency</h4>
                  <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Automation should support teams by reducing repetitive operational dependency and improving execution speed.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>AI Should Solve Real Operational Problems</h4>
                  <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Artificial Intelligence becomes valuable when integrated into real business operations capable of improving visibility, efficiency, and decision-making.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>Scalability Requires Structure</h4>
                  <p style={{ color: "#58798C", lineHeight: "1.6", margin: 0 }}>Long-term business growth requires scalable systems, operational clarity, and intelligent digital infrastructure.</p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "30px" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                  <i className="fas fa-route"></i>
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Our Approach</h2>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div className="eco-card" style={{ background: "#F4F9FB", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--color-accent)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-search" style={{ color: "var(--color-accent)" }}></i> Understand Operations First</h4>
                  <p style={{ color: "#395568", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>We begin by understanding operational workflows, business challenges, communication gaps, and process inefficiencies.</p>
                </div>
                <div className="eco-card" style={{ background: "#F4F9FB", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--color-accent)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-project-diagram" style={{ color: "var(--color-accent)" }}></i> Design Intelligent Ecosystems</h4>
                  <p style={{ color: "#395568", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>We create connected operational systems designed to improve visibility, coordination, automation, and scalability.</p>
                </div>
                <div className="eco-card" style={{ background: "#F4F9FB", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--color-accent)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-server" style={{ color: "var(--color-accent)" }}></i> Build for Scalability</h4>
                  <p style={{ color: "#395568", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>Every infrastructure layer is designed with long-term operational growth and future scalability in mind.</p>
                </div>
                <div className="eco-card" style={{ background: "#F4F9FB", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--color-accent)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}><i className="fas fa-sync" style={{ color: "var(--color-accent)" }}></i> Focus on Transformation</h4>
                  <p style={{ color: "#395568", lineHeight: "1.6", margin: 0, fontSize: "0.95rem" }}>We focus on improving how businesses operate internally rather than simply delivering isolated digital solutions.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Identity & Culture Grid */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            
            {/* Culture */}
            <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #E2EBE7" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>Company Culture</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                Aurbient Technologies is built around innovation, strategic thinking, operational discipline, and continuous evolution.
              </p>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                We encourage problem-solving, systems thinking, technological exploration, and long-term business impact. Our culture combines modern technological thinking, operational intelligence, and execution-focused development.
              </p>
              <div style={{ background: "rgba(19, 170, 179, 0.05)", padding: "24px", borderRadius: "16px", border: "1px dashed rgba(19, 170, 179, 0.3)" }}>
                <p style={{ margin: "0 0 12px 0", fontWeight: "700", color: "var(--color-primary)" }}>We believe the strongest teams are built through:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {["Ownership", "Responsibility", "Collaboration", "Learning", "Disciplined Execution"].map((tag, i) => (
                    <span key={i} style={{ background: "white", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600", color: "var(--color-accent)", border: "1px solid #E2EBE7" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Positioning & Identity */}
            <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #E2EBE7" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>Brand Positioning</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "30px" }}>
                Aurbient Technologies positions itself as an intelligent technology company, operational systems architect, automation infrastructure provider, and digital transformation partner. We help businesses modernize through intelligent workflows, automation ecosystems, enterprise visibility systems, and scalable digital infrastructure.
              </p>
              
              <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Our Brand Personality</h4>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                The company identity is built around intelligence, precision, clarity, scalability, and disciplined innovation. We represent calm technological precision and scalable execution.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Intelligent Systems", "Operational Clarity", "Futuristic Infrastructure", "Calm Precision", "Strategic Transformation"].map((tag, i) => (
                  <span key={i} style={{ background: "var(--color-primary)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600", color: "white" }}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Long Term Direction & Final Statement */}
      <section style={{ padding: "100px 0", background: "var(--color-primary)", color: "white", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "inline-block", background: "rgba(19, 170, 179, 0.15)", padding: "6px 16px", borderRadius: "20px" }}>The Future We Are Building</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: "700", margin: "0 0 30px 0", color: "white" }}>Long-Term Direction</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#E4F1F3", marginBottom: "40px", opacity: 0.9 }}>
              Aurbient Technologies aims to build the operational intelligence layer for modern businesses. We believe the future belongs to businesses capable of combining strategic thinking, operational clarity, intelligent automation, and scalable digital infrastructure.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "60px" }}>
              {["AI-driven operational ecosystems", "Intelligent enterprise infrastructure", "Automation architecture", "Business intelligence environments", "Enterprise workflow systems", "Scalable digital transformation ecosystems"].map((item, i) => (
                <span key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "100px", fontSize: "0.95rem", color: "white", fontWeight: "500" }}>{item}</span>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, rgba(19,170,179,0.15) 0%, rgba(19,170,179,0.05) 100%)", padding: "50px", borderRadius: "30px", border: "1px solid rgba(19,170,179,0.3)" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "700", margin: "0 0 20px 0", color: "var(--color-accent)" }}>Final Company Statement</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "white", margin: 0, fontStyle: "italic" }}>
                "Aurbient Technologies develops intelligent operational ecosystems designed to improve business visibility, workflow coordination, automation efficiency, and scalable enterprise growth through modern technology infrastructure and AI-driven transformation."
              </p>
            </div>
            
            <div style={{ marginTop: "60px" }}>
              <Link to="/contact" className="btn-premium" style={{ background: "var(--color-accent)", color: "var(--color-primary)", border: "none", fontSize: "1.1rem", padding: "18px 48px" }}>
                Partner With Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
