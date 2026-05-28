import { useState } from "react";
import { Link } from "react-router-dom";

export default function CloudInfrastructure() {
  const images = {
    hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
  };

  const regions = [
    {
      name: "US East Edge Gateway",
      location: "Northern Virginia, USA",
      latency: "12ms",
      clusters: "64 Serverless Containers",
      shield: "WAF Tier 1 + DDoS Protection Layer",
      status: "Active",
      load: "42% CPU Usage"
    },
    {
      name: "EU Central Storage Vault",
      location: "Frankfurt, Germany",
      latency: "38ms",
      clusters: "32 Enterprise Datastores",
      shield: "TLS 1.3 + AES-256 Ledger Security",
      status: "Synced",
      load: "28% CPU Usage"
    },
    {
      name: "AP South Ingestion Gateway",
      location: "Mumbai, India",
      latency: "8ms",
      clusters: "128 Dynamic Routing Gateways",
      shield: "IP Firewalls + Cognitive Shielding",
      status: "Active",
      load: "55% CPU Usage"
    }
  ];

  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      {/* Immersive Cinematic Hero Header */}
      <section className="hero case-study-hero" style={{ 
        position: "relative", 
        padding: "160px 0 160px", 
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.5) 60%, rgba(14, 25, 33, 0.7) 100%)", zIndex: 1 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link 
            to="/solutions" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "rgba(255, 255, 255, 0.75)", 
              textDecoration: "none", 
              fontSize: "1rem", 
              fontWeight: "500", 
              marginBottom: "24px", 
              transition: "all 0.2s" 
            }}
            onMouseOver={e => e.currentTarget.style.color = "#FFFFFF"}
            onMouseOut={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}
          >
            <i className="fas fa-arrow-left"></i> Back to Solutions
          </Link>
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 05</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Scalable Digital Infrastructure</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Distributed Cloud Server Topology Interface
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Section Introduction</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Scalable digital infrastructure forms the foundation of modern operational ecosystems.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops enterprise-grade digital infrastructure designed to support scalability, performance, operational continuity, and intelligent system integration.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Modern businesses require scalable digital infrastructure capable of supporting intelligent operations, automation ecosystems, and long-term growth."
              </p>
            </div>
          </div>
        </div>

        {/* MULTI-REGION TOPOLOGY MAP COMPONENT */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Infrastructure Topology</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Distributed Multi-Region Deployment</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "center" }}>
            
            {/* Visual Node Cluster Map */}
            <div className="eco-card" style={{ 
              background: "radial-gradient(circle at 50% 50%, #0F1D26 0%, #060D12 100%)", 
              padding: "50px", 
              borderRadius: "24px", 
              border: "1.5px solid #13AAB3", 
              position: "relative",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 25px 50px rgba(19, 170, 179, 0.12)"
            }}>
              {/* Center Core Node */}
              <div style={{ 
                width: "90px", 
                height: "90px", 
                borderRadius: "50%", 
                background: "rgba(19, 170, 179, 0.15)", 
                border: "2px solid #13AAB3", 
                color: "#13AAB3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
                boxShadow: "0 0 30px rgba(19, 170, 179, 0.5)"
              }}>
                <i className="fas fa-database" style={{ fontSize: "1.5rem", marginBottom: "4px" }}></i>
                <span style={{ fontSize: "0.65rem", fontWeight: "bold", textTransform: "uppercase" }}>Master</span>
              </div>

              {/* Dotted Connections lines */}
              <div style={{ position: "absolute", top: "50%", left: "15%", right: "15%", height: "2px", borderTop: "2px dashed rgba(19,170,179,0.3)", zIndex: 1 }}></div>
              <div style={{ position: "absolute", left: "50%", top: "15%", bottom: "15%", width: "2px", borderLeft: "2px dashed rgba(19,170,179,0.3)", zIndex: 1 }}></div>

              {/* Regional Node 1 */}
              <button 
                onClick={() => setActiveRegion(regions[0])}
                style={{ 
                  position: "absolute", 
                  top: "20%", 
                  left: "15%", 
                  width: "64px", 
                  height: "64px", 
                  borderRadius: "50%", 
                  background: activeRegion.name === regions[0].name ? "#13AAB3" : "#0F1D26",
                  border: "2.5px solid #13AAB3",
                  color: activeRegion.name === regions[0].name ? "black" : "#E4F1F3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  zIndex: 2,
                  boxShadow: activeRegion.name === regions[0].name ? "0 0 25px #13AAB3" : "none",
                  transition: "all 0.2s"
                }}
              >
                <i className="fas fa-globe-americas"></i>
              </button>

              {/* Regional Node 2 */}
              <button 
                onClick={() => setActiveRegion(regions[1])}
                style={{ 
                  position: "absolute", 
                  bottom: "20%", 
                  left: "50%", 
                  marginLeft: "-32px",
                  width: "64px", 
                  height: "64px", 
                  borderRadius: "50%", 
                  background: activeRegion.name === regions[1].name ? "#3498db" : "#0F1D26",
                  border: "2.5px solid #3498db",
                  color: activeRegion.name === regions[1].name ? "black" : "#E4F1F3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  zIndex: 2,
                  boxShadow: activeRegion.name === regions[1].name ? "0 0 25px #3498db" : "none",
                  transition: "all 0.2s"
                }}
              >
                <i className="fas fa-globe-europe"></i>
              </button>

              {/* Regional Node 3 */}
              <button 
                onClick={() => setActiveRegion(regions[2])}
                style={{ 
                  position: "absolute", 
                  top: "20%", 
                  right: "15%", 
                  width: "64px", 
                  height: "64px", 
                  borderRadius: "50%", 
                  background: activeRegion.name === regions[2].name ? "#e67e22" : "#0F1D26",
                  border: "2.5px solid #e67e22",
                  color: activeRegion.name === regions[2].name ? "black" : "#E4F1F3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  zIndex: 2,
                  boxShadow: activeRegion.name === regions[2].name ? "0 0 25px #e67e22" : "none",
                  transition: "all 0.2s"
                }}
              >
                <i className="fas fa-globe-asia"></i>
              </button>
            </div>

            {/* Right Information detail panel */}
            <div className="eco-card" style={{ 
              background: "white", 
              padding: "40px", 
              borderRadius: "24px", 
              border: "1.5px solid #E2EBE7",
              boxShadow: "0 15px 45px rgba(0,0,0,0.03)" 
            }}>
              <span style={{ fontSize: "0.75rem", background: "rgba(39, 201, 63, 0.15)", color: "#27c93f", padding: "4px 12px", borderRadius: "20px", fontWeight: "bold", display: "inline-block", marginBottom: "16px" }}>
                <i className="fas fa-signal"></i> {activeRegion.status.toUpperCase()}
              </span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 6px 0" }}>{activeRegion.name}</h3>
              <p style={{ color: "#58798C", fontSize: "0.95rem", margin: "0 0 24px 0" }}><i className="fas fa-map-marker-alt"></i> {activeRegion.location}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1.5px solid #F4F9FB", paddingTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#58798C", fontSize: "0.9rem" }}>Edge Latency Rate:</span>
                  <span style={{ fontFamily: "monospace", fontWeight: "bold", color: "var(--color-primary)", fontSize: "1.1rem" }}>{activeRegion.latency}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#58798C", fontSize: "0.9rem" }}>Autoscaling clusters:</span>
                  <span style={{ fontWeight: "700", color: "var(--color-primary)" }}>{activeRegion.clusters}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#58798C", fontSize: "0.9rem" }}>Node Core CPU Load:</span>
                  <span style={{ fontWeight: "700", color: "var(--color-primary)" }}>{activeRegion.load}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#58798C", fontSize: "0.9rem" }}>Encryption Security:</span>
                  <span style={{ fontWeight: "700", color: "#8E44AD", fontSize: "0.9rem" }}>{activeRegion.shield}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* side-by-side deliverables & outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
          
          {/* Deliverables Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-server"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Cloud-connected infrastructure systems",
                "Scalable backend environments",
                "Enterprise deployment architecture",
                "Integrated operational ecosystems",
                "Digital scalability systems",
                "Infrastructure optimization environments",
                "Connected enterprise platforms"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", color: "#395568", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}>
                  <span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}><i className="fas fa-check-circle"></i></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Outcomes Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid #8E44AD" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(142, 68, 173, 0.1)", color: "#8E44AD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>Business Outcomes</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Improved system scalability",
                "Better operational continuity",
                "Enhanced infrastructure reliability",
                "Scalable digital growth support",
                "Stronger operational connectivity",
                "Future-ready enterprise systems"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", color: "#1a2a35", fontWeight: "600", fontSize: "1.1rem", lineHeight: "1.6", alignItems: "center" }}>
                  <span style={{ color: "#8E44AD", fontSize: "1.2rem" }}><i className="fas fa-arrow-alt-circle-up"></i></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Operational Focus Areas Grid */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "16px" }}>Operational Focus Areas</h3>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted operational frameworks designed to scale workflows and coordinate enterprise ecosystems.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {[
              {
                title: "Scalable System Architecture",
                desc: "Building modern infrastructure capable of supporting operational growth and digital scalability.",
                icon: "fa-network-wired",
                color: "#13AAB3"
              },
              {
                title: "Enterprise Infrastructure Systems",
                desc: "Developing connected digital environments for operational continuity and performance.",
                icon: "fa-shield-alt",
                color: "#3498db"
              },
              {
                title: "Cloud & Deployment Environments",
                desc: "Creating scalable deployment systems designed for enterprise-grade reliability.",
                icon: "fa-cloud-upload-alt",
                color: "#e67e22"
              },
              {
                title: "Operational Connectivity",
                desc: "Integrating infrastructure layers that support intelligent operational workflows.",
                icon: "fa-link",
                color: "#2ecc71"
              }
            ].map((focus, i) => (
              <div key={i} className="eco-card" style={{ background: "white", padding: "36px", borderRadius: "16px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: `rgba(${focus.color === "#13AAB3" ? "19,170,179" : focus.color === "#3498db" ? "52,152,219" : focus.color === "#e67e22" ? "230,126,34" : "46,204,113"}, 0.1)`,
                  color: focus.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  marginBottom: "24px"
                }}>
                  <i className={`fas ${focus.icon}`}></i>
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{focus.title}</h4>
                <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <section style={{ padding: "80px 0", background: "var(--color-primary)", color: "white", textAlign: "center", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(14,25,33,0.15)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Deploy Scalable Infrastructure</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to secure your business workflows with enterprise-grade cloud nodes? Connect with our DevOps engineering division today.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>
              Discuss Implementation &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
