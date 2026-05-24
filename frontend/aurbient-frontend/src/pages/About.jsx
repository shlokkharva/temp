import { useState, useEffect } from "react";

export default function About() {
  const [heroBg, setHeroBg] = useState("/assets/about_hero.webp");

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/about_hero.webp";
    img.onerror = () => {
      setHeroBg("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80");
    };
  }, []);

  return (
    <main>
      {/* About The Company Section */}
      <section className="hero" style={{ 
        position: "relative", 
        padding: "160px 0 140px", 
        minHeight: "70vh",
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
            }}>About Us</div>
            <h1 style={{ 
              fontSize: "4.2rem", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>About The Company</h1>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.85", 
              color: "#E4F1F3", 
              marginBottom: "0",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Established in 2026 as a registered MSME in Indore, Madhya Pradesh, Aurbient Technologies was built on a single, powerful conviction: that complexity is not a barrier, but an opportunity. We design intelligent systems that live, learn, and grow alongside your enterprise, bridging the gap between legacy infrastructure and cognitive automation.
            </p>
          </div>
        </div>
      </section>

      {/* The Aurbient Paradigm / Detailed Info Section */}
      <section style={{ padding: "80px 0", background: "#F9FCFD" }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1.5px", display: "block", marginBottom: "16px" }}>Our Philosophy</span>
              <h2 style={{ fontSize: "2.8rem", marginBottom: "24px", color: "var(--color-primary)", lineHeight: "1.2" }}>Intelligence that scales with your ambition.</h2>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                At Aurbient Technologies, we believe that modern enterprises should not be hindered by static, fragmented software. Instead, they require dynamic, interconnected ecosystems that adapt in real-time. We specialize in transforming rigid industrial, logistical, and commercial operations into fluid, self-optimizing environments.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>
                <div className="eco-card" style={{ background: "white", padding: "24px", borderLeft: "4px solid var(--color-primary)", display: "flex", gap: "20px", alignItems: "flex-start", borderRadius: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "rgba(14, 25, 33, 0.05)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", color: "var(--color-primary)", flexShrink: 0 }}>
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", marginBottom: "6px", color: "var(--color-primary)" }}>Ambient Infrastructure</h4>
                    <p style={{ color: "#395568", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>We build invisible, high-performance layers of technology that silently coordinate complex tasks across your entire organization.</p>
                  </div>
                </div>
                
                <div className="eco-card" style={{ background: "white", padding: "24px", borderLeft: "4px solid var(--color-accent)", display: "flex", gap: "20px", alignItems: "flex-start", borderRadius: "16px" }}>
                  <div style={{ width: "40px", height: "40px", background: "rgba(19, 170, 179, 0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", color: "var(--color-accent)", flexShrink: 0 }}>
                    <i className="fas fa-brain"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", marginBottom: "6px", color: "var(--color-primary)" }}>Cognitive Automation</h4>
                    <p style={{ color: "#395568", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>Moving beyond simple rules-based macros to deploy deeply intelligent systems capable of parsing context and predicting outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", background: "radial-gradient(circle, rgba(19,170,179,0.08) 0%, rgba(255,255,255,0) 70%)", filter: "blur(40px)", zIndex: 0 }}></div>
              <div style={{ position: "relative", zIndex: 1, borderRadius: "32px", overflow: "hidden", boxShadow: "0 25px 50px rgba(14,25,33,0.12)", border: "8px solid white", background: "white" }}>
                <img 
                  src="/assets/about_philosophy.webp" 
                  alt="Aurbient Neural Infrastructure Philosophy" 
                  style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section style={{ padding: "80px 0", background: "#FFFFFF", paddingBottom: "120px" }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'stretch' }}>
            
            {/* Vision Card */}
            <div className="eco-card" style={{ flex: 1, minWidth: '300px', background: "#F4F9FB", borderTop: "4px solid var(--color-primary)", padding: "50px" }}>
              <div style={{ width: "60px", height: "60px", background: "var(--color-primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px" }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)" }}>Our Vision</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "0" }}>
                To become the global standard for enterprise intelligence—where every organization operates at absolute peak efficiency, unburdened by manual processes, and empowered by cognitive ecosystems that anticipate needs before they arise.
              </p>
            </div>

            {/* Mission Card */}
            <div className="eco-card" style={{ flex: 1, minWidth: '300px', background: "#F4F9FB", borderTop: "4px solid var(--color-accent)", padding: "50px" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "24px" }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--color-primary)" }}>Our Mission</h3>
              <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "0" }}>
                We combine deep industrial expertise with state-of-the-art vector processing architectures to build bespoke, scalable AI workflows. Our mission is to eliminate API frictional barriers and deploy systems that compound operational return week over week.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
