import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [buildFeedback, setBuildFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBuildSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !email.includes('@')) {
      setBuildFeedback('❌ Please provide your name and valid email to start the conversation.');
      return;
    }
    setBuildFeedback(`✓ Thank you, ${name}. An ecosystem architect will reach out within 24h. Let's build.`);
    setName('');
    setEmail('');
    setTimeout(() => setBuildFeedback(''), 5000);
  };

  return (
    <main>
        {/* Hero */}
        <section className="hero">
            <div className="container hero-flex">
                <div className="hero-text">
                    <div className="hero-badge"><i className="fas fa-infinity"></i> ambient intelligence</div>
                    <h1>Engineering intelligence for modern operations</h1>
                    <p>The operational layer behind what’s next. Transforming complexity into calm, connected infrastructure.</p>
                    <a href="#build" className="btn-premium" style={{ background:"var(--color-accent)", padding:"12px 36px" }}>Explore the ecosystem →</a>
                </div>
                <div className="hero-visual">
                    <div className="intelligence-nodes">
                        <div className="node" style={{ width: "140px", height: "140px", top: "15%", left: "10%", background: "var(--color-accent)" }}></div>
                        <div className="node" style={{ width: "220px", height: "220px", bottom: "10%", right: "5%", background: "var(--color-accent)", filter: "blur(36px)", animationDuration: "12s" }}></div>
                        <div className="node" style={{ width: "100px", height: "100px", top: "60%", left: "60%", background: "var(--color-accent-hover)" }}></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section">
            <div className="container insight-quote">
                <h2>Fragmented workflows, disconnected systems, operational blind spots.</h2>
                <p style={{ color: "#395568", maxWidth: "700px", margin: "0 auto" }}>
                    Modern enterprises are built on fragile connective tissue — data silos, manual handoffs, invisible inefficiencies. The cost is not just time, but strategic inertia.
                </p>
                <div className="flow-grid">
                    <div className="flow-stat"><h3>73%</h3><p>of leaders report disjointed systems block real-time decisions</p></div>
                    <div className="flow-stat"><h3>58%</h3><p>operational data never reaches execution layers</p></div>
                    <div className="flow-stat"><h3>2.4x</h3><p>faster scaling with orchestrated intelligence</p></div>
                </div>
            </div>
        </section>

        {/* Intelligence In Motion */}
        <section className="intelligence-motion">
            <div className="container">
                <div className="ambient-text">
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Intelligence in motion</h2>
                    <p style={{ marginTop: "16px", color: "#395568" }}>Synchronized systems. Connected infrastructure. An operating layer that adapts, anticipates, and orchestrates.</p>
                </div>
                <div className="ecosystem-visual">
                    <div className="layer-card">
                        <i className="fas fa-waveform" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "15px 0 8px" }}>Flow intelligence</h3>
                        <small style={{ color: "#58798C" }}>real-time synchronization</small>
                    </div>
                    <div className="layer-card">
                        <i className="fas fa-diagram-project" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "15px 0 8px" }}>Ecosystem mesh</h3>
                        <small style={{ color: "#58798C" }}>connected endpoints</small>
                    </div>
                    <div className="layer-card">
                        <i className="fas fa-brain" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "15px 0 8px" }}>Ambient reasoning</h3>
                        <small style={{ color: "#58798C" }}>invisible intelligence</small>
                    </div>
                </div>
            </div>
        </section>

        {/* Ecosystem Showcase */}
        <section className="ecosystem-showcase">
            <div className="container">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
                    <h2 style={{ fontSize: "2.2rem", fontWeight: "600" }}>How future-ready businesses function</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Visibility. Automation. Intelligence. Synchronized infrastructure. Operational confidence.</p>
                </div>
                <div className="ecosystem-grid">
                    <div className="eco-card">
                        <i className="fas fa-eye" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "16px 0 8px" }}>Total visibility</h3>
                        <p style={{ color: "#395568" }}>No blind spots. Real-time operational observability across every layer.</p>
                    </div>
                    <div className="eco-card">
                        <i className="fas fa-microchip" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "16px 0 8px" }}>Adaptive automation</h3>
                        <p style={{ color: "#395568" }}>Workflows that evolve with business conditions, not static rules.</p>
                    </div>
                    <div className="eco-card">
                        <i className="fas fa-chart-line" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "16px 0 8px" }}>Systemic intelligence</h3>
                        <p style={{ color: "#395568" }}>Invisible AI woven into decision architecture, not bolted on.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Transformation Layer */}
        <section style={{ padding: "40px 0 80px" }}>
            <div className="container">
                <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center", background: "#F4F9FB", borderRadius: "56px", padding: "48px" }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>From operational friction to intelligent flow</h2>
                        <p style={{ marginTop: "16px", color: "#395568", lineHeight: "1.6" }}>
                            The transformation isn’t incremental — it’s a re-architecture of how work propagates through your organization. Aurbient designs the invisible layer that aligns systems, teams, and data into a singular intelligent motion.
                        </p>
                    </div>
                    <div style={{ flex: 1, height: "220px", background: "radial-gradient(circle at 30% 40%, #B8E4E7, #85D4D9)", borderRadius: "44px" }}></div>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="ecosystem-showcase" style={{ paddingTop: "0" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Industries as living ecosystems</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Connected workflows, operational depth, and intelligence scaled across domains</p>
                </div>
                <div className="ecosystem-grid">
                    <div className="eco-card">
                        <i className="fas fa-industry" style={{ color:"var(--color-accent)", fontSize:"1.5rem", marginBottom:"10px" }}></i>
                        <h3>Manufacturing ecosystems</h3>
                        <p style={{ color: "#395568", marginTop:"8px" }}>Intelligent production flow, IIoT synchronization, autonomous quality layers</p>
                    </div>
                    <div className="eco-card">
                        <i className="fas fa-boxes" style={{ color:"var(--color-accent)", fontSize:"1.5rem", marginBottom:"10px" }}></i>
                        <h3>Logistics & flow</h3>
                        <p style={{ color: "#395568", marginTop:"8px" }}>Orchestrated supply chains, demand intelligence, real-time fleet adaptation</p>
                    </div>
                    <div className="eco-card">
                        <i className="fas fa-store" style={{ color:"var(--color-accent)", fontSize:"1.5rem", marginBottom:"10px" }}></i>
                        <h3>Retail intelligence</h3>
                        <p style={{ color: "#395568", marginTop:"8px" }}>Inventory ecosystems, unified commerce, predictive customer operations</p>
                    </div>
                    <div className="eco-card">
                        <i className="fas fa-building" style={{ color:"var(--color-accent)", fontSize:"1.5rem", marginBottom:"10px" }}></i>
                        <h3>Enterprise operating core</h3>
                        <p style={{ color: "#395568", marginTop:"8px" }}>Finance & HR automation, cognitive processes, enterprise operating layer</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Thought Leadership */}
        <section className="thought-layer">
            <div className="container">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>The intelligence horizon</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Perspectives on the future of operational infrastructure</p>
                </div>
                <div className="insight-row">
                    <div className="insight-item">
                        <i className="fas fa-microphone-alt" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "12px 0" }}>The rise of intelligent operations</h3>
                        <p style={{ color: "#395568" }}>Why ambient intelligence will replace fragmented automation stacks.</p>
                    </div>
                    <div className="insight-item">
                        <i className="fas fa-chart-simple" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "12px 0" }}>Beyond AI: systemic visibility</h3>
                        <p style={{ color: "#395568" }}>Organizations need operational memory, not just chatbots.</p>
                    </div>
                    <div className="insight-item">
                        <i className="fas fa-cloud" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        <h3 style={{ margin: "12px 0" }}>Future operating layer</h3>
                        <p style={{ color: "#395568" }}>Unified, predictable, adaptive infrastructure as competitive advantage.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <div className="container" id="build">
            <div className="build-ecosystem">
                <h2 style={{ fontSize: "2.4rem", fontWeight: "600" }}>Let’s build your intelligent infrastructure</h2>
                <p style={{ margin: "20px auto", maxWidth: "550px", opacity: "0.85" }}>
                    From vision to orchestrated reality. Partner with Aurbient to architect the invisible layer your business will depend on.
                </p>
                <form onSubmit={handleBuildSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginTop: "28px" }}>
                    <input 
                        type="text" 
                        placeholder="Full name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{ padding: "14px 20px", borderRadius: "60px", border: "none", width: "240px", background: "#FFFFFF", color: "var(--color-primary)" }} 
                    />
                    <input 
                        type="email" 
                        placeholder="Business email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ padding: "14px 20px", borderRadius: "60px", border: "none", width: "260px", background: "#FFFFFF", color: "var(--color-primary)" }} 
                    />
                    <button type="submit" className="btn-premium" style={{ background: "var(--color-accent)", color: "white", border: "none" }}>
                        Start transformation →
                    </button>
                </form>
                {buildFeedback && (
                    <div style={{ marginTop: "20px", fontSize: "0.85rem", color: "#A5D6D9" }}>{buildFeedback}</div>
                )}
                <p style={{ marginTop: "32px", fontSize: "0.75rem", opacity: 0.8 }}>
                    Schedule a strategic ecosystem briefing with our infrastructure architects
                </p>
            </div>
        </div>
    </main>
  );
}
