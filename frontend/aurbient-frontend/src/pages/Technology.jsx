const techLayers = [
  {
    layer: "Layer 01",
    name: "Cognitive Synthesizers",
    desc: "Autonomous reasoning nodes capable of hyper-dimensional inference. Powered by tailored local LLMs optimized for operational flowcharts and exception routing.",
    stack: ["Fine-Tuned LLMs", "Multi-Agent gRPC", "Synthesizer Cores", "Dynamic Reasoning"]
  },
  {
    layer: "Layer 02",
    name: "Vector & Knowledge Grids",
    desc: "Realtime similarity matching indices that ingestion thousands of structured and unstructured documents per second, mapping them directly to active workflows.",
    stack: ["pgvector Core", "Hierarchical Indexes", "Metadata Routing", "Crossfade Vectoring"]
  },
  {
    layer: "Layer 03",
    name: "Low-Latency Ingest Nodes",
    desc: "High-speed streaming endpoints configured using Rust and Go to ingest orbital metrics, portfolio adjustments, and shipment telemetry without thread overhead.",
    stack: ["Rust / Go Cores", "gRPC Streaming", "WebSocket Clusters", "Zero-Allocation"]
  },
  {
    layer: "Layer 04",
    name: "Visual Interfacing Systems",
    desc: "Stunning web dashboards and analytics interfaces designed with React, HTML5 canvas loops, and modern toolchains for immediate micro-action deployment.",
    stack: ["React 18+", "Tailwind CSS", "Aurbient UI", "Data Visualization"]
  }
];

export default function Technology() {
  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Architecture & Stack</div>
            <h1 style={{ fontSize: "3rem" }}>The stack built for cognitive speed</h1>
            <p style={{ margin: "0 auto 36px" }}>Aurbient's technology system merges enterprise-grade containerization with localized vector representation grids, delivering intelligence at the absolute speed of need.</p>
          </div>
        </div>
      </section>

      <section className="thought-layer" style={{ background: "transparent" }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {techLayers.map((layer, index) => (
              <div key={index} className="eco-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px" }}>{layer.layer}</span>
                    <h3 style={{ margin: "8px 0 12px", fontSize: "1.8rem" }}>{layer.name}</h3>
                    <p style={{ color: "#395568", maxWidth: "700px" }}>{layer.desc}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '300px' }}>
                    {layer.stack.map((item, i) => (
                      <span key={i} style={{ fontSize: "0.75rem", background: "#E4F1F3", color: "var(--color-accent-hover)", padding: "6px 12px", borderRadius: "20px", fontWeight: "600" }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
