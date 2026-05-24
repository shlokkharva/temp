import { Link } from "react-router-dom";

export default function AIWorkflowSystems() {
  return (
    <main>
      <section className="hero" style={{ 
          padding: "140px 0 100px", 
          background: `linear-gradient(to right, rgba(13, 27, 42, 0.9) 0%, rgba(13, 27, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
          position: "relative", 
          overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-text" style={{ maxWidth: "800px" }}>
            <div className="hero-badge" style={{ marginBottom: "20px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}><i className="fas fa-sitemap" style={{ marginRight: "8px" }}></i> AI Workflow Systems</div>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "24px", color: "white" }}>Self-Driving Business Logic.</h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Replace brittle if/then statements with cognitive workflows that adapt to exceptions, read natural language, and execute multi-step operations autonomously.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Automate Workflows →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)" }}>System Capabilities</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Building systems that think before they act.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-brain" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Agentic Decision Trees</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Workflows that use LLMs to dynamically route tasks based on sentiment, context, and unstructured data inputs.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-user-friends" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Human-in-the-Loop</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Systems that execute 95% of the work automatically, only pausing to ask human operators for approval on edge cases.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-layer-group" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Parallel Orchestration</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Launch thousands of concurrent processes that scale instantly on cloud infrastructure without bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#F4F9FB", borderTop: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)", marginBottom: "20px" }}>The Limit of Standard RPA</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Standard RPA (Robotic Process Automation) is brittle. If a UI button changes or a document format shifts slightly, the bot breaks.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                AI Workflow Systems utilize computer vision and language comprehension to understand *intent*, not just pixel coordinates. They read documents like humans do, making them incredibly resilient to changes in your environment.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "16px" }}>The Aurbient Workflow Standard</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-check-double" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Resiliency:</strong> Workflows that don't break when a third-party vendor updates their website.</span>
                  </li>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-file-alt" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Unstructured Data:</strong> Process raw emails, PDFs, and voicemails into structured JSON data automatically.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-chart-bar" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Full Traceability:</strong> Every AI decision is logged, providing total auditability for compliance teams.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: "80px 0" }}>
          <div className="build-ecosystem" style={{ margin: "0", background: "var(--color-primary)" }}>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "white" }}>Upgrade to cognitive automation.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "600px", opacity: "0.85", color: "white" }}>
                  Move past brittle scripts and implement workflows that think, adapt, and execute.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Deploy AI Workflows →</Link>
          </div>
      </div>
    </main>
  );
}
