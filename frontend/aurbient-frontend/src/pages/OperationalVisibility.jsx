import { Link } from "react-router-dom";

export default function OperationalVisibility() {
  return (
    <main>
      <section className="hero" style={{ 
          padding: "140px 0 100px", 
          background: `linear-gradient(to right, rgba(13, 27, 42, 0.9) 0%, rgba(13, 27, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
          position: "relative", 
          overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-text" style={{ maxWidth: "800px" }}>
            <div className="hero-badge" style={{ marginBottom: "20px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}><i className="fas fa-eye" style={{ marginRight: "8px" }}></i> Operational Visibility</div>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "24px", color: "white" }}>Total Enterprise Clarity.</h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Aggregate fragmented data from hundreds of sources into a unified, real-time command center. See exactly what your business is doing, every second.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Achieve Total Visibility →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)" }}>System Capabilities</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Turning dark data into actionable insights.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-desktop" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Command Center UI</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Custom-built, high-performance dashboards that visualize metrics from every department in one highly secure interface.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-bell" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Intelligent Alerting</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Eliminate alert fatigue. AI analyzes system metrics and only notifies stakeholders when a true, actionable anomaly occurs.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-history" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Time-Series Telemetry</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Store and analyze billions of historical data points to instantly identify long-term operational trends and inefficiencies.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#F4F9FB", borderTop: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)", marginBottom: "20px" }}>The Dark Data Dilemma</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Most organizations only analyze 10% of the data they generate. The rest—server logs, supply chain telemetry, internal communications—sits idle as "dark data."
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                Without an operational visibility layer, executives make decisions based on month-old reports rather than real-time reality. Aurbient builds pipelines that bring every metric into the light.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "16px" }}>The Observability Stack</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-database" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Data Lakes:</strong> Aggregation architectures built on Snowflake, BigQuery, or Redshift.</span>
                  </li>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-code" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Custom ETL:</strong> Pipelines that securely Extract, Transform, and Load your data constantly.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-mobile-alt" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Executive Mobile Access:</strong> Secure, native mobile views into your enterprise health.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: "80px 0" }}>
          <div className="build-ecosystem" style={{ margin: "0", background: "var(--color-primary)" }}>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "white" }}>Stop flying blind.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "600px", opacity: "0.85", color: "white" }}>
                  Centralize your metrics and give your executive team the clarity they need to scale.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Build Your Dashboard →</Link>
          </div>
      </div>
    </main>
  );
}
