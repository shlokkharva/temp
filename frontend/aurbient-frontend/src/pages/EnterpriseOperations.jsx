import { Link } from "react-router-dom";

export default function EnterpriseOperations() {
  const image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80";

  return (
    <main style={{ background: "#F4F9FB", minHeight: "100vh" }}>
      {/* Immersive Cinematic Hero Header */}
      <section className="hero case-study-hero" style={{ 
        position: "relative", 
        padding: "160px 0 160px", 
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14, 25, 33, 0.95) 0%, rgba(14, 25, 33, 0.5) 60%, rgba(14, 25, 33, 0.7) 100%)", zIndex: 1 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <Link 
            to="/" 
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
            <i className="fas fa-arrow-left"></i> Back to Industries
          </Link>
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Industries Ecosystem 05</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Enterprise Operations & Administrative Integration</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            General Ledger & HR Sync Administration Console
          </div>
        </div>
      </section>

      {/* Main Overlapping Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Unified Administrative Operations</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Large enterprises handle extensive daily data entry tasks across specialized administrative platforms. Connecting HR systems, accounting ledgers, and inventory layers is necessary to reduce execution bottlenecks.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies builds connected corporate software environments that automate document processing, reconcile general ledgers, and sync distributed databases.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Enterprise scaling is bottlenecked by manual administrative syncs. Integrating database records unlocks clean corporate coordination."
              </p>
            </div>
          </div>
        </div>

        {/* side-by-side deliverables & focus areas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
          
          {/* Deliverables Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-cogs"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "ERP and CRM data sync databases",
                "AI-assisted ledger audit pipelines",
                "Secure HR directory gateways",
                "Custom business intelligence dashboards",
                "Automated invoice verification engines",
                "Compliance status and hazard auditing",
                "Multi-department cloud channels"
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
                "92% reduction in general ledger sync errors",
                "Over 120 employee hours saved weekly",
                "Zero manual data transfer delays",
                "Absolute financial and HR visibility",
                "Automated audit record preparation",
                "Highly synchronized strategic coordination"
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
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Targeted engineering systems designed to coordinate modern enterprise operations.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {[
              {
                title: "General Ledger Sync",
                desc: "Link HR directories, financial general ledgers, CRM, and task managers into one self-healing operational pipeline.",
                icon: "fa-project-diagram",
                color: "#13AAB3"
              },
              {
                title: "Process Automation",
                desc: "Deploy AI process automation that processes invoices, generates regulatory reports, and triggers compliance updates.",
                icon: "fa-brain",
                color: "#3498db"
              },
              {
                title: "Observability Portals",
                desc: "Aggregate distributed operational data into glassmorphic dashboards, ensuring management has absolute strategic clarity.",
                icon: "fa-chart-pie",
                color: "#e67e22"
              },
              {
                title: "Security Framework",
                desc: "Ensure absolute data isolation and credential security across multi-site administrative departments.",
                icon: "fa-shield-alt",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Architect Your Enterprise Operating Layer</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Collaborate with our systems specialists to design an automated operational ecosystem that breaks down department silos and unlocks true scaling leverage.
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
