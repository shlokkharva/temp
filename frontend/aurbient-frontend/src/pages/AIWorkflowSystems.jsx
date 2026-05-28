import { useState } from "react";
import { Link } from "react-router-dom";

export default function AIWorkflowSystems() {
  const images = {
    hero: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80",
    simulationBg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  };

  const tasks = [
    {
      title: "Lead Qualification Agent",
      prompt: "Evaluate new inquiry from website, cross-reference database for corporate records, qualify pipeline tier.",
      steps: [
        { name: "Ingest Data Payload", status: "Completed", details: "Acquired form submit from Shlok Kharva @ Parul Chemicals" },
        { name: "Semantic Context Matching", status: "Completed", details: "Identified match: Enterprise manufacturing group, GSTIN validated" },
        { name: "Cognitive Score Generation", status: "Completed", details: "Generated tier score: 9.8/10 (High priority enterprise lead)" },
        { name: "API Operations Dispatch", status: "Active", details: "Injecting CRM payload, triggering high-priority Slack notifications" }
      ]
    },
    {
      title: "Automated Invoicing Audit",
      prompt: "Extract values from vendor PDF invoice, cross-audit items with central ERP ledger, flag price anomalies.",
      steps: [
        { name: "PDF OCR Parse", status: "Completed", details: "Processed invoice_38402.pdf, extracted $42,500 total" },
        { name: "Ledger Reconciliation", status: "Completed", details: "Matched Purchase Order PO_92049, verified quantities" },
        { name: "Anomaly Detection Scan", status: "Completed", details: "Discovered $240 shipping fee variance from contracted $0 rate" },
        { name: "Action Routing Dispatch", status: "Completed", details: "Flagged mismatch, auto-drafted correction email to vendor" }
      ]
    },
    {
      title: "Customer Escalation Router",
      prompt: "Audit inbound ticket text, identify frustration index, extract operational context, auto-route with draft.",
      steps: [
        { name: "Sentiment Analysis", status: "Completed", details: "Detected 'High Urgency' + 'Frustrated' sentiment index" },
        { name: "Context Ingestion", status: "Completed", details: "Identified issue: ERP API synchronization delay" },
        { name: "Database Record Pull", status: "Completed", details: "Matched client SLA: Gold Tier (4-hour response required)" },
        { name: "Intelligent Draft Dispatch", status: "Active", details: "Drafting apologies, requesting system logs, routing to Dev Lead" }
      ]
    }
  ];

  const [activeTask, setActiveTask] = useState(tasks[0]);

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
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 01</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>AI Integration & Intelligent Workflows</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Cognitive Agent Console Interface
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Intelligent Operations Ecosystem</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Modern businesses require intelligent systems capable of improving operational clarity, workflow coordination, and decision-making efficiency.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops AI-integrated operational environments designed to support scalable business execution through intelligent workflows and connected digital systems.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Core Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "AI becomes most valuable when integrated into real operational workflows capable of improving execution efficiency and business scalability."
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE AGENT PLAYGROUND CONSOLE */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Interactive Preview</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Cognitive Agent Execution Simulator</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "30px" }}>
            {/* Task Selector Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {tasks.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTask(t)}
                  style={{
                    background: activeTask.title === t.title ? "white" : "transparent",
                    border: "1.5px solid",
                    borderColor: activeTask.title === t.title ? "var(--color-accent)" : "#E2EBE7",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow: activeTask.title === t.title ? "0 10px 30px rgba(0,0,0,0.04)" : "none",
                    transition: "all 0.2s"
                  }}
                >
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 8px 0" }}>{t.title}</h4>
                  <p style={{ color: "#58798C", fontSize: "0.85rem", margin: 0, lineHeight: "1.5", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{t.prompt}</p>
                </button>
              ))}
            </div>

            {/* Console Screen Screen */}
            <div style={{ 
              background: "radial-gradient(circle at 50% 50%, #0F1D26 0%, #060D12 100%)", 
              borderRadius: "24px", 
              border: "1.5px solid #13AAB3", 
              boxShadow: "0 20px 50px rgba(19, 170, 179, 0.15)",
              padding: "40px",
              color: "#E4F1F3",
              fontFamily: "'Courier New', Courier, monospace",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: "15px", left: "20px", display: "flex", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }}></span>
              </div>
              <div style={{ position: "absolute", top: "12px", right: "20px", fontSize: "0.8rem", color: "rgba(19, 170, 179, 0.6)", fontWeight: "bold" }}>COGNITIVE_CORE_v1.0</div>

              <div style={{ borderBottom: "1.5px solid rgba(19, 170, 179, 0.2)", paddingBottom: "20px", marginTop: "10px", marginBottom: "30px" }}>
                <span style={{ color: "#13AAB3" }}>$ init_agent_prompt: </span>
                <span style={{ color: "#FFFFFF" }}>"{activeTask.prompt}"</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {activeTask.steps.map((step, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: "1.5px solid",
                      borderColor: step.status === "Completed" ? "#27c93f" : "#13AAB3",
                      background: step.status === "Completed" ? "rgba(39, 201, 63, 0.1)" : "rgba(19, 170, 179, 0.1)",
                      color: step.status === "Completed" ? "#27c93f" : "#13AAB3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      marginTop: "2px"
                    }}>
                      {step.status === "Completed" ? <i className="fas fa-check"></i> : <i className="fas fa-sync fa-spin"></i>}
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                        <span style={{ fontWeight: "700", color: "#FFFFFF", fontSize: "0.95rem" }}>{step.name}</span>
                        <span style={{ 
                          fontSize: "0.75rem", 
                          color: step.status === "Completed" ? "#27c93f" : "#13AAB3", 
                          fontWeight: "bold", 
                          textTransform: "uppercase" 
                        }}>[{step.status}]</span>
                      </div>
                      <p style={{ margin: "4px 0 0 0", color: "#87A4B6", fontSize: "0.85rem", lineHeight: "1.5" }}>{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                "AI-assisted workflow systems",
                "Intelligent operational automation",
                "Predictive process insights",
                "AI-powered reporting environments",
                "Smart business coordination systems",
                "Decision-support infrastructures",
                "Operational intelligence integration"
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
                "Improved operational efficiency",
                "Faster decision-making processes",
                "Better workflow coordination",
                "Enhanced reporting visibility",
                "Reduced manual process dependency",
                "Intelligent operational scalability"
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
                title: "Intelligent Workflow Coordination",
                desc: "Designing systems that connect business workflows with intelligent automation and operational visibility.",
                icon: "fa-project-diagram",
                color: "#13AAB3"
              },
              {
                title: "AI-Assisted Reporting",
                desc: "Creating reporting environments capable of improving management visibility and operational clarity.",
                icon: "fa-file-invoice-dollar",
                color: "#3498db"
              },
              {
                title: "Intelligent Decision Systems",
                desc: "Integrating AI-driven operational insights to support faster and more informed business decisions.",
                icon: "fa-brain",
                color: "#e67e22"
              },
              {
                title: "Scalable AI Infrastructure",
                desc: "Building scalable AI environments capable of supporting modern enterprise operations.",
                icon: "fa-server",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Scale Your Operations Today</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to implement intelligent workflow systems? Our deployment engineering team will help configure autonomous coordination pipelines suited to your enterprise scale.
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
