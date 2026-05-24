const industries = [
  {
    num: "01",
    title: "Logistics & Supply Chain",
    description: "We deploy adaptive orchestration layers that synchronize freight movement, prevent port bottleneck choke points, and recalculate dispatch variables in low milliseconds.",
    tags: ["Dynamic Routing", "Congestion Forecasting", "Autonomous Dispatch", "Freight Vectoring"],
    icon: "fa-truck"
  },
  {
    num: "02",
    title: "Quantitative Finance",
    description: "Architecting zero-latency extraction grids to parser market telemetry, read global signals, and compile earnings micro-signals at sub-second scales.",
    tags: ["Micro-Signals Parser", "Zero-Latency Grids", "Portfolio Optimization", "Trend Synthesis"],
    icon: "fa-chart-pie"
  },
  {
    num: "03",
    title: "Aerospace & Satellites",
    description: "Powering telemetry ingests capable of managing hyper-dimensional coordinate files, trajectory drift equations, and robust off-grid data handshakes.",
    tags: ["Trajectory Engines", "Coordinate Mapping", "gRPC Pipelines", "Fail-Safe Handshakes"],
    icon: "fa-satellite"
  },
  {
    num: "04",
    title: "Autonomous Enterprise",
    description: "Injecting self-refining digital workflows across core architectures, enabling back-offices to execute exception handling and compliance tasks autonomously.",
    tags: ["Agentic Back-office", "Exception Handling", "Self-Tuning Compliance", "Data Synthesis"],
    icon: "fa-building"
  }
];

export default function Industries() {
  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Industry Verticals</div>
            <h1 style={{ fontSize: "3rem" }}>Sectors structured for compound scale</h1>
            <p style={{ margin: "0 auto 36px" }}>We adapt neural technologies directly to the unique dimensional challenges of mission-critical systems across four primary global sectors.</p>
          </div>
        </div>
      </section>

      <section className="ecosystem-showcase">
        <div className="container">
          <div className="ecosystem-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {industries.map((ind, i) => (
              <div key={i} className="eco-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: "16px" }}>
                  <i className={`fas ${ind.icon}`} style={{ fontSize: "2rem", color: "var(--color-accent)" }}></i>
                  <span style={{ fontSize: "2rem", fontWeight: "300", color: "#B8E4E7" }}>{ind.num}</span>
                </div>
                <h3 style={{ margin: "8px 0", fontSize: "1.6rem" }}>{ind.title}</h3>
                <p style={{ color: "#395568", marginTop: "8px", marginBottom: "24px" }}>{ind.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {ind.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: "0.7rem", background: "#E4F1F3", color: "var(--color-accent-hover)", padding: "4px 10px", borderRadius: "20px", textTransform: "uppercase", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
