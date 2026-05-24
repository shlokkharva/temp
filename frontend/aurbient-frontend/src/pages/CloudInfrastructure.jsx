import { Link } from "react-router-dom";

export default function CloudInfrastructure() {
  return (
    <main>
      <section className="hero" style={{ 
          padding: "140px 0 100px", 
          background: `linear-gradient(to right, rgba(13, 27, 42, 0.9) 0%, rgba(13, 27, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
          position: "relative", 
          overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-text" style={{ maxWidth: "800px" }}>
            <div className="hero-badge" style={{ marginBottom: "20px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}><i className="fas fa-cloud" style={{ marginRight: "8px" }}></i> Cloud Infrastructure</div>
            <h1 style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "24px", color: "white" }}>Infinite Scalability.</h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.85)", maxWidth: "650px", marginBottom: "40px", lineHeight: "1.6" }}>
              Migrate, optimize, and secure your enterprise architectures on the cloud. Build resilient foundations that can handle massive AI workloads effortlessly.
            </p>
            <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Deploy Infrastructure →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)" }}>System Capabilities</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem" }}>Architecting the backbone of modern enterprise.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-server" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Serverless Compute</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Eliminate server management. Deploy code that automatically scales from zero to millions of requests per second, paying only for what you use.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-shield-alt" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Zero-Trust Security</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Implement military-grade VPCs, IAM roles, and encrypted data pipelines to ensure your IP remains completely isolated and secure.</p>
            </div>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "24px", background: "#F4F9FB" }}>
              <i className="fas fa-cubes" style={{ fontSize: "2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Container Orchestration</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Utilize Kubernetes and Docker to ensure your applications run identically across all environments with zero downtime deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#F4F9FB", borderTop: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{ fontSize: "2.4rem", color: "var(--color-primary)", marginBottom: "20px" }}>The On-Premises Trap</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Maintaining physical servers or poorly optimized legacy cloud instances leads to massive capital expenditure, security vulnerabilities, and an inability to scale during traffic spikes.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                Furthermore, modern AI workloads require specialized GPU provisioning that is impossible to maintain on-premises. Aurbient architects cloud-native environments designed specifically for cognitive automation.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "16px" }}>The Cloud Native Approach</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fab fa-aws" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Multi-Cloud Strategy:</strong> Architectures spanning AWS, GCP, and Azure to prevent vendor lock-in.</span>
                  </li>
                  <li style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-dollar-sign" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>FinOps Optimization:</strong> AI-driven auditing to shut down idle resources and optimize your cloud billing automatically.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <i className="fas fa-laptop-code" style={{ color: "var(--color-accent)", marginTop: "4px" }}></i>
                    <span style={{ color: "#58798C", lineHeight: "1.5" }}><strong>Infrastructure as Code:</strong> Entire server networks deployed instantly via Terraform scripts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: "80px 0" }}>
          <div className="build-ecosystem" style={{ margin: "0", background: "var(--color-primary)" }}>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "white" }}>Modernize your foundation.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "600px", opacity: "0.85", color: "white" }}>
                  Let's audit your current infrastructure and design a cloud-native architecture built for the future.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>Consult an Architect →</Link>
          </div>
      </div>
    </main>
  );
}
