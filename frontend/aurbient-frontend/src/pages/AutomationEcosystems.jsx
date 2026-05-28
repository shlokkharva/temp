import { useState } from "react";
import { Link } from "react-router-dom";

export default function AutomationEcosystems() {
  const images = {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
  };

  const pipelines = [
    {
      name: "Ecommerce Order Fullfillment",
      trigger: "Web Inquiry / Shopify Sale",
      middleNodes: [
        { name: "ERP Order Validation", desc: "Cross-checks stock indices globally", speed: "15ms" },
        { name: "Logistic Route Matrix", desc: "Auto-selects optimal logistics node", speed: "40ms" }
      ],
      output: "Auto-Label Draft + Warehouse Alert Dispatch"
    },
    {
      name: "Document Processing Ingestion",
      trigger: "Vendor Invoice PDF Upload",
      middleNodes: [
        { name: "OCR Content Ingestion", desc: "Extracts values & tabular items", speed: "120ms" },
        { name: "Taxonomy Matching Node", desc: "Classifies line items with general ledger", speed: "65ms" }
      ],
      output: "Invoice Approval Routing + ERP Synced record"
    },
    {
      name: "Corporate Feedback Intake",
      trigger: "Inbound Customer Email Inquiry",
      middleNodes: [
        { name: "Semantic Tone Evaluation", desc: "Determines urgency & service tier SLA", speed: "22ms" },
        { name: "Contextual Draft Draft", desc: "Compiles dynamic AI suggested text replies", speed: "80ms" }
      ],
      output: "Auto-responder Draft Dispatch + CRM lead updated"
    }
  ];

  const [activePipeline, setActivePipeline] = useState(pipelines[0]);

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
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 02</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Business Process Automation</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Pipeline Throughput Orchestration Interface
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
                Operational inefficiencies often originate from repetitive manual processes, fragmented workflows, and disconnected reporting systems.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops automation ecosystems focused on improving execution speed, operational consistency, and workflow efficiency.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Modern automation systems should improve operational intelligence and workflow efficiency rather than simply replacing tasks."
              </p>
            </div>
          </div>
        </div>

        {/* PIPELINE VISUALIZATION COMPONENT */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Orchestrator Sandbox</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Active Pipeline Topology Map</h3>
          </div>

          {/* Selector Navigation Bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
            {pipelines.map((pipe, idx) => (
              <button
                key={idx}
                onClick={() => setActivePipeline(pipe)}
                style={{
                  padding: "14px 28px",
                  borderRadius: "30px",
                  border: "1.5px solid",
                  borderColor: activePipeline.name === pipe.name ? "var(--color-accent)" : "#E2EBE7",
                  background: activePipeline.name === pipe.name ? "rgba(19, 170, 179, 0.08)" : "white",
                  color: activePipeline.name === pipe.name ? "var(--color-primary)" : "#58798C",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {pipe.name}
              </button>
            ))}
          </div>

          {/* Topological Map Drawing */}
          <div className="eco-card" style={{ 
            background: "white", 
            padding: "50px", 
            borderRadius: "24px", 
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            border: "1.5px solid #E2EBE7" 
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between", 
              flexWrap: "wrap",
              gap: "24px",
              position: "relative" 
            }}>
              {/* Step 1: Input Trigger */}
              <div style={{ 
                flex: "1", 
                minWidth: "220px", 
                background: "#F4F9FB", 
                border: "1.5px solid #E2EBE7", 
                padding: "24px", 
                borderRadius: "16px",
                textAlign: "center" 
              }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>01. INPUT TRIGGER</span>
                <h4 style={{ color: "var(--color-primary)", fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>{activePipeline.trigger}</h4>
                <div style={{ marginTop: "12px", color: "#27c93f", fontSize: "0.85rem", fontWeight: "bold" }}>
                  <i className="fas fa-circle-notch fa-spin"></i> Monitoring...
                </div>
              </div>

              {/* Arrow Connector */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontSize: "1.5rem" }}>
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>

              {/* Step 2: Processing Nodes */}
              {activePipeline.middleNodes.map((node, i) => (
                <div key={i} style={{ display: "flex", gap: "24px", alignItems: "center", flex: "1.2", minWidth: "260px" }}>
                  <div style={{ 
                    flex: 1,
                    background: "var(--color-primary)", 
                    border: "1.5px solid rgba(19, 170, 179, 0.3)", 
                    padding: "24px", 
                    borderRadius: "16px",
                    color: "white"
                  }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>02. PROCESS MODULE</span>
                    <h4 style={{ color: "white", fontSize: "1.1rem", fontWeight: "700", marginBottom: "6px" }}>{node.name}</h4>
                    <p style={{ margin: "0 0 10px 0", color: "rgba(228,241,243,0.75)", fontSize: "0.85rem", lineHeight: "1.4" }}>{node.desc}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "10px" }}>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", fontWeight: "bold" }}>{node.speed}</span>
                      <span style={{ fontSize: "0.75rem", background: "rgba(39, 201, 63, 0.2)", color: "#27c93f", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" }}>OK</span>
                    </div>
                  </div>

                  {/* Arrow Connector inside loop */}
                  {i < activePipeline.middleNodes.length - 1 && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontSize: "1.5rem" }}>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  )}
                </div>
              ))}

              {/* Arrow Connector */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontSize: "1.5rem" }}>
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>

              {/* Step 3: Outputs Action */}
              <div style={{ 
                flex: "1", 
                minWidth: "220px", 
                background: "linear-gradient(180deg, #F4F9FB 0%, #FFFFFF 100%)", 
                border: "1.5px solid #E2EBE7", 
                padding: "24px", 
                borderRadius: "16px",
                textAlign: "center" 
              }}>
                <span style={{ fontSize: "0.75rem", color: "#8E44AD", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>03. AUTOMATED OUTPUT</span>
                <h4 style={{ color: "var(--color-primary)", fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>{activePipeline.output}</h4>
                <div style={{ marginTop: "12px", color: "#8E44AD", fontSize: "0.85rem", fontWeight: "bold" }}>
                  <i className="fas fa-check-double"></i> Executed
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
                <i className="fas fa-network-wired"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Workflow automation systems",
                "Process orchestration environments",
                "Reporting automation infrastructure",
                "Task coordination systems",
                "Operational automation workflows",
                "Process standardization systems",
                "Automated operational monitoring"
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
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>Business Outcomes</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Faster operational execution",
                "Improved workflow consistency",
                "Reduced repetitive manual work",
                "Better operational coordination",
                "Enhanced process visibility",
                "Increased efficiency across operations"
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
                title: "Workflow Automation",
                desc: "Automating repetitive operational tasks to improve efficiency and reduce manual dependency.",
                icon: "fa-magic",
                color: "#13AAB3"
              },
              {
                title: "Reporting Infrastructure",
                desc: "Developing automated reporting systems for faster operational visibility and management access.",
                icon: "fa-database",
                color: "#3498db"
              },
              {
                title: "Process Coordination",
                desc: "Creating connected operational environments capable of improving workflow consistency.",
                icon: "fa-project-diagram",
                color: "#e67e22"
              },
              {
                title: "Operational Standardization",
                desc: "Building structured systems that improve scalability and execution reliability.",
                icon: "fa-check-double",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Deploy Automation Ecosystems</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to automate repetitive operations? Connect with our business process engineering division to review your automation roadmap.
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
