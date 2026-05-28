import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OperationalVisibility() {
  const images = {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
  };

  // State for simulated updating live metrics
  const [eventCount, setEventCount] = useState(384029);
  const [activeLogs, setActiveLogs] = useState([
    { time: "13:10:02", msg: "Operational visibility node AP-SOUTH connected.", status: "INFO" },
    { time: "13:10:45", msg: "Automated billing audit matching index reconciled.", status: "SUCCESS" },
    { time: "13:11:12", msg: "Sales pipeline data ingestion sync complete.", status: "SUCCESS" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment event counts randomly to simulate active traffic
      setEventCount(prev => prev + Math.floor(Math.random() * 8) + 2);
      
      // Update logs occasionally
      const sampleLogs = [
        "Cloud node US-EAST load balanced successfully.",
        "Ingested form payload, qualified Lead 4820.",
        "Operational database latency stabilized at 12ms.",
        "Central ERP synchronization complete.",
        "Automated reporting dashboard index refreshed."
      ];
      const randomMsg = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
      const randomStatus = Math.random() > 0.3 ? "SUCCESS" : "INFO";
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      setActiveLogs(prev => [
        { time: timeStr, msg: randomMsg, status: randomStatus },
        prev[0],
        prev[1]
      ]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 03</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Operational Intelligence Systems</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Real-Time Diagnostic Console Interface
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
                Businesses require centralized visibility systems capable of improving operational monitoring, workflow coordination, and strategic decision-making.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops operational intelligence environments focused on real-time visibility, management reporting, and enterprise coordination.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Operational intelligence systems help businesses transform fragmented operational environments into connected decision ecosystems."
              </p>
            </div>
          </div>
        </div>

        {/* LIVE EXECUTIVE COMMAND DASHBOARD COMPONENT */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Live Telemetry</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Centralized Diagnostic Command Center</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "30px" }}>
            
            {/* KPI Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="eco-card" style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.85rem", color: "#58798C", fontWeight: "700", textTransform: "uppercase" }}>Event Throughput</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "1rem", justifyContent: "center" }}><i className="fas fa-chart-line"></i></div>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--color-primary)", margin: "0 0 4px 0", fontFamily: "monospace" }}>{eventCount.toLocaleString()}</h3>
                  <span style={{ color: "#27c93f", fontSize: "0.85rem", fontWeight: "bold" }}><i className="fas fa-arrow-up"></i> Live Ingestion Stream</span>
                </div>
              </div>

              <div className="eco-card" style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.85rem", color: "#58798C", fontWeight: "700", textTransform: "uppercase" }}>Ecosystem SLA</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.1)", color: "#27c93f", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "1rem", justifyContent: "center" }}><i className="fas fa-check-circle"></i></div>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--color-primary)", margin: "0 0 4px 0", fontFamily: "monospace" }}>99.98%</h3>
                  <span style={{ color: "#27c93f", fontSize: "0.85rem", fontWeight: "bold" }}><i className="fas fa-shield-alt"></i> Perfect Operation</span>
                </div>
              </div>

              <div className="eco-card" style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.85rem", color: "#58798C", fontWeight: "700", textTransform: "uppercase" }}>Avg Latency</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(52, 152, 219, 0.1)", color: "#3498db", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "1rem", justifyContent: "center" }}><i className="fas fa-tachometer-alt"></i></div>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--color-primary)", margin: "0 0 4px 0", fontFamily: "monospace" }}>24ms</h3>
                  <span style={{ color: "#3498db", fontSize: "0.85rem", fontWeight: "bold" }}>Sub-millisecond Edge</span>
                </div>
              </div>

              <div className="eco-card" style={{ background: "white", padding: "30px", borderRadius: "20px", border: "1.5px solid #E2EBE7", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.85rem", color: "#58798C", fontWeight: "700", textTransform: "uppercase" }}>Connected Nodes</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(142, 68, 173, 0.1)", color: "#8E44AD", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "1rem", justifyContent: "center" }}><i className="fas fa-network-wired"></i></div>
                </div>
                <div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--color-primary)", margin: "0 0 4px 0", fontFamily: "monospace" }}>32 Channels</h3>
                  <span style={{ color: "#8E44AD", fontSize: "0.85rem", fontWeight: "bold" }}>Central Sync Routing</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Operations Terminal Log */}
            <div style={{ 
              background: "#080E13", 
              borderRadius: "24px", 
              border: "1.5px solid #E2EBE7", 
              padding: "36px", 
              color: "#E4F1F3",
              fontFamily: "'Courier New', Courier, monospace",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px", marginBottom: "20px" }}>
                <span style={{ fontWeight: "bold", color: "var(--color-accent)", fontSize: "0.95rem" }}>DIAGNOSTIC_LOGGER_STREAM</span>
                <span style={{ fontSize: "0.75rem", background: "#27c93f", color: "black", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" }}>STREAM_ACTIVE</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                {activeLogs.map((log, idx) => (
                  <div key={idx} style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                    <span style={{ color: "rgba(19, 170, 179, 0.6)" }}>[{log.time}] </span>
                    <span style={{ color: log.status === "SUCCESS" ? "#27c93f" : "#3498db", fontWeight: "bold" }}>[{log.status}] </span>
                    <span style={{ color: "#E4F1F3" }}>{log.msg}</span>
                  </div>
                ))}
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
                <i className="fas fa-desktop"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Management visibility systems",
                "Operational dashboards",
                "Reporting intelligence platforms",
                "Data coordination systems",
                "Workflow monitoring environments",
                "Enterprise visibility infrastructure",
                "Operational analytics systems"
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
                "Improved operational visibility",
                "Faster management reporting access",
                "Better workflow coordination",
                "Enhanced enterprise monitoring",
                "Increased operational transparency",
                "Smarter operational decision-making"
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
                title: "Real-Time Operational Visibility",
                desc: "Creating centralized environments for monitoring workflows, reporting systems, and business operations.",
                icon: "fa-eye",
                color: "#13AAB3"
              },
              {
                title: "Management Reporting Systems",
                desc: "Building intelligent reporting infrastructures for enterprise-level visibility.",
                icon: "fa-file-signature",
                color: "#3498db"
              },
              {
                title: "Workflow Monitoring",
                desc: "Designing operational tracking systems that improve execution clarity and coordination.",
                icon: "fa-stream",
                color: "#e67e22"
              },
              {
                title: "Data Visibility Infrastructure",
                desc: "Developing connected systems for structured operational insights and reporting access.",
                icon: "fa-project-diagram",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Scale Decision Ecosystems</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to unify your company metrics into a real-time command suite? Connect with our systems architecture team to plan a dashboard rollout.
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
