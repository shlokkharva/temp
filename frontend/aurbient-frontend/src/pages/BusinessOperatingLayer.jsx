import { useState } from "react";
import { Link } from "react-router-dom";

export default function BusinessOperatingLayer() {
  const images = {
    hero: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80"
  };

  const chatFAQ = [
    {
      q: "What is your system setup timeline?",
      a: "Typical discovery to active deployment ranges from 4 to 8 weeks, depending on the complexity of your custom database nodes and ledger synchronization paths."
    },
    {
      q: "Do you integrate with SAP/Oracle ERPs?",
      a: "Yes! Our ERP & Management platforms feature built-in sync adaptors engineered specifically to integrate with SAP, Oracle NetSuite, Microsoft Dynamics, and custom SQL databases."
    },
    {
      q: "Is operational data secure?",
      a: "Absolutely. All ingestion streams use multi-region secure servers protected by advanced Web Application Firewalls, TLS 1.3 certificates, and AES-256 ledger security."
    }
  ];

  const [activeFAQ, setActiveFAQ] = useState(chatFAQ[0]);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setFormSent(true);
    }
  };

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
          <span style={{ fontSize: "1rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "20px" }}>Solutions Architecture 06</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "30px", maxWidth: "900px", lineHeight: "1.15", textShadow: "0 4px 20px rgba(0,0,0,0.4)", fontWeight: "600" }}>Web & Enterprise Solutions</h1>
          <div style={{ display: "inline-block", padding: "10px 28px", background: "rgba(19, 170, 179, 0.15)", backdropFilter: "blur(10px)", color: "white", borderRadius: "50px", fontSize: "1rem", fontWeight: "600", border: "1px solid rgba(19, 170, 179, 0.4)" }}>
            Interactive Prototyping Canvas Interface
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container" style={{ position: "relative", zIndex: 10, marginTop: "-80px", paddingBottom: "80px" }}>
        
        {/* Executive Overview */}
        <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)", marginBottom: "50px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "24px", color: "var(--color-primary)", fontWeight: "600" }}>Section Introduction</h3>
              <p style={{ color: "#395568", marginBottom: "20px", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Enterprise digital environments should function as operational communication ecosystems rather than only online platforms.
              </p>
              <p style={{ color: "#395568", marginBottom: "0", lineHeight: "1.9", fontSize: "1.15rem" }}>
                Aurbient Technologies develops enterprise-grade web and digital systems focused on communication clarity, operational accessibility, and professional business presence.
              </p>
            </div>
            <div style={{ padding: "40px", background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", color: "white", borderRadius: "20px", boxShadow: "0 20px 40px rgba(26, 42, 53, 0.25)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", opacity: "0.05", fontSize: "140px" }}><i className="fas fa-quote-right"></i></div>
              <h4 style={{ marginBottom: "20px", color: "var(--color-accent)", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                <i className="fas fa-lightbulb"></i> Key Insight
              </h4>
              <p style={{ fontStyle: "italic", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, position: "relative", zIndex: 2 }}>
                "Modern enterprise websites should function as intelligent communication ecosystems connected to broader operational systems and business workflows."
              </p>
            </div>
          </div>
        </div>

        {/* PROTOTYPING CANVAS INTERACTIVE SYSTEM */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>Sandbox Prototype</span>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-primary)" }}>Active Portal Capability Canvas</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "40px", alignItems: "start" }}>
            
            {/* Left Box: Simulated Intake Form Integration */}
            <div className="eco-card" style={{ 
              background: "white", 
              padding: "40px", 
              borderRadius: "24px", 
              border: "1.5px solid #E2EBE7",
              boxShadow: "0 15px 45px rgba(0,0,0,0.03)" 
            }}>
              <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>Simulated Contact Intake Form</h4>
              <p style={{ color: "#58798C", fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "24px" }}>
                Demonstrates sub-millisecond client data ingestion synchronized directly to centralized lead metrics pipelines.
              </p>

              {formSent ? (
                <div style={{ background: "rgba(39, 201, 63, 0.1)", border: "1.5px solid #27c93f", padding: "24px", borderRadius: "16px", color: "var(--color-primary)", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", color: "#27c93f", display: "block", marginBottom: "12px" }}><i className="fas fa-check-circle"></i></span>
                  <h4 style={{ margin: "0 0 6px 0", fontWeight: "700" }}>Payload Ingested!</h4>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#58798C" }}>Lead profile for "{name}" was successfully synced with ERP Pipeline database.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", color: "var(--color-primary)", marginBottom: "6px" }}>CLIENT NAME:</label>
                    <input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      placeholder="e.g. Shlok Kharva" 
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1.5px solid #E2EBE7", fontSize: "0.95rem" }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "bold", color: "var(--color-primary)", marginBottom: "6px" }}>GSTIN NUMBER:</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 24AASFP5315P1ZM" 
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "1.5px solid #E2EBE7", fontSize: "0.95rem" }} 
                    />
                  </div>
                  <button type="submit" className="btn-premium" style={{ background: "var(--color-accent)", color: "var(--color-primary)", border: "none", cursor: "pointer", width: "100%", marginTop: "10px" }}>
                    Submit Simulated Lead &rarr;
                  </button>
                </form>
              )}
            </div>

            {/* Right Box: Simulated Floating AI Chatbot Assistant */}
            <div style={{ 
              background: "#080E13", 
              borderRadius: "24px", 
              border: "1.5px solid #13AAB3", 
              boxShadow: "0 20px 45px rgba(19, 170, 179, 0.15)",
              color: "#E4F1F3",
              overflow: "hidden"
            }}>
              {/* Chat Header */}
              <div style={{ background: "linear-gradient(90deg, var(--color-primary) 0%, #111d25 100%)", padding: "20px 24px", borderBottom: "1.5px solid rgba(19,170,179,0.2)", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f", boxShadow: "0 0 10px #27c93f" }}></div>
                <span style={{ fontWeight: "700", fontSize: "0.95rem", letterSpacing: "1px" }}>AURBIENT AI ASSIST</span>
              </div>

              {/* Chat Messages */}
              <div style={{ padding: "30px", minHeight: "220px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* User Message */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div style={{ background: "rgba(19, 170, 179, 0.15)", border: "1px solid rgba(19, 170, 179, 0.3)", padding: "12px 18px", borderRadius: "16px 16px 2px 16px", maxWidth: "80%", fontSize: "0.88rem", color: "#FFFFFF" }}>
                    {activeFAQ.q}
                  </div>
                </div>

                {/* AI response */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <div style={{ background: "#13212A", padding: "14px 20px", borderRadius: "16px 16px 16px 2px", maxWidth: "85%", fontSize: "0.88rem", lineHeight: "1.5", border: "1px solid rgba(255,255,255,0.05)" }}>
                    {activeFAQ.a}
                  </div>
                </div>
              </div>

              {/* Interactive buttons */}
              <div style={{ padding: "20px 30px 30px", borderTop: "1.5px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span style={{ fontSize: "0.75rem", color: "#58798C", width: "100%", marginBottom: "4px" }}>Click to ask simulated AI assistant:</span>
                {chatFAQ.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFAQ(faq)}
                    style={{
                      background: activeFAQ.q === faq.q ? "var(--color-accent)" : "transparent",
                      border: "1px solid",
                      borderColor: activeFAQ.q === faq.q ? "var(--color-accent)" : "rgba(19,170,179,0.3)",
                      borderRadius: "20px",
                      padding: "8px 16px",
                      fontSize: "0.78rem",
                      color: activeFAQ.q === faq.q ? "black" : "#13AAB3",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {faq.q.replace("What is your ", "").replace("Do you ", "").replace("Is ", "").replace("?", "")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* side-by-side deliverables & outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "60px" }}>
          
          {/* Deliverables Column */}
          <div className="eco-card" style={{ background: "white", padding: "50px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: "4px solid var(--color-accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                <i className="fas fa-globe"></i>
              </div>
              <h4 style={{ fontSize: "1.6rem", color: "var(--color-primary)", margin: 0, fontWeight: "600" }}>What We Deliver</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Enterprise website systems",
                "Operational communication platforms",
                "Scalable web environments",
                "Business accessibility systems",
                "Digital enterprise ecosystems",
                "Integrated inquiry systems",
                "Professional digital infrastructure"
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
                "Improved business visibility",
                "Better customer accessibility",
                "Enhanced communication flow",
                "Professional enterprise presence",
                "Scalable digital operations",
                "Structured online business ecosystems"
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
                title: "Enterprise Digital Presence",
                desc: "Designing professional digital environments capable of supporting business visibility and credibility.",
                icon: "fa-desktop",
                color: "#13AAB3"
              },
              {
                title: "Communication Infrastructure",
                desc: "Creating systems that improve operational communication and customer accessibility.",
                icon: "fa-comments",
                color: "#3498db"
              },
              {
                title: "Scalable Web Platforms",
                desc: "Developing scalable web architectures designed for long-term operational growth.",
                icon: "fa-expand-arrows-alt",
                color: "#e67e22"
              },
              {
                title: "Integrated Business Ecosystems",
                desc: "Building connected digital systems that support business workflows and enterprise communication.",
                icon: "fa-link",
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px", color: "white" }}>Deploy Web & Enterprise Solutions</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
              Ready to elevate your digital presence and connect it with active business processes? Reach out to our design and development division today.
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
