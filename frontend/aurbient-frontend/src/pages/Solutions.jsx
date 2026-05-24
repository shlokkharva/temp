import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Solutions() {
  const [heroBg, setHeroBg] = useState("/assets/ai_automation_hero.webp");

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/ai_automation_hero.webp";
    img.onerror = () => {
      setHeroBg("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80");
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ 
        position: "relative", 
        padding: "160px 0 140px", 
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Background Image Layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}></div>
        {/* Gradient Overlay for high-end readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.7) 0%, rgba(14,25,33,0.9) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ 
              display: "inline-block", 
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              backdropFilter: "blur(10px)"
            }}>
              <i className="fas fa-brain" style={{ marginRight: "8px" }}></i> AI Automation
            </div>
            <h1 style={{ 
              fontSize: "4.2rem", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>Autonomous operations.<br/>Infinite scale.</h1>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.85", 
              color: "#E4F1F3", 
              marginBottom: "40px",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Replace fragile manual overhead with intelligent, self-healing automated workflows. We deploy cognitive agents that read, reason, and adapt to business conditions in real-time.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link to="/contact" className="btn-premium" style={{ background: "var(--color-accent)", color: "var(--color-primary)", padding: "14px 32px", fontSize: "1.05rem", border: "none", fontWeight: "700" }}>Deploy an Agent →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section style={{ padding: "100px 0", background: "#FFFFFF", borderBottom: "1px solid #E6EEF4" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "350px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "16px", display: "block" }}>The Paradigm Shift</span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "700", marginBottom: "24px", color: "var(--color-primary)", lineHeight: "1.2" }}>Beyond basic scripting. <br/>Enter cognitive flow.</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                Traditional Robotic Process Automation (RPA) breaks the second a rule changes or a form is updated. Our AI Automation systems are fundamentally different.
              </p>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8" }}>
                Powered by state-of-the-art Large Language Models (LLMs) and computer vision, our automated workflows understand context, extract meaning from messy documents, and handle edge cases autonomously—without human intervention.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "350px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="eco-card" style={{ background: "#F4F9FB", display: "flex", gap: "20px", alignItems: "flex-start", padding: "30px", border: "1px solid rgba(19, 170, 179, 0.1)", borderRadius: "24px" }}>
                <i className="fas fa-microchip" style={{ color: "var(--color-accent)", fontSize: "1.5rem", marginTop: "4px" }}></i>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--color-primary)" }}>Contextual Reasoning</h4>
                  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6" }}>Agents that understand email threads, complex legal documents, and customer intent to route and process tasks intelligently.</p>
                </div>
              </div>
              <div className="eco-card" style={{ background: "#F4F9FB", display: "flex", gap: "20px", alignItems: "flex-start", padding: "30px", border: "1px solid rgba(19, 170, 179, 0.1)", borderRadius: "24px" }}>
                <i className="fas fa-network-wired" style={{ color: "var(--color-accent)", fontSize: "1.5rem", marginTop: "4px" }}></i>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--color-primary)" }}>Self-Healing Pipelines</h4>
                  <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6" }}>When UIs change or APIs update, semantic automation adapts on the fly without breaking the workflow, ensuring 99.9% uptime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section style={{ padding: "40px 0 80px", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ position: "relative", borderRadius: "40px", overflow: "hidden", border: "1px solid rgba(19,170,179,0.15)", boxShadow: "0 30px 70px rgba(14,25,33,0.12)", background: "var(--color-primary)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, rgba(14,25,33,0.9) 0%, rgba(14,25,33,0.2) 100%)", zIndex: 1 }}></div>
            <img 
              src="/assets/ai_automation_engine.webp" 
              alt="Aurbient AI Cognitive Workflow Engine" 
              style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }} 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80";
              }}
            />
            <div style={{ position: "absolute", bottom: "40px", left: "40px", right: "40px", zIndex: 2, color: "white" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Engine Architecture</span>
              <h3 style={{ fontSize: "2rem", fontWeight: "600", margin: "0 0 8px" }}>Cognitive Flow Orchestrator</h3>
              <p style={{ opacity: 0.85, margin: 0, maxWidth: "600px", fontSize: "1rem", lineHeight: "1.5" }}>
                Our proprietary agentic layer monitors data pipelines, translates natural language instructions into precise API execution sequences, and corrects path anomalies autonomously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="ecosystem-showcase" style={{ padding: "100px 0", background: "#FCFDFD" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)" }}>Core Automation Architecture</h2>
            <p style={{ color: "#58798C", marginTop: "16px", fontSize: "1.1rem" }}>A unified suite of intelligent capabilities engineered to remove bottlenecks and scale productivity effortlessly.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="eco-card" style={{ padding: "40px", borderRadius: "28px", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(19,170,179,0.08)", transition: "transform 0.3s ease" }}>
              <i className="fas fa-file-alt" style={{ fontSize: "2.2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Intelligent Document Processing</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Automatically extract, classify, and validate critical data from unstructured PDFs, invoices, and hand-written forms with near-perfect accuracy.</p>
            </div>
            
            <div className="eco-card" style={{ padding: "40px", borderRadius: "28px", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(19,170,179,0.08)", transition: "transform 0.3s ease" }}>
              <i className="fas fa-cogs" style={{ fontSize: "2.2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Multi-Agent Orchestration</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Deploy swarms of specialized AI agents that collaborate to solve complex, multi-step business problems autonomously in real-time.</p>
            </div>
            
            <div className="eco-card" style={{ padding: "40px", borderRadius: "28px", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(19,170,179,0.08)", transition: "transform 0.3s ease" }}>
              <i className="fas fa-comments" style={{ fontSize: "2.2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Cognitive Customer Ops</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>AI-driven autonomous support agents capable of resolving 80% of tier-1 and tier-2 interactions while maintaining human-level empathy.</p>
            </div>
            
            <div className="eco-card" style={{ padding: "40px", borderRadius: "28px", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(19,170,179,0.08)", transition: "transform 0.3s ease" }}>
              <i className="fas fa-chart-line" style={{ fontSize: "2.2rem", color: "var(--color-accent)", marginBottom: "20px" }}></i>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", color: "var(--color-primary)" }}>Predictive Decisioning</h3>
              <p style={{ color: "#58798C", lineHeight: "1.6" }}>Integrate predictive intelligence directly into workflows to preemptively trigger actions—like inventory reordering or fraud prevention.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Workflow Process */}
      <section style={{ padding: "100px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #F4F9FB 100%)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "16px", display: "block" }}>Integration Methodology</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)" }}>The Deployment Protocol</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "220px", textAlign: "center", padding: "20px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: "bold", margin: "0 auto 24px" }}>1</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--color-primary)" }}>Process Audit</h4>
              <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.5" }}>We map your existing manual workflows and identify high-ROI automation targets.</p>
            </div>
            <div style={{ flex: "1", minWidth: "220px", textAlign: "center", padding: "20px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: "bold", margin: "0 auto 24px" }}>2</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--color-primary)" }}>Agentic Design</h4>
              <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.5" }}>Architecting the cognitive prompts, API integrations, and necessary safety guardrails.</p>
            </div>
            <div style={{ flex: "1", minWidth: "220px", textAlign: "center", padding: "20px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: "bold", margin: "0 auto 24px" }}>3</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--color-primary)" }}>Silent Shadowing</h4>
              <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.5" }}>Agents run in parallel with human operators to validate accuracy without risk.</p>
            </div>
            <div style={{ flex: "1", minWidth: "220px", textAlign: "center", padding: "20px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(19,170,179,0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: "bold", margin: "0 auto 24px" }}>4</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--color-primary)" }}>Autonomous Scale</h4>
              <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.5" }}>Full deployment, providing 24/7 autonomous operation and continuous machine learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container" style={{ padding: "60px 0 100px" }}>
          <div className="build-ecosystem" style={{ margin: "0", background: "var(--color-primary)", padding: "80px 40px" }}>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "700", color: "white", letterSpacing: "-0.02em" }}>Stop managing tasks. Manage systems.</h2>
              <p style={{ margin: "20px auto 40px", maxWidth: "650px", opacity: "0.85", color: "white", fontSize: "1.1rem", lineHeight: "1.6" }}>
                  Schedule a technical discovery session to see exactly where cognitive AI agents can eliminate your organizational bottlenecks.
              </p>
              <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)", padding: "16px 40px", fontSize: "1.1rem" }}>Contact Us →</Link>
          </div>
      </div>
    </main>
  );
}
