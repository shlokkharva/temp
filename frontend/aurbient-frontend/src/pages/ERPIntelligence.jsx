import { useState } from "react";
import { Link } from "react-router-dom";

export default function ERPIntelligence() {
  const images = {
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
  };

  const departments = [
    {
      name: "Sales & CRM Hub",
      badge: "Inbound Pipeline",
      color: "#13AAB3",
      endpoints: ["Leads API intake node", "Context qualification router", "Accounts database pipeline"],
      description: "Automates ingestion of incoming corporate website leads, qualifying their score, and syncing profiles directly with general contact ledgers."
    },
    {
      name: "Inventory Vault",
      badge: "Stock Sync Node",
      color: "#3498db",
      endpoints: ["Product SKU scanner node", "Warehouse asset locator", "Supply chain trigger alerts"],
      description: "Monitors and balances localized warehouse metrics in real-time, preventing out-of-stock anomalies and auto-triggering vendor purchasing."
    },
    {
      name: "Financial Ledger",
      badge: "Billing Loop",
      color: "#8E44AD",
      endpoints: ["Billing intake pipeline", "Tax reconciliation gate", "Accounts payable registry"],
      description: "Reconciles purchase orders, filters billing anomalies, and updates accounts payable nodes dynamically without requiring human auditing."
    },
    {
      name: "Logistics Routing",
      badge: "Fulfillment Edge",
      color: "#e67e22",
      endpoints: ["Shipping label dispatcher", "Logistics node locator", "SLA tracking monitor"],
      description: "Finds the fastest delivery networks based on geographical coordinates, schedules carriers, and reports fulfillment logs to customers."
    }
  ];

  const [activeDept, setActiveDept] = useState(departments[0]);

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
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 04</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>ERP & Management Platforms</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Modular Cross-Department Matrix Interface
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
                Modern enterprises require structured operational environments capable of supporting coordination, visibility, and scalable management workflows.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops ERP-oriented operational systems focused on enterprise coordination and workflow scalability.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "ERP environments become significantly more valuable when designed around operational clarity, coordination, and intelligent workflow management."
              </p>
            </div>
          </div>
        </div>

        {/* DEPARTMENTAL MATRIX INTERACTIVE LAYOUT */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Matrix Explorer</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>ERP Department Coordination Matrix</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "40px", alignItems: "start" }}>
            
            {/* Left buttons selection list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {departments.map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDept(dept)}
                  style={{
                    background: activeDept.name === dept.name ? "white" : "transparent",
                    border: "1.5px solid",
                    borderColor: activeDept.name === dept.name ? dept.color : "#E2EBE7",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow: activeDept.name === dept.name ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>{dept.name}</h4>
                    <span style={{ fontSize: "0.75rem", background: activeDept.name === dept.name ? `${dept.color}20` : "#F4F9FB", color: dept.color, padding: "2px 10px", borderRadius: "12px", fontWeight: "bold" }}>
                      {dept.badge}
                    </span>
                  </div>
                  <p style={{ color: "#58798C", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>Click to view data sync routing...</p>
                </button>
              ))}
            </div>

            {/* Right visual details card */}
            <div className="eco-card" style={{ 
              background: "white", 
              padding: "45px", 
              borderRadius: "24px", 
              border: "1.5px solid #E2EBE7",
              boxShadow: "0 15px 45px rgba(0,0,0,0.03)"
            }}>
              <span style={{ fontSize: "0.8rem", color: activeDept.color, textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Unified Platform Layer</span>
              <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "20px" }}>{activeDept.name} ERP Integration</h3>
              <p style={{ color: "#395568", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "30px" }}>{activeDept.description}</p>
              
              <div style={{ background: "#F4F9FB", padding: "30px", borderRadius: "16px", border: "1px dashed #E2EBE7" }}>
                <h4 style={{ fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Synced Endpoints Mapping:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeDept.endpoints.map((end, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "0.95rem", color: "#395568" }}>
                      <span style={{ color: activeDept.color }}><i className="fas fa-link"></i></span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>{end}</span>
                      <span style={{ marginLeft: "auto", fontSize: "0.75rem", background: "rgba(39, 201, 63, 0.15)", color: "#27c93f", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" }}>SYNCED</span>
                    </div>
                  ))}
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
                <i className="fas fa-building"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "ERP-oriented workflow systems",
                "Enterprise management platforms",
                "Operational coordination environments",
                "Department visibility systems",
                "Reporting & management dashboards",
                "Workflow standardization platforms",
                "Enterprise process infrastructure"
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
                "Better departmental coordination",
                "Centralized operational visibility",
                "Improved reporting accessibility",
                "Enhanced management oversight",
                "Structured operational workflows",
                "Increased enterprise scalability"
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
                title: "Enterprise Workflow Coordination",
                desc: "Building connected systems that improve cross-department operational execution.",
                icon: "fa-users-cog",
                color: "#13AAB3"
              },
              {
                title: "Management Visibility",
                desc: "Developing centralized visibility systems for operational monitoring and reporting.",
                icon: "fa-tachometer-alt",
                color: "#3498db"
              },
              {
                title: "Department Coordination Systems",
                desc: "Creating structured operational environments capable of supporting enterprise collaboration.",
                icon: "fa-project-diagram",
                color: "#e67e22"
              },
              {
                title: "Operational Standardization",
                desc: "Designing scalable workflow architectures for long-term operational efficiency.",
                icon: "fa-tools",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Deploy ERP Intelligence</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to modernize your business operations and ERP flow? Speak with our solution architects to structure a custom rollout.
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
