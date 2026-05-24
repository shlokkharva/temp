import { Link } from "react-router-dom";

export default function SMEs() {
  return (
    <main>
      <section className="hero" style={{ 
          padding: "140px 0 100px", 
          background: `linear-gradient(to right, rgba(13, 27, 42, 0.9) 0%, rgba(13, 27, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
          position: "relative", 
          overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-text" style={{ maxWidth: "800px" }}>
            <div className="hero-badge" style={{ marginBottom: "20px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}><i className="fas fa-store" style={{ marginRight: "8px" }}></i> SMEs</div>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "24px", color: "white" }}>Enterprise AI for Small Business.</h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Enterprise-grade operational intelligence, scaled and priced for growing businesses. Punch above your weight class with intelligent automation.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Accelerate Growth →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)" }}>Key Capabilities</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Leveling the playing field with AI.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-address-book" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Turnkey CRM Automation</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Automatically enrich leads, schedule follow-ups, and update your CRM directly from email conversations.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-chart-pie" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Cash Flow Forecasting</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Predictive models that analyze your accounting software to provide highly accurate, forward-looking cash flow metrics.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-robot" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Lean Support Agents</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Provide 24/7 customer service with AI agents that know your business inside and out, handling inquiries without overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Operational Challenge */}
      <section style={{ padding: "80px 0", background: "#F4F9FB", borderTop: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)", marginBottom: "20px" }}>The Scaling Dilemma</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Small and medium enterprises often hit a growth ceiling. Your core team is forced to wear too many hats, juggling customer support, lead generation, and bookkeeping instead of focusing on strategic growth.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                Traditionally, fixing this meant hiring more overhead or buying expensive enterprise software. Aurbient changes the equation, offering turnkey cognitive agents that act as your virtual operations team at a fraction of the cost.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "16px" }}>The SME AI Toolkit</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-funnel-dollar" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Autonomous Lead Gen:</strong> Agents that monitor inbound inquiries, qualify leads, and auto-populate your CRM.</span>
                  </li>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-comments" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>24/7 Virtual Support:</strong> LLMs trained exclusively on your business docs to handle customer queries instantly.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-file-invoice" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Zero-Touch Accounting:</strong> Automatically categorize expenses, generate invoices, and flag cash-flow anomalies.</span>
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
              <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "white" }}>Punch above your weight class.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "600px", opacity: "0.85", color: "white" }}>
                  You don't need an enterprise budget to access enterprise-grade AI. Discover how Aurbient scales with your business.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Contact Us →</Link>
          </div>
      </div>
    </main>
  );
}
