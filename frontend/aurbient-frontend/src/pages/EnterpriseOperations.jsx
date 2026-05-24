import { Link } from "react-router-dom";

export default function EnterpriseOperations() {
  return (
    <main>
      <section className="hero" style={{ 
          padding: "140px 0 100px", 
          background: `linear-gradient(to right, rgba(13, 27, 42, 0.9) 0%, rgba(13, 27, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
          position: "relative", 
          overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-text" style={{ maxWidth: "800px" }}>
            <div className="hero-badge" style={{ marginBottom: "20px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}><i className="fas fa-building" style={{ marginRight: "8px" }}></i> Enterprise Operations</div>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "24px", color: "white" }}>Corporate Efficiency, Solved.</h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Eradicate bureaucratic bottlenecks with self-healing, agentic back-office workflows. Connect siloed departments and achieve total operational clarity.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Transform Operations →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)" }}>Key Capabilities</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Streamlining complex corporate environments.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-file-invoice-dollar" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Automated Finance Workflows</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>End-to-end automation of accounts payable, invoice processing, and financial reconciliations.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-user-tie" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>HR & Onboarding Orchestration</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Seamless digital onboarding experiences, automating document collection, system provisioning, and compliance checks.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-balance-scale" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Legal Document Analysis</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Utilize cognitive LLMs to instantly analyze contracts, flag risk areas, and organize critical legal data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Operational Challenge */}
      <section style={{ padding: "80px 0", background: "#F4F9FB", borderTop: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)", marginBottom: "20px" }}>The Bureaucratic Bottleneck</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Large enterprises bleed capital through operational friction. When HR, Finance, and Legal operate in disparate software ecosystems, workflows grind to a halt.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                Swivel-chair data entry, repetitive compliance checks, and manual invoice reconciliation drain thousands of hours from your most talented employees. Cognitive automation acts as the connective tissue that eliminates these silos.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "16px" }}>The Enterprise Automation Layer</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-network-wired" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Cross-Platform Sync:</strong> Bidirectional data flow between SAP, Workday, Salesforce, and legacy mainframes.</span>
                  </li>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-file-signature" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Cognitive Compliance:</strong> AI agents that continuously scan internal communications and contracts for regulatory risk.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-calculator" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Financial Reconciliation:</strong> Automate the matching of purchase orders to invoices and bank statements with 99.9% accuracy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container" style={{ padding: "80px 0" }}>
          <div className="build-ecosystem" style={{ margin: "0", background: "var(--color-primary)" }}>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "white" }}>Eliminate enterprise bureaucracy.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "600px", opacity: "0.85", color: "white" }}>
                  Let's identify the most expensive manual workflows in your organization and replace them with cognitive agents.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Start the Assessment →</Link>
          </div>
      </div>
    </main>
  );
}
